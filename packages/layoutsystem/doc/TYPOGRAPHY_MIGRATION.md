# Typography System Migration Guide

## Overview

The TWLayout project has migrated from a custom typography.css system to a Tailwind-based approach for better flexibility and customization.

## What Changed

### ✅ Before (v1.1.0)
- Used custom `typography.css` with CSS custom properties
- Complex responsive scaling system
- Fixed typography hierarchy

### ✅ After (v1.2.0)
- Typography classes defined in `main.css` using `@apply` directives
- Uses standard Tailwind utility classes
- Easy to customize and extend
- Cleaner, more maintainable code

## New Typography System

### Typography Classes Available

```css
.h1 { @apply text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight; }
.h2 { @apply text-3xl md:text-4xl lg:text-5xl font-bold leading-tight; }
.h3 { @apply text-2xl md:text-3xl lg:text-4xl font-semibold leading-normal; }
.h4 { @apply text-xl md:text-2xl lg:text-3xl font-semibold leading-normal; }
.s1 { @apply text-lg md:text-xl lg:text-2xl font-medium leading-relaxed; }
.b1 { @apply text-base md:text-lg lg:text-xl leading-relaxed; }
.b2 { @apply text-sm md:text-base lg:text-lg leading-normal; }
.b3 { @apply text-xs md:text-sm lg:text-base leading-normal tracking-wide; }
```

### Usage Examples

```html
<!-- Headings -->
<h1 class="h1">Main Page Title</h1>
<h2 class="h2">Section Heading</h2>
<h3 class="h3">Subsection</h3>

<!-- Body text -->
<p class="b1">Primary body text content</p>
<p class="b2">Secondary body text</p>
<p class="s1">Subtitle or lead text</p>
```

## Customization Options

### Option 1: Modify Existing Classes
Edit the typography classes in `workfiles/styles/main.css`:

```css
.h1 {
  @apply text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none;
}
```

### Option 2: Add New Classes
Add your own typography classes:

```css
.display-1 {
  @apply text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter;
}

.caption {
  @apply text-xs text-gray-500 uppercase tracking-widest;
}
```

### Option 3: Use Tailwind Typography Plugin
Install and use `@tailwindcss/typography`:

```bash
npm install @tailwindcss/typography
```

```css
/* Remove the typography presets section and use: */
@import '@tailwindcss/typography';
```

## File Structure Changes

### main.css Structure
```css
@import "tailwindcss";
@config "../../tailwind.config.js";

/* Typography presets (h1-b3) */
.h1 { ... }
.h2 { ... }
/* ... */

/* Temporary demo styles */
/* (delete after customization) */

/* Your custom styles */
/* Add your styles here */
```

### What Was Removed
- `twlayout-plugin/styles/typography.css` import
- Complex CSS custom properties system
- Fixed responsive scaling ratios

### What Was Added
- Simple `@apply` based typography classes
- Clear customization areas in `main.css`
- Better integration with Tailwind utilities

## Migration Steps for Existing Projects

1. **Update main.css**: The typography classes are now defined directly in `main.css`
2. **Customize as needed**: Modify the `@apply` directives to match your design
3. **Remove temporary styles**: Delete the "temporary" sections after customization
4. **Test thoroughly**: Ensure all typography looks correct across breakpoints

## Benefits

- ✅ **Easier customization**: Standard Tailwind utilities
- ✅ **Better maintainability**: No complex CSS custom properties
- ✅ **Smaller bundle size**: Only generates used utilities
- ✅ **More flexible**: Easy to add/remove/modify classes
- ✅ **Better IDE support**: Tailwind IntelliSense works perfectly

## Demo Pages

All demo pages (`demo.html`, `mainpage.html`, `product_main.html`) continue to work with the new system without any changes needed. 