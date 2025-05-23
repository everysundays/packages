/**
 * Rack & Rail Grid System Configuration
 * This file contains the core configuration for the grid system.
 * Edit these values to customize the grid system's behavior.
 */

// System-wide constants
export const SYSTEM = {
  CONTAINER_PADDING: '1.5rem',  // 24px - Standard padding for all containers
  GAP: '1rem',                  // 16px - Standard gap between columns
  DEBUG_MODE_KEY: 'rack-rail-debug-mode'  // localStorage key for debug mode
};

// Viewport breakpoints configuration
export const VIEWPORTS = {
  sm: {
    viewportWidth: 375,
    minWidth: '20rem',       // 375px in rem
    containerPadding: 20,    // in pixels
    availableSpace: 335      // 375px - (20px * 2)
  },
  md: {
    viewportWidth: 770,
    minWidth: '43.125rem',   // 770px in rem
    containerPadding: 40,    // in pixels
    availableSpace: 690      // 770px - (40px * 2)
  },
  lg: {
    viewportWidth: 1450,
    minWidth: '86rem',       // 1450px in rem
    containerPadding: 32,    // in pixels
    availableSpace: 1386     // 1450px - (32px * 2)
  },
  xl: {
    viewportWidth: 1800,
    minWidth: '108.5rem',    // 1800px in rem
    containerPadding: 32,    // in pixels
    availableSpace: 1736     // 1800px - (32px * 2)
  }
};

// Rack column width percentages based on available space
export const RACK_COLUMNS = {
  sm: {
    1: '48.06%',   // 161px / 335px
    2: '100%',     // 335px / 335px
    3: '100%',     // 335px / 335px
    4: '100%',     // 335px / 335px
    5: '100%',     // 335px / 335px
    6: '100%',     // 335px / 335px
    7: '100%',     // 335px / 335px
    8: '100%',     // 335px / 335px
    9: '100%',     // 335px / 335px
    10: '100%',    // 335px / 335px
    11: '100%',    // 335px / 335px
    12: '100%',    // 335px / 335px
  },
  md: {
    1: '32.17%',   // 222px / 690px
    2: '40.14%',   // 277px / 690px
    3: '49.13%',   // 339px / 690px
    4: '49.13%',   // 339px / 690px
    5: '58.12%',   // 401px / 690px
    6: '66.09%',   // 456px / 690px
    7: '100%',     // 690px / 690px
    8: '100%',     // 690px / 690px
    9: '100%',     // 690px / 690px
    10: '100%',    // 690px / 690px
    11: '100%',    // 690px / 690px
    12: '100%',    // 690px / 690px
  },
  lg: {
    1: '7.27%',    // 100px / 1376px
    2: '15.7%',    // 216px / 1376px
    3: '24.13%',   // 332px / 1376px
    4: '32.56%',   // 448px / 1376px
    5: '40.99%',   // 564px / 1376px
    6: '49.42%',   // 680px / 1376px
    7: '57.85%',   // 796px / 1376px
    8: '66.28%',   // 912px / 1376px
    9: '74.71%',   // 1028px / 1376px
    10: '83.14%',  // 1144px / 1376px
    11: '91.57%',  // 1260px / 1376px
    12: '100%',    // 1376px / 1376px
  },
  xl: {
    1: '5.76%',    // 100px / 1736px
    2: '12.44%',   // 216px / 1736px
    3: '19.12%',   // 332px / 1736px
    4: '25.81%',   // 448px / 1736px
    5: '32.49%',   // 564px / 1736px
    6: '39.17%',   // 680px / 1736px
    7: '45.85%',   // 796px / 1736px
    8: '52.53%',   // 912px / 1736px
    9: '59.22%',   // 1028px / 1736px
    10: '65.9%',   // 1144px / 1736px
    11: '72.58%',  // 1260px / 1736px
    12: '100%',    // 1736px / 1736px
  }
};

// Rail column widths (fixed widths that don't stretch)
export const RAIL_COLUMNS = {
  sm: {
    1: '16.25rem',   // 260px
    2: '20rem',      // 320px
    3: '20rem',      // 320px
    4: '20rem',      // 320px
    5: '20rem',      // 320px
    6: '20rem',      // 320px
    7: '20rem',      // 320px
    8: '20rem',      // 320px
    9: '20rem',      // 320px
    10: '20rem',     // 320px
    11: '20rem',     // 320px
    12: '20rem',     // 320px
  },
  md: {
    1: '16.25rem',    // 260px
    2: '20rem',       // 320px
    3: '20rem',       // 320px
    4: '25rem',       // 400px
    5: '28.125rem',   // 450px
    6: '30.75rem',    // 492px
    7: '33.375rem',   // 534px
    8: '36.0625rem',  // 577px
    9: '38.75rem',    // 620px
    10: '41.4375rem', // 663px
    11: '44.125rem',  // 706px
    12: '46.125rem',  // 738px
  },
  lg: {
    1: '16.25rem',    // 260px
    2: '20rem',       // 320px
    3: '23.75rem',    // 380px
    4: '28.75rem',    // 460px
    5: '33.75rem',    // 540px
    6: '40rem',       // 640px
    7: '46.25rem',    // 740px
    8: '52.5rem',     // 840px
    9: '58.75rem',    // 940px
    10: '65rem',      // 1040px
    11: '71.25rem',   // 1140px
    12: '77.5rem',    // 1240px
  },
  xl: {
    1: '16.25rem',    // 260px
    2: '20rem',       // 320px
    3: '23.75rem',    // 380px
    4: '28.75rem',    // 460px
    5: '33.75rem',    // 540px
    6: '40rem',       // 640px
    7: '46.25rem',    // 740px
    8: '52.5rem',     // 840px
    9: '58.75rem',    // 940px
    10: '65rem',      // 1040px
    11: '71.25rem',   // 1140px
    12: '77.5rem',    // 1240px
  }
};

