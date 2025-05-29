// Debug Mode for TWLayout Grid System
// Provides visual debugging for grid layouts with territory lines and spacing indicators

(function() {
  // Define VIEWPORTS directly since we can't import in browser
  const VIEWPORTS = {
    sm: {
      viewportWidth: 640,               // Standard Tailwind sm breakpoint
      minWidth: '40rem',                // 40rem = 640px
      containerPadding: 24,
      availableSpace: 592,              // 640px - 48px
      description: 'Small devices (Tailwind sm)'
    },
    md: {
      viewportWidth: 768,               // Standard Tailwind md breakpoint
      minWidth: '48rem',                // 48rem = 768px
      containerPadding: 32,
      availableSpace: 704,              // 768px - 64px
      description: 'Medium devices (Tailwind md)'
    },
    lg: {
      viewportWidth: 1024,              // Standard Tailwind lg breakpoint
      minWidth: '64rem',                // 64rem = 1024px
      containerPadding: 32,
      availableSpace: 960,              // 1024px - 64px
      description: 'Desktop and large laptops (Tailwind lg)'
    },
    xl: {
      viewportWidth: 1280,              // Standard Tailwind xl breakpoint
      minWidth: '80rem',                // 80rem = 1280px
      containerPadding: 32,
      availableSpace: 1216,             // 1280px - 64px
      description: 'Large desktop screens (Tailwind xl)'
    }
  };

  try {
    // Function to find the correct path to debug-mode.css
    function findDebugCssPath() {
      // Try to get the script path
      const scripts = document.getElementsByTagName('script');
      for (let i = 0; i < scripts.length; i++) {
        const src = scripts[i].src;
        if (src.includes('/debug-mode.js') || src.includes('/twlayout-plugin/scripts/debug-mode.js')) {
          // Replace the script path with the CSS path
          return src.replace('/scripts/debug-mode.js', '/styles/debug-mode.css');
        }
      }
      
      // Fallback paths
      const possiblePaths = [
        '../twlayout-plugin/styles/debug-mode.css',
        './twlayout-plugin/styles/debug-mode.css',
        '/twlayout-plugin/styles/debug-mode.css'
      ];
      
      return possiblePaths[0]; // Default to the first fallback
    }
    
    // Create a new <link> element
    var linkElement = document.createElement('link');

    // Set the href attribute with correct path
    linkElement.href = findDebugCssPath();

    // Set the rel attribute
    linkElement.rel = 'stylesheet';

    // Append the <link> element to the <head>
    var headElement = document.head || document.getElementsByTagName('head')[0];
    if (headElement) {
      headElement.appendChild(linkElement);
    } else {
      console.error('Could not find the <head> element to append the stylesheet.');
    }
  } catch (error) {
    console.error('Error while adding stylesheet: ', error);
  }

  try {
    // Create the debug container
    var debugContainer = document.createElement('div');
    debugContainer.className = 'debug-container';

    // Create debug toggle
    var divElement = document.createElement('div');
    divElement.className = 'debug-toggle-container';

    var inputElement = document.createElement('input');
    inputElement.type = 'checkbox';
    inputElement.id = 'debug-mode-toggle';

    var labelElement = document.createElement('label');
    labelElement.htmlFor = 'debug-mode-toggle';
    labelElement.className = 'debug-toggle-label';
    labelElement.textContent = 'Debug Mode';

    divElement.appendChild(inputElement);
    divElement.appendChild(labelElement);

    // Create viewport controls (only visible in debug mode)
    var viewportContainer = document.createElement('div');
    viewportContainer.className = 'viewport-container debug-only';

    var viewportInput = document.createElement('input');
    viewportInput.type = 'text';
    viewportInput.id = 'viewport-input';
    viewportInput.className = 'viewport-input';
    viewportInput.placeholder = '1200px (lg)';
    viewportInput.readOnly = true;

    var dropdownMenu = document.createElement('div');
    dropdownMenu.id = 'viewport-dropdown';
    dropdownMenu.className = 'viewport-dropdown-menu';

    viewportContainer.appendChild(viewportInput);
    viewportContainer.appendChild(dropdownMenu);

    // Add both containers to the debug container
    debugContainer.appendChild(divElement);
    debugContainer.appendChild(viewportContainer);

    // Append the debug container to the body
    var bodyElement = document.body || document.getElementsByTagName('body')[0];
    if (bodyElement) {
      bodyElement.appendChild(debugContainer);
    } else {
      console.error('Could not find the <body> element to append the debug controls.');
    }
  } catch (error) {
    console.error('Error while adding debug controls: ', error);
  }

  try {
    // Constants for viewport management
    const DEFAULT_VIEWPORTS = [
      { value: 320, label: 'xs: <640px', breakpoint: 'xs', description: 'Extra small devices (below sm)' },
      { value: 640, label: 'sm: 640px', breakpoint: 'sm', description: '640px (592px available)' },
      { value: 768, label: 'md: 768px', breakpoint: 'md', description: '768px (704px available)' },
      { value: 1024, label: 'lg: 1024px', breakpoint: 'lg', description: '1024px (960px available)' },
      { value: 1280, label: 'xl: 1280px', breakpoint: 'xl', description: '1280px (1216px available)' }
    ];

    // State management
    let currentViewportWidth = window.innerWidth;
    let isDropdownOpen = false;

    // DOM elements
    const debugToggleCheckbox = document.getElementById('debug-mode-toggle');
    const viewportInput = document.getElementById('viewport-input');
    const dropdownMenu = document.getElementById('viewport-dropdown');
    const body = document.body;

    // Get current breakpoint
    function getCurrentBreakpoint() {
      const width = currentViewportWidth;
      if (width >= VIEWPORTS.xl.viewportWidth) return 'xl';     // ≥ 1280px
      if (width >= VIEWPORTS.lg.viewportWidth) return 'lg';     // ≥ 1024px
      if (width >= VIEWPORTS.md.viewportWidth) return 'md';     // ≥ 768px
      if (width >= VIEWPORTS.sm.viewportWidth) return 'sm';     // ≥ 640px
      return 'xs';                                              // < 640px
    }

    // Update viewport input display with color coding
    function updateViewportDisplay() {
      if (viewportInput) {
        const breakpoint = getCurrentBreakpoint();
        viewportInput.value = `${currentViewportWidth}px (${breakpoint})`;
        
        // Remove previous breakpoint classes
        viewportInput.classList.remove('xs', 'sm', 'md', 'lg', 'xl');
        // Add current breakpoint class for color coding
        viewportInput.classList.add(breakpoint);
      }
    }

    // Populate dropdown menu with breakpoint legend
    function populateDropdown() {
      if (!dropdownMenu) return;

      dropdownMenu.innerHTML = '';

      // Add header
      const header = document.createElement('div');
      header.className = 'viewport-legend-header';
      header.textContent = 'Breakpoint Reference';
      dropdownMenu.appendChild(header);

      // Add breakpoint items
      DEFAULT_VIEWPORTS.forEach(viewport => {
        const item = document.createElement('div');
        item.className = 'viewport-breakpoint-item';
        
        const badge = document.createElement('span');
        badge.className = `breakpoint-badge ${viewport.breakpoint}`;
        badge.textContent = viewport.breakpoint;
        
        const description = document.createElement('span');
        description.textContent = viewport.description;
        
        item.appendChild(badge);
        item.appendChild(description);
        dropdownMenu.appendChild(item);
      });
    }

    // Open dropdown
    function openDropdown() {
      if (!dropdownMenu) return;
      
      populateDropdown();
      dropdownMenu.classList.add('open');
      isDropdownOpen = true;
    }

    // Close dropdown
    function closeDropdown() {
      if (!dropdownMenu) return;
      
      dropdownMenu.classList.remove('open');
      isDropdownOpen = false;
    }

    // Event listeners
    if (viewportInput) {
      viewportInput.addEventListener('click', () => {
        if (body.classList.contains('debug-mode')) {
          if (isDropdownOpen) {
            closeDropdown();
          } else {
            openDropdown();
          }
        }
      });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (isDropdownOpen && !e.target.closest('.viewport-container')) {
        closeDropdown();
      }
    });

    // Update viewport on window resize
    window.addEventListener('resize', () => {
      currentViewportWidth = window.innerWidth;
      updateViewportDisplay();
    });

    // Define debug mode key locally
    const DEBUG_MODE_KEY = 'twlayout-debug-mode';
    
    if (!debugToggleCheckbox) {
      console.error('Debug mode checkbox not found.');
      return;
    }

    // Event Listener for debug mode toggle
    debugToggleCheckbox.addEventListener('change', function() {
      if (this.checked) {
        body.classList.add('debug-mode');
        localStorage.setItem(DEBUG_MODE_KEY, 'enabled');
        updateViewportDisplay();
      } else {
        body.classList.remove('debug-mode');
        localStorage.setItem(DEBUG_MODE_KEY, 'disabled');
        closeDropdown();
      }
    });

    // Initialization Function
    function initDebugMode() {
      const savedState = localStorage.getItem(DEBUG_MODE_KEY);
      if (savedState === 'enabled') {
        debugToggleCheckbox.checked = true;
        body.classList.add('debug-mode');
      } else {
        debugToggleCheckbox.checked = false;
        body.classList.remove('debug-mode');
      }
      updateViewportDisplay();
    }

    // Call Initialization
    initDebugMode();

  } catch (error) {
    console.error('Error in debug mode logic: ', error);
  }
})(); 