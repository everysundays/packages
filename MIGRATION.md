# Migration Guide: v1 → v2 (Monorepo)

## 📋 Summary of Changes

- ✅ **Converted to monorepo structure**
- ✅ **Renamed `twlayout-plugin/` → `packages/layoutsystem/`**
- ✅ **Added `packages/environment/` for development tools**
- ✅ **Fixed installation method from complex setup to simple `git clone`**
- ✅ **Updated demo.html path and references**
- ✅ **Added proper npm scoped packages: `@psp/layoutsystem` and `@psp/environment`**

## 🚀 For Existing Users

### If you currently use the old method:

**OLD (v1):**
```bash
# สร้างโฟลเดอร์ว่าง
npm init -y
npm install tailwindcss@4.1.5 @tailwindcss/cli autoprefixer postcss @types/node @types/tailwindcss --save-dev
rm package.json package-lock.json
git init
git remote add origin https://github.com/everysundays/psp-designertools.git
git pull origin main && npm run build
```

**NEW (v2):**
```bash
# เลือกแค่ layout system
npm install @psp/layoutsystem

# หรือ clone ทั้งหมด
git clone https://github.com/everysundays/psp-designertools.git
cd psp-designertools
npm install
npm run build
```

### File Path Changes

| Old Path | New Path |
|----------|----------|
| `twlayout-plugin/` | `packages/layoutsystem/` |
| `twlayout-plugin/demo/responsive-test.html` | `packages/layoutsystem/demo/demo.html` |
| `twlayout-plugin/dist/` | `packages/layoutsystem/dist/` |
| `twlayout-plugin/index.js` | `packages/layoutsystem/index.js` |

### CSS Import Changes

**OLD:**
```html
<link href="../twlayout-plugin/dist/output.css" rel="stylesheet">
```

**NEW:**
```html
<link href="../dist/styles.css" rel="stylesheet">
```

### Script Changes

**OLD:**
```bash
npm run build  # Built everything in root
```

**NEW:**
```bash
# From root - builds all packages
npm run build

# From packages/layoutsystem only
cd packages/layoutsystem
npm run build
```

## 🎯 For New Users

### Option 1: Install specific package only
```bash
npm install @psp/layoutsystem
```

### Option 2: Clone entire repo
```bash
git clone https://github.com/everysundays/psp-designertools.git
cd psp-designertools
npm install
npm run build
```

### Option 3: Get only what you need (sparse checkout)
```bash
# Layout system only
git clone --filter=blob:none --sparse https://github.com/everysundays/psp-designertools.git
cd psp-designertools
git sparse-checkout init --cone
git sparse-checkout set packages/layoutsystem

# Environment tools only  
git sparse-checkout set packages/environment
```

## 🔧 Development Workflow Changes

### OLD Workflow:
1. Follow complex setup in README
2. Work directly in root directory
3. Demo at `twlayout-plugin/demo/responsive-test.html`

### NEW Workflow:
1. `git clone` or `npm install @psp/layoutsystem`
2. Choose your package directory
3. Demo at `packages/layoutsystem/demo/demo.html`
4. Use monorepo commands from root

### Available Commands:

**Root level (all packages):**
```bash
npm run dev     # Start dev for all packages
npm run build   # Build all packages  
npm run clean   # Clean all packages
npm run demo    # Open layoutsystem demo
```

**Package level:**
```bash
cd packages/layoutsystem
npm run dev     # Dev server with live reload
npm run build   # Build this package only
npm run demo    # Open demo
```

## ⚠️ Breaking Changes

1. **File paths**: All files moved to `packages/layoutsystem/`
2. **Demo file**: `responsive-test.html` → `demo.html`
3. **CSS output**: `output.css` → `styles.css`
4. **Installation**: Complex setup removed, use standard git clone
5. **Package name**: Available as `@psp/layoutsystem` on npm

## 🔄 Migration Steps

### For Existing Projects Using the Plugin:

1. **Update your imports:**
   ```diff
   - <link href="path/to/twlayout-plugin/dist/output.css" rel="stylesheet">
   + <link href="path/to/packages/layoutsystem/dist/styles.css" rel="stylesheet">
   ```

2. **Update build scripts:**
   ```diff
   - npm run build
   + cd packages/layoutsystem && npm run build
   ```

3. **Update demo references:**
   ```diff
   - twlayout-plugin/demo/responsive-test.html
   + packages/layoutsystem/demo/demo.html
   ```

### For Contributors:

1. **Clone the new structure:**
   ```bash
   git clone https://github.com/everysundays/psp-designertools.git
   cd psp-designertools
   npm install
   ```

2. **Work in the appropriate package:**
   ```bash
   cd packages/layoutsystem  # for grid system changes
   cd packages/environment   # for tooling changes
   ```

3. **Use monorepo commands:**
   ```bash
   npm run dev    # from root - develops all packages
   npm run build  # from root - builds all packages
   ```

## 🆘 Troubleshooting

### "Cannot find module @psp/layoutsystem"
Make sure you've published the packages or are using local development:
```bash
cd packages/layoutsystem
npm link
# In your project:
npm link @psp/layoutsystem
```

### "Demo page not loading"
Check the correct path:
```bash
# Not this:
open twlayout-plugin/demo/responsive-test.html

# But this:
open packages/layoutsystem/demo/demo.html
```

### "Build fails"
Make sure you're running commands from the right directory:
```bash
# From root (builds all):
npm run build

# From specific package:
cd packages/layoutsystem
npm run build
```

## 📞 Support

If you encounter issues during migration:
1. Check this migration guide
2. Review the updated README.md
3. Open an issue on GitHub with your specific setup

The new structure is cleaner and follows standard monorepo practices, making it easier to maintain and use specific parts of the toolkit.