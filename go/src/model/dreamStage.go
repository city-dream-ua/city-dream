package model

import (
	"gorm.io/gorm"
	"time"
)

type DreamStage struct {
	ID        string `gorm:"primaryKey"`
	Name      string
	DreamID   string
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
}
