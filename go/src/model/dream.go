package model

type Dream struct {
	ID          string
	Title       string
	CoverImage  string
	Description string
	OwnerID     uint
	Owner       User
	ManagerID   uint
	Manager     User
	DreamStage  DreamStage
	Status      string
	Resources   []Resource
}
