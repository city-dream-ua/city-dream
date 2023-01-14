package handler

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/City-Dream/backend/api/export"
	"github.com/City-Dream/backend/model/migration"
	trelloImport "github.com/City-Dream/backend/trello/import"
)

func ExportStaticApi(c *gin.Context) {
	err := migration.Do()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("migration error: %s", err)})
		return
	}

	err = trelloImport.Do()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("trello import error: %s", err)})
		return
	}

	err = export.Do()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("export static api error: %s", err)})
		return
	}

	c.Status(http.StatusCreated)
}
