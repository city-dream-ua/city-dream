package main

import (
	"encoding/json"
	"fmt"

	"github.com/City-Dream/backend/repository"
)

func main() {
	var dRepo = repository.Dream{}
	ds := dRepo.GetAll()

	o, err := json.Marshal(&ds)
	checkErr(err)
	fmt.Println(string(o))
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
