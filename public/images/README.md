# Image Assets Documentation

This folder contains all the images used throughout the Robotics Club MANIT website, organized by component for easy management.

## Folder Structure

### `/hero` - Hero Section Images

- `robot-main-bg.png` - Main large robot blueprint background
- `robot-right-side.png` - Robot blueprint on the right side
- `robot-top-left.png` - Small decorative robot element (top left)
- `robot-top-center.png` - Small decorative robot element (top center)
- `robot-center-left.png` - Small decorative robot element (center left)
- `robot-top-right.png` - Small decorative robot element (top right)

### `/testimonials` - Testimonials Section Images

- `testimonial-bg.png` - Background decorative element

### `/projects` - Projects Section Images

- `project-bg-1.png` - First project background element
- `project-bg-2.png` - Second project background element

### `/events` - Events Section Images

- `event-bg.png` - Event section background element

### `/achievements` - Achievements Section Images

- `achievement-icon.png` - Achievement decorative icon

### `/footer` - Footer Section Images

- `footer-bg-1.png` - First footer background element
- `footer-bg-2.png` - Second footer background element
- `footer-bg-3.png` - Third footer background element

### `/gallery` - Gallery Section Images

- `gallery-item-1.png` - Gallery showcase item

## Current Image URLs Used

### Hero Section

- Main BG: https://api.builder.io/api/v1/image/assets/TEMP/ae0dd919350d695f0a5d9edf530ddff17252e16f
- Right Side: https://api.builder.io/api/v1/image/assets/TEMP/6e46b4cf75136dd5e44caaa903a48573b2a40909
- Top Left: https://api.builder.io/api/v1/image/assets/TEMP/cf4f1aced408cc9422d231e2950986152b9dd48a
- Top Center: https://api.builder.io/api/v1/image/assets/TEMP/dd60f8e45dbc5e9321c41ce8f864ba1faf662d51
- Center Left: https://api.builder.io/api/v1/image/assets/TEMP/d9bfd6da4f7ea802a85d85a40f9d6ae0eed9b4ed
- Top Right: https://api.builder.io/api/v1/image/assets/TEMP/178a4ea556bce9319a97f9a14ac9077e9358a5da

### Other Components

- Testimonials: https://api.builder.io/api/v1/image/assets/TEMP/80a18452a4ecf699b1d02202b37519eb50ebe39f
- Projects 1: https://api.builder.io/api/v1/image/assets/TEMP/494adaa18d29a7b38394519ef3afb10ede2ddaa0
- Projects 2: https://api.builder.io/api/v1/image/assets/TEMP/be3d56e4868fe021516169bdb957e5c9be275127
- Events: https://api.builder.io/api/v1/image/assets/TEMP/dc954d80bb382046a768c17e994fc2185e53642a
- Achievements: https://api.builder.io/api/v1/image/assets/TEMP/8223e8f6095a50a237f723f12f522c16f5b10b8b
- Footer 1: https://api.builder.io/api/v1/image/assets/TEMP/f14959dd131549e409467ab8a03c4fd0436e4d72
- Footer 2: https://api.builder.io/api/v1/image/assets/TEMP/4b9574484a3b56f17db1373b3267af0814b0c59b
- Footer 3: https://api.builder.io/api/v1/image/assets/TEMP/84366b6c6f3ca33deccc2841234afc3e374289ab
- Gallery: https://api.builder.io/api/v1/image/assets/TEMP/44e6b96006c2063186188e1cdb7da46198c2e1a6

## Instructions for Updating Images

1. Download the images from the URLs above
2. Rename them according to the naming convention in this file
3. Place them in the appropriate folders
4. Update the component files to use the local paths instead of external URLs

Example:

```tsx
// Before
src =
  "https://api.builder.io/api/v1/image/assets/TEMP/ae0dd919350d695f0a5d9edf530ddff17252e16f";

// After
src = "/images/hero/robot-main-bg.png";
```

## Image Position Control

Each image in the Hero section has specific positioning classes:

### Main Robot Background

- Position: `absolute -left-20 -bottom-80`
- Size: `w-[950px] h-[800px]`
- Transform: `rotate(0.186deg)`

### Right Side Robot

- Position: `absolute right-0 top-10`
- Size: `w-[499px] h-[696px]`
- Transform: `rotate(0.186deg)`

### Top Left Robot

- Position: `absolute -left-[200px] -top-[100px]`
- Size: `w-[400px] h-[300px]`
- Transform: `rotate(32.581deg)`

### Top Center Robot

- Position: `absolute left-[200px] -top-[80px]`
- Size: `w-[400px] h-[300px]`
- Transform: `rotate(32.581deg)`

### Center Left Robot

- Position: `absolute -left-[50px] top-[120px]`
- Size: `w-[400px] h-[300px]`
- Transform: `rotate(32.581deg)`

### Top Right Robot

- Position: `absolute right-[200px] -top-[100px]`
- Size: `w-[400px] h-[300px]`
- Transform: `rotate(32.395deg)`

You can modify these positioning values in the respective component files to adjust image placement.
