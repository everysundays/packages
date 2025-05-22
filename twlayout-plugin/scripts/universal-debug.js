import { SYSTEM } from './grid-config.js';

(function() {
  try {
    // Create a new <link> element
    var linkElement = document.createElement('link');

    // Set the href attribute
    // Assuming universal-debug.js is in scripts/ and decoration.css is in styles/
    // Adjust the path if the directory structure is different.
    linkElement.href = '../styles/decoration.css';

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
    // const DEBUG_MODE_STORAGE_KEY = 'twLayoutDebugMode'; // Replaced by SYSTEM.DEBUG_MODE_KEY
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
        // Optional: ensure it's disabled if not explicitly enabled or if value is 'disabled'
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
