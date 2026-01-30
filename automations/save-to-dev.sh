#!/bin/bash

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# Navigate to the root folder (parent of automations/ if in automations, or current if already at root)
if [ "$(basename "$SCRIPT_DIR")" = "automations" ]; then
    ROOT_DIR="$(dirname "$SCRIPT_DIR")"
else
    ROOT_DIR="$SCRIPT_DIR"
fi
cd "$ROOT_DIR"

# Check if commit message was provided
# -z checks if the string is null (has zero length)
# The first echo provides an error message, the second echo provides usage instructions.
if [ -z "$1" ]; then
    echo "Error: Please provide a commit message"
    echo "Usage: ./automations/save-to-dev.sh \"your commit message\""
    exit 1
fi

# The commit message is the first argument passed to the script.
MESSAGE="$1"

git add .
git commit -m "${MESSAGE}"
git push origin HEAD