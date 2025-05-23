/**
 * Rack & Rail Grid System Demo Script. Handles the interactive elements of the demo page
 * These scripts are specific to the demo page and not part of the core grid system
 */

import { VIEWPORTS, RACK_COLUMNS, RAIL_COLUMNS, GRID_COLORS } from '../scripts/grid-config.js';

// Toggle between rack and rail containers
document.getElementById('rack-toggle').addEventListener('change', function() {
  const container = document.querySelector('.rack, .rail');
  if (container) {
    container.className = 'rack';
    updateColumnInfo();
  }
});

document.getElementById('rail-toggle').addEventListener('change', function() {
  const container = document.querySelector('.rack, .rail');
  if (container) {
    container.className = 'rail';
    updateColumnInfo();
  }
});

// Function to get current breakpoint
function getCurrentBreakpoint() {
  const width = window.innerWidth;
  if (width >= VIEWPORTS.xl.viewportWidth) return 'xl';
  if (width >= VIEWPORTS.lg.viewportWidth) return 'lg';
  if (width >= VIEWPORTS.md.viewportWidth) return 'md';
  return 'sm';
}

// Function to convert rem to pixels
function remToPx(rem) {
  return parseFloat(rem) * 16;
}

// Function to format pixel values 
function formatPx(px) {
  return Math.round(px) + 'px';
}

// Function to update column information
function updateColumnInfo() {
  const breakpoint = getCurrentBreakpoint();
  const firstContainer = document.querySelector('.rack, .rail');
  if (!firstContainer) return;
  
  const containerType = firstContainer.classList.contains('rack') ? 'rack' : 'rail';
  const viewportWidth = window.innerWidth;
  
  // Update viewport display
  document.getElementById('viewport-size').textContent = `${viewportWidth}px (${breakpoint})`;

  // Update all col-* elements with info containers
  const allColumns = document.querySelectorAll('[class*="col-"]');
  
  allColumns.forEach(column => {
    // Get the column size from class (e.g., col-4 -> 4)
    const columnClass = Array.from(column.classList).find(c => c.startsWith('col-'));
    if (!columnClass) return;
    
    const columnSize = columnClass.split('-')[1];
    if (!columnSize) return;
    
    // Find info element - simplified to just look for the standardized ID format
    const infoElement = column.querySelector(`[id$="col-${columnSize}-info"]`) || 
                         column.querySelector(`.column-info`);
                         
    if (!infoElement) return;
    
    const computedWidth = window.getComputedStyle(column).width;
    const widthInPx = parseInt(computedWidth);
    
    if (containerType === 'rack') {
      // For rack columns, show percentage
      const percentageValue = RACK_COLUMNS[breakpoint][columnSize];
      
      // Calculate rem value from pixels
      const remValue = (widthInPx / 16).toFixed(2) + 'rem';
      
      // Update info display with all sizing values
      infoElement.innerHTML = `
        <span class="breakpoint breakpoint-${breakpoint}">${breakpoint}</span> (${percentageValue} / ${formatPx(widthInPx)} / ${remValue})
      `;
    } else {
      // For rail columns, show fixed width
      const fixedWidth = RAIL_COLUMNS[breakpoint][columnSize];
      const fixedPxWidth = remToPx(fixedWidth);
      
      // Update info display with simplified format
      infoElement.innerHTML = `
        <span class="breakpoint breakpoint-${breakpoint}">${breakpoint}> (${fixedWidth}</span> (${formatPx(fixedPxWidth)})
      `;
    }
  });
}

// Function to get available space for a breakpoint
function getAvailableSpace(breakpoint) {
  return VIEWPORTS[breakpoint].availableSpace + 'px';
}

// Function to update offset information
function updateOffsetInfo() {
  const breakpoint = getCurrentBreakpoint();
  
  // Update all offset info elements using the simplified structure
  for (let offsetNum = 1; offsetNum <= 11; offsetNum++) {
    const infoElement = document.getElementById(`offset-${offsetNum}-info`);
    if (!infoElement) continue;
    
    // Get offset and complementary column percentage from our constants
    const offsetValue = getComputedStyle(document.documentElement)
      .getPropertyValue('--offset-' + offsetNum + '-percent').trim();
    
    // Get complementary column percentage
    const colNumber = 12 - parseInt(offsetNum);
    const colValue = RACK_COLUMNS[breakpoint][colNumber];
    
    // Update the element with formatted info using the same style as column info
    infoElement.innerHTML = `
      <span class="breakpoint-${breakpoint}">${breakpoint}</span> 
      Offset: ${offsetValue}, Column: ${colValue}
    `;
  }
}

// Toggle between rack and rail code blocks
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('rack-toggle').addEventListener('change', function() {
    document.getElementById('rack-code-block').style.display = 'block';
    document.getElementById('rail-code-block').style.display = 'none';
  });
  
  document.getElementById('rail-toggle').addEventListener('change', function() {
    document.getElementById('rack-code-block').style.display = 'none';
    document.getElementById('rail-code-block').style.display = 'block';
  });
});

// Call both update functions on load and resize
window.addEventListener('load', function() {
  updateColumnInfo();
  updateOffsetInfo();
});

window.addEventListener('resize', function() {
  updateColumnInfo();
  updateOffsetInfo();
}); 