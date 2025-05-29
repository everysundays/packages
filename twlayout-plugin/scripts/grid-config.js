/**
 * Rack & Rail Grid System Configuration v1.2.0
 * ==============================================
 * 
 * This file contains the core configuration for the responsive grid system.
 * Edit these values to customize the grid system's behavior.
 * 
 * Architecture:
 * - SYSTEM: Global constants and settings
 * - VIEWPORTS: Responsive breakpoint definitions
 * - RACK_COLUMNS: Flexible grid columns (percentage-based)
 * - RAIL_COLUMNS: Fixed-width columns for horizontal scrolling
 * - RAIL_GAPS: Special gap handling for rail containers
 * - OFFSETS: Left margin offsets for precise positioning
 * 
 * ==============================================
 * HAND-TUNED VALUES DOCUMENTATION
 * ==============================================
 * 
 * The following values have been manually fine-tuned from calculated defaults:
 * 
 * 1. RACK_COLUMNS - MOBILE OPTIMIZED (sm breakpoint):
 *    - Target: 375px viewport (327px available space)
 *    - col-1: 49.24% (161px) - allows 2 columns per row
 *    - col-2 to col-12: 100% - simplified mobile layout
 *    - Purpose: Mobile-first responsive behavior
 * 
 * 2. RACK_COLUMNS - PERFECT HARMONIC THEORY (md breakpoint):
 *    - Target: 770px viewport (706px available space) with mathematical precision
 *    - Implementation: 6-part harmonic ratio system (1:2:3:3:4:5)
 *    - Available space for side-by-side columns: 690px (706px - 16px gap)
 *    - Mathematical Foundation:
 *      • col-1 = 1/6 × 690px = 115px = 16.29%
 *      • col-2 = 2/6 × 690px = 230px = 32.58%  
 *      • col-3 = 3/6 × 690px = 345px = 48.87%
 *      • col-4 = 3/6 × 690px = 345px = 48.87% (EQUAL to col-3)
 *      • col-5 = 4/6 × 690px = 460px = 65.16%
 *      • col-6 = 5/6 × 690px = 575px = 81.44%
 *    - Perfect 100% Verification:
 *      • col-1 + col-6 = 16.29% + 81.44% = 97.73% + 2.27% gap = 100% ✓
 *      • col-2 + col-5 = 32.58% + 65.16% = 97.74% + 2.26% gap = 100% ✓
 *      • col-3 + col-4 = 48.87% + 48.87% = 97.74% + 2.26% gap = 100% ✓
 *    - Key Features: col-3/col-4 equal width, complementary pairs scale harmonically
 *    - Theory: Based on musical harmony ratios for perfect proportional relationships
 * 
 * 3. RACK_COLUMNS (lg/xl breakpoints) - 12-COLUMN GRID THEORY:
 *    - Purpose: Support all combinations of 12-column layouts with gap consideration
 *    - Method: 12-column grid system using pure mathematical precision
 *    - Formula: column_width = (base_column × n) + (gap_width × (n-1))
 *    - lg values: Base column = 100px (from 1376px ÷ 12 - gaps)
 *    - xl values: Base column = 130px (from 1856px ÷ 12 - gaps)
 *    - See documentation in twlayout-plugin/doc/12_COLUMN_GRID_THEORY.md
 * 
 * 4. NEW EXTENDED BREAKPOINTS (3xl/4xl):
 *    - Purpose: Better support for ultra-wide viewports (1974px-3420px)
 *    - Method: 12-column grid optimized for specific viewport ranges
 *    - 3xl breakpoint: Optimized for 1974px-2560px range
 *    - 4xl breakpoint: Optimized for 2561px-3420px+ range
 *    - Calculation: Precision-tuned column percentages to minimize wasted space
 *
 * 5. RAIL_COLUMNS col-12:
 *    - Purpose: Full-width sliding content (100% instead of fixed rem)
 *    - Use case: Slide-to-slide navigation without edge peeking
 *    - All breakpoints: Changed from 60rem/64rem to 100%
 * 
 * 6. RAIL_GAPS:
 *    - Purpose: Match container padding for seamless slide transitions
 *    - Effect: Prevents next slide from showing at viewport edge
 *    - Critical for: Multi-screen sliding content experiences
 * 
 * 7. OFFSETS - CENTERING SYSTEM:
 *    - sm: offset-11 = 25.38% for perfect col-1 centering, others = 0%
 *    - md: Perfect harmonic centering calculation 
 *      • Formula: offset = (100% - harmonic_column_width) ÷ 2
 *      • offset 0-5: 0% (full-width columns: col-12 to col-7)
 *      • offset 6-11: Perfect centering for harmonic col-6 to col-1
 *      • Example: offset-6 = (100% - 81.44%) ÷ 2 = 9.28%
 *      • Special: offset-8 = offset-9 = 25.57% (equal centering for equal col-3/col-4)
 *    - lg/xl: Visual centering using half-margin technique
 *    - Method: Apply calculated margin-left for perfect centering
 *    - Effect: Column appears precisely centered with equal spacing on both sides
 * 
 * PRESERVATION NOTES:
 * - Do NOT revert hand-tuned values to mathematical calculations
 * - These values were adjusted through visual testing and use-case optimization
 * - Changes affect both responsive behavior and visual balance
 * - xl breakpoint ratios are intentionally non-proportional for better UX
 */

