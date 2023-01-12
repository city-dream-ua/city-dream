package main

import (
	"fmt"

	"github.com/adlio/trello"
	_ "github.com/joho/godotenv/autoload"
	"gorm.io/gorm"

	"github.com/City-Dream/backend/config"
	"github.com/City-Dream/backend/model"
	"github.com/City-Dream/backend/model/mapping"
	"github.com/City-Dream/backend/repository"
)

var (
	err error
	db *gorm.DB
	cfg = config.FromEnv()
)

func main() {
	db = repository.MustGetConn()

	client := trello.NewClient(cfg.AppKey, cfg.Token)
	board, err := client.GetBoard(cfg.BoardId, trello.Defaults())
	checkErr(err)
	// GetLists makes an API call to /boards/:id/lists using credentials from `client`
	lists, err := board.GetLists(trello.Defaults())
	checkErr(err)

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
			checkErr(err)
			firstAdmin := getUser(members[0]) // map user by first member from trello card

			att, err := card.GetAttachments(trello.Defaults())
			checkErr(err)
			if len(att) == 0 {
				panic("card has no cover")
			}

			dream := mapping.Dream(list, card, firstAdmin, att[0]) // map dream from trello card
			err = db.Save(dream).Error
			checkErr(err)

			clIds := card.Checklists
			for _, clId := range clIds {
				cl, err := client.GetChecklist(clId.ID, trello.Defaults())
				checkErr(err)

				stage := mapping.DreamStage(cl)
				checkErr(db.Save(stage).Error)

				resources := mapping.Resources(cl)
				checkErr(db.Save(resources).Error)
			}
		}
	}
}

func getUser(m *trello.Member) (u *model.User) {
	err = db.Where(map[string]interface{}{"trello_id": m.Username}).First(&u).Error
	if err != nil {
		u = mapping.User(m)
		checkErr(db.Save(u).Error)

		return u
	}

	return u
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
