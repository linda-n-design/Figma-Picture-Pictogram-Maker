# People Pictogram Maker

A Figma plugin for creating accessible icon array visualizations of people-based data.

**Version:** 1.0 | **License:** MIT

## Table of contents

- [About](#about)
- [Why this plugin exists](#why-this-plugin-exists)
- [Features](#features)
- [Installation](#installation)
- [Quick start](#quick-start)
- [User guide](#user-guide)
- [Accessibility](#accessibility)
- [Development](#development)
- [Technical details](#technical-details)
- [License](#license)
- [Version history](#version-history)

## About

People Pictogram Maker helps designers visualize people-based data—counts, ratios, percentages, or categories—through simple icon arrays. Create clear, memorable, and accessible data visualizations that differentiate highlighted and unhighlighted icons by shape (solid vs. outlined), not just color.

## Why this plugin exists

Icon arrays make population data more memorable and impactful than text alone. While web-based tools exist for generating icon arrays, this plugin adds shape-based differentiation (solid and outlined icons) for better accessibility and visual clarity—meeting WCAG standards without relying on color alone.

This tool was created to make population trends and demographic data easier to communicate, turning statistics into clear visual stories.

## Features

* **Shape-based differentiation** - Solid and outlined person icons ensure accessibility beyond color alone
* **Light/dark themes** - Coordinated visual styles for different presentation contexts
* **Flexible layouts** - Configure up to 100 icons with 1-25 rows
* **Randomized or fixed patterns** - Choose between randomized distribution or clustered highlights
* **Adjustable sizing** - Icon sizes from 16px to 60px
* **WCAG conformant** - Meets accessibility standards for use of color (WCAG 2.2 SC 1.4.1)

## Installation

Install from the [Figma Community page](https://www.figma.com/community/plugin/1571380823289911462/people-pictogram-maker).

1. Visit the plugin page and select "Open in..."
2. In your Figma Design, FigJam, or Figma Slides file, select "Save"
3. Access the plugin: Right-click → Plugins → People Pictogram Maker

**That's it.** Start creating accessible icon arrays.

## Quick start

1. Open the plugin in your Figma file
2. Choose dark mode or light mode to match your background
3. Enter the total number of people and how many to highlight
4. Set the number of rows (1-25, must not exceed total icon count)
5. Adjust icon size if needed (16px-60px)
6. Toggle "Randomize highlighted icons" for layout preference
7. Click "Generate Icon Array" to create your visualization

## User guide

- **[Full user guide with screenshots](https://lindadesign.net/figma-plugin/people-pictogram-maker.html)** - Detailed examples and usage instructions on the plugin developer's website
- **In this GitHub repository** - User guide documentation coming soon

## Accessibility

This plugin is designed with accessibility at its core:

- **Shape differentiation** - Uses solid and outlined icons, not just color
- **WCAG 2.2 SC 1.4.1 conformant** - Meets "Use of Color" success criterion
- **Universal design** - Generic person icon avoids implying gender, culture, ability, or other traits
- **Flexible theming** - Dark and light modes for different contrast needs

## Development

### File structure
```
├── code.ts              # Main TypeScript source
├── code.js              # Compiled JavaScript
├── manifest.json        # Plugin configuration
├── ui.html              # User interface
├── tsconfig.json        # TypeScript config
├── package.json         # Dependencies
├── package-lock.json    # Dependency lock file
├── docs/                # Documentation files
└── node_modules/        # Installed packages
```

### Build commands

**Compile TypeScript:**
```bash
npx tsc
```

**Reload plugin in Figma:**
Plugins → Development → Reload plugin

### Making changes

1. Navigate to your plugin folder in Terminal
2. Edit `code.ts` or `ui.html` in VS Code
3. Recompile TypeScript:
   ```bash
   npx tsc
   ```
4. Reload plugin in Figma

### Contribution guidelines

- Test your changes across different Figma file types (Design, FigJam, Slides)
- Verify accessibility features remain intact
- Keep code clean and well-commented
- Follow existing code style and conventions
- Update documentation if adding new features

Pull requests welcome! This is open source - fork it, modify it, make it work for you.

## Technical details

- **Plugin ID:** 1571380823289911462
- **Plugin Name:** People Pictogram Maker
- **TypeScript:** ES2017 target
- **UI Architecture:** Inline CSS/JS in ui.html (Figma requirement)
- **Person Icon:** Font Awesome open-source icon (deliberately generic for inclusivity)

## License

MIT License - Copyright (c) 2025 Linda Nakasone

See [LICENSE](LICENSE) file for details.

**TL;DR:** Free to use, modify, and distribute. Attribution appreciated but not required.

## Version history

### v1.0 (2025-11-15) - Initial Release
First public release on Figma Community.

**Features:**
- Dark and light modes
- Input for total and highlighted people
- Adjustable number of rows (1-25)
- Icon sizes from 16px to 60px
- Randomize or cluster highlighted icons
- WCAG 2.2 SC 1.4.1 conformant (Use of Color)

---

**Made for personal use, shared with others who might find it useful.**

**Find this useful? I like coffee** - [buy me a coffee](https://buymeacoffee.com/lindadesign) ☕