// =============================================================================
// SYSTEM CONFIGURATION
// =============================================================================

/**
 * System-wide constants that affect all grid behavior
 */
const SYSTEM = {
  CONTAINER_PADDING: '1.5rem',        // Standard padding for all containers (24px)
  GAP: '1rem',                        // Standard gap between columns (16px)
  DEBUG_MODE_KEY: 'rack-rail-debug-mode',  // localStorage key for debug mode
  
  // Grid validation settings
  MAX_COLUMNS: 12,                    // Maximum number of columns supported
  MIN_VIEWPORT_WIDTH: 320,            // Minimum supported viewport width (px)
  MAX_VIEWPORT_WIDTH: 3420,           // Maximum supported viewport width (px)
};

// =============================================================================
// VIEWPORT BREAKPOINTS
// =============================================================================

/**
 * Responsive breakpoint configuration
 * Each breakpoint defines screen size thresholds and available space calculations
 * Aligned with Tailwind CSS breakpoints for standardization
 * Extended with additional breakpoints for ultra-wide screens
 */
const VIEWPORTS = {
  xs: {
    viewportWidth: 320,               // Extra small devices (below sm)
    minWidth: '0',                    // CSS min-width (0px)
    containerPadding: 16,             // Container padding (px)
    availableSpace: 288,              // Available space for content (320px - 32px)
    description: 'Extra small devices (below sm)'
  },
  sm: {
    viewportWidth: 640,               // Tailwind sm breakpoint (40rem)
    minWidth: '40rem',                // CSS min-width (640px)
    containerPadding: 24,             // Container padding (px)
    availableSpace: 592,              // Available space for content (640px - 48px)
    description: 'Small devices (Tailwind sm)'
  },
  md: {
    viewportWidth: 768,               // Tailwind md breakpoint (48rem)
    minWidth: '48rem',                // CSS min-width (768px)
    containerPadding: 32,             // Container padding (px)
    availableSpace: 704,              // Available space for content (768px - 64px)
    description: 'Medium devices (Tailwind md)'
  },
  lg: {
    viewportWidth: 1024,              // Tailwind lg breakpoint (64rem)
    minWidth: '64rem',                // CSS min-width (1024px)
    containerPadding: 32,             // Container padding (px)
    availableSpace: 960,              // Available space for content (1024px - 64px)
    description: 'Large devices (Tailwind lg)'
  },
  xl: {
    viewportWidth: 1280,              // Tailwind xl breakpoint (80rem)
    minWidth: '80rem',                // CSS min-width (1280px)
    containerPadding: 32,             // Container padding (px)
    availableSpace: 1216,             // Available space for content (1280px - 64px)
    description: 'Extra large devices (Tailwind xl)'
  },
  '2xl': {
    viewportWidth: 1536,              // Tailwind 2xl breakpoint (96rem)
    minWidth: '96rem',                // CSS min-width (1536px)
    containerPadding: 32,             // Container padding (px)
    availableSpace: 1472,             // Available space for content (1536px - 64px)
    description: '2X-Large devices (Tailwind 2xl)'
  },
  '3xl': {
    viewportWidth: 1974,              // First extended breakpoint (123.375rem)
    minWidth: '123.375rem',           // CSS min-width (1974px)
    containerPadding: 40,             // Container padding (px)
    availableSpace: 1894,             // Available space for content (1974px - 80px)
    description: '3X-Large devices (Range 1240px-1973px)'
  },
  '4xl': {
    viewportWidth: 2560,              // Second extended breakpoint (160rem)
    minWidth: '160rem',               // CSS min-width (2560px)
    containerPadding: 48,             // Container padding (px)
    availableSpace: 2464,             // Available space for content (2560px - 96px)
    description: '4X-Large devices (Range 1974px-3420px)'
  }
};

