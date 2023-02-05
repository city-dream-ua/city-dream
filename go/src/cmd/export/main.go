package main

import (
	"github.com/City-Dream/backend/api/export"
)

func main() {
	checkErr(export.Do())
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
