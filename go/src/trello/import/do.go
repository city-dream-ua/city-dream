package _import

import (
	"fmt"
	"github.com/City-Dream/backend/config"
	"github.com/City-Dream/backend/model"
	"github.com/City-Dream/backend/model/mapping"
	"github.com/City-Dream/backend/storage"
	"github.com/adlio/trello"
	"gorm.io/gorm"
)

var (
	db *gorm.DB
	cfg = config.FromEnv()
)

func Do() error {
	db = storage.MustGetConn()

	client := trello.NewClient(cfg.AppKey, cfg.Token)
	board, err := client.GetBoard(cfg.BoardId, trello.Defaults())
	if err != nil {
		return err
	}

	// GetLists makes an API call to /boards/:id/lists using credentials from `client`
	lists, err := board.GetLists(trello.Defaults())
	if err != nil {
		return err
	}

	for _, list := range lists {
		// GetCards makes an API call to /lists/:id/cards using credentials from `client`
		args := trello.Arguments{"checklists": "all"}
		cards, err := list.GetCards(args)
		if err != nil {
			panic(err)
		}
		fmt.Printf("%#v\n", cards)

		for _, card := range cards {
			members, err := card.GetMembers()
			if err != nil {
				return err
			}
			firstAdmin, err := getUser(members[0]) // map user by first member from trello card
			if err != nil {
				return err
			}

			att, err := card.GetAttachments(trello.Defaults())
			if err != nil {
				return err
			}
			if len(att) == 0 {
				panic("card has no cover")
			}

			dream := mapping.Dream(list, card, firstAdmin, att[0]) // map dream from trello card
			err = db.Save(dream).Error
			if err != nil {
				return err
			}

			clIds := card.Checklists
			for _, clId := range clIds {
				cl, err := client.GetChecklist(clId.ID, trello.Defaults())
				if err != nil {
					return err
				}

				stage := mapping.DreamStage(cl)
				if err = db.Save(stage).Error; err != nil {
					return err
				}

				resources := mapping.Resources(cl)
				if err = db.Save(resources).Error; err != nil {
					return err
				}
			}
		}
	}

	return nil
}

func getUser(m *trello.Member) (u *model.User, err error) {
	err = db.Where(map[string]interface{}{"trello_id": m.Username}).First(&u).Error
	if err != nil {
		u = mapping.User(m)
		err = db.Save(u).Error

		return u, err
	}

	return u, err
}
