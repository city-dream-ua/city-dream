package router

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"github.com/City-Dream/backend/api/router/handler"
)

func New() *gin.Engine {
	router := gin.Default()
	router.Use(cors.Default())

	router.POST("/api/export-trello", handler.ExportStaticApi)

	return router
}
