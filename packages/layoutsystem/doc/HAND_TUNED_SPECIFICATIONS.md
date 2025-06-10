# Hand-Tuned Specifications & Special Behaviors
## Rack & Rail Grid System v1.2.0

> **⚠️ CRITICAL**: This document contains manually optimized values that MUST NOT be reverted to mathematical calculations. These values have been fine-tuned through visual testing and real-world use case optimization.

---

## Table of Contents
1. [Overview](#overview)
2. [Rail Gap System](#rail-gap-system)
3. [Rack Column Percentages](#rack-column-percentages)
4. [Rail Column Widths](#rail-column-widths)
5. [Offset Positioning](#offset-positioning)
6. [Implementation Details](#implementation-details)
7. [Usage Examples](#usage-examples)
8. [Maintenance Guidelines](#maintenance-guidelines)

---

## Overview

This document details all hand-tuned values and special behaviors in the Rack & Rail Grid System. These customizations solve specific UX challenges and visual optimization requirements that pure mathematical calculations cannot address.

### Key Principles
- **Visual Balance** over mathematical precision
- **Real-world use cases** drive optimization
- **Sliding content experiences** require special gap handling
- **Container padding harmony** for seamless transitions

---

## Rail Gap System

### Purpose
The rail gap system provides two modes:
- **Standard Mode**: Regular `1rem` gap for normal rail columns
- **Slide Mode**: Gap matches container padding for seamless slide transitions

### Problem Solved
When using `col-12` for full-width sliding content, standard gaps cause the next slide to "peek" at the viewport edge, breaking the immersive slide experience.

### Implementation

#### CSS Variables (Generated per breakpoint)
```css
--tw-rail-gap-standard: 1rem;
--tw-rail-gap-slide: [container-padding]; /* 1.5rem (sm), 2rem (md+) */
```

#### Automatic Detection
```css
.rail:has(.col-12) {
  gap: var(--tw-rail-gap-slide);
}
```

#### Manual Control
```css
.rail-slide {
  gap: var(--tw-rail-gap-slide) !important;
}
.rail-standard {
  gap: var(--tw-rail-gap-standard) !important;
}
```

#### Breakpoint Values
| Breakpoint | Container Padding | Slide Gap | Standard Gap |
|------------|------------------|-----------|--------------|
| sm         | 24px (1.5rem)    | 1.5rem   | 1rem         |
| md         | 32px (2rem)      | 2rem     | 1rem         |
| lg         | 32px (2rem)      | 2rem     | 1rem         |
| xl         | 32px (2rem)      | 2rem     | 1rem         |

---

## Rack Column Percentages

### Hand-Tuned Breakpoints: `lg` and `xl`

#### Original Problem
Mathematical calculations (`100% / 12 = 8.33%`) don't account for:
- Visual perception differences at larger screen sizes
- Gap accumulation in complex layouts
- Worst-case scenarios (4 columns with 3 gaps)

#### lg Breakpoint (1440px viewport)
**Visual optimization based on 1376px available space**

| Column | Hand-Tuned | Mathematical | Difference |
|--------|------------|--------------|------------|
| col-1  | 7.27%      | 8.33%        | -1.06%     |
| col-2  | 15.7%      | 16.67%       | -0.97%     |
| col-3  | 24.13%     | 25%          | -0.87%     |
| col-4  | 32.56%     | 33.33%       | -0.77%     |
| col-6  | 49.42%     | 50%          | -0.58%     |
| col-8  | 66.28%     | 66.67%       | -0.39%     |
| col-12 | 100%       | 100%         | 0%         |

#### xl Breakpoint (1920px viewport)
**Significant reduction for better visual balance**

| Column | Hand-Tuned | Mathematical | Difference |
|--------|------------|--------------|------------|
| col-1  | 5.76%      | 8.33%        | -2.57%     |
| col-2  | 12.44%     | 16.67%       | -4.23%     |
| col-3  | 19.12%     | 25%          | -5.88%     |
| col-4  | 25.81%     | 33.33%       | -7.52%     |
| col-6  | 39.17%     | 50%          | -10.83%    |
| col-8  | 52.53%     | 66.67%       | -14.14%    |
| col-12 | 100%       | 100%         | 0%         |

#### Why These Values?
1. **Gap Accommodation**: Prevents layouts from exceeding 100% width in worst-case scenarios
2. **Visual Proportion**: Smaller percentages at xl create better visual hierarchy
3. **Content Readability**: Prevents content from becoming too wide at large screen sizes
4. **Design Harmony**: Maintains consistent visual weight across different layouts

---

## Rail Column Widths

### Special Case: `col-12`

#### Standard Rail Columns (col-1 through col-11)
- Fixed `rem` values (16rem, 20rem, 24rem, etc.)
- Maintain consistent width regardless of container size
- Ideal for card-based designs and horizontal scrolling

#### Hand-Tuned: `col-12 = 100%`

**Original Values (Mathematical)**:
- sm/md: `60rem` (960px)
- lg/xl: `64rem` (1024px)

**Hand-Tuned Values**:
- All breakpoints: `100%`

**Purpose**: 
- Full-width sliding content
- Seamless slide-to-slide navigation
- No edge peeking in horizontal scroll layouts
- Perfect for multi-screen content experiences

---

## Offset Positioning

### Hand-Tuned Behavior: Half-Margin Centering

#### Standard Offset Approach
```css
.offset-3 { margin-left: 25%; } /* 3/12 = 25% */
```

#### Hand-Tuned Approach
```css
.offset-3 { margin-left: 12.5%; } /* 25% / 2 = 12.5% */
```

#### Visual Effect
- Column appears **visually centered** within the offset space
- Remaining space appears on the **right side**
- Creates better **visual balance** than traditional full-margin offsets
- More **intuitive positioning** for designers

#### All Offset Values
| Offset | Full Calculation | Hand-Tuned (÷2) | Purpose |
|--------|------------------|------------------|---------|
| offset-1 | 8.33% | 4.165% | Subtle positioning |
| offset-2 | 16.67% | 8.335% | Quarter positioning |
| offset-3 | 25% | 12.5% | Third positioning |
| offset-6 | 50% | 25% | Half positioning |
| offset-9 | 75% | 37.5% | Three-quarter positioning |

---

## Implementation Details

### CSS Architecture

#### Variable Generation (Per Breakpoint)
```css
:root {
  /* System */
  --tw-layout-padding: 1.5rem;
  --tw-layout-gap: 1rem;
  
  /* Rail Gaps */
  --tw-rail-gap-standard: 1rem;
  --tw-rail-gap-slide: [container-padding];
  
  /* Rack Columns (Hand-Tuned) */
  --tw-rack-col-1: 7.27%; /* lg example */
  --tw-rack-col-2: 15.7%;
  
  /* Rail Columns */
  --tw-rail-col-1: 16rem;
  --tw-rail-col-12: 100%; /* Hand-Tuned */
  
  /* Offsets (Half-Values) */
  --tw-offset-1: 4.165%;
  --tw-offset-2: 8.335%;
}
```

#### Container Classes
```css
.rack {
  gap: var(--tw-layout-gap); /* Always 1rem */
}

.rail {
  gap: var(--tw-rail-gap-standard); /* Default 1rem */
}

.rail:has(.col-12) {
  gap: var(--tw-rail-gap-slide); /* Auto slide mode */
}
```

---

## Usage Examples

### Slide-Mode Rail (Automatic)
```html
<div class="rail">
  <div class="col-12">Slide 1</div>
  <div class="col-12">Slide 2</div>
  <div class="col-12">Slide 3</div>
</div>
```
*Gap automatically becomes container padding size*

### Manual Rail Gap Control
```html
<div class="rail rail-slide">
  <div class="col-6">Wide card</div>
  <div class="col-6">Wide card</div>
</div>

<div class="rail rail-standard">
  <div class="col-3">Regular card</div>
  <div class="col-3">Regular card</div>
  <div class="col-3">Regular card</div>
</div>
```

### Centered Offsets
```html
<div class="rack">
  <div class="col-6 offset-3">Centered content</div>
</div>
```
*Visually centered with 3 columns of space distributed around it*

---

## Maintenance Guidelines

### ⚠️ CRITICAL PRESERVATION RULES

1. **NEVER revert hand-tuned values to mathematical calculations**
2. **ALWAYS test visual impact before changing any percentage**
3. **PRESERVE the half-margin offset behavior**
4. **MAINTAIN rail gap mode functionality**

### Safe Modifications

#### ✅ Allowed Changes
- Adding new utility classes
- Extending breakpoint ranges
- Adding new rail gap modes
- Documentation improvements

#### ❌ Forbidden Changes
- Reverting lg/xl rack percentages to 8.33%, 16.67%, etc.
- Changing offset values to full margins
- Removing rail gap auto-detection
- Making col-12 fixed-width in rail

### Testing Requirements

When making any changes:

1. **Visual Testing**: Test all responsive examples in demo.html
2. **Gap Testing**: Verify rail slide mode works correctly
3. **Offset Testing**: Confirm centering behavior is maintained
4. **Multi-Screen Testing**: Test sliding content experiences

### Version Control Notes

These hand-tuned values represent **production-tested optimizations**:
- **v1.0**: Initial mathematical calculations
- **v1.1**: Hand-tuned lg/xl percentages for gap accommodation
- **v1.2**: Rail gap system + offset centering + col-12 slide mode

### Future Development

When adding features:
- **Respect existing hand-tuned values**
- **Document any new optimizations in this file**
- **Maintain backward compatibility with slide-mode behavior**
- **Test extensively with real content scenarios**

---

## Summary

This grid system's strength comes from its **thoughtful deviations** from pure mathematical precision. Every hand-tuned value solves a real UX problem and has been validated through extensive visual testing and real-world usage.

**Remember**: These aren't "close enough" approximations—they're **intentional optimizations** that make the difference between a functional grid and an exceptional user experience. 