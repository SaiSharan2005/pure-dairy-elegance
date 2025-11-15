# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Pure Dairy Elegance** is a modern, animation-rich marketing website for a dairy company built with React, TypeScript, Vite, and Tailwind CSS. It features a responsive single-page application with scroll-triggered animations, multiple content sections, and a design-focused approach.

## Development Commands

### Essential Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:8080)
npm run dev

# Build for production
npm build

# Build in development mode (useful for debugging builds)
npm run build:dev

# Preview production build locally
npm run preview

# Run ESLint on the codebase
npm lint
```

**Note:** The project uses Vite with SWC for fast builds and dev server startup.

## Project Structure

```
src/
├── components/
│   ├── ui/                      # 50+ shadcn/ui Radix components (pre-configured)
│   ├── Hero.tsx                 # Hero section with CTA
│   ├── About.tsx                # Mission/about section
│   ├── Products.tsx             # Product showcase with animation
│   ├── WhyUs.tsx                # Value proposition
│   ├── Team.tsx                 # Team section
│   ├── Vision.tsx               # Vision/values statement
│   ├── Regions.tsx              # Regional information
│   ├── Certificates.tsx         # Certifications display
│   ├── Footer.tsx               # Footer with links
│   ├── SplashScreen.tsx         # Logo splash (3s delay on load)
│   └── VideoBackground.tsx      # Video background with scroll detection
├── pages/
│   ├── Index.tsx                # Main landing page (composition of sections)
│   └── NotFound.tsx             # 404 fallback route
├── hooks/
│   ├── use-mobile.tsx           # Mobile viewport detection (<768px)
│   └── use-toast.ts             # Toast notification hook (shadcn)
├── lib/
│   └── utils.ts                 # cn() - className utility for merging Tailwind classes
├── assets/                      # Images and media files
├── App.tsx                      # Root component with providers and routing
├── main.tsx                     # Entry point
├── index.css                    # Global styles and CSS variable design system
└── vite-env.d.ts                # Vite type definitions
```

## Architecture & Key Patterns

### Application Flow

1. **App.tsx** is the root component that sets up providers:
   - React Router (SPA with 2 routes: `/` and `*`)
   - React Query (QueryClientProvider for future data fetching)
   - shadcn UI providers (Tooltip, Toast)
   - Sonner (alternative toast notifications)

2. **Sequential Screen Display:**
   - SplashScreen (3 seconds) → VideoBackground → Main content fade-in
   - Controlled via `showSplash` and `showContent` state

3. **Page Composition:**
   - `Index.tsx` composes 9 feature sections as a single-page landing page
   - Scroll-based navigation using hash anchors (`#home`, `#about`, etc.)
   - Each section is a self-contained, reusable component

4. **Animation Strategy:**
   - Framer Motion for entrance animations and scroll-triggered animations
   - `useInView` hook from Framer Motion for detecting viewport visibility
   - Staggered animation sequences for visual interest
   - CSS keyframes for smooth transitions

### Component Design

- **TypeScript-first:** All components have typed props/interfaces
- **Responsive-first:** Tailwind breakpoints (sm, md, lg) throughout
- **Animation-focused:** Extensive use of Framer Motion `motion.*` components
- **UI Components:** 50+ shadcn/ui components pre-configured but many are unused (available for future features)

### Styling & Design System

**Tailwind CSS** with a comprehensive CSS variable-based design system defined in `src/index.css`:

```css
Colors (HSL format):
- --primary: Deep blue (211, 100%, 28%)
- --secondary: Light gray (210, 40%, 96%)
- --accent: Green (#7cb342)
- --destructive: Red for errors
- Plus light/dark mode variants for background, foreground, cards, etc.

Spacing & Borders:
- --radius: 0.75rem (customizable border radius)
- Container: centered at 2rem padding, max-width 1400px

Animations (Tailwind):
- fade-in, slide-up (custom keyframes)
- accordion-down/up
- All with consistent easing: cubic-bezier(0.4, 0, 0.2, 1)
```

**Dark Mode:** Configured via CSS class (`.dark`), toggle available in shadcn providers.

### Data & State Management

