#!/bin/bash

set -e

work_dir=$(dirname "$0")

# Convert jsonnet to json
jsonnet "$work_dir/schema.jsonnet" > "$work_dir/schema.json"


# Validate the schema
if [ ! -f "$work_dir/jsonschema-draft-07.json" ]; then
    curl -s -o "$work_dir/jsonschema-draft-07.json" https://json-schema.org/draft-07/schema
fi
check-jsonschema --schemafile "$work_dir/jsonschema-draft-07.json" "$work_dir/schema.json"

# Convert to typescript interface
json2ts -i "$work_dir/schema.json" -o "$work_dir/test.d.ts"