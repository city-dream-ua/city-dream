package main

import (
	trelloImport "github.com/City-Dream/backend/trello/import"
)


func main() {
	checkErr(trelloImport.Do())
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
