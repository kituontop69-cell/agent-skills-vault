---
name: motion-primitives
description: Use when building or enhancing React frontend interfaces with animations. Covers animated UI elements, text effects, cursor interactions, page transitions, and micro-interactions using the Motion-Primitives component library built on motion.dev and Tailwind CSS.
version: 1.0.0
user-invocable: true
argument-hint: "[add <component>|list|animate|design] [target]"
allowed-tools:
  - Bash(npx motion-primitives *)
---

Motion-Primitives is an open-source library of 33 animated React components built with [motion.dev](https://motion.dev) and Tailwind CSS. Use this skill when the user wants animated UIs, micro-interactions, or polished motion design in a React project.

## Quick Install

```bash
npx motion-primitives add <component-name>
```

The CLI detects your package manager (npm/yarn/pnpm), creates `components/motion-primitives/`, installs `motion` as a dependency, and outputs ready-to-use component files.

## Component Catalog

### Text Effects

| Component | Description |
|---|---|
| `text-morph` | Characters morph between strings with spring physics. Great for headlines, stats, or any text that changes value. |
| `text-effect` | Per-character staggered animation on mount. Use for hero text, section headings, call-to-action copy. |
| `text-loop` | Cycles through an array of phrases with configurable interval and animation. Ideal for taglines, value props, rotating features. |
| `text-roll` | Characters roll like an odometer between states. Use for counters, timers, price displays. |
| `text-scramble` | Scrambles characters during transitions (Matrix-style). Use for loading states, reveal effects, suspense. |
| `text-shimmer` | Metallic shimmer animation sweeping across text. Use for premium/featured content, special offers. |
| `text-shimmer-wave` | Wave-like shimmer that cascades through text. Use for attention-grabbing headings. |
| `spinning-text` | Text rotates with a 3D spin effect. Use for logos, decorative headings. |

### Interactive Elements

| Component | Description |
|---|---|
| `magnetic` | Elements follow cursor with magnetic attraction. Use for buttons, cards, icons to create tactile feel. |
| `tilt` | 3D perspective tilt on hover with configurable rotation. Use for cards, product images, tiles. |
| `spotlight` | Radial gradient follows cursor over parent. Use for pricing cards, feature grids, hero sections. |
| `glow-effect` | Configurable animated glow with multiple modes (rotate, pulse, breathe, colorShift, flowHorizontal, static). Use for hero backgrounds, cards, CTAs. |
| `cursor` | Custom animated cursor replacement. Use for immersive brand experiences. |
| `border-trail` | Animated border following element edges. Use for focused states, hover effects, loading indicators. |
| `in-view` | Triggers animations when elements enter viewport. Use for scroll-triggered reveals, lazy animations. |

### Layout & Navigation

| Component | Description |
|---|---|
| `animated-background` | Shared background that morphs between elements on click/hover. Use for tabs, nav items, segmented controls, mode toggles. |
| `animated-group` | Staggered entrance animations with 10 presets (fade, slide, scale, blur, blur-slide, zoom, flip, bounce, rotate, swing). Use for lists, grids, galleries. |
| `animated-number` | Numbers count up/down with spring physics. Use for stats, KPIs, dashboards. |
| `sliding-number` | Numbers slide up/down like an odometer. Use for counters, timers, prices. |
| `accordion` | Collapsible sections with smooth expand/collapse. Use for FAQs, menus, settings panels. |
| `carousel` | Draggable carousel with spring physics. Use for testimonials, product showcases, image galleries. |
| `infinite-slider` | Auto-scrolling infinite carousel. Use for logos, partners, features marquee. |
| `scroll-progress` | Visual scroll position indicator. Use for long-form articles, documentation pages. |

### Overlays & Modals

| Component | Description |
|---|---|
| `dialog` | Modal with animated enter/exit transitions. Use for signups, confirmations, detail views. |
| `morphing-dialog` | Dialog morphs from its trigger element. Use for expand-on-click patterns, image lightboxes. |
| `morphing-popover` | Popover morphs from its trigger. Use for dropdowns, tooltips, context menus. |
| `disclosure` | Show/hide content with animated transitions. Use for read-more, expandable sections, filter panels. |
| `transition-panel` | Panel with smooth state-to-state transitions. Use for multi-step forms, onboarding flows, wizard UIs. |

### Visual Effects

| Component | Description |
|---|---|
| `dock` | macOS-style dock with magnification on hover. Use for icon bars, action menus, bottom navigation. |
| `image-comparison` | Split-view slider comparing two images. Use for before/after, product comparisons, transformations. |
| `progressive-blur` | Gradient blur that increases with scroll position. Use for content fades, depth of field, overlays. |
| `toolbar-dynamic` | Toolbar that appears/disappears based on scroll or interaction. Use for floating action bars, context menus. |
| `toolbar-expandable` | Expandable toolbar revealing hidden options. Use for rich text editors, action bars, filter panels. |

### UI Basics (wrappers)

| Component | Description |
|---|---|
| `button` | Styled button base with interactive states. |
| `input` | Styled input base. |
| `label` | Styled label base. |
| `tooltip` | Basic tooltip with hover trigger. |

## Usage Patterns

### Adding a Component

```bash
npx motion-primitives add accordion
```

This places the component at `components/motion-primitives/accordion.tsx`. Import and use:

```tsx
import { Accordion } from '@/components/motion-primitives/accordion';

export default function FAQ() {
  return (
    <Accordion>
      <div data-value="item-1">What is this?</div>
      <div data-value="item-2">How does it work?</div>
    </Accordion>
  );
}
```

### cn Utility Requirement

Most components depend on a `cn` utility at `@/lib/utils`. If your project uses shadcn/ui, this already exists. Otherwise create it:

```bash
npm install clsx tailwind-merge
```

```ts
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Staggered List Animation

```tsx
import { AnimatedGroup } from '@/components/motion-primitives/animated-group';

<AnimatedGroup preset="blur-slide" className="grid grid-cols-3 gap-4">
  {items.map((item) => (
    <Card key={item.id}>{item.title}</Card>
  ))}
</AnimatedGroup>
```

Available presets: `fade`, `slide`, `scale`, `blur`, `blur-slide`, `zoom`, `flip`, `bounce`, `rotate`, `swing`.

### Animated Tabs Background

```tsx
import { AnimatedBackground } from '@/components/motion-primitives/animated-background';

<AnimatedBackground
  className="bg-accent rounded-lg"
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  enableHover
>
  <button data-id="tab-1">Home</button>
  <button data-id="tab-2">About</button>
  <button data-id="tab-3">Contact</button>
</AnimatedBackground>
```

### Magnetic Button

```tsx
import { Magnetic } from '@/components/motion-primitives/magnetic';

<Magnetic intensity={0.6} range={100} springOptions={{ stiffness: 26.7, damping: 4.1, mass: 0.2 }}>
  <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground">
    Hover Me
  </button>
</Magnetic>
```

### Glow Hero Section

```tsx
import { GlowEffect } from '@/components/motion-primitives/glow-effect';

<div className="relative overflow-hidden rounded-2xl p-12">
  <GlowEffect
    colors={['#FF5733', '#33FF57', '#3357FF']}
    mode="rotate"
    blur="strong"
    duration={5}
  />
  <div className="relative z-10">
    <h1>Build beautiful interfaces</h1>
  </div>
</div>
```

### Tilt Card

```tsx
import { Tilt } from '@/components/motion-primitives/tilt';

<Tilt rotationFactor={15} springOptions={{ stiffness: 300, damping: 20 }}>
  <div className="rounded-xl bg-card p-6 shadow-lg">
    <img src="/product.png" alt="Product" />
  </div>
</Tilt>
```

### Spotlight Grid

```tsx
import { Spotlight } from '@/components/motion-primitives/spotlight';

<div className="relative overflow-hidden rounded-xl bg-card p-8">
  <Spotlight size={300} springOptions={{ bounce: 0 }} />
  <div className="relative z-10">
    <h3>Pro Plan</h3>
    <p>$29/month</p>
  </div>
</div>
```

### Text Morph Counter

```tsx
import { TextMorph } from '@/components/motion-primitives/text-morph';

<TextMorph
  transition={{ type: 'spring', stiffness: 280, damping: 18, mass: 0.3 }}
>
  {String(count)}
</TextMorph>
```

## Design Decision Guide

When choosing components, follow these heuristics:

- **Hero sections:** `GlowEffect` + `AnimatedGroup` (preset: `blur-slide`) + `TextMorph`
- **Pricing cards:** `Spotlight` + `Tilt` + `BorderTrail`
- **Feature grids:** `AnimatedGroup` (preset: `zoom`) with staggered children
- **Navigation:** `AnimatedBackground` for tabs, `Dock` for icon bars
- **Modals/dialogs:** `MorphingDialog` when expanding from a trigger, `Dialog` otherwise
- **Data displays:** `AnimatedNumber` for stats, `TextRoll` for prices, `TextScramble` for loading
- **Scroll storytelling:** `InView` for reveal triggers, `ScrollProgress` for reading progress, `ProgressiveBlur` for content fades
- **Tactile interactions:** `Magnetic` on buttons, `Tilt` on cards, `Spotlight` on hover areas

## Dependencies

All components require:

```
motion  (motion/react)
```

Some components additionally require:

```
react-use-measure  (for infinite-slider, sliding-number, toolbar-expandable)
```

The CLI auto-installs these when you `npx motion-primitives add <component>`.

## Notes

- All components are `'use client'` — they require a React client component context.
- Components use `@/lib/utils` for the `cn` helper. Create this file if it doesn't exist.
- The library is in beta. Components are updated regularly.
- Documentation: https://motion-primitives.com/docs
- Source: https://github.com/ibelick/motion-primitives
