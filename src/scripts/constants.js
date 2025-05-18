/**
 * Rack & Rail Grid System Constants
 * This file re-exports grid system constants from the grid-config.js file
 * 
 * Note: This file is maintained for compatibility with existing code.
 * For new projects, import directly from grid-config.js.
 */

import { 
  SYSTEM,
  VIEWPORTS, 
  RACK_COLUMNS, 
  RAIL_COLUMNS, 
  OFFSETS, 
  GRID_COLORS 
} from './grid-config.js';

// Re-export everything from grid-config
export { 
  SYSTEM,
  VIEWPORTS, 
  RACK_COLUMNS, 
  RAIL_COLUMNS, 
  OFFSETS, 
  GRID_COLORS 
};

// Additional exports for backward compatibility
export const CONTAINER_PADDING = SYSTEM.CONTAINER_PADDING; 