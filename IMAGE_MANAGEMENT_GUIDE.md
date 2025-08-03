# Image Management Guide for Robotics Club MANIT Website

## Overview
All images used throughout the website have been cataloged and organized for easy management and positioning control.

## Folder Structure Created
```
public/images/
├── hero/                 # Hero section robot images (6 images)
├── testimonials/         # Testimonials background (1 image)
├── projects/            # Projects background elements (2 images)
├── events/              # Events background (1 image)
├── achievements/        # Achievements decoration (1 image)
├── footer/              # Footer background elements (3 images)
├── gallery/             # Gallery items (1 image)
└── README.md            # Detailed documentation
```

## Key Files Created

### 1. `/public/images/README.md`
Complete documentation of all images with:
- Current URLs being used
- Local file naming conventions
- Positioning classes for each image
- Instructions for updating image paths

### 2. `/client/config/images.ts`
TypeScript configuration file containing:
- Centralized image management
- Position, size, and opacity settings for each image
- Helper functions to switch between local and remote images
- Easy way to modify image properties

### 3. `/scripts/download-images.js`
Node.js script to download all images locally:
```bash
node scripts/download-images.js
```

## Image Position Control

### Hero Section Robot Images
The Hero section contains 6 robot images with specific positioning:

1. **Main Background Robot** (`robot-main-bg.png`)
   - Position: `absolute -left-20 -bottom-80`
   - Size: `w-[950px] h-[800px]`
   - Rotation: `0.186deg`

2. **Right Side Robot** (`robot-right-side.png`)
   - Position: `absolute right-0 top-10`
   - Size: `w-[499px] h-[696px]`
   - Rotation: `0.186deg`

3. **Top Left Robot** (`robot-top-left.png`)
   - Position: `absolute -left-[200px] -top-[100px]`
   - Size: `w-[400px] h-[300px]`
   - Rotation: `32.581deg`

4. **Top Center Robot** (`robot-top-center.png`)
   - Position: `absolute left-[200px] -top-[80px]`
   - Size: `w-[400px] h-[300px]`
   - Rotation: `32.581deg`

5. **Center Left Robot** (`robot-center-left.png`)
   - Position: `absolute -left-[50px] top-[120px]`
   - Size: `w-[400px] h-[300px]`
   - Rotation: `32.581deg`

6. **Top Right Robot** (`robot-top-right.png`)
   - Position: `absolute right-[200px] -top-[100px]`
   - Size: `w-[400px] h-[300px]`
   - Rotation: `32.395deg`

## How to Modify Image Positions

### Method 1: Direct Component Editing
Edit the component files directly:
- `/client/components/Hero.tsx` - for hero section images
- `/client/components/Projects.tsx` - for project images
- etc.

### Method 2: Using the Configuration File
1. Modify positions in `/client/config/images.ts`
2. Import and use the helper functions in your components:

```tsx
import { imageConfig, getImageClasses } from '../config/images';

// Usage example
<img
  src={imageConfig.hero.mainBackground.url}
  className={getImageClasses('hero', 'mainBackground')}
  style={{ transform: imageConfig.hero.mainBackground.transform }}
/>
```

## Quick Position Adjustments

### To move images left/right:
- Change `left-[Xpx]` or `right-[Xpx]` values
- Use negative values for positioning outside viewport

### To move images up/down:
- Change `top-[Xpx]` or `bottom-[Xpx]` values
- Use negative values for positioning above viewport

### To resize images:
- Modify `w-[Xpx] h-[Xpx]` values
- Maintain aspect ratio for best results

### To adjust visibility:
- Change `opacity-X` values (10, 20, 30, 40, 50, 60, 70, 80, 90, 100)

## Example Position Changes

```tsx
// Move main robot further left and down
className="absolute -left-[40px] -bottom-[100px] w-[950px] h-[800px] opacity-60"

// Make top robots more visible
className="robot-float absolute -left-[150px] -top-[80px] w-[350px] h-[250px] opacity-95"

// Adjust right side robot position
className="robot-float absolute right-[20px] top-[50px] w-[450px] h-[650px] opacity-85"
```

## Next Steps

1. **Download Images Locally** (Optional):
   ```bash
   node scripts/download-images.js
   ```

2. **Update Component Imports**: Replace external URLs with local paths

3. **Fine-tune Positions**: Modify the positioning classes as needed

4. **Test Responsiveness**: Ensure images look good on all screen sizes

This organization makes it easy to manage all images and their positions from centralized locations while maintaining the visual design of your website.
