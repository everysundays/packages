# Tailwind Layout Plugin - Rack & Rail Grid System

A responsive grid system with two container types: **Rack** (flexible columns that wrap) and **Rail** (horizontally scrollable columns). Built as a local Tailwind CSS plugin development environment.

## Features

- **Rack Container**: Flexible percentage-based columns that adapt to container width
- **Rail Container**: Fixed-width columns with horizontal scrolling
- **Extended Breakpoints**: Uses Tailwind CSS standard breakpoints plus additional breakpoints for ultra-wide screens
- **Column Offsets**: Precise positioning with margin offsets
- **Mathematical Grid**: Perfect 12-column grid with gap consideration

## Breakpoints

The grid system is aligned with Tailwind CSS standard breakpoints with extended breakpoints for ultra-wide screens:

| Breakpoint | Min Width         | Description          |
|------------|-------------------|----------------------|
| xs         | 0px (0rem)        | Extra small devices  |
| sm         | 640px (40rem)     | Small devices        |
| md         | 768px (48rem)     | Medium devices       |
| lg         | 1024px (64rem)    | Large devices        |
| xl         | 1280px (80rem)    | Extra large devices  |
| 2xl        | 1536px (96rem)    | 2X-Large devices     |
| 3xl        | 1974px (123.375rem) | 3X-Large devices (1974px-2560px) |
| 4xl        | 2561px (160rem)   | 4X-Large devices (2561px-3420px+) |

## Installation

Follow these steps to set up the project:

1. Create a blank folder
2. Open Terminal
3. npm init -y
4. npm install tailwindcss@4.1.5 @tailwindcss/cli autoprefixer postcss @types/node @types/tailwindcss --save-dev
5. rm package.json package-lock.json
   (Because we will use ones from git)
6. git init
7. git remote add origin https://github.com/everysundays/psp-designertools.git
8. git pull origin main && npm run build
9. to update to new version, use 8.
10. view demo in twlayout-plugin/demo/responsive-test.html

## Usage

```html
<!-- Rack Container Example (wrapping flexible columns) -->
<div class="rack">
  <div class="col-12 xs:col-6 md:col-4 xl:col-3 2xl:col-2 3xl:col-2 4xl:col-1">Column content</div>
  <!-- More columns... -->
</div>

<!-- Rail Container Example (horizontally scrolling) -->
<div class="rail">
  <div class="col-4">Card 1</div>
  <div class="col-4">Card 2</div>
  <!-- More fixed-width cards... -->
</div>

<!-- Column with Offset Example -->
<div class="rack">
  <div class="col-12 md:col-6 md:offset-6">Centered column on md screens</div>
</div>
```

## Changelog

### Version 1.3.1
- Added xs breakpoint for extra small devices (below 640px)
- Uses the same grid configuration as sm breakpoint for consistency
- Provides better control for mobile-first responsive designs
- Set container padding to 16px for tighter layouts on small screens

### Version 1.3.0
- **Major Fix**: Corrected offset values for 2xl, 3xl, and 4xl breakpoints
- Implemented proper mathematical centering for offsets 7-11
- Fixed a critical inconsistency where offset-7 through offset-11 were incorrectly calculated
- Each offset now properly centers its corresponding column (offset-7 centers col-5, offset-8 centers col-4, etc.)
- Added comprehensive offset testing for all breakpoints

### Version 1.2.9
- Fixed column wrapping issues specifically in the 2560-2851px viewport range
- Fine-tuned 4xl breakpoint column percentages for better space utilization
- Recalculated offset values to ensure proper centering with the updated column widths

### Version 1.2.8
- Added support for ultra-wide viewports with two new breakpoints:
  - 3xl (1974px/123.375rem): Optimized for 1974px-2560px range
  - 4xl (2561px/160rem): Optimized for 2561px-3420px+ range
- Fine-tuned column percentages to minimize wasted space at larger viewports
- Adjusted RAIL column widths for better presentation on ultra-wide screens
- Updated offset calculations for precise centering at all breakpoints

### Version 1.2.7
- Fixed column wrapping issues specifically in the 1536-1785px viewport range
- Fine-tuned 2xl breakpoint column percentages to prevent wrapping while minimizing wasted space
- Recalculated offset values to ensure proper centering with the new column widths

### Version 1.2.6
- Restored original column percentages for 2xl breakpoint to minimize wasted space
- Fixed offset calculations for lg and xl breakpoints to ensure proper alignment
- Improved overall grid consistency across breakpoints

### Version 1.2.5
- Fixed column wrapping issues in 2xl breakpoint (1537-1786px viewport range)
- Optimized column percentages for 2xl breakpoint using available space calculations
- Updated offset values for precise centering

### Version 1.2.4
- Further optimized column percentages for 1024-1785px viewport range
- Fine-tuned calculations to minimize wasted space while preventing column wrapping
- Recalculated offset values for better centering

### Version 1.2.3
- Fixed column wrapping issues in lg (1024px) and xl (1280px) breakpoints
- Recalculated column percentages for proper 12-column grid alignment
- Updated offset values to match new column calculations

### Version 1.2.2
- Aligned breakpoints with Tailwind CSS standard breakpoints
- Added 2xl breakpoint (1536px/96rem)
- Updated demo with responsive test examples

## Demo Files

The project includes several demo and template files in the `workfiles/` directory:

- `demo.html` - Main demonstration of the grid system
- `product-main.html` - Product page template
- `product-main-jp-testimonials.html` - Product page variant with Japanese hospital testimonials section (5 featured hospitals)
- `news-main.html` - News page template
- Various news detail pages

### Japanese Testimonials Variant

The `product-main-jp-testimonials.html` file includes a dedicated testimonials section featuring 5 Japanese hospitals. This variant demonstrates localized content integration and can be used as a template for international market adaptations.

For a good TailwindCSS cheatsheet
1. Cheatsheet https://tailwindcss.504b.cc/
2. Flexbox examples https://www.shortcutfoo.com/app/dojos/tailwind-flexbox/cheatsheet

## License
MIT

