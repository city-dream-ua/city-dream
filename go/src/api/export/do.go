package export

import (
	"encoding/json"
	"fmt"

	"github.com/City-Dream/backend/model"
	"github.com/City-Dream/backend/storage"
)

var (
	store  = storage.NewS3()
)

func Do() error {
	var dreams []*model.Dream
	storage.
		MustGetConn().
		Joins("Owner").
		Preload("Manager").
		Preload("Resources").
		Preload("Resources.DreamStage").
		Where("status <> ?", model.ToDoStatus).
		Find(&dreams)

	o, err := json.Marshal(&dreams)
	if err != nil {
		return err
	}

	err = store.Save("api/dreams.json", o, true)
	if err != nil {
		return err
	}

	for _, d := range dreams {
		o, err = json.Marshal(d)
		if err != nil {
			return err
		}

		path := fmt.Sprintf("api/dreams/%s.json", d.ShortLink)
		err = store.Save(path, o, true)
		if err != nil {
			return err
		}
	}

	return nil
}
