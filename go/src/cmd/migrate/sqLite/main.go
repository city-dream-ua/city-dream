package main

import (
	"github.com/City-Dream/backend/model/migration"
)

func main() {
	checkErr(migration.Do())
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
