# Cool Announcer

![Version](https://img.shields.io/badge/version-1.1.1-0a7ea4)
![Build](https://github.com/adnanian/cool-announcer/actions/workflows/ci.yml/badge.svg)

|                                          |                                                        |
|------------------------------------------|--------------------------------------------------------|
|                  Author                  |                      Adnan Wazwaz                      |
|                  Version                 |                          1.1.1                         |
|               Original Date              |                     2026 January 30                    |
|           Current Version Date           |                     2026 April 30                      |
|             Adnanian App No.             |                           21                           |
| [**Demo**](https://youtu.be/yrruudKnc3I) | [**Live**](https://adnanian.github.io/cool-announcer/) |

## Table of Contents

1. [Overview](#overview)
2. [Design](#design)
3. [How to Use](#how-to-use)
4. [Technologies](#technologies)
5. [Limitations](#limitations)
6. [Setup](#setup)
7. [Available Scripts](#available-scripts)
8. [Project Standards](#project-standards)
9. [Future Plans](#future-plans)
10. [README Review Notes](#readme-review-notes)
11. [Credits](#credits)

## Overview

Over the course of 2025, my coding skills have become rather rusty. As I
transition to a full-time indie app developer, I needed to refresh by
re-warming up my muscles.

Cool Announcer is a simple web app that allows you to enter multiple lines of
text which will display on a panel of alternating colors. The animations and
input controls are full of fun 8-bit or 16-bit sounds.

## Design

Given that this was a warmup project, I kept design and budget as low as possible.
It wasn't worth designing a wireframe on Figma, so I used Microsoft Paint 3D for
designing both the wireframe and the logo. The application only consists of one
page.

Initial MVP Wireframe:

![MVP Wireframe](/public/README/cool-announcer-wireframe.png)

Logo:

![App Logo](/public/applogo.png)

MVP in Production:

![MVP in Production](/public/README/mvp-in-production.png)

Note the absence of the "SUBMIT" button and the addition of the "HELP?" button.
As I was developing the application, I realized that having a submit button was
not necessary, but what was actually necessary was to provide a set of instructions
on how to use it.

And how to use it exactly what I'll cover in the next section.

## How to Use

**IMPORTANT: Since the text fields, buttons, and color change animations play
audio at a fast interval of 100 milliseconds, I strongly recommend you use
this application on a desktop or laptop.**

Clicking on the "HELP?" button on the bottom will display the instructions
guide on the black panel on the right.

![Cool Announcer Guide](/public/README/cool-announcer-instructions.png)

The instructions read:

1. Enter one or more lines of text in the left panel.
2. Click the *ADD* button to add new empty lines.
3. Click on a red *—* button next to a text line to remove it.
4. Click the *PLAY* button to start the announcement animation.
5. Click the *PAUSE* button to pause the animation.
6. While the animation is playing, text input and buttons are disabled.
7. Click the *HELP?* button to view this guide. (Obviously! XD)
8. Close it by clicking the *OK!* button.

Below is what the output looks like on the right panel. The background
color, initially black, will be randomly set to one of the colors in the RGB
and CMYK models (including black again, and white):

![Cool Announcer Animation](/public/README/cool-announcer-animation.gif)

## Technologies

Cool Announcer is a purely frontend web application, created using the following tech stack:

- React 19 w/:
  - TypeScript
  - Vite
- Vanilla CSS
- [jsfxr (for the sound effects)](https://sfxr.me/)
- Bash
  - For automating GitHub actions and deployment.
  - See the automations folder containing the shell scripts.

The app is currently hosted on GitHub Pages.

## Setup

### Prerequisites

- Node.js 22.x (recommended)
- npm 10+

### Local Development

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in your terminal (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev` starts the Vite development server.
- `npm run build` runs TypeScript project build checks and creates a production build.
- `npm run lint` runs ESLint across the repository.
- `npm run preview` serves the production build locally.
- `npm run deploy` builds and deploys `dist/` to GitHub Pages.

## Project Standards

- Change history: see [CHANGELOG.md](CHANGELOG.md)
- Contributions: see [CONTRIBUTING.md](CONTRIBUTING.md)
- Security reporting: see [SECURITY.md](SECURITY.md)
- License terms: see [LICENSE](LICENSE)
- Dependency security maintenance: `npm audit` and `npm audit fix` completed on 2026 April 30.

## Limitations

Due to the fast interval of sounds playing for the animation, this app
currently works best only on desktops and laptops. The animation
on mobile tablets or phones will be very slow.

But for me, that's totally fine because this is just a warmup application
for transitioning into indie app development. Of course, I expect nobody
to ever come across this, let alone use it.

## Future Plans

If I ever have free time, need to refresh my frontend or programming fundamentals,
or learn new skills for my trade, I will use this as a base for such.

One future feature is to add fancier word art animation beyond color changing.

## README Review Notes (PAY ATTENTION NEXT SECURITY PATCH)

No sections were removed.

Sections that may be simplified later while still keeping the same information:

- `Credits`: currently includes full MIT license text, which is already maintained in `LICENSE`. You could keep a shorter credits section with a pointer to `LICENSE`.
- `Design`: image-heavy details are great for project history, but this section could be moved to a separate project journal if you ever want a shorter business-facing README.

## Credits

MIT License

Copyright (c) 2026 Adnan Wazwaz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
