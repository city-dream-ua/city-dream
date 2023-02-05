package model

import (
	"gorm.io/gorm"
	"time"
)

const ToDoStatus = "To Do"

type Dream struct {
	ID          string `gorm:"primaryKey"`
	Title       string
	ShortLink   string
	CoverImage  string
	Description string
	OwnerID     uint
	Owner       User
	ManagerID   uint
	Manager     User
	Status      string
	Resources   []Resource
	CreatedAt   time.Time
	UpdatedAt   time.Time
	DeletedAt   gorm.DeletedAt `gorm:"index"`
}
