# QYURO Landing Page - React Application

This is a React conversion of the QYURO landing page, built with Vite for fast development and optimized builds.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
├── public/
│   ├── index.html          # Main HTML template
│   └── [images]            # All image assets
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── FeaturesDetail.jsx
│   │   ├── Communicate.jsx
│   │   ├── Understand.jsx
│   │   ├── Reframe.jsx
│   │   ├── QyuroCity.jsx
│   │   ├── InnerSigns.jsx
│   │   ├── FAQs.jsx
│   │   └── Footer.jsx
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── styles.css           # Global styles
├── package.json
└── vite.config.js
```

## Features

- Modern React with functional components
- Vite for fast development and builds
- Responsive design maintained from original
- Component-based architecture
- All original styling preserved

## Notes

- All images should be placed in the `public/` folder
- Image paths in components use `/` prefix to reference public folder
- CSS animations and responsive breakpoints are preserved