// =============================================================================
// RACK COLUMNS (Flexible Grid)
// =============================================================================

/**
 * Rack column widths as percentages of available space
 * These columns are flexible and will adapt to the container width
 * 
 * HAND-TUNED VALUES: Optimized for visual balance and gap accommodation
 */
const RACK_COLUMNS = {
  xs: {
    1: '49.24%',    // Half-width on mobile - allows 2 col-1 side by side (161px / 327px available space)
    2: '100%',      // Stack vertically on small screens
    3: '100%',
    4: '100%',
    5: '100%',
    6: '100%',
    7: '100%',
    8: '100%',
    9: '100%',
    10: '100%',
    11: '100%',
    12: '100%',
  },
  sm: {
    1: '49.24%',    // Half-width on mobile - allows 2 col-1 side by side (161px / 327px available space)
    2: '100%',      // Stack vertically on small screens
    3: '100%',
    4: '100%',
    5: '100%',
    6: '100%',
    7: '100%',
    8: '100%',
    9: '100%',
    10: '100%',
    11: '100%',
    12: '100%',
  },
  md: {
    1: '16.29%',    // Perfect harmonic: 1/6 of 690px available space (115px)
    2: '32.58%',    // Perfect harmonic: 2/6 of 690px available space (230px)
    3: '48.87%',    // Perfect harmonic: 3/6 of 690px available space (345px)
    4: '48.87%',    // Perfect harmonic: 3/6 of 690px available space (345px) - EQUAL to col-3
    5: '65.16%',    // Perfect harmonic: 4/6 of 690px available space (460px)
    6: '81.44%',    // Perfect harmonic: 5/6 of 690px available space (575px)
    7: '100%',      // Full width on md+ for simplified layout
    8: '100%',      // Full width on md+ for simplified layout
    9: '100%',      // Full width on md+ for simplified layout
    10: '100%',     // Full width on md+ for simplified layout
    11: '100%',     // Full width on md+ for simplified layout
    12: '100%',     // Full width on md+ for simplified layout
  },
  lg: {
    1: '6.75%',     // Optimized: 64.8px (base) = 64.8/960
    2: '15.18%',    // Optimized: 145.6px (64.8×2 + 16px gap) = 145.6/960
    3: '23.60%',    // Optimized: 226.4px (64.8×3 + 32px gaps) = 226.4/960
    4: '32.02%',    // Optimized: 307.2px (64.8×4 + 48px gaps) = 307.2/960
    5: '40.44%',    // Optimized: 388px (64.8×5 + 64px gaps) = 388/960
    6: '48.86%',    // Optimized: 468.8px (64.8×6 + 80px gaps) = 468.8/960
    7: '57.28%',    // Optimized: 549.6px (64.8×7 + 96px gaps) = 549.6/960
    8: '65.70%',    // Optimized: 630.4px (64.8×8 + 112px gaps) = 630.4/960
    9: '74.12%',    // Optimized: 711.2px (64.8×9 + 128px gaps) = 711.2/960
    10: '82.54%',   // Optimized: 792px (64.8×10 + 144px gaps) = 792/960
    11: '90.96%',   // Optimized: 872.8px (64.8×11 + 160px gaps) = 872.8/960
    12: '100%',     // Full width regardless of gaps
  },
  xl: {
    1: '7.06%',     // Optimized: 85.8px (base) = 85.8/1216
    2: '15.43%',    // Optimized: 187.6px (85.8×2 + 16px gap) = 187.6/1216
    3: '23.81%',    // Optimized: 289.4px (85.8×3 + 32px gaps) = 289.4/1216
    4: '32.18%',    // Optimized: 391.2px (85.8×4 + 48px gaps) = 391.2/1216
    5: '40.56%',    // Optimized: 493px (85.8×5 + 64px gaps) = 493/1216
    6: '48.93%',    // Optimized: 594.8px (85.8×6 + 80px gaps) = 594.8/1216
    7: '57.31%',    // Optimized: 696.6px (85.8×7 + 96px gaps) = 696.6/1216
    8: '65.68%',    // Optimized: 798.4px (85.8×8 + 112px gaps) = 798.4/1216
    9: '74.06%',    // Optimized: 900.2px (85.8×9 + 128px gaps) = 900.2/1216
    10: '82.43%',   // Optimized: 1002px (85.8×10 + 144px gaps) = 1002/1216
    11: '90.81%',   // Optimized: 1103.8px (85.8×11 + 160px gaps) = 1103.8/1216
    12: '100%',     // Full width
  },
  '2xl': {
    1: '7.40%',     // Tuned for 1536-1785px: 109px = 109/1472
    2: '15.69%',    // Tuned for 1536-1785px: 231px = 231/1472
    3: '23.98%',    // Tuned for 1536-1785px: 353px = 353/1472
    4: '32.27%',    // Tuned for 1536-1785px: 475px = 475/1472
    5: '40.56%',    // Tuned for 1536-1785px: 597px = 597/1472
    6: '48.85%',    // Tuned for 1536-1785px: 719px = 719/1472
    7: '57.13%',    // Tuned for 1536-1785px: 841px = 841/1472
    8: '65.42%',    // Tuned for 1536-1785px: 963px = 963/1472
    9: '73.71%',    // Tuned for 1536-1785px: 1085px = 1085/1472
    10: '82.00%',   // Tuned for 1536-1785px: 1207px = 1207/1472
    11: '90.29%',   // Tuned for 1536-1785px: 1329px = 1329/1472
    12: '100%',     // Full width
  },
  '3xl': {
    1: '7.97%',     // Optimized for 1974px: 151px/1894 (1 column)
    2: '16.16%',    // Optimized for 1974px: 306px/1894 (2 columns + 1 gap)
    3: '24.34%',    // Optimized for 1974px: 461px/1894 (3 columns + 2 gaps)
    4: '32.52%',    // Optimized for 1974px: 616px/1894 (4 columns + 3 gaps)
    5: '40.71%',    // Optimized for 1974px: 771px/1894 (5 columns + 4 gaps)
    6: '48.89%',    // Optimized for 1974px: 926px/1894 (6 columns + 5 gaps)
    7: '57.08%',    // Optimized for 1974px: 1081px/1894 (7 columns + 6 gaps)
    8: '65.26%',    // Optimized for 1974px: 1236px/1894 (8 columns + 7 gaps)
    9: '73.44%',    // Optimized for 1974px: 1391px/1894 (9 columns + 8 gaps)
    10: '81.63%',   // Optimized for 1974px: 1546px/1894 (10 columns + 9 gaps)
    11: '89.81%',   // Optimized for 1974px: 1701px/1894 (11 columns + 10 gaps)
    12: '100%',     // Full width
  },
  '4xl': {
    1: '8.03%',     // Re-optimized for 2560-2851px: 198px/2464 (1 column)
    2: '16.23%',    // Re-optimized for 2560-2851px: 400px/2464 (2 columns + 1 gap)
    3: '24.43%',    // Re-optimized for 2560-2851px: 602px/2464 (3 columns + 2 gaps)
    4: '32.63%',    // Re-optimized for 2560-2851px: 804px/2464 (4 columns + 3 gaps)
    5: '40.83%',    // Re-optimized for 2560-2851px: 1006px/2464 (5 columns + 4 gaps)
    6: '49.03%',    // Re-optimized for 2560-2851px: 1208px/2464 (6 columns + 5 gaps)
    7: '57.23%',    // Re-optimized for 2560-2851px: 1410px/2464 (7 columns + 6 gaps)
    8: '65.43%',    // Re-optimized for 2560-2851px: 1612px/2464 (8 columns + 7 gaps)
    9: '73.62%',    // Re-optimized for 2560-2851px: 1814px/2464 (9 columns + 8 gaps)
    10: '81.82%',   // Re-optimized for 2560-2851px: 2016px/2464 (10 columns + 9 gaps)
    11: '90.02%',   // Re-optimized for 2560-2851px: 2218px/2464 (11 columns + 10 gaps)
    12: '100%',     // Full width
  }
};

