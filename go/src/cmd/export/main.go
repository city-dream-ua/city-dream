package main

import (
	"encoding/json"
	"fmt"
	"github.com/City-Dream/backend/model"
	"github.com/City-Dream/backend/storage"
)

var (
	store = storage.NewS3()
    dreams []*model.Dream
)

func main() {
	storage.
		MustGetConn().
		Joins("Owner").
		Preload("Manager").
		Preload("Resources").
		Preload("Resources.DreamStage").
		Find(&dreams)

	o, err := json.Marshal(&dreams)
	checkErr(err)

	err = store.Save("api/dreams.json", o, true)
	checkErr(err)

	for _, d := range dreams {
		o, err = json.Marshal(d)
		checkErr(err)

		path := fmt.Sprintf("api/dreams/%s.json", d.ShortLink)
		err = store.Save(path, o, true)
		checkErr(err)
	}
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
