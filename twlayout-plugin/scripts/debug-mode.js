import { SYSTEM } from './grid-config.js';

(function() {
  try {
    // Create a new <link> element
    var linkElement = document.createElement('link');

    // Set the href attribute with correct path
    linkElement.href = '../twlayout-plugin/styles/debug.css';

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

    // More precise check for demo page - check for specific demo page elements
    const isDemoPage = window.location.pathname.includes('demo.html') || 
                      document.querySelector('.offset-demo') !== null || 
                      document.querySelector('#rack-toggle') !== null;
    
    // Event Listener for checkbox change
    debugToggleCheckbox.addEventListener('change', function() {
      if (this.checked) {
        // Apply the appropriate debug class based on the page
        if (isDemoPage) {
          body.classList.add('debug-mode');
        } else {
          body.classList.add('debug-mode');
          body.classList.add('debug-mode-containers-only');
        }
        localStorage.setItem(SYSTEM.DEBUG_MODE_KEY, 'enabled');
      } else {
        body.classList.remove('debug-mode');
        body.classList.remove('debug-mode-containers-only');
        localStorage.setItem(SYSTEM.DEBUG_MODE_KEY, 'disabled');
      }
    });

    // Initialization Function
    function initDebugMode() {
      const savedState = localStorage.getItem(SYSTEM.DEBUG_MODE_KEY);
      if (savedState === 'enabled') {
        debugToggleCheckbox.checked = true;
        body.classList.add('debug-mode');
        // Add the containers-only class for non-demo pages
        if (!isDemoPage) {
          body.classList.add('debug-mode-containers-only');
        }
      } else {
        debugToggleCheckbox.checked = false;
        body.classList.remove('debug-mode');
        body.classList.remove('debug-mode-containers-only');
      }
    }

    // Call Initialization
    initDebugMode();

  } catch (error) {
    console.error('Error in debug mode logic: ', error);
  }
})(); 