- **Global State:** Minimal - only `showSplash` and `showContent` in App.tsx
- **Component State:** Local `useState` for UI interactions (menus, video loading)
- **React Query:** Configured but not actively used (prepare for backend integration)
- **Static Data:** All content is hardcoded (products array, text sections, etc.)

**No API calls currently - this is a static marketing site.** React Query is ready when backend services are added.

### Form & Validation Libraries (Prepared)

- **react-hook-form** (v7.61.1) - Available but unused
- **Zod** (v3.25.76) - Available for schema validation

These are included for future form implementations.

## MCP Servers

The following MCP (Model Context Protocol) servers are available and connected:

- **chrome-devtools** - Browser automation and DevTools integration for testing and debugging
- **shadcn** - Direct access to shadcn/ui component information and installation

These can be used to streamline development workflows, such as:
- Inspecting and testing UI components in the browser
- Getting real-time information about shadcn/ui components
- Automating browser-based testing

## Important Development Notes

### Path Aliases

Configure with `@` prefix (defined in vite.config.ts and tsconfig.json):
```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";
```

### shadcn/ui Component Installation

To add new shadcn/ui components, they're pre-configured in `components.json`:
```bash
npx shadcn-ui@latest add [component-name]
```
This will generate TypeScript components in `src/components/ui/`.

### Video Background Integration

`VideoBackground.tsx` handles:
- Responsive video container
- Wheel/touch scroll event detection
- Performance optimization for different devices
- Fallback behavior for unsupported formats

### Scroll Animations

Sections use Framer Motion's `useInView` and `AnimatePresence`:
```typescript
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });
```
This ensures animations trigger once when 100px of the element enters viewport.

## Build & Deployment

- **Build Output:** `dist/` directory
- **Build Tool:** Vite (fast builds, optimized output)
- **Production Preview:** `npm run preview` to test production build locally
- **Originally from Lovable:** Uses `lovable-tagger` plugin in dev mode for component tracking

## ESLint Configuration

- Extends TypeScript ESLint + React recommended rules
- Ignores: `dist/` directory
- Key rules:
  - React Hooks rules enforced
  - React Refresh warnings for component exports
  - Unused variables allowed (`no-unused-vars: off`)

## Common Development Tasks

### Adding a New Section

1. Create new component in `src/components/MySection.tsx`
2. Import and add to section list in `src/pages/Index.tsx`
3. Add corresponding scroll anchor link in Header
4. Use Framer Motion `useInView` for entrance animation
5. Style with Tailwind classes using CSS variables from design system

### Updating the Design System

1. Edit `src/index.css` to modify CSS variables
2. Changes automatically apply to all components using `hsl(var(--color-name))`
3. Adjust Tailwind colors in `tailwind.config.ts` if adding new color tokens

### Debugging Animations

- Use Framer Motion DevTools (install separately if needed)
- Check `useInView` margins and thresholds for scroll triggers
- Test on mobile devices using `npm run dev` and mobile browser inspector

### Responsive Design

- Mobile-first approach: style for mobile, then use breakpoints
- Tailwind breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `2xl:` (1400px)
- Use `useMobile` hook for conditional rendering: `const isMobile = useMobile()`

## Performance Considerations

- **Lazy Loading:** Consider adding dynamic imports for heavy components
- **Image Optimization:** Use responsive images with srcset in Hero and Product sections
- **Animation Performance:** Keep animations to 60fps; monitor with DevTools Performance tab
- **Bundle Size:** 50+ unused shadcn/ui components are included - consider tree-shaking in build

## TypeScript Configuration

- Strict mode enabled for type safety
- Vite's TypeScript support via `@vitejs/plugin-react-swc`
- Target: ES2020 (modern browsers)

## Related Configuration Files

- **vite.config.ts** - Dev server on `::1:8080`, SWC React plugin, path alias for `@/`
- **tailwind.config.ts** - Tailwind configuration with custom animations and color system
- **tsconfig.json** - TypeScript compiler options
- **components.json** - shadcn/ui component aliases and Tailwind config reference
- **eslint.config.js** - Linting rules for TypeScript and React
- **package.json** - Dependencies and script definitions
