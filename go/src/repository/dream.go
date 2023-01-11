package repository

import (
	"github.com/google/uuid"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"

	"github.com/City-Dream/backend/config"
	"github.com/City-Dream/backend/model"
)

type Dream struct {
	conn *gorm.DB
}

func (r *Dream) FindDream(id uuid.UUID) *model.Dream {
	var d model.Dream
	r.getConn().Find(&d, id)

	return &d
}

func (r Dream) GetAll() []*model.Dream {
	ds := make([]*model.Dream, 0)
	r.getConn().Joins("Owner", "Manager").Find(&ds)
	return ds
}

func (r *Dream) CreateDream(d *model.Dream) error {
	return r.getConn().Create(d).Error
}

func (r *Dream) getConn() *gorm.DB {
	if r.conn == nil {
		r.conn, err = gorm.Open(sqlite.Open(config.FromEnv().DbDSN), &gorm.Config{})

		if err != nil {
			panic(err)
		}
	}

	return r.conn
}
