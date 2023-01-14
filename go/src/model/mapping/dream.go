package mapping

import (
	"github.com/City-Dream/backend/model"
	"github.com/adlio/trello"
)

func Dream(l *trello.List, c *trello.Card, owner *model.User, cover *trello.Attachment) *model.Dream {
	return &model.Dream{
		ID:          c.ID,
		Title:       c.Name,
		ShortLink:   c.ShortLink,
		CoverImage:  cover.URL,
		Description: c.Desc,
		OwnerID:     owner.ID,
		Owner:       *owner,
		ManagerID:   owner.ID, // temporarily as we don't have fb users yet
		Status:      l.Name,
	}
}
