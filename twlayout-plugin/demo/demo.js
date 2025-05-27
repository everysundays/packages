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
    viewportWidth: 770,
    minWidth: '48.125rem',
    containerPadding: 32,
    availableSpace: 706,
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
    1: '49.24%', 2: '100%', 3: '100%', 4: '100%', 5: '100%', 6: '100%',
    7: '100%', 8: '100%', 9: '100%', 10: '100%', 11: '100%', 12: '100%'
  },
  md: {
    1: '13.8%', 2: '27.6%', 3: '41.5%', 4: '55.3%', 5: '69.1%', 6: '82.9%',
    7: '100%', 8: '100%', 9: '100%', 10: '100%', 11: '100%', 12: '100%'
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

const OFFSETS = {
  sm: {
    0: '0%', 1: '0%', 2: '0%', 3: '0%', 4: '0%', 5: '0%',
    6: '0%', 7: '0%', 8: '0%', 9: '0%', 10: '0%', 11: '25.38%'
  },
  md: {
    0: '0%', 1: '0%', 2: '0%', 3: '0%', 4: '0%', 5: '0%', 6: '8.5%',
    7: '15.5%', 8: '22.4%', 9: '29.3%', 10: '36.2%', 11: '43.1%'
  },
  lg: {
    0: '0%', 1: '4.165%', 2: '8.335%', 3: '12.5%', 4: '16.665%', 5: '20.835%',
    6: '25%', 7: '29.165%', 8: '33.335%', 9: '37.5%', 10: '41.665%', 11: '45.835%'
  },
  xl: {
    0: '0%', 1: '4.165%', 2: '8.335%', 3: '12.5%', 4: '16.665%', 5: '20.835%',
    6: '25%', 7: '29.165%', 8: '33.335%', 9: '37.5%', 10: '41.665%', 11: '45.835%'
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
  
  for (let offsetNum = 0; offsetNum <= 11; offsetNum++) {
    const infoElement = document.getElementById(`offset-${offsetNum}-info`);
    if (!infoElement) continue;
    
    // Get offset value from configuration
    const offsetPercentage = OFFSETS[breakpoint] && OFFSETS[breakpoint][offsetNum]
      ? OFFSETS[breakpoint][offsetNum]
      : '0%';
    
    // Calculate actual pixel value
    const availableSpace = VIEWPORTS[breakpoint].availableSpace;
    const offsetPx = Math.round((parseFloat(offsetPercentage) / 100) * availableSpace);
    
    // For sm breakpoint, provide special context
    if (breakpoint === 'sm') {
      if (offsetNum === 11) {
        infoElement.innerHTML = `${formatPx(offsetPx)} (positions col-1 in second half)`;
      } else {
        infoElement.innerHTML = `${formatPx(offsetPx)} (no offset for mobile layout)`;
      }
    } else {
      // For larger breakpoints, show traditional offset info
      const colNumber = 12 - parseInt(offsetNum);
      const colValue = RACK_COLUMNS[breakpoint] && RACK_COLUMNS[breakpoint][colNumber]
        ? RACK_COLUMNS[breakpoint][colNumber]
        : 'auto';
      
      infoElement.innerHTML = `${formatPx(offsetPx)} (${offsetPercentage}) + col-${colNumber} (${colValue})`;
    }
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