// =============================================================================
// RAIL COLUMNS (Fixed Width)
// =============================================================================

/**
 * Rail column widths as fixed rem values
 * These columns maintain consistent width regardless of container size
 * Ideal for horizontal scrolling layouts and card-based designs
 * 
 * SPECIAL CASE: col-12 uses 100% for slide effect (HAND-TUNED)
 */
const RAIL_COLUMNS = {
  xs: {
    1: '16rem',     // 256px - Compact card size
    2: '20rem',     // 320px - Standard card size
    3: '24rem',     // 384px - Extended card size
    4: '28rem',     // 448px - Large card size
    5: '32rem',     // 512px - Extra large card
    6: '36rem',     // 576px - Oversized card
    7: '40rem',     // 640px - Banner size
    8: '44rem',     // 704px - Large banner
    9: '48rem',     // 768px - Tablet width
    10: '52rem',    // 832px - Extended tablet
    11: '56rem',    // 896px - Small desktop
    12: '100%',     // HAND-TUNED: Full available width for slide effect
  },
  sm: {
    1: '16rem',     // 256px - Compact card size
    2: '20rem',     // 320px - Standard card size
    3: '24rem',     // 384px - Extended card size
    4: '28rem',     // 448px - Large card size
    5: '32rem',     // 512px - Extra large card
    6: '36rem',     // 576px - Oversized card
    7: '40rem',     // 640px - Banner size
    8: '44rem',     // 704px - Large banner
    9: '48rem',     // 768px - Tablet width
    10: '52rem',    // 832px - Extended tablet
    11: '56rem',    // 896px - Small desktop
    12: '100%',     // HAND-TUNED: Full available width for slide effect
  },
  md: {
    1: '16rem',     // 256px
    2: '20rem',     // 320px
    3: '24rem',     // 384px
    4: '28rem',     // 448px
    5: '32rem',     // 512px
    6: '36rem',     // 576px
    7: '40rem',     // 640px
    8: '44rem',     // 704px
    9: '48rem',     // 768px
    10: '52rem',    // 832px
    11: '56rem',    // 896px
    12: '100%',     // HAND-TUNED: Full available width for slide effect
  },
  lg: {
    1: '16rem',     // 256px
    2: '20rem',     // 320px
    3: '24rem',     // 384px
    4: '28rem',     // 448px
    5: '32rem',     // 512px
    6: '36rem',     // 576px
    7: '40rem',     // 640px
    8: '44rem',     // 704px
    9: '48rem',     // 768px
    10: '52rem',    // 832px
    11: '56rem',    // 896px
    12: '100%',     // HAND-TUNED: Full available width for slide effect
  },
  xl: {
    1: '16rem',     // 256px
    2: '20rem',     // 320px
    3: '24rem',     // 384px
    4: '28rem',     // 448px
    5: '32rem',     // 512px
    6: '36rem',     // 576px
    7: '40rem',     // 640px
    8: '44rem',     // 704px
    9: '48rem',     // 768px
    10: '52rem',    // 832px
    11: '56rem',    // 896px
    12: '100%',     // HAND-TUNED: Full available width for slide effect
  },
  '2xl': {
    1: '16rem',     // 256px - Reusing xl values for 2xl breakpoint
    2: '20rem',     // 320px - Reusing xl values for 2xl breakpoint
    3: '24rem',     // 384px - Reusing xl values for 2xl breakpoint
    4: '28rem',     // 448px - Reusing xl values for 2xl breakpoint
    5: '32rem',     // 512px - Reusing xl values for 2xl breakpoint
    6: '36rem',     // 576px - Reusing xl values for 2xl breakpoint
    7: '40rem',     // 640px - Reusing xl values for 2xl breakpoint
    8: '44rem',     // 704px - Reusing xl values for 2xl breakpoint
    9: '48rem',     // 768px - Reusing xl values for 2xl breakpoint
    10: '52rem',    // 832px - Reusing xl values for 2xl breakpoint
    11: '56rem',    // 896px - Reusing xl values for 2xl breakpoint
    12: '100%',     // HAND-TUNED: Full available width for slide effect
  },
  '3xl': {
    1: '20rem',     // 320px - Increased for larger viewports
    2: '25rem',     // 400px - Increased for larger viewports
    3: '30rem',     // 480px - Increased for larger viewports
    4: '35rem',     // 560px - Increased for larger viewports
    5: '40rem',     // 640px - Increased for larger viewports
    6: '45rem',     // 720px - Increased for larger viewports
    7: '50rem',     // 800px - Increased for larger viewports
    8: '55rem',     // 880px - Increased for larger viewports
    9: '60rem',     // 960px - Increased for larger viewports
    10: '65rem',    // 1040px - Increased for larger viewports
    11: '70rem',    // 1120px - Increased for larger viewports
    12: '100%',     // HAND-TUNED: Full available width for slide effect
  },
  '4xl': {
    1: '24rem',     // 384px - Further increased for ultra-wide viewports
    2: '30rem',     // 480px - Further increased for ultra-wide viewports
    3: '36rem',     // 576px - Further increased for ultra-wide viewports
    4: '42rem',     // 672px - Further increased for ultra-wide viewports
    5: '48rem',     // 768px - Further increased for ultra-wide viewports
    6: '54rem',     // 864px - Further increased for ultra-wide viewports
    7: '60rem',     // 960px - Further increased for ultra-wide viewports
    8: '66rem',     // 1056px - Further increased for ultra-wide viewports
    9: '72rem',     // 1152px - Further increased for ultra-wide viewports
    10: '78rem',    // 1248px - Further increased for ultra-wide viewports
    11: '84rem',    // 1344px - Further increased for ultra-wide viewports
    12: '100%',     // HAND-TUNED: Full available width for slide effect
  }
};

