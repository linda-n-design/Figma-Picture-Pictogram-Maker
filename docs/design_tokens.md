# Design Tokens

This document defines all the design tokens used in the People Pictogram plugin.

## Color Tokens

### Light Mode
```
icon: #01243E (RGB: 1, 36, 62)
```
Used for all person icons (both filled and outlined) in light mode.

### Dark Mode
```
icon: #F3F3F3 (RGB: 243, 243, 243)
```
Used for all person icons (both filled and outlined) in dark mode.

## Spacing Tokens

### Icon Spacing
```
iconSpacing: 8px
```
The space between icons in the pictogram grid (both horizontal and vertical).

### Form Layout
```
gridGap: 44px
```
The gap between form elements in the design tab.

```
padding: 16px
```
Standard padding used throughout the UI.

## Usage

### In UI (ui.html)
```javascript
const TOKENS = {
  colors: {
    light: {
      icon: '#01243E',
      background: '#FFFFFF',
      text: '#1E1E1E'
    },
    dark: {
      icon: '#F3F3F3',
      background: '#01243E',
      text: '#F3F3F3'
    }
  },
  spacing: {
    iconSpacing: 8,
    gridGap: 44,
    padding: 16
  }
};
```

### In Plugin Code (code.ts)
```typescript
const TOKENS = {
  colors: {
    light: {
      icon: { r: 1/255, g: 36/255, b: 62/255 }  // #01243E
    },
    dark: {
      icon: { r: 243/255, g: 243/255, b: 243/255 }  // #F3F3F3
    }
  },
  spacing: {
    iconSpacing: 8
  }
};
```

## Token Export (JSON)

For integration with other tools:

```json
{
  "colors": {
    "light": {
      "icon": {
        "value": "#01243E",
        "type": "color"
      }
    },
    "dark": {
      "icon": {
        "value": "#F3F3F3",
        "type": "color"
      }
    }
  },
  "spacing": {
    "iconSpacing": {
      "value": "8px",
      "type": "spacing"
    }
  }
}
```

## CSS Custom Properties

```css
:root {
  /* Light Mode Colors */
  --color-icon-light: #01243E;
  
  /* Dark Mode Colors */
  --color-icon-dark: #F3F3F3;
  
  /* Spacing */
  --spacing-icon: 8px;
  --spacing-grid-gap: 44px;
  --spacing-padding: 16px;
}
```

## Figma Variables

When creating Figma variables for these tokens:

**Color Variables:**
- `color/icon/light` → #01243E
- `color/icon/dark` → #F3F3F3

**Spacing Variables:**
- `spacing/icon` → 8
- `spacing/grid-gap` → 44
- `spacing/padding` → 16