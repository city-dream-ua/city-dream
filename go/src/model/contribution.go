package model

import "gorm.io/gorm"

type Contribution struct {
	gorm.Model
	ResourceID string
	Resource   Resource
	UserID     string
	User       User
}
