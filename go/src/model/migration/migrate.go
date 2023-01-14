package migration

import (
	"github.com/City-Dream/backend/config"
	"github.com/City-Dream/backend/model"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func Do() error {
	cfg := config.FromEnv()
	dial := sqlite.Open(cfg.DbDSN)
	db, err := gorm.Open(dial, &gorm.Config{})
	if err != nil {
		return err
	}

	return db.AutoMigrate(
		&model.User{},
		&model.Dream{},
		&model.DreamStage{},
		&model.Resource{},
		&model.Contribution{})
}
