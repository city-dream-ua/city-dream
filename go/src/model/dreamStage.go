package model

type DreamStage struct {
	ID       string `gorm:"primaryKey"`
	Name     string
	DreamID  string
}
