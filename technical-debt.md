# Technical Debt & Future Improvements

## 🚨 Critical Issues to Address Later

### CSS Architecture & Optimization
- **Output.css Size**: Current output.css is 97KB - needs optimization for production
  - Remove unused TailwindCSS utilities
  - Implement PurgeCSS or similar tool
  - Consider splitting into critical/non-critical CSS

### Build System Improvements
- **Lerna Complexity**: Current monorepo setup may be overcomplicated for this use case
  - Consider simplifying to single package structure for Rails migration
  - Evaluate if Lerna is necessary for 2-package setup

### Asset Management
- **Image Optimization**: Large image files in `/images/` directory not optimized
  - Implement WebP conversion for better performance
  - Add responsive image sizing
  - Consider CDN integration for Rails deployment

### JavaScript Modernization
- **jQuery Dependencies**: Some legacy JS files may have jQuery dependencies
  - Audit all JS files for dependencies
  - Consider modernizing to vanilla JS or framework integration
  - Bundle optimization needed

## 🔧 Technical Improvements

### Code Quality
- **ESLint/Stylelint Setup**: No linting currently configured for workfiles
  - Add ESLint for JavaScript files
  - Add Stylelint for CSS consistency
  - Configure pre-commit hooks

### Performance Optimizations
- **CSS Loading Strategy**: Currently loading all CSS upfront
  - Implement critical CSS inline loading
  - Lazy load non-critical styles
  - Consider CSS-in-JS for component-based styles

### Rails Migration Preparation
- **Asset Pipeline Compatibility**: Current structure needs Rails asset pipeline integration
  - Document asset fingerprinting requirements
  - Plan Sprockets integration
  - Consider Webpack/Vite integration options

## 🎯 Feature Enhancements

### Development Experience
- **Hot Module Replacement**: Current watch only recompiles CSS
  - Add HMR for JavaScript
  - Integrate browser auto-refresh
  - Improve development server setup

### Component System
- **Reusable Components**: Identified 8+ repeated HTML blocks
  - Create component library for Rails migration
  - Document component API
  - Implement component-based architecture

### Responsive Design
- **Mobile Optimization**: Some layouts may need mobile improvements
  - Audit mobile experience across all pages
  - Improve touch interactions
  - Optimize for various screen sizes

## 📱 Mobile & Accessibility

### Accessibility Improvements
- **A11y Audit Needed**: No accessibility audit performed
  - Add ARIA labels where needed
  - Improve keyboard navigation
  - Ensure color contrast compliance
  - Test with screen readers

### Mobile Performance
- **Mobile Loading Speed**: Heavy images/CSS impact mobile performance
  - Implement progressive loading
  - Optimize above-the-fold content
  - Consider AMP or similar optimizations

## 🔐 Security & Best Practices

### Security Considerations
- **Form Validation**: Client-side only validation
  - Add server-side validation for Rails migration
  - Implement CSRF protection
  - Sanitize user inputs

### SEO Optimization
- **Meta Tags**: Inconsistent meta tags across pages
  - Standardize meta descriptions
  - Add Open Graph tags
  - Implement structured data

## 🚀 Deployment & DevOps

### CI/CD Pipeline
- **No Automated Testing**: Manual testing only
  - Set up automated visual regression testing
  - Add performance testing
  - Implement deployment automation

### Monitoring
- **No Error Tracking**: No monitoring in place
  - Add error tracking (Sentry, etc.)
  - Implement performance monitoring
  - Add analytics integration

## 📊 Analytics & Metrics

### Performance Metrics
- **No Performance Baseline**: Need performance benchmarks
  - Establish Core Web Vitals baseline
  - Monitor bundle size growth
  - Track compilation times

### User Experience Metrics
- **No UX Analytics**: No user behavior tracking
  - Add heatmap tracking
  - Implement conversion funnel analysis
  - Monitor user flows

## 🎨 Design System Improvements

