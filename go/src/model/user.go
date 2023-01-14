package model

import (
	"database/sql"
	"github.com/lib/pq"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	FbID      sql.NullString
	TrelloID  sql.NullString
	FirstName sql.NullString
	LastName  sql.NullString
	Avatar    sql.NullString
	Roles     pq.StringArray `gorm:"type:string[]"`
}
