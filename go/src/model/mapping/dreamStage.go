package mapping

import (
	"github.com/City-Dream/backend/model"
	"github.com/adlio/trello"
)

func DreamStage(cl *trello.Checklist) *model.DreamStage {
	return &model.DreamStage{
		ID:      cl.ID,
		Name:    cl.Name,
		DreamID: cl.IDCard,
	}
}
