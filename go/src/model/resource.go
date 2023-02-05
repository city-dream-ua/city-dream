package model

import (
	"gorm.io/gorm"
	"time"
)

type Resource struct {
	ID           string `gorm:"primaryKey"`
	Title        string
	DreamID      string
	Dream        *Dream
	DreamStageID string
	DreamStage   *DreamStage
	Status       string
	CreatedAt    time.Time
	UpdatedAt    time.Time
	DeletedAt    gorm.DeletedAt `gorm:"index"`
}
