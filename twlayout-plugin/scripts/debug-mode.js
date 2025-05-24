import { SYSTEM, VIEWPORTS } from './grid-config.js';

(function() {
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
      { value: 375, label: 'sm: 375px', breakpoint: 'sm', description: '375px (335px available)' },
      { value: 770, label: 'md: 770px', breakpoint: 'md', description: '770px (690px available)' },
      { value: 1450, label: 'lg: 1450px', breakpoint: 'lg', description: '1450px (1386px available)' },
      { value: 1800, label: 'xl: 1800px', breakpoint: 'xl', description: '1800px (1736px available)' }
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
      if (width >= VIEWPORTS.xl.viewportWidth) return 'xl';
      if (width >= VIEWPORTS.lg.viewportWidth) return 'lg';
      if (width >= VIEWPORTS.md.viewportWidth) return 'md';
      return 'sm';
    }

    // Update viewport input display with color coding
    function updateViewportDisplay() {
      if (viewportInput) {
        const breakpoint = getCurrentBreakpoint();
        viewportInput.value = `${currentViewportWidth}px (${breakpoint})`;
        
        // Remove previous breakpoint classes
        viewportInput.classList.remove('sm', 'md', 'lg', 'xl');
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

    if (!SYSTEM || typeof SYSTEM.DEBUG_MODE_KEY === 'undefined') {
      console.error('SYSTEM.DEBUG_MODE_KEY is not defined. Check grid-config.js and import.');
      return;
    }
    
    if (!debugToggleCheckbox) {
      console.error('Debug mode checkbox not found.');
      return;
    }

    // Event Listener for debug mode toggle
    debugToggleCheckbox.addEventListener('change', function() {
      if (this.checked) {
        body.classList.add('debug-mode');
        localStorage.setItem(SYSTEM.DEBUG_MODE_KEY, 'enabled');
        updateViewportDisplay();
      } else {
        body.classList.remove('debug-mode');
        localStorage.setItem(SYSTEM.DEBUG_MODE_KEY, 'disabled');
        closeDropdown();
      }
    });

    // Initialization Function
    function initDebugMode() {
      const savedState = localStorage.getItem(SYSTEM.DEBUG_MODE_KEY);
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