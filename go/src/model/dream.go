package model

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
}
