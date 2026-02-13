# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a modern React portfolio website for Shimon Shnaider, an IT Support Specialist. The site serves as a recruiting showcase, presenting Shimon's 6+ years of IT experience, technical skills, and proven track record to potential employers.

## Tech Stack

- **Framework**: React 18.3.1 + TypeScript
- **Build Tool**: Vite 5.1.4
- **Styling**: Tailwind CSS 3.4.1 with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: Wouter 2.12.1 (lightweight React router)
- **Icons**: Lucide React
- **Package Manager**: npm

## Project Structure

```
/Users/shim/Documents/itit-main 3/
├── client/                      # Frontend application
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── ui/             # shadcn/ui base components
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── experience-section.tsx
│   │   │   ├── skills-section.tsx
│   │   │   ├── benefits-section.tsx  # Value proposition
│   │   │   ├── projects-section.tsx
│   │   │   ├── contact-section.tsx
│   │   │   ├── nav-menu.tsx
│   │   │   ├── footer.tsx
│   │   │   └── whatsapp-button.tsx  # Floating contact button
│   │   ├── pages/
│   │   │   ├── home.tsx        # Main portfolio page
│   │   │   ├── IT.tsx          # Satirical page (not for production)
│   │   │   └── not-found.tsx
│   │   ├── lib/
│   │   │   ├── constants.ts    # Portfolio data (experience, skills, etc.)
│   │   │   ├── utils.ts        # Utility functions (cn helper)
│   │   │   └── icon.tsx        # Icon components
│   │   ├── hooks/
│   │   │   ├── use-mobile.tsx
│   │   │   └── use-toast.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css           # Global styles and theme
│   ├── index.html
│   └── public/                 # Static assets
├── shared/
│   └── schema.ts               # Database schema (not actively used)
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── components.json             # shadcn/ui configuration
└── tsconfig.json
```

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Code Architecture

### Component Hierarchy

**Main Layout** (`client/src/App.tsx`):
- Wraps application in `TooltipProvider` and `Toaster`
- Implements `Router` component with lazy-loaded `IT` page
- Renders floating `WhatsAppButton` globally

**Home Page** (`client/src/pages/home.tsx`):
- Orchestrates all portfolio sections in order:
  1. HeroSection - Opening with video intro and stats
  2. AboutSection - Personal introduction
  3. ExperienceSection - Career timeline with achievements
  4. SkillsSection - Technical competencies and tools
  5. BenefitsSection - Value proposition with metrics
  6. ProjectsSection - Portfolio projects
  7. ContactSection - Multiple contact methods
- Implements scroll-based animations using Intersection Observer

### Key Design Patterns

1. **Consistent Styling**: All sections use `container mx-auto max-w-6xl` for consistent width
2. **Glass Morphism**: `.glass-card` utility class for frosted glass effect
3. **Section Components**: Each section is self-contained with clear props (data from `constants.ts`)
4. **Scroll Animations**: `.animate-on-scroll` class triggers fade-in animations
5. **Smooth Scrolling**: Custom navigation handler in `nav-menu.tsx` for offset positioning

### Data Structure

All portfolio data is centralized in `client/src/lib/constants.ts`:
- `experience[]` - Work history with responsibilities
- `coreSkills[]` - Skill categories with percentages
- `techBadges[]` - Technology tags
- `softSkills[]` - Soft skill highlights
- `projects[]` - Portfolio projects with images and descriptions
- `certifications[]` - Professional certifications

### Styling System

**Tailwind Configuration** (`tailwind.config.ts`):
- Custom color palette: Primary (cyan-teal), Accent (yellow), dark theme
- Custom fonts: Fraunces (serif) for headings, Space Grotesk (sans-serif) for body
- Custom animations: accordion-down/up, fadeIn, bounce

**Global Styles** (`client/src/index.css`):
- Dark theme with CSS variables
- Radial gradient background
- Custom utility classes (`.glass-card`, `.glass-pill`, `.skill-badge`, `.animate-fade-in`)

