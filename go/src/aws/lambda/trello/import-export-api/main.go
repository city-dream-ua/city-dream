package main

import (
	"context"

	"github.com/aws/aws-lambda-go/lambda"

	"github.com/City-Dream/backend/api/export"
	"github.com/City-Dream/backend/model/migration"
	trelloImport "github.com/City-Dream/backend/trello/import"
)

func HandleRequest(ctx context.Context) (string, error) {
	err := migration.Do()
	if err != nil {
		return "migration error", err
	}

	err = trelloImport.Do()
	if err != nil {
		return "trello import error", err
	}

	err = export.Do()
	if err != nil {
		return "export static api error", err
	}

	return "success", nil
}

func main() {
	lambda.Start(HandleRequest)
}
