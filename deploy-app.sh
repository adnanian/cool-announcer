#!/bin/bash

# Check if commit message was provided
if [ -z "$1" ]; then
    echo "Error: Please provide a commit message"
    echo "Usage: ./deploy-app.sh \"your commit message\""
    exit 1
fi

MESSAGE="$1"

git add .
git commit -m "${MESSAGE}"
git push origin HEAD
git push origin HEAD:main
npm run deploy