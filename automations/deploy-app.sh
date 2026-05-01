#!/bin/bash
set -euo pipefail

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# Navigate to the root folder (parent of automations/)
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$ROOT_DIR"

# Check if commit message was provided
if [ -z "${1:-}" ]; then
    echo "Error: Please provide a commit message"
    echo "Usage: ./automations/deploy-app.sh \"your commit message\""
    exit 1
fi

MESSAGE="$*"
CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"

git fetch origin

git add .
if git diff --cached --quiet; then
    echo "No staged changes to commit."
else
    git commit -m "${MESSAGE}"
fi

if git show-ref --verify --quiet "refs/remotes/origin/${CURRENT_BRANCH}"; then
    if git merge-base --is-ancestor "origin/${CURRENT_BRANCH}" HEAD; then
        git push origin "HEAD:${CURRENT_BRANCH}"
    else
        echo "Remote ${CURRENT_BRANCH} is not an ancestor of local HEAD. Using --force-with-lease..."
        git push --force-with-lease origin "HEAD:${CURRENT_BRANCH}"
    fi
else
    git push -u origin "HEAD:${CURRENT_BRANCH}"
fi

git push origin HEAD:main
npm run deploy