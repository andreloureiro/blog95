# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Blog95 is a Windows 95-themed blog application built with React, TypeScript, and the React95 UI library. The application recreates the authentic look and feel of 1990s computing with period-appropriate content about technology trends from that era.

## Key Architecture

### Core Technologies
- **React 19** with TypeScript for modern development
- **React95 UI Library** (@react95/core v9.3.1) for authentic Windows 95 components
- **MS Sans Serif Font** from React95 GlobalStyle for authentic Windows 95 typography
- **React Router** for client-side navigation with basename support for GitHub Pages
- **Vite** for fast development and building

### Component Structure
- **App.tsx**: Main routing setup with three routes (home, article, and guestbook pages)
- **HomePage**: Article listing with Windows 95-style frames, metadata, and guestbook link
- **ArticlePage**: Individual article view with hero section, like functionality, and interactive comments
- **GuestbookPage**: Visitor guestbook with form submission and visitor counter
- **GuestbookForm**: Reusable form component with validation and success feedback

### Data Architecture
- **mockData.ts**: Contains article and comment interfaces plus 3 period-appropriate tech articles
- **guestbookData.ts**: Mock guestbook entries with visitor counter and TypeScript interfaces
- All data is currently mock data with authentic 1990s tech themes and language

### UI Design System
- **React95 Components**: Frame (for panels), Button, TextArea, Fieldset for authentic Windows 95 UI
- **React95 Icons**: User3, Date, Mshearts1, Message, Time for period-appropriate iconography
- **Color Scheme**: Classic Windows 95 gray (#c0c0c0) background with blue headers (#000080)
- **Typography**: MS Sans Serif font stack with explicit font-family declarations

### Font Implementation (Critical)
- **React95 GlobalStyle**: Must be imported in App.tsx to load MS Sans Serif font data
- **Type Declaration**: Custom `react95-globalstyle.d.ts` file required to resolve TypeScript imports
- **CSS Font Stack**: Explicit font-family declarations in index.css target 'MS Sans Serif 8pt', 'MS Sans Serif', 'Microsoft Sans Serif'
- **Import Pattern**: Both `@react95/core/GlobalStyle` and `@react95/core/themes/win95.css` must be imported

### Responsive Design
- **CSS Classes**: `blog-container`, `main-frame`, `article-frame`, `guestbook-entries` for layout
- **Mobile-First**: Media queries at 768px and 480px breakpoints
- **Desktop Preserved**: Responsive design maintains desktop layout integrity
- **Guestbook Responsive**: Special handling for guestbook entry metadata on mobile

## Development Commands

```bash
# Development server (runs on localhost:5173)
npm run dev

# Production build (includes TypeScript compilation)
npm run build

# Linting
npm run lint

# Preview production build
npm run preview

# Deploy to GitHub Pages (manual)
npm run deploy
```

## Deployment

The application is configured for GitHub Pages deployment:

- **Automatic Deployment**: GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically deploys on push to main branch
- **Manual Deployment**: Use `npm run deploy` for manual deployment via gh-pages
- **Base Path**: Configured for `/blog95/` path on GitHub Pages via `vite.config.ts`
- **Build Output**: Generated in `dist/` directory with proper asset paths
- **Router Configuration**: Uses `import.meta.env.BASE_URL` for basename in React Router

## Critical Implementation Details

### React95 Integration Requirements
- **GlobalStyle Import**: Must import `@react95/core/GlobalStyle` for font data (creates ~485KB CSS bundle)
- **Theme CSS**: Import `@react95/core/themes/win95.css` for component styling
- **Component Imports**: Components must be imported individually: `{ Frame, Button, TextArea, Fieldset }`
- **Icon Imports**: Icons from `@react95/icons`: `{ User3, Date as DateIcon, Mshearts1, Message, Time }`

### Font System Architecture
- **GlobalStyle Dependency**: React95 GlobalStyle provides @font-face declarations but doesn't set font-family
- **CSS Override Required**: Must explicitly declare font-family in CSS to apply loaded fonts
- **TypeScript Support**: Custom type declaration file prevents compilation errors
- **Font Fallback Chain**: MS Sans Serif 8pt → MS Sans Serif → Microsoft Sans Serif → sans-serif

### Router Configuration
- **Basename Support**: Router uses `basename={import.meta.env.BASE_URL}` for GitHub Pages deployment
- **Three Routes**: `/` (home), `/article/:id` (articles), `/guestbook` (visitor guestbook)
- **Dynamic Routing**: Article pages use URL parameters for article ID

### Build System Specifics
- **TypeScript Compilation**: `tsc -b` runs before Vite build
- **Asset Handling**: Vite config sets `assetsDir: 'assets'` for proper asset organization
- **Base Path**: Vite config sets `base: '/blog95/'` for GitHub Pages subdirectory deployment

## MCP Configuration

Context7 MCP server is configured in `.mcp.json` for enhanced development workflow with up-to-date documentation access.

## Content Theme

Articles and guestbook entries are written from an authentic 1990s perspective covering:
- World Wide Web as emerging technology
- CD-ROM as revolutionary storage medium  
- Virtual Reality as the next frontier
- Authentic language, predictions, and enthusiasm from that era
- Visitor counter and guestbook features typical of 1990s websites

## Common Issues

### Font Not Loading
- Ensure both `@react95/core/GlobalStyle` import and explicit CSS font-family declarations are present
- Check that `react95-globalstyle.d.ts` type declaration exists
- Verify CSS bundle size is ~485KB (indicates fonts are loaded)

### Build Failures
- TypeScript compilation must pass before Vite build
- React95 GlobalStyle import requires custom type declaration
- Ensure all React95 components are imported correctly

### GitHub Pages Deployment
- Router basename must match Vite base configuration
- Assets must be generated with correct paths for subdirectory deployment