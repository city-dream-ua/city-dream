#!/bin/bash
set -xe

GOOS=linux GOARCH=amd64 CGO_ENABLED=1 go build -o main api/lambda/lambda.go
zip deployment.zip main .env
