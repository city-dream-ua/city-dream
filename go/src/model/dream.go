package model

import (
	"github.com/google/uuid"
)

type Dream struct {
	ID          uuid.UUID `gorm:"primary_key;column:id;type:UUID;"`
	TrelloID    string    `gorm:"column:trello_id;type:TEXT;"`
	Title       string    `gorm:"column:title;type:TEXT;"`
	CoverImage  string    `gorm:"column:cover_image;type:TEXT"`
	Description string    `gorm:"column:description;type:TEXT;"`
	OwnerID     uuid.UUID `gorm:"column:owner_id;type:UUID;"`
	Owner       User      ``
	ManagerID   uuid.UUID `gorm:"column:manager_id;type:UUID;"`
	Manager     User      ``
	Status      string    `gorm:"column:status;type:TEXT;"`
}
