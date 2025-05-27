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
 * 1. RACK_COLUMNS (lg/xl breakpoints):
 *    - Purpose: Account for gaps between columns in complex layouts
 *    - Method: Based on worst-case scenario (4 columns with 3 gaps)
 *    - lg values: Hand-tuned from mathematical calculation to visual optimization
 *    - xl values: Significantly reduced percentages for better visual balance
 * 
 * 2. RAIL_COLUMNS col-12:
 *    - Purpose: Full-width sliding content (100% instead of fixed rem)
 *    - Use case: Slide-to-slide navigation without edge peeking
 *    - All breakpoints: Changed from 60rem/64rem to 100%
 * 
 * 3. RAIL_GAPS:
 *    - Purpose: Match container padding for seamless slide transitions
 *    - Effect: Prevents next slide from showing at viewport edge
 *    - Critical for: Multi-screen sliding content experiences
 * 
 * 4. OFFSETS:
 *    - Purpose: Visual centering using half-margin technique
 *    - Method: Apply half of calculated margin-left for centered appearance
 *    - Effect: Column appears centered with remaining space on right
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
    viewportWidth: 768,               // Target viewport width (px)  
    minWidth: '48rem',                // CSS min-width (768px)
    containerPadding: 32,             // Container padding (px)
    availableSpace: 704,              // Available space for content (768px - 64px)
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
    1: '100%',      // Full width on mobile for better readability
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
    1: '8.33%',     // 1/12th of available space
    2: '16.67%',    // 2/12th of available space
    3: '25%',       // 3/12th of available space
    4: '33.33%',    // 4/12th of available space
    5: '41.67%',    // 5/12th of available space
    6: '50%',       // 6/12th of available space
    7: '58.33%',    // 7/12th of available space
    8: '66.67%',    // 8/12th of available space
    9: '75%',       // 9/12th of available space
    10: '83.33%',   // 10/12th of available space
    11: '91.67%',   // 11/12th of available space
    12: '100%',     // 12/12th of available space
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
    1: '5.76%',     // Hand-tuned: 100px / 1736px - optimized for visual balance
    2: '12.44%',    // Hand-tuned: 216px / 1736px
    3: '19.12%',    // Hand-tuned: 332px / 1736px
    4: '25.81%',    // Hand-tuned: 448px / 1736px
    5: '32.49%',    // Hand-tuned: 564px / 1736px
    6: '39.17%',    // Hand-tuned: 680px / 1736px
    7: '45.85%',    // Hand-tuned: 796px / 1736px
    8: '52.53%',    // Hand-tuned: 912px / 1736px
    9: '59.22%',    // Hand-tuned: 1028px / 1736px
    10: '65.9%',    // Hand-tuned: 1144px / 1736px
    11: '72.58%',   // Hand-tuned: 1260px / 1736px
    12: '100%',     // Full width regardless of gaps
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
 * These create left margins to position content precisely within the grid
 * 
 * HAND-TUNED BEHAVIOR: Values are halved for visual centering effect
 * - Method: Apply half of calculated margin-left
 * - Effect: Column appears centered with remaining space on right
 * - Purpose: Better visual balance than traditional full-margin offsets
 */
const OFFSETS = {
  sm: {
    0: '0%',        // No offset
    1: '4.165%',    // Half of 1 column offset (8.33% / 2) - HAND-TUNED
    2: '8.335%',    // Half of 2 column offset (16.67% / 2) - HAND-TUNED
    3: '12.5%',     // Half of 3 column offset (25% / 2) - HAND-TUNED
    4: '16.665%',   // Half of 4 column offset (33.33% / 2) - HAND-TUNED
    5: '20.835%',   // Half of 5 column offset (41.67% / 2) - HAND-TUNED
    6: '25%',       // Half of 6 column offset (50% / 2) - HAND-TUNED
    7: '29.165%',   // Half of 7 column offset (58.33% / 2) - HAND-TUNED
    8: '33.335%',   // Half of 8 column offset (66.67% / 2) - HAND-TUNED
    9: '37.5%',     // Half of 9 column offset (75% / 2) - HAND-TUNED
    10: '41.665%',  // Half of 10 column offset (83.33% / 2) - HAND-TUNED
    11: '45.835%',  // Half of 11 column offset (91.67% / 2) - HAND-TUNED
  },
  md: {
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