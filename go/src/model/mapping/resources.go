package mapping

import (
	"github.com/City-Dream/backend/model"
	"github.com/adlio/trello"
)

func Resources(cl *trello.Checklist) (rs []*model.Resource) {
	for _, chI := range cl.CheckItems {
		rs = append(rs, &model.Resource{
			ID:           chI.ID,
			Title:        chI.Name,
			DreamID:      cl.IDCard,
			DreamStageID: cl.ID,
			Status:       chI.State,
		})
	}
	return
}