// =============================================================================
// RAIL GAPS (Special Gap Handling)
// =============================================================================

/**
 * Rail gap configuration for different use cases
 * 
 * SLIDE_MODE: Gap matches container padding for seamless slide transitions
 * - Purpose: Prevent next slide from peeking at viewport edge
 * - Use case: Full-screen sliding content (especially col-12)
 * - Critical for: Multi-screen content experiences
 */
const RAIL_GAPS = {
  // Standard gap for normal rail columns
  STANDARD: '1rem',
  
  // Special gap for slide-mode (matches container padding)
  SLIDE_MODE: {
    xs: '1rem',      // Matches xs containerPadding (16px)
    sm: '1.5rem',     // Matches sm containerPadding (24px)
    md: '2rem',       // Matches md containerPadding (32px)  
    lg: '2rem',       // Matches lg containerPadding (32px)
    xl: '2rem',       // Matches xl containerPadding (32px)
    '2xl': '2rem',    // Matches 2xl containerPadding (32px)
    '3xl': '2.5rem',  // Matches 3xl containerPadding (40px)
    '4xl': '3rem'     // Matches 4xl containerPadding (48px)
  }
};

// =============================================================================
// COLUMN OFFSETS
// =============================================================================

/**
 * Column offset values as percentages
 * These create left margins to center content precisely within the grid
 * 
 * CENTERING FORMULA: offset = (available_space - column_width) ÷ 2 ÷ available_space
 * 
 * BREAKPOINT-SPECIFIC BEHAVIOR:
 * - xs/sm: Simplified mobile layout - only offset-11 centers col-1
 * - md: True mathematical centering for col-6 to col-1
 * - lg/xl/2xl/3xl/4xl: Perfect centering for all columns
 * 
 * EXAMPLE CALCULATION (md breakpoint):
 * - Available space: 706px (770px viewport - 64px padding)
 * - col-6 width: 456px (64.59% of 706px)
 * - offset-6: (706px - 456px) ÷ 2 ÷ 706px = 125px ÷ 706px = 17.70%
 * - Result: col-6 perfectly centered with 125px margin on both sides
 */
