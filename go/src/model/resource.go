package model

type Resource struct {
	ID           string `gorm:"primaryKey"`
	Title        string
	DreamID      string
	Dream        *Dream
	DreamStageID string
	DreamStage   *DreamStage
	Status       string
}
