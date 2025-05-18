import plugin from 'tailwindcss/plugin';
import type { CSSRuleObject } from 'tailwindcss/types/config';
import {
  SYSTEM, 
  VIEWPORTS, 
  RACK_COLUMNS, 
  RAIL_COLUMNS, 
  OFFSETS, 
  GridViewports, 
  GridColumnsByBreakpoint, 
  GridOffsetsByBreakpoint
} from './grid-config';

// Generate CSS variables for a specific breakpoint
function generateCSSVars(breakpoint: 'sm' | 'md' | 'lg' | 'xl', viewports: GridViewports): Record<string, string> {
  const bp = viewports[breakpoint];
  return {
    [`--container-padding`]: `${bp.containerPadding / 16}rem`,
    [`--container-padding-total`]: `${(bp.containerPadding * 2) / 16}rem`,
    [`--available-space-${breakpoint}`]: `${bp.availableSpace}px`
  };
}

// Generate column CSS variables for a specific breakpoint
function generateColumnVars(
  breakpoint: 'sm' | 'md' | 'lg' | 'xl', 
  rackColumns: GridColumnsByBreakpoint, 
  railColumns: GridColumnsByBreakpoint
): Record<string, string> {
  const vars: Record<string, string> = {};
  
  // Add rack column variables
  for (let i = 1; i <= 12; i++) {
    if (rackColumns[breakpoint] && rackColumns[breakpoint][i]) {
      vars[`--rack-col-${i}-percent`] = rackColumns[breakpoint][i];
    }
  }
  
  // Add rail column variables
  for (let i = 1; i <= 12; i++) {
    if (railColumns[breakpoint] && railColumns[breakpoint][i]) {
      vars[`--rail-col-${i}-width`] = railColumns[breakpoint][i];
    }
  }
  
  return vars;
}

// Generate offset CSS variables for a specific breakpoint
function generateOffsetVars(
  breakpoint: 'sm' | 'md' | 'lg' | 'xl', 
  offsets: GridOffsetsByBreakpoint
): Record<string, string> {
  const vars: Record<string, string> = {};
  
  for (let i = 0; i <= 11; i++) {
    if (offsets[breakpoint] && offsets[breakpoint][i] !== undefined) {
      vars[`--offset-${i}-percent`] = offsets[breakpoint][i];
    }
  }
  
  return vars;
}

