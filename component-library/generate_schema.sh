#!/bin/bash

curl -o openapi_schema.json http://localhost:8080/openapi.json
rm -rf src/gen
openapi-generator-cli generate -i openapi_schema.json -g typescript-fetch -o src/gen
cp openapi_schema.json dist/openapi_schema.json
