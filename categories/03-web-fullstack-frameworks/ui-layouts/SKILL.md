---
name: ui-layouts
description: Build creative front-end components, animated layouts, interactive hero sections, bento grids, and UI blocks using UI Layouts (uilayouts.com). Use when building modern React, Next.js, and Tailwind CSS landing pages or web app layouts with high visual impact.
---

# UI Layouts

UI Layouts is a modern component library and design system focused on creative, production-ready frontend layouts. It offers ready-to-use blocks, responsive sections, interactive hover cards, animated carousels, bento grids, and hero designs built with Tailwind CSS, React, and Framer Motion.

- Website: https://uilayouts.com
- GitHub: https://github.com/ui-layouts/uilayouts

---

## When to Use

- Building expressive marketing pages, product showcases, portfolio layouts, or startup landing pages.
- Implementing interactive Bento grids with animated cards, spotlight borders, and expanding drawers.
- Crafting creative hero sections, modern navbar menus, tab switchers, and pricing tables.
- Adding copy-pasteable Tailwind CSS + Framer Motion components with zero bloat.

---

## Installation & Setup

UI Layouts uses modern CLI registry patterns and copy-paste component architecture:

```bash
# Add components using the UI-Layouts CLI or shadcn registry pattern
npx uilayouts add <component-name>

# Core dependencies required:
npm install framer-motion clsx tailwind-merge lucide-react
```

### Tailwind Configuration
Ensure Tailwind CSS is configured to handle animations and custom color variables:

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
      },
    },
  },
  plugins: [],
};
export default config;
```

---

## Key Layout Patterns

### 1. Bento Grid Layout
A high-conversion interactive Bento grid for feature showcases:

```tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function BentoGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto p-4">
      {children}
    </div>
  );
}

export function BentoCard({
  title,
  description,
  className = '',
  icon: Icon,
}: {
  title: string;
  description: string;
  className?: string;
  icon?: any;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl p-8 flex flex-col justify-between ${className}`}
    >
      <div className="flex items-center gap-4">
        {Icon && <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"><Icon className="w-6 h-6" /></div>}
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      </div>
      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
    </motion.div>
  );
}
```

### 2. Animated Tabs & Switchers
Fluid tab bar with animated layout indicator:

```tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function FluidTabs({ tabs }: { tabs: string[] }) {
  const [active, setActive] = useState(tabs[0]);

  return (
    <div className="flex items-center p-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 backdrop-blur-md">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors ${
            active === tab ? 'text-black dark:text-white' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
          }`}
        >
          {active === tab && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-white dark:bg-zinc-700 rounded-full shadow-sm"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
}
```

---

## Best Practices

1. **Composition over Duplication**: Use compound components and props to keep layouts modular.
2. **Spring Physics**: Use natural spring transitions (`stiffness: 300`, `damping: 30`) instead of linear duration for interactive elements.
3. **Dark / Light Contrast**: Use semantic Tailwind classes (`dark:border-zinc-800`, `dark:bg-zinc-900/50`) so layouts look equally crisp in light and dark mode.
