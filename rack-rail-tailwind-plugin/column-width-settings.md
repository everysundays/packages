# Column Width Settings for Rack-Rail Grid System

This document organizes all column width settings from the grid system for easy editing. Make changes here, then apply them to the actual CSS files.

## Core Variables and Breakpoints

All grid settings are organized by breakpoints:
- **sm**: 375px viewport (Available space: 335px after padding)
- **md**: 770px viewport (Available space: 690px after padding)
- **lg**: 1450px viewport (Available space: 1386px after padding)
- **xl**: 1800px viewport (Available space: 1736px after padding)

## Rack Column Settings

Rack columns use percentage-based widths that adapt to the container width.

### Small Screens (375px viewport)
```css
--container-padding: 1.5rem;      /* 24px */
--container-padding-total: 3rem;  /* 48px - both sides */
--available-space-sm: 335px;      /* 375px - 48px padding */

/* Column width settings */
--rack-col-1-percent: 48.06%;   /* 161px / 335px */
--rack-col-2-percent: 100%;     /* 335px / 335px */
--rack-col-3-percent: 100%;     /* 335px / 335px */
--rack-col-4-percent: 100%;     /* 335px / 335px */
--rack-col-5-percent: 100%;     /* 335px / 335px */
--rack-col-6-percent: 100%;     /* 335px / 335px */
--rack-col-7-percent: 100%;     /* 335px / 335px */
--rack-col-8-percent: 100%;     /* 335px / 335px */
--rack-col-9-percent: 100%;     /* 335px / 335px */
--rack-col-10-percent: 100%;    /* 335px / 335px */
--rack-col-11-percent: 100%;    /* 335px / 335px */
--rack-col-12-percent: 100%;    /* 335px / 335px */
```

### Medium Screens (770px viewport)
```css
--container-padding: 2.5rem;        /* 40px */
--container-padding-total: 5rem;    /* 80px - both sides */
--available-space-md: 690px;        /* 770px - 80px padding */

/* Column width settings */
--rack-col-1-percent: 32.17%;   /* 222px / 690px */
--rack-col-2-percent: 40.14%;   /* 277px / 690px */
--rack-col-3-percent: 49.13%;   /* 339px / 690px */
--rack-col-4-percent: 49.13%;   /* 339px / 690px */
--rack-col-5-percent: 58.12%;   /* 401px / 690px */
--rack-col-6-percent: 66.09%;   /* 456px / 690px */
--rack-col-7-percent: 100%;     /* 690px / 690px */
--rack-col-8-percent: 100%;     /* 690px / 690px */
--rack-col-9-percent: 100%;     /* 690px / 690px */
--rack-col-10-percent: 100%;    /* 690px / 690px */
--rack-col-11-percent: 100%;    /* 690px / 690px */
--rack-col-12-percent: 100%;    /* 690px / 690px */
```

### Large Screens (1450px viewport)
```css
--container-padding: 2rem;          /* 32px */
--container-padding-total: 4rem;    /* 64px - both sides */
--available-space-lg: 1386px;       /* 1450px - 64px padding */

/* Column width settings */
--rack-col-1-percent: 7.29%;     /* 101px / 1386px */
--rack-col-2-percent: 15.73%;    /* 218px / 1386px */
--rack-col-3-percent: 24.17%;    /* 335px / 1386px */
--rack-col-4-percent: 32.61%;    /* 452px / 1386px */
--rack-col-5-percent: 41.05%;    /* 569px / 1386px */
--rack-col-6-percent: 49.49%;    /* 686px / 1386px */
--rack-col-7-percent: 57.94%;    /* 803px / 1386px */
--rack-col-8-percent: 66.38%;    /* 920px / 1386px */
--rack-col-9-percent: 74.82%;    /* 1037px / 1386px */
--rack-col-10-percent: 83.26%;   /* 1154px / 1386px */
--rack-col-11-percent: 91.70%;   /* 1271px / 1386px */
--rack-col-12-percent: 100%;     /* 1388px / 1386px */
```

### Extra Large Screens (1800px viewport)
```css
--container-padding: 2rem;          /* 32px */
--container-padding-total: 4rem;    /* 64px - both sides */
--available-space-xl: 1736px;       /* 1800px - 64px padding */

/* Column width settings */
--rack-col-1-percent: 7.49%;     /* 130px / 1736px */
--rack-col-2-percent: 15.90%;    /* 276px / 1736px */
--rack-col-3-percent: 24.31%;    /* 422px / 1736px */
--rack-col-4-percent: 32.72%;    /* 568px / 1736px */
--rack-col-5-percent: 41.13%;    /* 714px / 1736px */
--rack-col-6-percent: 49.54%;    /* 860px / 1736px */
--rack-col-7-percent: 57.95%;    /* 1006px / 1736px */
--rack-col-8-percent: 66.36%;    /* 1152px / 1736px */
--rack-col-9-percent: 74.77%;    /* 1298px / 1736px */
--rack-col-10-percent: 83.18%;   /* 1444px / 1736px */
--rack-col-11-percent: 91.59%;   /* 1590px / 1736px */
--rack-col-12-percent: 100%;     /* 1736px / 1736px */
```

## Rail Column Settings

Rail columns use fixed widths that don't stretch, creating a horizontally scrollable container.

