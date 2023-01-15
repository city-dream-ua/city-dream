package migration

import (
	"fmt"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"

	"github.com/City-Dream/backend/config"
	"github.com/City-Dream/backend/model"
)

func Do() error {
	cfg := config.FromEnv()
	dial := sqlite.Open(cfg.DbDSN)
	db, err := gorm.Open(dial, &gorm.Config{})
	if err != nil {
		return fmt.Errorf("unable to migrate %s. Err: %s", cfg.DbDSN, err.Error())
	}

	return db.AutoMigrate(
		&model.User{},
		&model.Dream{},
		&model.DreamStage{},
		&model.Resource{},
		&model.Contribution{})
}
