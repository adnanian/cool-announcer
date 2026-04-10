# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog,
and this project adheres to Semantic Versioning.

## [Unreleased]

No changes yet.

## [1.1.0] - 2026-04-10

### Added

- Added `CONTRIBUTING.md`.
- Added `LICENSE`.
- Added `SECURITY.md`.
- Added `.github/dependabot.yml`.
- Added `.github/ISSUE_TEMPLATE/*`.
- Added `.github/workflows/ci.yml`.

### Security

- Ran `npm audit` and applied available fixes using `npm audit fix`.
- Established weekly automated dependency update checks via Dependabot.

## [1.0.0] - 2026-01-30

### Added (Initial Release)

- Initial release of Cool Announcer.
- Single-page React + TypeScript + Vite app for animated text announcements.
- Multi-line announcement input with add/remove controls.
- Play and pause controls for timed display animation.
- Animated color transitions and integrated retro-style sound effects.
- Inline help guide for first-time usage.
- GitHub Pages deployment via npm script.
