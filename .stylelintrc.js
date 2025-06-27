module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    // Allow @tailwind directives
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer'
        ]
      }
    ],
    
    // Allow vendor prefixes for cross-browser compatibility
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    
    // Custom properties
    'custom-property-empty-line-before': null,
    'declaration-empty-line-before': null,
    'comment-empty-line-before': null,
    'rule-empty-line-before': null,
    
    // Allow nested selectors and duplicates (common in component CSS)
    'selector-nested-pattern': null,
    'selector-class-pattern': null,
    'no-duplicate-selectors': null,
    'no-descending-specificity': null,
    
    // Color and length rules - more lenient
    'color-hex-length': null,
    'length-zero-no-unit': true,
    'color-function-notation': null, // Allow legacy rgba() notation
    'alpha-value-notation': null, // Allow decimal alpha values
    
    // Spacing - disable for existing code
    // 'indentation' and 'max-empty-lines' removed in stylelint 16+
    
    // Allow important for utility classes
    'declaration-no-important': null,
    
    // Media queries - allow legacy syntax
    'media-feature-range-notation': null,
    
    // Values and functions
    'value-keyword-case': null, // Allow mixed case font names
    'keyframes-name-pattern': null, // Allow camelCase keyframe names
    'shorthand-property-no-redundant-values': null // Allow redundant values for clarity
  }
};