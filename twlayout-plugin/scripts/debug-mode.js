import { SYSTEM } from './grid-config.js';

(function() {
  try {
    // Function to find the correct path to debug.css
    function findDebugCssPath() {
      // Try to get the script path
      const scripts = document.getElementsByTagName('script');
      for (let i = 0; i < scripts.length; i++) {
        const src = scripts[i].src;
        if (src.includes('/debug-mode.js') || src.includes('/twlayout-plugin/scripts/debug-mode.js')) {
          // Replace the script path with the CSS path
          return src.replace('/scripts/debug-mode.js', '/styles/debug.css');
        }
      }
      
      // Fallback paths
      const possiblePaths = [
        '../twlayout-plugin/styles/debug.css',
        './twlayout-plugin/styles/debug.css',
        '/twlayout-plugin/styles/debug.css'
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
    // Create the div container
    var divElement = document.createElement('div');
    divElement.className = 'debug-toggle-container';

    // Create the checkbox input element
    var inputElement = document.createElement('input');
    inputElement.type = 'checkbox';
    inputElement.id = 'debug-mode-toggle';

    // Create the label element
    var labelElement = document.createElement('label');
    labelElement.htmlFor = 'debug-mode-toggle';
    labelElement.className = 'debug-toggle-label';
    labelElement.textContent = 'Debug Mode';

    // Append input and label to the div
    divElement.appendChild(inputElement);
    divElement.appendChild(labelElement);

    // Append the div to the body
    var bodyElement = document.body || document.getElementsByTagName('body')[0];
    if (bodyElement) {
      bodyElement.appendChild(divElement);
    } else {
      console.error('Could not find the <body> element to append the debug toggle.');
    }
  } catch (error) {
    console.error('Error while adding debug toggle: ', error);
  }

  try {
    const debugToggleCheckbox = document.getElementById('debug-mode-toggle');
    const body = document.body;

    if (!SYSTEM || typeof SYSTEM.DEBUG_MODE_KEY === 'undefined') {
      console.error('SYSTEM.DEBUG_MODE_KEY is not defined. Check grid-config.js and import.');
      return;
    }
    
    if (!debugToggleCheckbox) {
      console.error('Debug mode checkbox not found.');
      return;
    }

    // Event Listener for checkbox change
    debugToggleCheckbox.addEventListener('change', function() {
      if (this.checked) {
        body.classList.add('debug-mode');
        localStorage.setItem(SYSTEM.DEBUG_MODE_KEY, 'enabled');
      } else {
        body.classList.remove('debug-mode');
        localStorage.setItem(SYSTEM.DEBUG_MODE_KEY, 'disabled');
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
    }

    // Call Initialization
    initDebugMode();

  } catch (error) {
    console.error('Error in debug mode logic: ', error);
  }
})(); 