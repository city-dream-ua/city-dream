#!/bin/bash

set -xe

aws lambda update-function-code --function-name "city-dream-api" \
  --zip-file fileb://./deployment.zip \
  --region eu-central-1
