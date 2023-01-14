#!/bin/bash
set -xe

go env -w GOPRIVATE=github.com/BajaBikes

GOOS=linux GOARCH=amd64 CGO_ENABLED=1 go build -o main api/lambda/lambda.go
zip deployment.zip main .env
