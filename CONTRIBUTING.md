# Contributing to Cool Announcer

Thanks for your interest in contributing.

## Ground Rules

- Keep pull requests focused and small.
- Use clear commit messages.
- Open an issue before starting major changes.
- Be respectful and constructive in discussions.

## Development Setup

1. Fork and clone the repository.
2. Install dependencies:

```bash
npm install
```

3.Start local development:

```bash
npm run dev
```

4.Run checks before opening a pull request:

```bash
npm run lint
npm run build
```

## Branch and Pull Request Process

1. Create a feature branch from `main`.
2. Make your changes.
3. Ensure linting and build pass locally.
4. Update documentation when behavior changes.
5. Add a short changelog entry under `Unreleased` in `CHANGELOG.md`.
6. Open a pull request with:
   - what changed
   - why it changed
   - how it was tested

## Code Style

- Follow existing TypeScript, React, and CSS conventions in the project.
- Keep components and utility functions simple and readable.
- Avoid unrelated refactors in the same pull request.

## Reporting Bugs

- Use the Bug Report issue template.
- Include steps to reproduce, expected behavior, and actual behavior.
- Add screenshots or short recordings when useful.

## Feature Requests

- Use the Feature Request issue template.
- Explain the problem and desired outcome.
- Include scope and any tradeoffs if known.