**Component Styles**:
- Responsive grid layouts (mobile-first)
- Hover effects with transitions
- Border accents and backdrop blur effects

## Key Features

### Navigation
- Fixed header with scroll-based transparency
- Smooth scrolling to sections with 80px offset
- Mobile-responsive hamburger menu
- Quick call button in header

### Hero Section
- Intro video with YouTube embed (lazy-loaded)
- Three primary CTAs: "Hire Me Now", "See My Results", "Call Now"
- Key metrics display: 99.9% uptime, 95% satisfaction, 40% faster resolution

### Benefits Section
- Six value propositions with icons and metrics
- Each benefit shows: Icon, Title, Stat, Description
- Strong CTA section at bottom

### Contact Section
- Multiple contact methods: Phone, Email, LinkedIn, GitHub, WhatsApp
- Enhanced visual design with hover states
- Prominent "Ready to Get Started?" action panel

### WhatsApp Integration
- Floating button (fixed position, bottom-right)
- Uses React Portal for proper z-index handling
- Pre-filled message: "Hi Shimon"

## Common Development Tasks

### Adding a New Section

1. Create component in `client/src/components/`
2. Add data to `constants.ts` if needed
3. Import and add to `home.tsx` in desired position
4. Add navigation link in `nav-menu.tsx` (both desktop and mobile)
5. Use consistent pattern: container, animate-on-scroll, section styling

### Updating Content

- **Personal info**: Update `constants.ts` (phone, email, social links)
- **Experience**: Edit `experience[]` array in `constants.ts`
- **Skills**: Modify `coreSkills[]`, `techBadges[]`, `softSkills[]` in `constants.ts`
- **Projects**: Update `projects[]` array with new entries
- **Images**: Add to `client/public/images/` and reference in constants

### Modifying Styling

- **Colors**: Update CSS variables in `index.css` or theme colors in `tailwind.config.ts`
- **Typography**: Adjust font families in `tailwind.config.ts`
- **Spacing**: Use Tailwind spacing scale consistently
- **Animations**: Add to `@keyframes` in `index.css` or use Tailwind animation utilities

### Adding New shadcn/ui Components

```bash
# Add a component (e.g., dialog)
npx shadcn-ui@latest add dialog

# Import in your component
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
```

## Important Notes

### The /it Route
The `/it` route loads a satirical "infomercial-style" page that is clearly not production-ready. This appears to be for demonstration purposes only and should not be used in actual recruitment.

### Asset Management
- Images should be optimized before adding to `client/public/`
- Use relative paths from `public/` directory
- Video thumbnail and intro video are YouTube embeds

### Performance Considerations
- The IT page is lazy-loaded to prevent initial bundle bloat
- Intersection Observer used for scroll animations (no external library)
- Vite automatically code-splits components

### Browser Compatibility
- Modern browsers with ES2020+ support
- Uses CSS custom properties (CSS variables)
- Tailwind CSS handles vendor prefixes via Autoprefixer

## Build Configuration

**Vite Config** (`vite.config.ts`):
- React plugin for fast refresh
- Path aliases: `@` → `client/src`, `@shared` → `shared`, `@assets` → `attached_assets`
- Build output: `dist/public` directory
- Root directory: `client/`

## Deployment

The build process creates a static site in `/dist/public/`:
- Deploy to any static hosting (Netlify, Vercel, GitHub Pages, S3, etc.)
- Ensure proper MIME types for `.css` and `.js` files
- Configure SPA routing if needed (all routes should serve `index.html`)

## Best Practices

1. **Keep components focused**: Each section component handles one concern
2. **Use constants**: Centralize data in `constants.ts` for easy updates
3. **Responsive design**: Test on mobile, tablet, and desktop viewports
4. **Accessibility**: Maintain semantic HTML and ARIA labels
5. **Performance**: Lazy-load heavy components (like the IT page)
6. **Consistency**: Follow existing patterns for spacing, typography, and animations