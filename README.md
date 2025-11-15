# People Pictogram Maker

A Figma plugin for creating accessible icon array visualizations of people-based data.

---

## About

People Pictogram Maker helps designers visualize people-based data—counts, ratios, percentages, or categories—through simple icon arrays. Create clear, memorable, and accessible data visualizations that differentiate highlighted and unhighlighted icons by shape (solid vs. outlined), not just color.

---

## Features

- **Shape-based differentiation** - Solid and outlined person icons ensure accessibility beyond color alone
- **Light/dark themes** - Coordinated visual styles for different presentation contexts
- **Flexible layouts** - Configure up to 100 icons with 1-25 rows
- **Randomized or fixed patterns** - Choose between randomized distribution or clustered highlights
- **Adjustable sizing** - Icon sizes from 16px to 60px
- **WCAG conformant** - Meets accessibility standards for use of color (WCAG 2.2 SC 1.4.1)

---

## Installation

Install from the Figma Community page (link available after plugin submission).

1. Visit the plugin page and select "Open in..."
2. In your Figma Design, FigJam, or Figma Slides file, select "Save"
3. Access the plugin: Right-click → Plugins → People Pictogram Maker

---

## User Guide

- **[In plugin developer's personal website](https://lindadesign.net/figma-plugin/people-pictogram-maker.html)**, which includes screenshots and examples
- **In this GitHub repository** - User guide documentation coming soon

---

## Quick Start

1. Open the plugin in your Figma file
2. Choose dark mode or light mode to match your background
3. Enter the total number of people and how many to highlight
4. Set the number of rows (1-25, must not exceed total icon count)
5. Adjust icon size if needed (16px-60px)
6. Toggle "Randomize highlighted icons" for layout preference
7. Click "Generate Icon Array" to create your visualization

---

## Why This Plugin Exists

Icon arrays make population data more memorable and impactful than text alone. While web-based tools exist for generating icon arrays, this plugin adds shape-based differentiation (solid and outlined icons) for better accessibility and visual clarity—meeting WCAG standards without relying on color alone.

This tool was created to make population trends and demographic data easier to communicate, turning statistics into clear visual stories.

---

## Development

### File Structure
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

### Build Commands

**Compile TypeScript:**
```bash
npx tsc
```

**Reload plugin in Figma:**
Plugins → Development → Reload plugin

### Making Changes

1. Navigate to your plugin folder in Terminal

2. Edit `code.ts` or `ui.html` in VS Code

3. Recompile TypeScript:
   ```bash
   npx tsc
   ```

4. Reload plugin in Figma

---

## Technical Details

- **Plugin ID:** 1571380823289911462
- **Plugin Name:** People Pictogram Maker
- **TypeScript:** ES2017 target
- **UI Architecture:** Inline CSS/JS in ui.html (Figma requirement)
- **Person Icon:** Font Awesome open-source icon (deliberately generic for inclusivity)

---

## Accessibility

This plugin is designed with accessibility at its core:

- **Shape differentiation**: Uses solid and outlined icons, not just color
- **WCAG 2.2 SC 1.4.1 conformant**: Meets "Use of Color" success criterion
- **Universal design**: Generic person icon avoids implying gender, culture, ability, or other traits
- **Flexible theming**: Dark and light modes for different contrast needs

---

## License

MIT License - Copyright (c) 2025 Linda Nakasone

See [LICENSE](LICENSE) for details.

---

## Author

Created and maintained by Linda Nakasone

- Website: [lindadesign.net](http://lindadesign.net)
- Support: Contact information available on website

---

## Version History

### Version 1.0 (November 15, 2025)

**Core functionalities**
- Dark and light modes
- Input for total and highlighted people
- Adjustable number of rows (1-25)
- Icon sizes from 16px to 60px
- Randomize or cluster highlighted icons

---

*Thank you for using People Pictogram Maker! If you find this plugin helpful, please consider leaving a review on the Figma Community page.*