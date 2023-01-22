package handler

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kpango/glg"

	"github.com/City-Dream/backend/api/export"
	"github.com/City-Dream/backend/model/migration"
	trelloImport "github.com/City-Dream/backend/trello/import"
)

func ExportStaticApi(c *gin.Context) {
	glg.Info("run migrations")
	err := migration.Do()
	if err != nil {
		glg.Errorf("migration error: %s", err.Error())
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("migration error: %s", err.Error())})
		return
	}

	glg.Info("run trello import")
	err = trelloImport.Do()
	if err != nil {
		glg.Errorf("trello import error: %s", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("trello import error: %s", err)})
		return
	}

	glg.Info("run export data to static json api")
	err = export.Do()
	if err != nil {
		glg.Errorf("export static api error: %s", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("export static api error: %s", err)})
		return
	}

	c.Status(http.StatusCreated)
}
