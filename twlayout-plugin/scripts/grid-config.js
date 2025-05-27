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
 * 4. RAIL_COLUMNS col-12:
 *    - Purpose: Full-width sliding content (100% instead of fixed rem)
 *    - Use case: Slide-to-slide navigation without edge peeking
 *    - All breakpoints: Changed from 60rem/64rem to 100%
 * 
 * 5. RAIL_GAPS:
 *    - Purpose: Match container padding for seamless slide transitions
 *    - Effect: Prevents next slide from showing at viewport edge
 *    - Critical for: Multi-screen sliding content experiences
 * 
 * 6. OFFSETS - CENTERING SYSTEM:
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
  MAX_VIEWPORT_WIDTH: 2560,           // Maximum supported viewport width (px)
};

// =============================================================================
// VIEWPORT BREAKPOINTS
// =============================================================================

/**
 * Responsive breakpoint configuration
 * Each breakpoint defines screen size thresholds and available space calculations
 */
const VIEWPORTS = {
  sm: {
    viewportWidth: 375,               // Target viewport width (px)
    minWidth: '23.4375rem',           // CSS min-width (375px)
    containerPadding: 24,             // Container padding (px)
    availableSpace: 327,              // Available space for content (375px - 48px)
    description: 'Mobile devices'
  },
  md: {
    viewportWidth: 770,               // Target viewport width (px) - UPDATED for mockup  
    minWidth: '48.125rem',            // CSS min-width (770px)
    containerPadding: 32,             // Container padding (px)
    availableSpace: 706,              // Available space for content (770px - 64px)
    description: 'Tablets and small laptops'
  },
  lg: {
    viewportWidth: 1440,              // Target viewport width (px)
    minWidth: '90rem',                // CSS min-width (1440px)
    containerPadding: 32,             // Container padding (px)
    availableSpace: 1376,             // Available space for content (1440px - 64px)
    description: 'Desktop and large laptops'
  },
  xl: {
    viewportWidth: 1920,              // Target viewport width (px)
    minWidth: '120rem',               // CSS min-width (1920px)
    containerPadding: 32,             // Container padding (px)
    availableSpace: 1856,             // Available space for content (1920px - 64px)
    description: 'Large desktop screens'
  }
};

// =============================================================================
// RACK COLUMNS (Flexible Grid)
// =============================================================================

/**
 * Rack column widths as percentages of available space
 * These columns are flexible and will adapt to the container width
 * 
 * HAND-TUNED VALUES (lg/xl): Optimized for visual balance and gap accommodation
 */
const RACK_COLUMNS = {
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
    1: '7.27%',     // Hand-tuned: 100px / 1376px - optimized for visual balance
    2: '15.7%',     // Hand-tuned: 216px / 1376px
    3: '24.13%',    // Hand-tuned: 332px / 1376px
    4: '32.56%',    // Hand-tuned: 448px / 1376px
    5: '40.99%',    // Hand-tuned: 564px / 1376px
    6: '49.42%',    // Hand-tuned: 680px / 1376px
    7: '57.85%',    // Hand-tuned: 796px / 1376px
    8: '66.28%',    // Hand-tuned: 912px / 1376px
    9: '74.71%',    // Hand-tuned: 1028px / 1376px
    10: '83.14%',   // Hand-tuned: 1144px / 1376px
    11: '91.57%',   // Hand-tuned: 1260px / 1376px
    12: '100%',     // Full width regardless of gaps
  },
  xl: {
    1: '7.49%',     // 12-Grid: 130px (base) = 130/1736
    2: '15.90%',    // 12-Grid: 276px (130×2 + 16px gap) = 276/1736
    3: '24.31%',    // 12-Grid: 422px (130×3 + 32px gaps) = 422/1736
    4: '32.72%',    // 12-Grid: 568px (130×4 + 48px gaps) = 568/1736
    5: '41.13%',    // 12-Grid: 714px (130×5 + 64px gaps) = 714/1736
    6: '49.54%',    // 12-Grid: 860px (130×6 + 80px gaps) = 860/1736
    7: '57.95%',    // 12-Grid: 1006px (130×7 + 96px gaps) = 1006/1736
    8: '66.36%',    // 12-Grid: 1152px (130×8 + 112px gaps) = 1152/1736
    9: '74.77%',    // 12-Grid: 1298px (130×9 + 128px gaps) = 1298/1736
    10: '83.18%',   // 12-Grid: 1444px (130×10 + 144px gaps) = 1444/1736
    11: '91.59%',   // 12-Grid: 1590px (130×11 + 160px gaps) = 1590/1736
    12: '100%',     // 12-Grid: 1736px (full width) = 1736/1736
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
    sm: '1.5rem',     // Matches sm containerPadding (24px)
    md: '2rem',       // Matches md containerPadding (32px)  
    lg: '2rem',       // Matches lg containerPadding (32px)
    xl: '2rem',       // Matches xl containerPadding (32px)
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
 * - sm: Simplified mobile layout - only offset-11 centers col-1
 * - md: True mathematical centering for col-6 to col-1
 * - lg/xl: Half-margin technique for visual balance
 * 
 * EXAMPLE CALCULATION (md breakpoint):
 * - Available space: 706px (770px viewport - 64px padding)
 * - col-6 width: 456px (64.59% of 706px)
 * - offset-6: (706px - 456px) ÷ 2 ÷ 706px = 125px ÷ 706px = 17.70%
 * - Result: col-6 perfectly centered with 125px margin on both sides
 */
const OFFSETS = {
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
    1: '4.165%',    // Half of 1 column offset - HAND-TUNED
    2: '8.335%',    // Half of 2 column offset - HAND-TUNED
    3: '12.5%',     // Half of 3 column offset - HAND-TUNED
    4: '16.665%',   // Half of 4 column offset - HAND-TUNED
    5: '20.835%',   // Half of 5 column offset - HAND-TUNED
    6: '25%',       // Half of 6 column offset - HAND-TUNED
    7: '29.165%',   // Half of 7 column offset - HAND-TUNED
    8: '33.335%',   // Half of 8 column offset - HAND-TUNED
    9: '37.5%',     // Half of 9 column offset - HAND-TUNED
    10: '41.665%',  // Half of 10 column offset - HAND-TUNED
    11: '45.835%',  // Half of 11 column offset - HAND-TUNED
  },
  xl: {
    0: '0%',        // No offset
    1: '4.165%',    // Half of 1 column offset - LG compatibility
    2: '8.335%',    // Half of 2 column offset - LG compatibility
    3: '12.5%',     // Half of 3 column offset - LG compatibility
    4: '16.665%',   // Half of 4 column offset - LG compatibility
    5: '20.835%',   // Half of 5 column offset - LG compatibility
    6: '25.23%',    // (100% - 49.54%) ÷ 2 = 25.23% - CENTERED col-6 (12-grid)
    7: '29.43%',    // (100% - 41.13%) ÷ 2 = 29.43% - CENTERED col-5 (12-grid)
    8: '33.64%',    // (100% - 32.72%) ÷ 2 = 33.64% - CENTERED col-4 (12-grid)
    9: '37.84%',    // (100% - 24.31%) ÷ 2 = 37.84% - CENTERED col-3 (12-grid)
    10: '42.05%',   // (100% - 15.90%) ÷ 2 = 42.05% - CENTERED col-2 (12-grid)
    11: '46.26%',   // (100% - 7.49%) ÷ 2 = 46.26% - CENTERED col-1 (12-grid)
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