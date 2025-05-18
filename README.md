# Rack & Rail Grid System

A responsive CSS grid system with two types of containers, each optimized for different use cases:

## Container Types

1. **Rack Containers** - End-to-end columns that wrap to the next line
   - Uses percentage-based widths derived from available space after padding
   - Columns dynamically resize based on viewport width
   - Ideal for typical page layouts, content sections, and responsive designs

2. **Rail Containers** - Horizontally scrollable rows with fixed-width columns  
   - Uses fixed-width columns that don't stretch
   - Creates a horizontally scrollable container
   - Perfect for card galleries, product listings, and content that shouldn't resize

## Key Features

- **Responsive Breakpoints**
  - sm: 375px viewport (335px available width)
  - md: 770px viewport (690px available width)
  - lg: 1450px viewport (1376px available width)
  - xl: 1800px viewport (1736px available width)

- **12-Column System**
  - Columns range from `col-1` through `col-12`
  - Rack columns use percentage-based widths calculated from available space
  - Rail columns use fixed widths with min-width to prevent shrinking

- **Column Offsets**
  - Offset classes from `offset-0` to `offset-11`
  - Percentage-based offsets calculated from available space

- **Standardized Spacing**
  - All containers use 1.5rem padding on all sides
  - Consistent 1rem gap between all columns

## Project Structure

The grid system has been refactored for better organization:

- **Configuration**: All grid system settings are now in `src/scripts/grid-config.js`
- **CSS**: Core styles in `src/styles/main.css`, demo styles in `src/styles/decoration.css`
- **JavaScript**: Demo functionality in `src/scripts/demo.js`

## Usage

```html
<!-- Rack Container Example (wrapping columns) -->
<div class="rack">
  <div class="col-4">Column 4</div>
  <div class="col-8">Column 8</div>
  <div class="col-6">Column 6</div>
  <div class="col-6">Column 6</div>
</div>

<!-- Rail Container Example (horizontally scrollable) -->
<div class="rail">
  <div class="col-4">Card 1</div>
  <div class="col-4">Card 2</div>
  <div class="col-4">Card 3</div>
  <div class="col-4">Card 4</div>
</div>

<!-- Offset Example -->
<div class="rack">
  <div class="col-6 offset-3">
    Offset Column
  </div>
</div>
```

## Technical Details

### Rack Container Calculations

- Percentage widths are calculated based on available space after container padding
- Formula: `Column percentage = (Fixed column width / Available space) * 100%`
- At xlarge (1800px): col-12 = 1736px (100% of available space after 64px padding)

### Rail Container Implementation

- Uses fixed-width columns with `min-width` to prevent shrinking
- Columns maintain consistent width regardless of container size
- Provides smooth horizontal scrolling with hidden scrollbars

## Debug Mode

The grid system includes a debug mode for development, which can be toggled on/off:

- Shows container boundaries and column sizes
- Displays the column classes for easier development
- Shows container types (Rack vs Rail)
- Settings are saved to localStorage for persistence

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Uses CSS variables (custom properties)
- Flexbox-based layout

## Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Build the CSS:
   ```
   npm run build
   ```
4. For development with live reload:
   ```
   npm run dev
   ```

## Implementation Details

The grid system uses CSS custom properties (variables) to define column widths and offsets at different breakpoints:

```css
/* Base container styles */
.rack, .rail {
  padding: 1.5rem; /* Standardized padding on all sides */
  display: flex;
  gap: 1rem; /* Standardized gap */
}

.rack {
  flex-wrap: wrap;
}

.rail {
  flex-wrap: nowrap;
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

/* Small screens (375px) */
@media (min-width: 20rem) {
  :root {
    /* Column width variables */
    --rack-col-1-percent: 48.06%;
    --rack-col-2-percent: 100%;
    /* etc. */
    
    /* Rail column widths */
    --rail-col-1-width: 16.25rem;
    --rail-col-2-width: 20rem;
    /* etc. */
  }
  
  /* Column classes */
  .rack .col-1 { width: var(--rack-col-1-percent); }
  .rail .col-1 { width: var(--rail-col-1-width); }
  /* etc. */
}

/* And similar for other breakpoints... */
```

## Configuration

All grid system settings can be found in the `src/scripts/grid-config.js` file. This includes:

- Breakpoint definitions and viewport sizes
- Column widths for each breakpoint
- System constants like standard padding and gap values

## License

MIT # psp-designertools
