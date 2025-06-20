# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Blog95 is a Windows 95-themed blog application built with React, TypeScript, and the React95 UI library. The application recreates the authentic look and feel of 1990s computing with period-appropriate content about technology trends from that era.

## Key Architecture

### Core Technologies
- **React 19** with TypeScript for modern development
- **React95 UI Library** (@react95/core) for authentic Windows 95 components
- **VT323 Font** from Google Fonts for retro terminal aesthetic
- **React Router** for client-side navigation
- **Vite** for fast development and building

### Component Structure
- **App.tsx**: Main routing setup with two routes (home and article pages)
- **HomePage**: Article listing with Windows 95-style frames and metadata
- **ArticlePage**: Individual article view with hero section, like functionality, and comments
- **mockData.ts**: Contains article and comment interfaces plus 3 period-appropriate tech articles

### UI Design System
- **React95 Components**: Frame (for panels), Button, TextArea, Fieldset
- **React95 Icons**: User3, Date, Mshearts1, Message, Time for authentic iconography
- **Color Scheme**: Classic Windows 95 gray (#c0c0c0) background with blue headers (#000080)
- **Typography**: VT323 monospace font throughout for retro computing feel

### Responsive Design
- **CSS Classes**: `blog-container`, `main-frame`, `article-frame` for layout
- **Mobile-First**: Media queries at 768px and 480px breakpoints
- **Desktop Preserved**: Responsive design doesn't alter desktop layout

## Development Commands

```bash
# Development server
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
- **Base Path**: Configured for `/blog95/` path on GitHub Pages
- **Build Output**: Generated in `dist/` directory with proper asset paths

## Important Implementation Details

### React95 Integration
- Import Win95 theme CSS: `@react95/core/themes/win95.css`
- Components must be imported individually: `Frame`, `Button`, `TextArea`, `Fieldset`
- Icons imported from `@react95/icons`: `User3`, `Date`, `Mshearts1`, etc.

### Font Implementation
- VT323 font applied globally via CSS with monospace fallback
- Larger font sizes (18-22px) used for readability with monospace font
- Responsive font scaling for mobile devices

### Data Structure
- Articles contain: id, title, content, author, publishDate, likes, comments, imageUrl, excerpt
- Comments contain: id, author, content, timestamp
- All data is currently mock data with 1990s tech themes

### Styling Approach
- Global CSS in `index.css` with VT323 font and Windows 95 colors
- Responsive CSS classes for layout without inline media queries
- Mix of CSS classes and inline styles for component-specific styling

## MCP Configuration

Context7 MCP server is configured in `.mcp.json` for enhanced development workflow with up-to-date documentation access.

## Content Theme

Articles are written from a 1990s perspective covering:
- World Wide Web as emerging technology
- CD-ROM as revolutionary storage medium  
- Virtual Reality as the next frontier
- Authentic language and predictions from that era