### Component Documentation
- **No Component Guide**: Design system lacks documentation
  - Create component style guide
  - Document design tokens
  - Establish design system governance

### Design Consistency
- **Spacing Inconsistencies**: Manual spacing throughout codebase
  - Standardize spacing system
  - Create design token system
  - Audit for consistency

## 💾 Data Management

### Content Management
- **Hardcoded Content**: All content is hardcoded in HTML
  - Plan CMS integration for Rails
  - Create content management strategy
  - Implement content versioning

### Internationalization
- **Mixed Languages**: English/Thai content mixed without i18n
  - Implement proper i18n system
  - Separate content from markup
  - Plan translation workflow

---

## Priority Matrix

### High Impact, Low Effort
1. CSS optimization and PurgeCSS implementation
2. Image compression and WebP conversion
3. ESLint/Stylelint setup

### High Impact, High Effort
1. Component system creation
2. Rails migration architecture
3. Performance monitoring setup

### Low Impact, Low Effort
1. Meta tag standardization
2. Documentation improvements
3. Code cleanup

### Low Impact, High Effort
- Complex CI/CD pipeline setup
- Advanced analytics implementation
- Extensive accessibility overhaul

---

## ✅ RESOLVED ISSUES

### TailwindCSS v3 Migration (2025-06-24)
- **Fixed**: Successfully downgraded from TailwindCSS v4 to v3.4.15
- **Fixed**: Layout system plugin now fully compatible
- **Fixed**: CSS compilation working with `npm run watch` and `npm run build:workfiles`
- **Fixed**: All path references updated from `twlayout-plugin` to `packages/layoutsystem`
- **Fixed**: Circular dependency in `.feature-card.text-center` resolved

### Debugmode Package Creation (2025-06-24)
- **Fixed**: Extracted debug tools from archived project to dedicated package
- **Fixed**: Removed redundant debug-mode files from layoutsystem package
- **Fixed**: Updated workfiles/demo.html to use new debugmode package path
- **Fixed**: Cleaned up package structure - removed unnecessary directories
- **Fixed**: Established proper monorepo package structure with package.json

### Asset Reorganization & Debug Mode Fixes (2025-06-24)
- **Fixed**: Debug mode functionality - button now appears in lower left corner
- **Fixed**: CSS path resolution in debug-mode.js for new package structure
- **Fixed**: Asset organization - moved embed/, icons/, images/ into assets/ directory
- **Fixed**: Updated all HTML files to use new asset paths (./assets/*)
- **Fixed**: Updated JavaScript files with new asset references
- **Fixed**: Removed unused layoutsystem/styles/layout.css file
- **Fixed**: CSS compilation working correctly after asset reorganization

### Debug Mode Critical Fixes (2025-06-24)
- **Fixed**: Removed ES6 module type from script tag causing loading issues
- **Fixed**: Removed dynamic CSS loading conflicts by using manual HTML includes
- **Fixed**: Added DOM ready wrapper to ensure proper script execution timing
- **Fixed**: Debug button now properly appears in lower left corner of workfiles/demo.html
- **Fixed**: CSS and JavaScript integration working correctly

### Background Image Path Fixes (2025-06-24)
- **Fixed**: All background-image CSS properties used incorrect path `./images/backgrounds/` instead of `./assets/images/backgrounds/`
- **Fixed**: Updated background image URLs across 17 HTML files
- **Fixed**: Background images now loading correctly on all pages
- **Files Updated**: index.html (2 images), product-main.html (1 image), news-main.html (1 image), news-detail01-13.html (13 images)

### Development Server Compatibility Fixes (2025-06-24)
- **Fixed**: Browser-sync failing with fsevents error on Node.js v23.11.0
- **Fixed**: Created fallback server management script using Python HTTP server
- **Fixed**: Server management shortcode created: `./server-restart.sh`
- **Fixed**: Alternative development server working on localhost:8000 with Tailwind watch mode

---
**Last Updated**: 2025-06-24
**Review Schedule**: Weekly during active development
**Owner**: Development Team