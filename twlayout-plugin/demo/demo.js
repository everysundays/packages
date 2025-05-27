/**
 * Rack & Rail Grid System Demo Script
 * Handles interactive elements for the demo page (column info updates and container toggles)
 * Viewport controls are now handled by debug-mode.js
 */

// Define constants locally since we can't import in browser
const VIEWPORTS = {
  sm: {
    viewportWidth: 375,
    minWidth: '23.4375rem',
    containerPadding: 24,
    availableSpace: 327,
    description: 'Mobile devices'
  },
  md: {
    viewportWidth: 768,
    minWidth: '48rem',
    containerPadding: 32,
    availableSpace: 704,
    description: 'Tablets and small laptops'
  },
  lg: {
    viewportWidth: 1440,
    minWidth: '90rem',
    containerPadding: 32,
    availableSpace: 1376,
    description: 'Desktop and large laptops'
  },
  xl: {
    viewportWidth: 1920,
    minWidth: '120rem',
    containerPadding: 32,
    availableSpace: 1856,
    description: 'Large desktop screens'
  }
};

const RACK_COLUMNS = {
  sm: {
    1: '8.33%', 2: '16.67%', 3: '25%', 4: '33.33%', 5: '41.67%', 6: '50%',
    7: '58.33%', 8: '66.67%', 9: '75%', 10: '83.33%', 11: '91.67%', 12: '100%'
  },
  md: {
    1: '8.33%', 2: '16.67%', 3: '25%', 4: '33.33%', 5: '41.67%', 6: '50%',
    7: '58.33%', 8: '66.67%', 9: '75%', 10: '83.33%', 11: '91.67%', 12: '100%'
  },
  lg: {
    1: '7.27%', 2: '15.7%', 3: '24.13%', 4: '32.56%', 5: '40.99%', 6: '49.42%',
    7: '57.85%', 8: '66.28%', 9: '74.71%', 10: '83.14%', 11: '91.57%', 12: '100%'
  },
  xl: {
    1: '5.76%', 2: '12.44%', 3: '19.12%', 4: '25.81%', 5: '32.49%', 6: '39.17%',
    7: '45.85%', 8: '52.53%', 9: '59.22%', 10: '65.9%', 11: '72.58%', 12: '100%'
  }
};

const RAIL_COLUMNS = {
  sm: {
    1: '16rem', 2: '20rem', 3: '24rem', 4: '28rem', 5: '32rem', 6: '36rem',
    7: '40rem', 8: '44rem', 9: '48rem', 10: '52rem', 11: '56rem', 12: '100%'
  },
  md: {
    1: '16rem', 2: '20rem', 3: '24rem', 4: '28rem', 5: '32rem', 6: '36rem',
    7: '40rem', 8: '44rem', 9: '48rem', 10: '52rem', 11: '56rem', 12: '100%'
  },
  lg: {
    1: '16rem', 2: '20rem', 3: '24rem', 4: '28rem', 5: '32rem', 6: '36rem',
    7: '40rem', 8: '44rem', 9: '48rem', 10: '52rem', 11: '56rem', 12: '100%'
  },
  xl: {
    1: '16rem', 2: '20rem', 3: '24rem', 4: '28rem', 5: '32rem', 6: '36rem',
    7: '40rem', 8: '44rem', 9: '48rem', 10: '52rem', 11: '56rem', 12: '100%'
  }
};

const RAIL_GAPS = {
  STANDARD: '1rem',
  SLIDE_MODE: {
    sm: '1.5rem',     // Matches container padding for seamless slides
    md: '2rem',       // Matches container padding for seamless slides  
    lg: '2rem',       // Matches container padding for seamless slides
    xl: '2rem',       // Matches container padding for seamless slides
  }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
  setupContainerToggle();
  updateAllInfo();
});

// Update when window resizes
window.addEventListener('resize', updateAllInfo);
window.addEventListener('load', updateAllInfo);

// Get current breakpoint based on window width
function getCurrentBreakpoint() {
  const width = window.innerWidth;
  if (width >= VIEWPORTS.xl.viewportWidth) return 'xl';
  if (width >= VIEWPORTS.lg.viewportWidth) return 'lg';
  if (width >= VIEWPORTS.md.viewportWidth) return 'md';
  return 'sm';
}

// Format pixel values
function formatPx(px) {
  return Math.round(px) + 'px';
}

// Convert rem to pixels
function remToPx(rem) {
  return parseFloat(rem) * 16;
}

