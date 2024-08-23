#!/bin/bash


set -e 

GREEN="\033[32m"
BOLD="\033[1m"
RESET="\033[0m"

RELEASE_VERSION=$1
SUFFIX=$2

echo -e "${GREEN}${BOLD}Deploying $RELEASE_VERSION ($SUFFIX) in 3 seconds...${RESET}"

parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
echo $parent_path

helm upgrade --install \
    "fasterui$SUFFIX" \
    --namespace "fasterui" \
    "$parent_path/fasterui-server" \
    --set=image.tag=$RELEASE_VERSION \
    --set=image.suffix=$SUFFIX \
    --wait

echo -e "${GREEN}${BOLD}...done${RESET}"