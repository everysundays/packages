import plugin from 'tailwindcss/plugin';
import { SYSTEM, VIEWPORTS, RACK_COLUMNS, RAIL_COLUMNS, OFFSETS } from './grid-config';

export default plugin(function({ addComponents, theme }) {
  // Base container styles
  const baseComponents = {
    '.rack, .rail': {
      padding: SYSTEM.CONTAINER_PADDING,
      display: 'flex',
      gap: SYSTEM.GAP,
    },
    '.rack': {
      flexWrap: 'wrap',
    },
    '.rail': {
      flexWrap: 'nowrap',
      overflowX: 'auto',
      scrollbarWidth: 'none', // Firefox
      '-ms-overflow-style': 'none', // IE and Edge
      '&::-webkit-scrollbar': {
        display: 'none', // Chrome, Safari, and Opera
      },
    },
    '.page-wrapper': {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '0 1.5rem',
    },
  };

  // Create responsive styles for each breakpoint
  const responsiveComponents = Object.entries(VIEWPORTS).reduce((acc, [breakpoint, config]) => {
    // Create media query
    const mediaQuery = `@media (min-width: ${config.minWidth})`;
    
    // Create column selectors for this breakpoint
    const columns = Object.entries(RACK_COLUMNS[breakpoint]).reduce((colAcc, [col, width]) => {
      return {
        ...colAcc,
        [`.rack .col-${col}`]: {
          width: width,
        },
        [`.rail .col-${col}`]: {
          minWidth: RAIL_COLUMNS[breakpoint][col],
          width: RAIL_COLUMNS[breakpoint][col],
        },
      };
    }, {});
    
    // Create offset selectors for this breakpoint
    const offsets = Object.entries(OFFSETS[breakpoint]).reduce((offsetAcc, [offset, marginLeft]) => {
      return {
        ...offsetAcc,
        [`.offset-${offset}`]: {
          marginLeft: marginLeft,
        },
      };
    }, {});
    
    // Add page-wrapper styles for this breakpoint
    const pageWrapper = {
      '.page-wrapper': {
        maxWidth: `${config.availableSpace}px`,
      },
    };
    
    // Combine all styles for this breakpoint
    return {
      ...acc,
      [mediaQuery]: {
        ...columns,
        ...offsets,
        ...pageWrapper,
      },
    };
  }, {});

  // Add all components
  addComponents(baseComponents);
  addComponents(responsiveComponents);
}); 