// Update all information displays
function updateAllInfo() {
  updateColumnInfo();
  updateOffsetInfo();
}

// Enhanced column information update
function updateColumnInfo() {
  const breakpoint = getCurrentBreakpoint();
  const firstContainer = document.querySelector('.rack, .rail');
  if (!firstContainer) return;
  
  const containerType = firstContainer.classList.contains('rack') ? 'rack' : 'rail';
  
  // Update all info elements in the column-info-section
  const allInfoElements = document.querySelectorAll('[id*="col-"][id*="info"]');
  
  allInfoElements.forEach(infoElement => {
    // Extract column size from the ID
    const idParts = infoElement.id.split('-');
    let columnSize;
    
    // Handle both formats: "col-X-info" and "responsive-col-X-info-Y"
    if (infoElement.id.startsWith('responsive-col-')) {
      columnSize = idParts[2]; // responsive-col-X-info-Y
    } else {
      columnSize = idParts[1]; // col-X-info
    }
    
    if (!columnSize || !columnSize.match(/^\d+$/)) return;
    
    // Find the corresponding column element in the container
    const columnElement = firstContainer.querySelector(`.col-${columnSize}`);
    if (!columnElement) return;
    
    // Calculate actual width
    const computedWidth = window.getComputedStyle(columnElement).width;
    const widthInPx = parseInt(computedWidth);
    
    if (containerType === 'rack') {
      // For rack columns, show percentage and actual measurements
      const percentageValue = RACK_COLUMNS[breakpoint] && RACK_COLUMNS[breakpoint][columnSize] 
        ? RACK_COLUMNS[breakpoint][columnSize] 
        : 'auto';
      
      const remValue = (widthInPx / 16).toFixed(2) + 'rem';
      
      infoElement.innerHTML = `${percentageValue} / ${formatPx(widthInPx)} / ${remValue}`;
    } else {
      // For rail columns, show fixed width
      const fixedWidth = RAIL_COLUMNS[breakpoint] && RAIL_COLUMNS[breakpoint][columnSize]
        ? RAIL_COLUMNS[breakpoint][columnSize]
        : 'auto';
      
      const fixedPxWidth = fixedWidth !== 'auto' ? remToPx(fixedWidth) : widthInPx;
      
      infoElement.innerHTML = `${fixedWidth} / ${formatPx(fixedPxWidth)}`;
    }
  });
}

// Update offset information
function updateOffsetInfo() {
  const breakpoint = getCurrentBreakpoint();
  
  for (let offsetNum = 1; offsetNum <= 11; offsetNum++) {
    const infoElement = document.getElementById(`offset-${offsetNum}-info`);
    if (!infoElement) continue;
    
    // Get offset value from computed styles
    const offsetElement = infoElement.closest('[class*="offset-"]');
    if (!offsetElement) continue;
    
    const computedMargin = window.getComputedStyle(offsetElement).marginLeft;
    const marginInPx = parseInt(computedMargin);
    
    // Get complementary column percentage
    const colNumber = 12 - parseInt(offsetNum);
    const colValue = RACK_COLUMNS[breakpoint] && RACK_COLUMNS[breakpoint][colNumber]
      ? RACK_COLUMNS[breakpoint][colNumber]
      : 'auto';
    
    infoElement.innerHTML = `
      Offset: ${formatPx(marginInPx)} (centered), Column: ${colValue}
    `;
  }
}

// Setup container toggle functionality
function setupContainerToggle() {
  const rackToggle = document.getElementById('rack-toggle');
  const railToggle = document.getElementById('rail-toggle');
  const rackCodeBlock = document.getElementById('rack-code-block');
  const railCodeBlock = document.getElementById('rail-code-block');
  
  // Container switching
  if (rackToggle) {
    rackToggle.addEventListener('change', function() {
      if (this.checked) {
        const container = document.querySelector('.rack, .rail');
        if (container) {
          container.className = 'rack';
          updateColumnInfo();
        }
        
        if (rackCodeBlock) rackCodeBlock.style.display = 'block';
        if (railCodeBlock) railCodeBlock.style.display = 'none';
      }
    });
  }
  
  if (railToggle) {
    railToggle.addEventListener('change', function() {
      if (this.checked) {
        const container = document.querySelector('.rack, .rail');
        if (container) {
          container.className = 'rail';
          updateColumnInfo();
        }
        
        if (rackCodeBlock) rackCodeBlock.style.display = 'none';
        if (railCodeBlock) railCodeBlock.style.display = 'block';
      }
    });
  }
} 