### Small Screens (375px viewport)
```css
--rail-col-1-width: 16.25rem;   /* 260px */
--rail-col-2-width: 20rem;      /* 320px */
--rail-col-3-width: 20rem;      /* 320px */
--rail-col-4-width: 20rem;      /* 320px */
--rail-col-5-width: 20rem;      /* 320px */
--rail-col-6-width: 20rem;      /* 320px */
--rail-col-7-width: 20rem;      /* 320px */
--rail-col-8-width: 20rem;      /* 320px */
--rail-col-9-width: 20rem;      /* 320px */
--rail-col-10-width: 20rem;     /* 320px */
--rail-col-11-width: 20rem;     /* 320px */
--rail-col-12-width: 20rem;     /* 320px */
```

### Medium Screens (770px viewport)
```css
--rail-col-1-width: 16.25rem;    /* 260px */
--rail-col-2-width: 20rem;       /* 320px */
--rail-col-3-width: 20rem;       /* 320px */
--rail-col-4-width: 25rem;       /* 400px */
--rail-col-5-width: 28.125rem;   /* 450px */
--rail-col-6-width: 30.75rem;    /* 492px */
--rail-col-7-width: 33.375rem;   /* 534px */
--rail-col-8-width: 36.0625rem;  /* 577px */
--rail-col-9-width: 38.75rem;    /* 620px */
--rail-col-10-width: 41.4375rem; /* 663px */
--rail-col-11-width: 44.125rem;  /* 706px */
--rail-col-12-width: 46.125rem;  /* 738px */
```

### Large Screens (1450px viewport)
```css
--rail-col-1-width: 16.25rem;    /* 260px */
--rail-col-2-width: 20rem;       /* 320px */
--rail-col-3-width: 22.75rem;    /* 364px */
--rail-col-4-width: 25rem;       /* 400px */
--rail-col-5-width: 29.375rem;   /* 470px */
--rail-col-6-width: 32rem;       /* 512px */
--rail-col-7-width: 34.6875rem;  /* 555px */
--rail-col-8-width: 55rem;       /* 880px */
--rail-col-9-width: 62.25rem;    /* 996px */
--rail-col-10-width: 69.5rem;    /* 1112px */
--rail-col-11-width: 76.75rem;   /* 1228px */
--rail-col-12-width: 84rem;      /* 1344px */
```

### Extra Large Screens (1800px viewport)
```css
--rail-col-1-width: 16.25rem;     /* 260px */
--rail-col-2-width: 20rem;        /* 320px */
--rail-col-3-width: 22.75rem;     /* 364px */
--rail-col-4-width: 25rem;        /* 400px */
--rail-col-5-width: 29.375rem;    /* 470px */
--rail-col-6-width: 32rem;        /* 512px */
--rail-col-7-width: 34.6875rem;   /* 555px */
--rail-col-8-width: 70rem;        /* 1120px */
--rail-col-9-width: 79.125rem;    /* 1266px */
--rail-col-10-width: 88.25rem;    /* 1412px */
--rail-col-11-width: 97.375rem;   /* 1558px */
--rail-col-12-width: 106.5rem;    /* 1704px */
```

## Debug Mode Grid Overlay Settings

These settings control the visual appearance of the column grid in debug mode:

### Rack Debug Overlay
```css
/* Common for all breakpoints */
.debug-mode .rack::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-position: 1.5rem 0; /* align with padding */
  border-left: 1.5rem solid rgba(59, 130, 246, 0.025); /* left padding highlight */
  border-right: 1.5rem solid rgba(59, 130, 246, 0.025); /* right padding highlight */
  box-sizing: border-box;
  z-index: 1;
}

/* Small screens (375px viewport) */
@media (min-width: 20rem) {
  .debug-mode .rack::after {
    background-image: 
      repeating-linear-gradient(
        to right,
        rgba(59, 130, 246, 0.05),
        rgba(59, 130, 246, 0.05) calc((100% - 11rem) / 12), /* column width */
        rgba(59, 130, 246, 0.15) calc((100% - 11rem) / 12),
        rgba(59, 130, 246, 0.15) calc((100% - 11rem) / 12 + 1rem) /* column + gap */
      );
  }
}

/* Medium screens (770px viewport) */
@media (min-width: 43.125rem) {
  /* Same pattern as small screens, you can modify this if needed */
}

/* Large screens (1450px viewport) */
@media (min-width: 86rem) {
  /* Same pattern as small screens, you can modify this if needed */
}
```

### Rail Debug Overlay
```css
.debug-mode .rail::after {
  background-image: 
    repeating-linear-gradient(
      to right,
      rgba(139, 92, 246, 0.05),
      rgba(139, 92, 246, 0.05) calc(20rem - 1rem), /* fixed width - gap */
      rgba(139, 92, 246, 0.15) calc(20rem - 1rem),
      rgba(139, 92, 246, 0.15) 20rem /* fixed width */
    );
  border-left: 1.5rem solid rgba(139, 92, 246, 0.025);
  border-right: 1.5rem solid rgba(139, 92, 246, 0.025);
}
```

## How to Apply Changes

After modifying values in this file, you'll need to update them in:

1. `src/styles/main.css` - For the actual column width variables
2. `src/styles/decoration.css` - For the debug mode grid overlay visualization

**Important considerations:**
- Keep the visual grid overlay in `decoration.css` in sync with the actual column widths in `main.css`
- When changing column widths, update both the pixel and percentage values
- Remember to recalculate the correct proportions if you change the padding or available space values 