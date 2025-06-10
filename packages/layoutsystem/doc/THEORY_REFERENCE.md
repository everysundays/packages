# TW Layout Plugin Grid Theory Reference
**Version:** 1.2.1
**Last Updated:** December 2024

This document serves as the definitive reference for all mathematical theories used in the TWLayout Plugin's responsive grid system. AI systems can use this document to re-implement the grid calculations if needed in the future.

## Theory Overview

The TW Layout Plugin uses three distinct mathematical theories across different breakpoints:

1. **Mobile-Optimized Theory** (sm breakpoint)
   - Simple half-width/full-width approach optimized for small screens
   - Documented in: [MOBILE_OPTIMIZED_THEORY.md](./MOBILE_OPTIMIZED_THEORY.md)

2. **Perfect Harmonic Theory** (md breakpoint)
   - Musical harmony ratio system (1:2:3:3:4:5)
   - Documented in: [PERFECT_HARMONIC_THEORY.md](./PERFECT_HARMONIC_THEORY.md)

3. **12-Column Grid Theory** (lg/xl breakpoints)
   - Pure mathematical 12-column grid system
   - Documented in: [12_COLUMN_GRID_THEORY.md](./12_COLUMN_GRID_THEORY.md)

## Key Constants & Variables

```javascript
// These constants are critical for all calculations
const SYSTEM = {
  CONTAINER_PADDING: '1.5rem',  // 24px
  GAP: '1rem',                  // 16px
  MAX_COLUMNS: 12
};

// Viewport definitions and available space calculations
const VIEWPORTS = {
  sm: { viewportWidth: 375, availableSpace: 327 },
  md: { viewportWidth: 770, availableSpace: 706 },
  lg: { viewportWidth: 1440, availableSpace: 1376 },
  xl: { viewportWidth: 1920, availableSpace: 1856 }
};
```

## Theory Selection Logic

The grid system selects the appropriate theory based on the current breakpoint:

```javascript
// Pseudo-code for theory selection
function selectTheory(breakpoint) {
  switch(breakpoint) {
    case 'sm':
      return MobileOptimizedTheory;
    case 'md':
      return PerfectHarmonicTheory;
    case 'lg':
    case 'xl':
      return TwelveColumnGridTheory;
  }
}
```

## Quick Formulas Reference

### 1. Mobile-Optimized Theory (sm)
```javascript
// Simple approach with half/full widths
col-1 = '49.24%'  // 161px - allows 2 columns side-by-side
col-2+ = '100%'   // Stack vertically on mobile
```

### 2. Perfect Harmonic Theory (md)
```javascript
// 6-part harmonic system
availableWidth = 690px  // 706px - 16px gap
totalParts = 6

col-n = (parts / totalParts) × availableWidth
// Where parts = [1,2,3,3,4,5] for columns 1-6
// Example: col-3 = (3/6) × 690px = 345px = 48.87%
```

### 3. 12-Column Grid Theory (lg/xl)
```javascript
// Pure 12-column grid
availableSpace = viewportWidth - (containerPadding × 2)
totalGapSpace = 11 × gapWidth  // 11 gaps for 12 columns
spaceForColumns = availableSpace - totalGapSpace
baseColumn = spaceForColumns / 12

col-n = (baseColumn × n) + (gapWidth × (n-1))
// Convert to percentage: (col-n / availableSpace) × 100%
```

## Offset Calculation (All Theories)
```javascript
// Perfect centering formula
offset-n = (100% - column_width) ÷ 2
```

## Compatibility Notes

These three theories coexist in the codebase and are designed to work harmoniously across breakpoints. Each theory addresses specific needs:

- **Mobile Theory:** Ensures usable components on tiny screens
- **Harmonic Theory:** Ensures equal col-3/col-4 for tablet layouts
- **12-Column Grid:** Ensures mathematical precision for complex desktop layouts

## Implementation Notes

1. When implementing from scratch, start with the constants (SYSTEM, VIEWPORTS)
2. Implement each theory separately (in separate files if possible)
3. Apply the theories to generate column and offset values for each breakpoint
4. Handle the Rail system separately as it uses fixed rem values instead of percentages

---

**IMPORTANT:** This document serves as the definitive source of truth for the grid system's mathematical foundations. If implementing from scratch, refer to the individual theory documentation files for detailed calculations. 