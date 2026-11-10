---
name: canvas-ui
description: Build interactive WebGL/WebGPU canvas overlays, fluid simulations, particle effects, and 3D scenes over live HTML elements using Canvas UI (canvasui.dev). Use when adding creative canvas effects, fluid interactions, or shader backdrops to React, Vue, Svelte, or vanilla web apps.
---

# Canvas UI

An open-source library of creative, framework-agnostic components drawn on canvas. It renders fluid simulations, shader effects, and 3D scenes that run seamlessly over live, fully interactive HTML interfaces using WebGL or WebGPU.

- Official Docs: https://canvasui.dev/docs
- Components & Playground: https://canvasui.dev/playground
- GitHub: https://github.com/DavidHDev/canvas-ui

---

## When to Use

- Adding interactive fluid or liquid distortion effects behind or over text, buttons, and hero banners.
- Creating particle networks, magnetic vortices, or interactive pointer-following canvas layers.
- Enhancing landing pages, marketing sites, and product showcases with high-performance WebGL/WebGPU visual experiences.
- Delivering interactive visual effects without blocking pointer events or breaking semantic HTML/a11y.

---

## Installation & Setup

### CLI / Package Install
```bash
# Add components directly via CLI (recommended)
npx canvas-ui add <component-name>

# Or install core package
npm install canvas-ui
# pnpm add canvas-ui
# bun add canvas-ui
```

Supports **React**, **Vue**, **Svelte**, **Solid**, and **Vanilla JS**.

---

## Key Components & Usage Patterns

### 1. Fluid Simulation Backdrop
Renders interactive fluid dynamics reacting to mouse or touch movement:

```tsx
import { FluidCanvas } from '@/components/canvas-ui/fluid';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Interactive Canvas */}
      <FluidCanvas
        densityDissipation={0.98}
        velocityDissipation={0.99}
        pressure={0.8}
        curl={30}
        splatRadius={0.25}
        colorPalette={['#ff3b30', '#ff9500', '#5856d6']}
        className="absolute inset-0 pointer-events-auto"
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pointer-events-none">
        <h1 className="text-6xl font-bold tracking-tight">Experience Fluidity</h1>
        <p className="mt-4 text-xl text-zinc-400">Interactive canvas layers directly over DOM elements.</p>
        <button className="mt-8 px-6 py-3 rounded-full bg-white text-black font-medium pointer-events-auto hover:scale-105 transition-transform">
          Get Started
        </button>
      </div>
    </div>
  );
}
```

### 2. Particle Vortex / Magnetic Particles
Canvas layer that responds to cursor velocity and proximity:

```tsx
import { ParticleField } from '@/components/canvas-ui/particles';

<ParticleField
  count={800}
  speed={0.5}
  particleSize={1.5}
  interactiveRadius={120}
  magneticForce={0.4}
  color="#ffffff"
  className="absolute inset-0 z-0"
/>
```

---

## Best Practices

1. **Pointer Events Discipline**: Set canvas overlays to `pointer-events-none` if users need to click links/buttons underneath, or let the canvas listen to window-level mouse move events while remaining visually layered.
2. **Device Pixel Ratio (DPR)**: Clamp DPR between `1` and `2` on high-DPI (Retina) screens to prevent GPU memory pressure and battery drain on mobile devices:
   ```ts
   const dpr = Math.min(window.devicePixelRatio || 1, 2);
   ```
3. **Visibility & Performance**: Pause canvas rendering loops (`requestAnimationFrame`) when the element is off-screen using `IntersectionObserver`, or when `document.hidden` is true.
4. **Reduced Motion**: Respect `prefers-reduced-motion` by reducing simulation velocities or providing static fallback CSS gradients.
