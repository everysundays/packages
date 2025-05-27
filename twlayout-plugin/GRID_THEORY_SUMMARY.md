# TWLayout Plugin Grid Theories - Version 1.2.1

This plugin uses three distinct mathematical theories for different breakpoints:

## 1. Mobile-Optimized Theory (sm: 375px)
- **col-1:** 49.24% (2 columns per row)
- **col-2+:** 100% (stack vertically) 
- **Simple, Mobile-First Approach**
- **Documentation:** [MOBILE_OPTIMIZED_THEORY.md](./doc/MOBILE_OPTIMIZED_THEORY.md)

## 2. Perfect Harmonic Theory (md: 770px)
- **Based on:** Musical harmony ratios (1:2:3:3:4:5 system)
- **Key feature:** col-3 = col-4 = 48.87%
- **Documentation:** [PERFECT_HARMONIC_THEORY.md](./doc/PERFECT_HARMONIC_THEORY.md)

## 3. 12-Column Grid Theory (lg: 1440px, xl: 1920px)
- **Based on:** Pure 12-column grid mathematics
- **Formula:** column_width = (base_column × n) + (gap_width × (n-1))
- **LG Base:** 100px column (1376px ÷ 12 - gaps)
- **XL Base:** 130px column (1856px ÷ 12 - gaps)
- **Documentation:** [12_COLUMN_GRID_THEORY.md](./doc/12_COLUMN_GRID_THEORY.md)

## Complete Reference
For a complete technical reference and implementation details, see:
[THEORY_REFERENCE.md](./doc/THEORY_REFERENCE.md) 