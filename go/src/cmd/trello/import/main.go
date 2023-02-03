package main

import (
	"github.com/City-Dream/backend/model/migration"
	trelloImport "github.com/City-Dream/backend/trello/import"
)


func main() {
	err := migration.Do()
	checkErr(err)
	checkErr(trelloImport.Do())
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
