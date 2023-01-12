package main

import (
	"encoding/json"
	"fmt"

	"github.com/City-Dream/backend/model"
	"github.com/City-Dream/backend/repository"
)

func main() {
	var dreams []*model.Dream
	repository.
		MustGetConn().
		Joins("Owner").
		Preload("Manager").
		Preload("DreamStage").
		Preload("Resources").
		Find(&dreams)

	o, err := json.Marshal(&dreams)
	checkErr(err)
	fmt.Println(string(o))
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
