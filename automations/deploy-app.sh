#!/bin/bash

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# Navigate to the root folder (parent of automations/)
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$ROOT_DIR"

# Check if commit message was provided
if [ -z "$1" ]; then
    echo "Error: Please provide a commit message"
    echo "Usage: ./automations/deploy-app.sh \"your commit message\""
    exit 1
fi

MESSAGE="$1"

git add .
git commit -m "${MESSAGE}"
git push origin HEAD
git push origin HEAD:main
npm run deploy