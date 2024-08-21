#!/bin/bash

set -e 

GREEN="\033[32m"
BOLD="\033[1m"
RESET="\033[0m"


echo -e "${GREEN}${BOLD}Deploying in 3 seconds...${RESET}"

sleep 3

echo -e "${GREEN}${BOLD}Deploying ...${RESET}"

# helm get values fasterui -o yaml -n fasterui > debug_fasterui_values_deployed.yml
# TAG=$(yq -r .ampdata.tag debug_fasterui_values_deployed.yml)
TAG="0.1.9"

echo -e "${GREEN}${BOLD}Deploying fasterui ...${RESET}"
echo -e "${GREEN}${BOLD} - AmpData tag: ${TAG}${RESET}"

helm upgrade --install fasterui --namespace fasterui --create-namespace ./fasterui-server --set=image.tag="$TAG" --wait

echo -e "${GREEN}${BOLD}...done${RESET}"
