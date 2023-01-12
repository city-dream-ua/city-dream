package main

import (
	"github.com/City-Dream/backend/config"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"

	"github.com/City-Dream/backend/model"
)

func main() {
	cfg := config.FromEnv()
	dial := sqlite.Open(cfg.DbDSN)
	db, err := gorm.Open(dial, &gorm.Config{})
	checkErr(err)

	err = db.AutoMigrate(
		&model.User{},
		&model.Dream{},
		&model.DreamStage{},
		&model.Resource{},
		&model.Contribution{})
	checkErr(err)
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
