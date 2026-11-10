---
name: trickle-ui
description: Add pure-CSS, zero-runtime, SSR-safe text animations (shimmer text, wave effects, blur fade, kinetic typography) to React and Next.js using Trickle UI Kit (tricklekit.dev). Use when animating headings, hero titles, or marketing copy without adding heavy client-side JavaScript runtimes.
---

# Trickle UI Kit

Trickle is a pure-CSS text-animation library for React and Next.js distributed shadcn-style. It provides 47 hand-tuned text-animation primitives with zero runtime JavaScript dependencies, <1kb median bundle size, and full SSR safety by construction.

- Website & Catalog: https://tricklekit.dev/#catalog
- Installation Reference: https://tricklekit.dev/#install
- GitHub: https://github.com/akaieuan/trickle-UI-kit

---

## When to Use

- Animating titles, hero text, value propositions, and badges on marketing pages or dashboards.
- Avoiding heavy JS bundle bloat (like adding 30kb Framer Motion just to fade in a headline).
- Requiring 100% Server Component compatibility (`React Server Component` friendly with no `'use client'` needed for 42 of 47 components).
- Eliminating layout shifts, hydration flickers, and flash of unstyled content (FOUC).

---

## Installation

Add components directly via the standard shadcn CLI:

```bash
# Install specific text animations
npx shadcn@latest add "https://tricklekit.dev/r/shimmer-text"
npx shadcn@latest add "https://tricklekit.dev/r/blur-fade-text"
npx shadcn@latest add "https://tricklekit.dev/r/wave-text"
npx shadcn@latest add "https://tricklekit.dev/r/typewriter"
npx shadcn@latest add "https://tricklekit.dev/r/decrypt-scramble"
```

---

## Key Animation Primitives

### 1. Shimmer Text (Server Component)
Pure CSS light-sweep effect across text:

```tsx
import { ShimmerText } from '@/components/ui/shimmer-text';

export default function Hero() {
  return (
    <h1 className="text-5xl font-bold tracking-tight">
      Build with <ShimmerText shimmerColor="#ff5f00">Pure Velocity</ShimmerText>
    </h1>
  );
}
```

### 2. Wave Text (Server Component)
Per-character staggered wave animation using CSS custom properties:

```tsx
import { WaveText } from '@/components/ui/wave-text';

<WaveText
  text="Crafting modern digital products."
  className="text-2xl font-medium text-neutral-800 dark:text-neutral-200"
  duration={1.2}
  staggerDelay={0.04}
/>
```

### 3. Decrypt Scramble (Interactive / Client Component)
Matrix/hacker-style text decryption reveal:

```tsx
'use client';

import { DecryptScramble } from '@/components/ui/decrypt-scramble';

<DecryptScramble
  text="SYSTEM SECURE & OPERATIONAL"
  speed={30}
  characters="0123456789ABCDEF!@#$%"
  className="font-mono text-emerald-400 text-sm tracking-wider"
/>
```

### 4. Word Rotate
Rotating keyword carousel for hero subheadings:

```tsx
'use client';

import { WordRotate } from '@/components/ui/word-rotate';

<div className="flex items-center gap-2 text-3xl font-semibold">
  <span>Design for</span>
  <WordRotate words={['Modern Web', 'Performance', 'Delight', 'Scale']} />
</div>
```

---

## Why Trickle vs Traditional Animation Libraries

| Criterion | Trickle UI Kit | Traditional JS Libraries (Framer Motion / Spring) |
| :--- | :--- | :--- |
| **Runtime JS** | **0 KB** (pure CSS keyframes) | 30KB - 50KB runtime bundle |
| **Server Components** | **Yes** (Runs on Server) | Requires `'use client'` on parents |
| **SSR Hydration** | **Zero flash** (HTML rendered with classes) | Risk of hydration mismatch / flicker |
| **Battery & GPU** | Composited GPU animation thread | Main JavaScript execution thread |

---

## Best Practices

1. **Keep it Pure CSS**: Favor Trickle's 42 pure-CSS server components over client-orchestrated ones whenever static keyframes achieve the visual goal.
2. **Accessible Contrast**: Ensure shimmer gradients maintain minimum 4.5:1 contrast against the background at all points in the animation sweep.
3. **Respect Reduced Motion**: Trickle natively respects `@media (prefers-reduced-motion: reduce)` by disabling loop keyframes and displaying the final readable text immediately.
