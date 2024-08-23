#!/bin/bash

if [[ "$GITHUB_REF_TYPE" == "branch" ]]; then
    RELEASE_VERSION="0.1.0"
    DOCKER_TAG="$GITHUB_SHA"
    SUFFIX="-staging"
elif [[ "$GITHUB_REF_TYPE" == "tag" ]]; then
    RELEASE_VERSION="${GITHUB_REF#refs/tags/}"
    DOCKER_TAG="$RELEASE_VERSION"
    SUFFIX=""
fi

echo "RELEASE_VERSION=$RELEASE_VERSION" >> $GITHUB_ENV
echo "DOCKER_TAG=$DOCKER_TAG" >> $GITHUB_ENV
echo "SUFFIX=$SUFFIX" >> $GITHUB_ENV

cat $GITHUB_ENV
