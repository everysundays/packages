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
 * - OFFSETS: Left margin offsets for precise positioning
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
  xl: {
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
  }
};

// =============================================================================
// RAIL COLUMNS (Fixed Width)
// =============================================================================

/**
 * Rail column widths as fixed rem values
 * These columns maintain consistent width regardless of container size
 * Ideal for horizontal scrolling layouts and card-based designs
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
    12: '60rem',    // 960px - Standard content width
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
    12: '60rem',    // 960px
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
    12: '64rem',    // 1024px - Larger on desktop
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
    12: '64rem',    // 1024px
  }
};

// =============================================================================
// COLUMN OFFSETS
// =============================================================================

/**
 * Column offset values as percentages
 * These create left margins to position content precisely within the grid
 */
const OFFSETS = {
  sm: {
    0: '0%',        // No offset
    1: '8.33%',     // 1 column offset
    2: '16.67%',    // 2 column offset
    3: '25%',       // 3 column offset
    4: '33.33%',    // 4 column offset
    5: '41.67%',    // 5 column offset
    6: '50%',       // 6 column offset
    7: '58.33%',    // 7 column offset
    8: '66.67%',    // 8 column offset
    9: '75%',       // 9 column offset
    10: '83.33%',   // 10 column offset
    11: '91.67%',   // 11 column offset
  },
  md: {
    0: '0%',        // No offset
    1: '8.33%',     // 1 column offset
    2: '16.67%',    // 2 column offset
    3: '25%',       // 3 column offset
    4: '33.33%',    // 4 column offset
    5: '41.67%',    // 5 column offset
    6: '50%',       // 6 column offset
    7: '58.33%',    // 7 column offset
    8: '66.67%',    // 8 column offset
    9: '75%',       // 9 column offset
    10: '83.33%',   // 10 column offset
    11: '91.67%',   // 11 column offset
  },
  lg: {
    0: '0%',        // No offset
    1: '8.33%',     // 1 column offset
    2: '16.67%',    // 2 column offset
    3: '25%',       // 3 column offset
    4: '33.33%',    // 4 column offset
    5: '41.67%',    // 5 column offset
    6: '50%',       // 6 column offset
    7: '58.33%',    // 7 column offset
    8: '66.67%',    // 8 column offset
    9: '75%',       // 9 column offset
    10: '83.33%',   // 10 column offset
    11: '91.67%',   // 11 column offset
  },
  xl: {
    0: '0%',        // No offset
    1: '8.33%',     // 1 column offset
    2: '16.67%',    // 2 column offset
    3: '25%',       // 3 column offset
    4: '33.33%',    // 4 column offset
    5: '41.67%',    // 5 column offset
    6: '50%',       // 6 column offset
    7: '58.33%',    // 7 column offset
    8: '66.67%',    // 8 column offset
    9: '75%',       // 9 column offset
    10: '83.33%',   // 10 column offset
    11: '91.67%',   // 11 column offset
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
  OFFSETS,
  validateGridConfig
}; 