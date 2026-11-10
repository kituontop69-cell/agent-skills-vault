---
name: paper-shaders
description: Implement zero-dependency WebGL/Canvas shader effects (mesh gradients, dot orbits, grain noise, liquid shaders) using Paper Shaders (@paper-design/shaders-react). Use when crafting organic, tactile background animations, mesh gradients, or textured lighting for modern web interfaces.
---

# Paper Shaders

Zero-dependency canvas shaders that can be installed from npm or designed in Paper. Provides GPU-accelerated mesh gradients, dot orbits, fluid textures, grain noise, and generative lighting for React and vanilla web applications.

- Documentation & Interactive Examples: https://shaders.paper.design/
- GitHub: https://github.com/paper-design/shaders

---

## When to Use

- Creating fluid, high-fidelity mesh gradients for heroes, card backgrounds, or modal backdrops.
- Adding organic orbital particle systems (`DotOrbit`) or textured grain/noise overlays.
- Replacing heavy video loops or static raster images with lightweight, code-driven WebGL canvas shaders.
- Generating modern, tactile web design aesthetics (paper textures, soft organic lighting, editorial gradients).

---

## Installation

```bash
# For React / Next.js
npm install @paper-design/shaders-react
# pnpm add @paper-design/shaders-react
# bun add @paper-design/shaders-react

# For Vanilla JavaScript / Vite
npm install @paper-design/shaders
```

> **Note**: Pin your dependency version (`0.0.x`) to prevent unexpected API changes between releases.

---

## Components & Code Recipes

### 1. Mesh Gradient
Generates an organic, flowing mesh gradient shader:

```tsx
'use client';

import { MeshGradient } from '@paper-design/shaders-react';

export function MeshGradientBackground() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl">
      <MeshGradient
        colors={['#5100ff', '#00ff80', '#ffcc00', '#ea00ff']}
        distortion={0.8}
        swirl={0.6}
        speed={0.15}
        grain={0.05}
        className="w-full h-full"
      />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/10 backdrop-blur-[1px]">
        <h2 className="text-4xl font-bold">Paper Shaders</h2>
        <p className="mt-2 text-zinc-200">Zero-dependency canvas shaders running on WebGL.</p>
      </div>
    </div>
  );
}
```

### 2. Dot Orbit
Orbital particles rotating along generative gravitational curves:

```tsx
import { DotOrbit } from '@paper-design/shaders-react';

<DotOrbit
  colors={['#d2822d', '#0c3b7e', '#b31a57', '#37a066']}
  particleCount={120}
  orbitRadius={180}
  speed={0.3}
  blur={0.2}
  style={{ width: '100%', height: '400px' }}
/>
```

---

## Optimization & Integration Tips

- **Next.js App Router**: Mark components containing `@paper-design/shaders-react` with `'use client'` at the top since WebGL requires DOM canvas access.
- **Aspect Ratio & Sizing**: Always ensure the container has explicit width and height (e.g. `w-full h-full`, `min-h-[400px]`) or CSS styles.
- **Grain & Contrast**: Use subtle grain values (`0.03` - `0.08`) to prevent banding in dark gradients while preserving performance.
- **Power Consumption**: Keep `speed` values low (`0.1` - `0.3`) for smooth, elegant, ambient motion that keeps GPU usage minimal.