const OFFSETS = {
  xs: {
    0: '0%',        // No offset
    1: '0%',        // No meaningful offset for mobile - cols are 49.24% or 100%
    2: '0%',        // No meaningful offset for mobile
    3: '0%',        // No meaningful offset for mobile
    4: '0%',        // No meaningful offset for mobile
    5: '0%',        // No meaningful offset for mobile
    6: '0%',        // No meaningful offset for mobile
    7: '0%',        // No meaningful offset for mobile
    8: '0%',        // No meaningful offset for mobile
    9: '0%',        // No meaningful offset for mobile
    10: '0%',       // No meaningful offset for mobile
    11: '25.38%',   // Perfect centering: (327px - 161px) ÷ 2 ÷ 327px = 83px/327px - MOBILE-OPTIMIZED
  },
  sm: {
    0: '0%',        // No offset
    1: '0%',        // No meaningful offset for mobile - cols are 49.24% or 100%
    2: '0%',        // No meaningful offset for mobile
    3: '0%',        // No meaningful offset for mobile
    4: '0%',        // No meaningful offset for mobile
    5: '0%',        // No meaningful offset for mobile
    6: '0%',        // No meaningful offset for mobile
    7: '0%',        // No meaningful offset for mobile
    8: '0%',        // No meaningful offset for mobile
    9: '0%',        // No meaningful offset for mobile
    10: '0%',       // No meaningful offset for mobile
    11: '25.38%',   // Perfect centering: (327px - 161px) ÷ 2 ÷ 327px = 83px/327px - MOBILE-OPTIMIZED
  },
  md: {
    0: '0%',        // No offset - col-12 full width
    1: '0%',        // No offset - col-11 full width  
    2: '0%',        // No offset - col-10 full width
    3: '0%',        // No offset - col-9 full width
    4: '0%',        // No offset - col-8 full width
    5: '0%',        // No offset - col-7 full width
    6: '9.28%',     // (100% - 81.44%) ÷ 2 = 9.28% - CENTERED col-6 (perfect harmonic)
    7: '17.42%',    // (100% - 65.16%) ÷ 2 = 17.42% - CENTERED col-5 (perfect harmonic)
    8: '25.57%',    // (100% - 48.87%) ÷ 2 = 25.57% - CENTERED col-4 (perfect harmonic)
    9: '25.57%',    // (100% - 48.87%) ÷ 2 = 25.57% - CENTERED col-3 (perfect harmonic)
    10: '33.71%',   // (100% - 32.58%) ÷ 2 = 33.71% - CENTERED col-2 (perfect harmonic)
    11: '41.86%',   // (100% - 16.29%) ÷ 2 = 41.86% - CENTERED col-1 (perfect harmonic)
  },
  lg: {
    0: '0%',        // No offset
    1: '4.165%',    // Half of 1 column offset - Maintaining style for small offsets
    2: '8.335%',    // Half of 2 column offset - Maintaining style for small offsets
    3: '12.5%',     // Half of 3 column offset - Maintaining style for small offsets
    4: '16.665%',   // Half of 4 column offset - Maintaining style for small offsets
    5: '20.835%',   // Half of 5 column offset - Maintaining style for small offsets
    6: '25.39%',    // Half of 6 column offset - Maintaining style
    7: '29.165%',   // Half of 7 column offset - Maintaining style
    8: '33.335%',   // Half of 8 column offset - Maintaining style
    9: '37.5%',     // Half of 9 column offset - Maintaining style
    10: '41.665%',  // Half of 10 column offset - Maintaining style
    11: '45.835%',  // Half of 11 column offset - Maintaining style
  },
  xl: {
    0: '0%',        // No offset
    1: '4.165%',    // Half of 1 column offset - Maintaining style for small offsets
    2: '8.335%',    // Half of 2 column offset - Maintaining style for small offsets
    3: '12.5%',     // Half of 3 column offset - Maintaining style for small offsets
    4: '16.665%',   // Half of 4 column offset - Maintaining style for small offsets
    5: '20.835%',   // Half of 5 column offset - Maintaining style for small offsets
    6: '25.23%',    // (100% - 49.54%) ÷ 2 = 25.23% - CENTERED col-6 (original)
    7: '29.43%',    // (100% - 41.13%) ÷ 2 = 29.43% - CENTERED col-5 (original)
    8: '33.64%',    // (100% - 32.72%) ÷ 2 = 33.64% - CENTERED col-4 (original)
    9: '37.84%',    // (100% - 24.31%) ÷ 2 = 37.84% - CENTERED col-3 (original)
    10: '42.05%',   // (100% - 15.90%) ÷ 2 = 42.05% - CENTERED col-2 (original)
    11: '46.26%',   // (100% - 7.49%) ÷ 2 = 46.26% - CENTERED col-1 (original)
  },
  '2xl': {
    0: '0%',        // No offset
    1: '4.165%',    // Half of 1 column offset - Maintaining style for small offsets
    2: '8.335%',    // Half of 2 column offset - Maintaining style for small offsets
    3: '12.5%',     // Half of 3 column offset - Maintaining style for small offsets
    4: '16.665%',   // Half of 4 column offset - Maintaining style for small offsets
    5: '20.835%',   // Half of 5 column offset - Maintaining style for small offsets
    6: '25.58%',    // (100% - 48.85%) ÷ 2 = 25.58% - CENTERED col-6 (adjusted)
    7: '29.72%',    // (100% - 40.56%) ÷ 2 = 29.72% - CENTERED col-5 (adjusted)
    8: '33.87%',    // (100% - 32.27%) ÷ 2 = 33.87% - CENTERED col-4 (adjusted)
    9: '38.01%',    // (100% - 23.98%) ÷ 2 = 38.01% - CENTERED col-3 (adjusted)
    10: '42.16%',   // (100% - 15.69%) ÷ 2 = 42.16% - CENTERED col-2 (adjusted)
    11: '46.30%',   // (100% - 7.40%) ÷ 2 = 46.30% - CENTERED col-1 (adjusted)
  },
  '3xl': {
    0: '0%',        // No offset
    1: '4.165%',    // Half of 1 column offset - Maintaining style for small offsets
    2: '8.335%',    // Half of 2 column offset - Maintaining style for small offsets
    3: '12.5%',     // Half of 3 column offset - Maintaining style for small offsets
    4: '16.665%',   // Half of 4 column offset - Maintaining style for small offsets
    5: '20.835%',   // Half of 5 column offset - Maintaining style for small offsets
    6: '25.56%',    // (100% - 48.89%) ÷ 2 = 25.56% - CENTERED col-6 (3xl adjusted)
    7: '29.65%',    // (100% - 40.71%) ÷ 2 = 29.65% - CENTERED col-5 (3xl adjusted)
    8: '33.74%',    // (100% - 32.52%) ÷ 2 = 33.74% - CENTERED col-4 (3xl adjusted)
    9: '37.83%',    // (100% - 24.34%) ÷ 2 = 37.83% - CENTERED col-3 (3xl adjusted)
    10: '41.92%',   // (100% - 16.16%) ÷ 2 = 41.92% - CENTERED col-2 (3xl adjusted)
    11: '46.02%',   // (100% - 7.97%) ÷ 2 = 46.02% - CENTERED col-1 (3xl adjusted)
  },
  '4xl': {
    0: '0%',        // No offset
    1: '4.165%',    // Half of 1 column offset - Maintaining style for small offsets
    2: '8.335%',    // Half of 2 column offset - Maintaining style for small offsets
    3: '12.5%',     // Half of 3 column offset - Maintaining style for small offsets
    4: '16.665%',   // Half of 4 column offset - Maintaining style for small offsets
    5: '20.835%',   // Half of 5 column offset - Maintaining style for small offsets
    6: '25.49%',    // (100% - 49.03%) ÷ 2 = 25.49% - CENTERED col-6 (4xl re-adjusted)
    7: '29.59%',    // (100% - 40.83%) ÷ 2 = 29.59% - CENTERED col-5 (4xl re-adjusted)
    8: '33.69%',    // (100% - 32.63%) ÷ 2 = 33.69% - CENTERED col-4 (4xl re-adjusted)
    9: '37.79%',    // (100% - 24.43%) ÷ 2 = 37.79% - CENTERED col-3 (4xl re-adjusted)
    10: '41.89%',   // (100% - 16.23%) ÷ 2 = 41.89% - CENTERED col-2 (4xl re-adjusted)
    11: '45.99%',   // (100% - 8.03%) ÷ 2 = 45.99% - CENTERED col-1 (4xl re-adjusted)
  }
};

// =============================================================================
// VALIDATION UTILITIES
// =============================================================================

/**
 * Validates the grid configuration for consistency and correctness
 * @returns {Object} Validation result with isValid flag and any errors
 */
function validateGridConfig() {
  const errors = [];
  const warnings = [];

  // Validate breakpoint order
  const breakpointWidths = Object.values(VIEWPORTS).map(vp => vp.viewportWidth);
  const sortedWidths = [...breakpointWidths].sort((a, b) => a - b);
  if (JSON.stringify(breakpointWidths) !== JSON.stringify(sortedWidths)) {
    errors.push('Viewport breakpoints must be in ascending order');
  }

  // Validate column counts
  Object.entries(RACK_COLUMNS).forEach(([breakpoint, columns]) => {
    if (Object.keys(columns).length !== SYSTEM.MAX_COLUMNS) {
      warnings.push(`${breakpoint} has ${Object.keys(columns).length} columns, expected ${SYSTEM.MAX_COLUMNS}`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

// =============================================================================
// MODULE EXPORTS
// =============================================================================

module.exports = {
  SYSTEM,
  VIEWPORTS,
  RACK_COLUMNS,
  RAIL_COLUMNS,
  RAIL_GAPS,
  OFFSETS,
  validateGridConfig
}; 