// Rack-Rail plugin
export const rackRailPlugin = plugin(function ({ addComponents, addBase }) {
  // Add base styles
  addBase({
    '.container': {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: '0',
      paddingRight: '0',
    },
    '.rack, .rail': {
      padding: SYSTEM.CONTAINER_PADDING,
      display: 'flex',
      gap: SYSTEM.GAP
    },
    '.rack': {
      flexWrap: 'wrap',
    },
    '.rail': {
      flexWrap: 'nowrap',
      overflowX: 'auto',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    },
    '.rail::-webkit-scrollbar': {
        display: 'none',
    }
  });
  
  // Add column width classes
  const containerComponents: Record<string, CSSRuleObject> = {};
  
  // Small screens (375px)
  containerComponents[`@media (min-width: ${VIEWPORTS.sm.minWidth})`] = {
    ':root': {
      ...generateCSSVars('sm', VIEWPORTS),
      ...generateColumnVars('sm', RACK_COLUMNS, RAIL_COLUMNS),
      ...generateOffsetVars('sm', OFFSETS),
    },
    '.rack .col-1': { width: 'var(--rack-col-1-percent)' },
    '.rack .col-2': { width: 'var(--rack-col-2-percent)' },
    '.rack .col-3': { width: 'var(--rack-col-3-percent)' },
    '.rack .col-4': { width: 'var(--rack-col-4-percent)' },
    '.rack .col-5': { width: 'var(--rack-col-5-percent)' },
    '.rack .col-6': { width: 'var(--rack-col-6-percent)' },
    '.rack .col-7': { width: 'var(--rack-col-7-percent)' },
    '.rack .col-8': { width: 'var(--rack-col-8-percent)' },
    '.rack .col-9': { width: 'var(--rack-col-9-percent)' },
    '.rack .col-10': { width: 'var(--rack-col-10-percent)' },
    '.rack .col-11': { width: 'var(--rack-col-11-percent)' },
    '.rack .col-12': { width: 'var(--rack-col-12-percent)' },
    '.rail .col-1': { width: 'var(--rail-col-1-width)', minWidth: 'var(--rail-col-1-width)' },
    '.rail .col-2': { width: 'var(--rail-col-2-width)', minWidth: 'var(--rail-col-2-width)' },
    '.rail .col-3': { width: 'var(--rail-col-3-width)', minWidth: 'var(--rail-col-3-width)' },
    '.rail .col-4': { width: 'var(--rail-col-4-width)', minWidth: 'var(--rail-col-4-width)' },
    '.rail .col-5': { width: 'var(--rail-col-5-width)', minWidth: 'var(--rail-col-5-width)' },
    '.rail .col-6': { width: 'var(--rail-col-6-width)', minWidth: 'var(--rail-col-6-width)' },
    '.rail .col-7': { width: 'var(--rail-col-7-width)', minWidth: 'var(--rail-col-7-width)' },
    '.rail .col-8': { width: 'var(--rail-col-8-width)', minWidth: 'var(--rail-col-8-width)' },
    '.rail .col-9': { width: 'var(--rail-col-9-width)', minWidth: 'var(--rail-col-9-width)' },
    '.rail .col-10': { width: 'var(--rail-col-10-width)', minWidth: 'var(--rail-col-10-width)' },
    '.rail .col-11': { width: 'var(--rail-col-11-width)', minWidth: 'var(--rail-col-11-width)' },
    '.rail .col-12': { width: 'var(--rail-col-12-width)', minWidth: 'var(--rail-col-12-width)' },
    '.offset-0': { marginLeft: 'var(--offset-0-percent)' },
    '.offset-1': { marginLeft: 'var(--offset-1-percent)' },
    '.offset-2': { marginLeft: 'var(--offset-2-percent)' },
    '.offset-3': { marginLeft: 'var(--offset-3-percent)' },
    '.offset-4': { marginLeft: 'var(--offset-4-percent)' },
    '.offset-5': { marginLeft: 'var(--offset-5-percent)' },
    '.offset-6': { marginLeft: 'var(--offset-6-percent)' },
    '.offset-7': { marginLeft: 'var(--offset-7-percent)' },
    '.offset-8': { marginLeft: 'var(--offset-8-percent)' },
    '.offset-9': { marginLeft: 'var(--offset-9-percent)' },
    '.offset-10': { marginLeft: 'var(--offset-10-percent)' },
    '.offset-11': { marginLeft: 'var(--offset-11-percent)' },
  };
  
  // Medium screens (770px)
  containerComponents[`@media (min-width: ${VIEWPORTS.md.minWidth})`] = {
    ':root': {
      ...generateCSSVars('md', VIEWPORTS),
      ...generateColumnVars('md', RACK_COLUMNS, RAIL_COLUMNS),
      ...generateOffsetVars('md', OFFSETS),
    },
  };
  
  // Large screens (1450px)
  containerComponents[`@media (min-width: ${VIEWPORTS.lg.minWidth})`] = {
    ':root': {
      ...generateCSSVars('lg', VIEWPORTS),
      ...generateColumnVars('lg', RACK_COLUMNS, RAIL_COLUMNS),
      ...generateOffsetVars('lg', OFFSETS),
    },
  };
  
  // XL screens (1800px)
  containerComponents[`@media (min-width: ${VIEWPORTS.xl.minWidth})`] = {
    ':root': {
      ...generateCSSVars('xl', VIEWPORTS),
      ...generateColumnVars('xl', RACK_COLUMNS, RAIL_COLUMNS),
      ...generateOffsetVars('xl', OFFSETS),
    },
  };
  
  addComponents(containerComponents);
}); 