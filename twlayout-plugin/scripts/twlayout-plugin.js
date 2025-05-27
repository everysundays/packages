/**
 * TWLayout Plugin v1.2.0
 * =======================
 * 
 * A Tailwind CSS plugin that provides a responsive grid system with:
 * - Flexible rack containers (percentage-based columns)
 * - Fixed rail containers (fixed-width columns for horizontal scrolling)
 * - Responsive breakpoints with consistent spacing
 * - Column offsets for precise positioning
 * 
 * Compatible with Tailwind CSS v4.x
 */

const plugin = require('tailwindcss/plugin');
const { SYSTEM, VIEWPORTS, RACK_COLUMNS, RAIL_COLUMNS, RAIL_GAPS, OFFSETS, validateGridConfig } = require('./grid-config');

/**
 * CSS Variable Generator
 * Creates CSS custom properties for the grid system
 */
function generateCSSVariables(breakpoint, config) {
  const vars = {
    // Base system variables
    '--tw-layout-padding': SYSTEM.CONTAINER_PADDING,
    '--tw-layout-gap': SYSTEM.GAP,
    '--tw-layout-max-width': `${config.availableSpace}px`,
    '--tw-layout-breakpoint': breakpoint,
    
    // Rail gap variables
    '--tw-rail-gap-standard': RAIL_GAPS.STANDARD,
    '--tw-rail-gap-slide': RAIL_GAPS.SLIDE_MODE[breakpoint],
  };

  // Column width variables
  Object.entries(RACK_COLUMNS[breakpoint]).forEach(([col, width]) => {
    vars[`--tw-rack-col-${col}`] = width;
  });

  Object.entries(RAIL_COLUMNS[breakpoint]).forEach(([col, width]) => {
    vars[`--tw-rail-col-${col}`] = width;
  });

  // Offset variables
  Object.entries(OFFSETS[breakpoint]).forEach(([offset, marginLeft]) => {
    vars[`--tw-offset-${offset}`] = marginLeft;
  });

  return vars;
}

/**
 * Base Component Generator
 * Creates the fundamental rack and rail container styles
 */
function generateBaseComponents() {
  return {
    // Base container styles
    '.rack, .rail': {
      display: 'flex',
      paddingLeft: 'var(--tw-layout-padding)',
      paddingRight: 'var(--tw-layout-padding)',
      width: '100%',
      boxSizing: 'border-box',
    },
    
    // Rack-specific styles (flexible grid)
    '.rack': {
      gap: 'var(--tw-layout-gap)',
      flexWrap: 'wrap',
      alignItems: 'stretch',
    },
    
    // Fix for rack + fixed positioning conflict
    '.rack.fixed': {
      position: 'fixed !important',
    },
    
    // Rail-specific styles (horizontal scrolling)
    '.rail': {
      gap: 'var(--tw-rail-gap-standard)', // Default gap for rail
      flexWrap: 'nowrap',
      overflowX: 'auto',
      scrollbarWidth: 'none', // Firefox
      '-ms-overflow-style': 'none', // IE/Edge
      
      // Hide scrollbar in WebKit browsers
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    
    // Rail slide mode (gap matches container padding for seamless slides)
    '.rail.slide-mode': {
      gap: 'var(--tw-rail-gap-slide)',
    },
    
    // Alternative: Rail with col-12 children automatically gets slide gap
    '.rail:has(.col-12)': {
      gap: 'var(--tw-rail-gap-slide)',
    },
    
    // Page wrapper for max-width constraint
    '.page-wrapper': {
      width: '100%',
      margin: '0 auto',
      paddingLeft: 'var(--tw-layout-padding)',
      paddingRight: 'var(--tw-layout-padding)',
    },
  };
}

/**
 * Column Class Generator
 * Creates responsive column and offset classes
 */
function generateColumnClasses(breakpoint) {
  const classes = {};
  
  // Rack column classes (.rack .col-{n})
  Object.entries(RACK_COLUMNS[breakpoint]).forEach(([col, width]) => {
    classes[`.rack .col-${col}`] = {
      width: `var(--tw-rack-col-${col})`,
      flexShrink: 0,
    };
  });
  
  // Rail column classes (.rail .col-{n})
  Object.entries(RAIL_COLUMNS[breakpoint]).forEach(([col, width]) => {
    classes[`.rail .col-${col}`] = {
      width: `var(--tw-rail-col-${col})`,
      minWidth: `var(--tw-rail-col-${col})`,
      flexShrink: 0,
    };
  });
  
  // Offset classes (.offset-{n})
  Object.entries(OFFSETS[breakpoint]).forEach(([offset, marginLeft]) => {
    if (offset !== '0') { // Skip offset-0 as it's redundant
      classes[`.rack .offset-${offset}`] = {
        marginLeft: `var(--tw-offset-${offset})`,
      };
    }
  });
  
  // Page wrapper max-width
  classes['.page-wrapper'] = {
    maxWidth: 'var(--tw-layout-max-width)',
  };
  
  return classes;
}

/**
 * Error Handler
 * Logs plugin errors and warnings
 */
function handleErrors(validation) {
  if (!validation.isValid) {
    console.error('TWLayout Plugin: Configuration errors detected:');
    validation.errors.forEach(error => console.error(`  - ${error}`));
  }
  
  if (validation.warnings.length > 0) {
    console.warn('TWLayout Plugin: Configuration warnings:');
    validation.warnings.forEach(warning => console.warn(`  - ${warning}`));
  }
}

/**
 * Main Plugin Export
 */
module.exports = plugin(function({ addBase, addComponents, addUtilities, theme }) {
  try {
    // Validate configuration
    const validation = validateGridConfig();
    handleErrors(validation);
    
    if (!validation.isValid) {
      console.error('TWLayout Plugin: Skipping initialization due to configuration errors');
      return;
    }
    
    // Add base components
    const baseComponents = generateBaseComponents();
    addComponents(baseComponents);
    
    // Generate responsive styles for each breakpoint
    Object.entries(VIEWPORTS).forEach(([breakpoint, config]) => {
      const mediaQuery = `@media (min-width: ${config.minWidth})`;
      
      // Generate CSS variables
      const cssVars = generateCSSVariables(breakpoint, config);
      
      // Generate column classes
      const columnClasses = generateColumnClasses(breakpoint);
      
      // Combine variables and classes
      const responsiveStyles = {
        ':root': cssVars,
        ...columnClasses,
      };
      
      // Add styles within media query
      addBase({
        [mediaQuery]: responsiveStyles,
      });
    });
    
    // Add utility classes for common layout patterns
    addUtilities({
      '.flex-center': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      '.flex-between': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      '.flex-around': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      '.flex-evenly': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      },
      
      // Rail gap mode utilities
      '.rail-standard': {
        gap: 'var(--tw-rail-gap-standard) !important',
      },
      '.rail-slide': {
        gap: 'var(--tw-rail-gap-slide) !important',
      },
    });
    
    console.log('TWLayout Plugin v1.2.0: Successfully initialized');
    
  } catch (error) {
    console.error('TWLayout Plugin: Initialization failed:', error);
  }
}); 
