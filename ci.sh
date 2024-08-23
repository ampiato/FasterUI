#!/bin/bash

# On main
GITHUB_REF_TYPE=branch
GITHUB_REF=refs/heads/main
GITHUB_EVENT_NAME=push


# Regular run on PR
GITHUB_REF_TYPE=branch
GITHUB_REF=refs/pull/14/merge
GITHUB_EVENT_NAME=pull_request



# Manual run on PR
GITHUB_REF_TYPE=branch
GITHUB_REF=refs/pull/14/merge
GITHUB_SHA=922419fb9911b8ce9fec844c7bcbf182a6e6dfca
GITHUB_EVENT_NAME=pull_request

# Tag
GITHUB_REF_TYPE=tag
GITHUB_REF=refs/tags/0.1.12
GITHUB_SHA=17c8ab28c506d86de88c9daef5c5a1c51d867f82
GITHUB_EVENT_NAME=push


if [[ "$GITHUB_REF_TYPE" == "branch" ]]; then
    RELEASE_VERSION="$GITHUB_SHA"
    SUFFIX="-staging"
elif [[ "$GITHUB_REF_TYPE" == "tag" ]]; then
    RELEASE_VERSION="${GITHUB_REF#refs/tags/}"
    SUFFIX=""
fi
