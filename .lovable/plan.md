

# Redesign Services & Gallery Sections

## Problem
Currently there are 9 service cards in a 3x3 grid and 6 gallery images in a 3x2 grid -- too many blocks making the page feel repetitive and cluttered.

## Services Section Changes

**Reduce from 9 to 6 cards** by grouping related services:
- Merge "Weight Loss" + "Immunity" + "Acne Control" (the 3 "new" highlighted items) into a single featured card
- Keep the 6 core services but redesign the layout

**New layout -- Bento grid style:**
- Row 1: 1 large featured card (spans 2 columns) + 1 regular card
- Row 2: 1 regular card + 1 large featured card (spans 2 columns)
- Row 3: 3 equal cards (the "new" treatments grouped visually)

This creates visual hierarchy and breaks the monotonous grid pattern. The large cards will show the image as a full background with text overlaid, while smaller cards keep the current stacked layout.

**Visual improvements:**
- Taller image areas on featured cards (full-height background with gradient overlay)
- Subtle reveal animation staggered per card
- Remove redundant descriptions on smaller cards (title + short tagline only)

## Gallery Section Changes

**Reduce from 6 to 4 images** in a masonry-style layout:
- 1 tall image (spans 2 rows, left side)
- 2 small images (stacked right side, top)
- 1 wide image (spans full width or 2 columns, bottom)

This creates a magazine-style look that is much more visually striking than a uniform grid.

## Technical Details

### Files to modify
- `src/components/ServicesSection.tsx` -- restructure grid to bento layout, reduce to 6 services, add size variants
- `src/components/GallerySection.tsx` -- reduce to 4 images, implement masonry/asymmetric grid layout
- `src/index.css` -- add any utility classes needed for the bento grid

### No changes needed to
- Translation files (existing keys still work, just fewer items displayed)
- Backend / database
- Other components

