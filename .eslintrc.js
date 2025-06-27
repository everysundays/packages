module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true // Allow Node.js globals for build scripts
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'script'
  },
  globals: {
    // Allow common browser globals
    window: 'readonly',
    document: 'readonly',
    console: 'readonly',
    localStorage: 'readonly',
    sessionStorage: 'readonly',
    google: 'readonly', // Google Maps API
    globalThis: 'readonly'
  },
  ignorePatterns: [
    // Ignore minified or external library files
    'workfiles/js/init_embed.js', // Appears to be minified
    'workfiles/js/common.js', // Contains modern syntax
    'workfiles/js/util.js', // Contains modern syntax
    'workfiles/js/search.js', // Contains modern syntax
    'workfiles/js/map.js', // Contains modern syntax
    'workfiles/js/onion.js', // Contains modern syntax
    'workfiles/js/overlay.js', // Google Maps integration
    'workfiles/js/search_impl.js', // Google Maps integration
    'workfiles/js/main.js', // Minified/obfuscated external library
    'workfiles/js/geometry.js' // Google Maps integration
  ],
  rules: {
    // Code quality - more lenient for legacy code
    'no-unused-vars': ['warn', { vars: 'all', args: 'none' }],
    'no-console': 'off', // Allow console for debugging
    'no-debugger': 'warn',
    'no-inner-declarations': 'off', // Allow function declarations inside blocks
    
    // Best practices - only critical ones
    'no-eval': 'error',
    'no-implied-eval': 'error',
    
    // Style - minimal requirements
    'indent': 'off', // Too many auto-generated files
    'quotes': 'off', // Mixed quote styles in legacy code
    'semi': 'off', // Inconsistent semicolon usage
    'comma-dangle': 'off',
    
    // Spacing - off for legacy compatibility
    'space-before-function-paren': 'off',
    'space-in-parens': 'off',
    'object-curly-spacing': 'off',
    'array-bracket-spacing': 'off'
  }
};