// Column offsets (percentage-based)
export const OFFSETS = {
  sm: {
    0: '0%',         // 0px additional offset (container already has padding)
    1: '0%',         // 0px additional offset (20px already in container)
    2: '0%',         // 0px additional offset (20px already in container)
    3: '0%',         // 0px additional offset (20px already in container)
    4: '0%',         // 0px additional offset (20px already in container)
    5: '0%',         // 0px additional offset (20px already in container)
    6: '0%',         // 0px additional offset (20px already in container)
    7: '0%',         // 0px additional offset (20px already in container)
    8: '0%',         // 0px additional offset (20px already in container)
    9: '0%',         // 0px additional offset (20px already in container)
    10: '0%',        // 0px additional offset (20px already in container)
    11: '25.97%',    // 87px additional (107px - 20px container padding) / 335px
  },
  md: {
    0: '0%',          // 0px additional offset (container already has padding)
    1: '0%',          // 0px additional offset (40px already in container)
    2: '0%',          // 0px additional offset (40px already in container)
    3: '0%',          // 0px additional offset (40px already in container)
    4: '0%',          // 0px additional offset (40px already in container)
    5: '0%',          // 0px additional offset (40px already in container)
    6: '16.96%',      // 117px additional (157px - 40px container padding) / 690px
    7: '19.20%',      // 132.5px additional (172.5px - 40px container padding) / 690px
    8: '23.70%',      // 163.5px additional (203.5px - 40px container padding) / 690px
    9: '23.70%',      // 163.5px additional (203.5px - 40px container padding) / 690px
    10: '28.19%',     // 194.5px additional (234.5px - 40px container padding) / 690px
    11: '32.75%',     // 226px additional (266px - 40px container padding) / 690px
  },
  lg: {
    0: '0%',           // 0px additional offset (container already has padding)
    1: '0%',           // 0px additional offset (32px already in container)
    2: '0%',           // 0px additional offset (32px already in container)
    3: '0%',           // 0px additional offset (32px already in container)
    4: '0%',           // 0px additional offset (32px already in container)
    5: '0%',           // 0px additional offset (32px already in container)
    6: '8.43%',        // 116px additional (148px - 32px container padding) / 1376px
    7: '8.43%',        // 116px additional (148px - 32px container padding) / 1376px
    8: '16.79%',       // 231px additional (263px - 32px container padding) / 1376px
    9: '16.79%',       // 231px additional (263px - 32px container padding) / 1376px
    10: '25.15%',      // 346px additional (378px - 32px container padding) / 1376px
    11: '25.15%',      // 346px additional (378px - 32px container padding) / 1376px
  },
  xl: {
    0: '0%',           // 0px additional offset (container already has padding)
    1: '0%',           // 0px additional offset (32px already in container)
    2: '0%',           // 0px additional offset (32px already in container)
    3: '0%',           // 0px additional offset (32px already in container)
    4: '0%',           // 0px additional offset (32px already in container)
    5: '0%',           // 0px additional offset (32px already in container)
    6: '6.68%',        // 116px additional (148px - 32px container padding) / 1736px
    7: '6.68%',        // 116px additional (148px - 32px container padding) / 1736px
    8: '13.31%',       // 231px additional (263px - 32px container padding) / 1736px
    9: '13.31%',       // 231px additional (263px - 32px container padding) / 1736px
    10: '19.93%',      // 346px additional (378px - 32px container padding) / 1736px
    11: '19.93%',      // 346px additional (378px - 32px container padding) / 1736px
  }
};

// Appearance/Debug styling options
export const GRID_COLORS = {
  rack: {
    background: '#f3f4f6',
    border: '#e5e7eb',
    highlight: '#3b82f6',
    text: '#6b7280'
  },
  rail: {
    background: '#ede9fe',
    border: '#c4b5fd',
    highlight: '#8b5cf6',
    text: '#5b21b6'
  },
  debug: {
    gridLines: 'rgba(219, 234, 254, 0.25)',
    rackColumnBg: 'rgba(59, 130, 246, 0.1)',
    railColumnBg: 'rgba(139, 92, 246, 0.1)',
    offsetHighlight: '#ec4899'
  }
}; 