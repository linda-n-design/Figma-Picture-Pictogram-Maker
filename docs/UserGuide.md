# People Pictogram Maker - User Guide

**Version 1.0**  
*Last Updated: November 15, 2025*

---

## Table of contents
- [About](#about)
- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Running the plugin](#running-the-plugin)
- [Color accessible by design](#color-accessible-by-design)
  - [Color alone should not communicate meaning](#color-alone-should-not-communicate-meaning)
- [The person icon](#the-person-icon)
- [Using the plugin](#using-the-plugin)
  - [Mode selection](#mode-selection)
  - [Icon configuration](#icon-configuration)
  - [Layout options](#layout-options)
  - [Customization after generation](#customization-after-generation)
- [Best practices](#best-practices)
- [Why this tool exists](#why-this-tool-exists)
- [Version history](#version-history)
- [About](#about-1)
- [License](#license)

---

## About

People Pictogram Maker is a Figma plugin that visualizes people-based data—counts, ratios, percentages, or categories—through simple icon arrays. It helps you present people-related information clearly and memorably, in support of the story or insight you want to communicate.

The plugin works across Figma Design, FigJam, and Figma Slides.

---

## Getting started

### Installation

1. Visit the People Pictogram Maker page in the Figma Community
2. Select "Open in…", then click "Save" in your Figma Design, FigJam, or Figma Slides file

### Running the plugin

1. Create or open a Figma Design, FigJam, or Figma Slides file
2. Launch the People Pictogram Maker plugin

---

## Color accessible by design

The plugin is built to be inclusive by default. It distinguishes selected and unselected people through shape, not just color—selected icons are solid, while unselected ones are outlined. This ensures meaning remains clear, even for users who can't rely on color cues.

Color contrast can be challenging—especially when balancing highlighted, unhighlighted, and background elements. Each must have enough contrast to stay visually distinct. When both icon states share the same shape, their colors must also differ sufficiently so everyone can tell them apart. Additionally, your color palette may introduce its own contrast limitations, which can make distinguishing icon states more difficult.

### Color alone should not communicate meaning

Even with high contrast against the background, icons that differ only by color aren't accessible. WCAG—the global accessibility standard—requires more than color alone so users with color-vision differences, low vision, or poor visibility conditions can tell the icons apart.

**WCAG 2.2 Success Criterion 1.4.1: Use of Color**

Information that is conveyed by color differences must also be available in other ways, such as through shape, pattern, or text. This plugin meets this requirement by using solid shapes for highlighted icons and outlined shapes for unhighlighted icons.

By providing shape-based differentiation in addition to color, the visualizations remain clear and accessible regardless of how someone perceives color. This makes the data understandable for all users, including those with color vision deficiencies, users viewing content in poor lighting conditions, or when content is printed in grayscale.

[Learn more about Use of Color - WCAG 2.2 SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)

---

## The person icon

The person symbol used in this plugin is from the open-source [Font Awesome](https://fontawesome.com/icons/person?s=solid) icon library. A deliberately generic human icon avoids implying gender, culture, ability, or other traits. This supports an inclusive and universally understandable representation.

---

## Using the plugin

### Mode selection

**Light/Dark Mode**

Choose your preferred visual theme to match your background:

- **Light Mode**: Dark icons on light backgrounds
- **Dark Mode**: Light icons on dark backgrounds

The mode selection ensures proper contrast between the icons and your canvas background.

### Icon configuration

**Total people**

Enter the total number of people to represent in your visualization. This determines how many icons will be generated in the array.

- Minimum: 1 icon
- Maximum: 100 icons

**Highlighted people**

Enter the number of people you want to highlight (show as solid icons). This represents your data point—the portion of the population you want to emphasize.

- Must be less than or equal to the total number of people
- Can be 0 if you want to show all unhighlighted icons

**Number of rows**

Set how many rows your icon array should span.

- Minimum: 1 row
- Maximum: 25 rows
- **Important**: The number of rows must not exceed the total icon count

The plugin will automatically calculate how many icons appear in each row based on your total count and row configuration.

**Icon size**

Adjust the size of each person icon.

- Minimum: 16px
- Maximum: 60px
- Default: Varies based on your selection

### Layout options

**Randomize highlighted icons**

This option controls how highlighted (solid) icons are distributed within the array.

- **Checked (default)**: Highlighted icons are randomly distributed throughout the array, creating a natural, scattered pattern
- **Unchecked**: Highlighted icons cluster together starting from the top-left, creating a grouped pattern

Choose randomization for a more organic feel, or uncheck for a structured, sequential visualization.

### Customization after generation

**Recoloring the icon array**

After the plugin generates your icon array, you can customize the color:

1. Select the generated icon array group on your canvas
2. Apply your preferred color using Figma's fill properties
3. Both solid and outlined icons will update to your chosen color

This allows you to match the visualization to your brand colors or presentation theme while maintaining the accessible shape-based differentiation.

---

## Best practices

**Choose appropriate totals**

- Use round numbers (10, 20, 50, 100) for easier visual comprehension
- Consider your audience—smaller totals (10-20) work well for quick comparisons
- Larger totals (50-100) provide more precision for detailed data

**Configure rows thoughtfully**

- More rows with fewer icons per row create a vertical, compact layout
- Fewer rows with more icons per row create a horizontal, wide layout
- Match your row configuration to your canvas space and design needs

**Use consistent styling**

- Maintain the same icon size across related visualizations for easy comparison
- Use consistent row configurations when showing data trends over time
- Keep the same mode (light or dark) within a single presentation

---

## Why this tool exists

There are a few web-based tools that generate icon arrays using person symbols, but this plugin adds the ability to differentiate selected and unselected icons by shape—solid and outlined—for better accessibility and visual clarity.

I created this plugin to make population trends easier to communicate. Icon arrays transform demographic statistics into clear visual stories that are more memorable and impactful than text alone.

---

## Version history

### Version 1.0 (November 15, 2025)

**Core functionalities**
- Dark and light modes
- Input for total and highlighted people
- Adjustable number of rows (1–25)
- Icon sizes from 16px to 60px
- Randomize or cluster highlighted icons
- Shape-based differentiation (solid vs. outlined) for accessibility

---

## About

**People Pictogram Maker** is created and maintained by Linda Nakasone.

**For a visual guide with screenshots and examples**, visit the [People Pictogram Maker documentation page](https://lindadesign.net/figma-plugin/people-pictogram-maker.html).

- Website: [lindadesign.net](http://lindadesign.net)
- Support: Contact information available on website

---

## License

MIT License - Copyright (c) 2025 Linda Nakasone

See the [LICENSE](../LICENSE) file for full details.

---

*Thank you for using People Pictogram Maker! If you find this plugin helpful, please consider leaving a review on the Figma Community page.*