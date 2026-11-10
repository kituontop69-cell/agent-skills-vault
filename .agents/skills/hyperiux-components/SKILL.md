---
name: hyperiux-components
description: Add immersive animation effects, scroll systems, cursor dynamics, text reveals, and WebGL/3D scenes to Next.js and React using Hyperiux Vault and the Hyperiux CLI/MCP server. Use when creating high-end immersive digital experiences with GSAP, Three.js, and Framer Motion.
---

# Hyperiux Components

Hyperiux Vault is a premier collection of animation effects and interactive UI components for Next.js and React. It provides CLI-installable visual experiences powered by GSAP, Three.js, and Framer Motion, along with an official Model Context Protocol (MCP) server.

- Website: https://hyperiux.com
- GitHub: https://github.com/Hyperiux-Immersion-Labs/hyperiux-components
- CLI & MCP Package: `hyperiux` on npm

---

## When to Use

- Adding studio-grade animation effects (e.g. `spider-particles`, `milky-way`, `spotlight-reveal`, `magnetic-distortion`).
- Implementing scroll-driven story sequences, immersive full-screen menus, and page transition loaders.
- Integrating 3D canvas and WebGL shaders into Next.js projects with single-command CLI scaffolding.
- Interacting with Hyperiux components via MCP (`hyperiux-mcp-server`) in coding agents.

---

## CLI Installation & Setup

### 1. Initialize Hyperiux in your project
```bash
npx hyperiux init
```

### 2. Add Specific Effects
```bash
# Add particle scenes
npx hyperiux add spider-particles
npx hyperiux add milky-way

# Add navigation & interaction effects
npx hyperiux add immersive-full-screen-nav
npx hyperiux add magnetic-button
npx hyperiux add kinetic-text-reveal
```

### 3. Dependencies
Hyperiux components leverage GSAP and Three.js where applicable:
```bash
npm install gsap @gsap/react three @types/three framer-motion
```

---

## MCP Server Integration

Hyperiux distributes an official MCP server for AI coding assistants:

```json
{
  "mcpServers": {
    "hyperiux": {
      "command": "npx",
      "args": ["-y", "hyperiux", "mcp"]
    }
  }
}
```

---

## Component Example: Spider Particles

```tsx
'use client';

import { useEffect, useRef } from 'react';
import SpiderParticles from '@/components/hyperiux/spider-particles';

export function InteractiveBanner() {
  return (
    <div className="relative w-full h-[600px] bg-neutral-950 overflow-hidden flex items-center justify-center">
      {/* Spider Particle Interaction Canvas */}
      <SpiderParticles
        particleCount={70}
        connectionDistance={120}
        particleColor="#ff5f00"
        lineColor="rgba(255, 95, 0, 0.2)"
        interactive={true}
        className="absolute inset-0"
      />

      <div className="relative z-10 text-center px-6">
        <span className="text-xs uppercase tracking-widest text-[#ff5f00] font-mono">
          Hyperiux Immersion
        </span>
        <h1 className="mt-3 text-5xl font-black text-white tracking-tight">
          Next-Gen Interface Physics
        </h1>
        <p className="mt-4 text-neutral-400 max-w-lg mx-auto">
          High-performance canvas animations and GSAP interactions built for creative developers.
        </p>
      </div>
    </div>
  );
}
```

---

## Best Practices

1. **Clean up GSAP Contexts**: Always wrap GSAP animations in `useGSAP` from `@gsap/react` to ensure proper garbage collection and prevent memory leaks during client-side navigation.
2. **Three.js Disposal**: Ensure geometries, materials, and textures are disposed in `useEffect` cleanup return functions.
3. **SSR Guard**: Mark all Hyperiux component entrypoints with `'use client'` in Next.js App Router.
