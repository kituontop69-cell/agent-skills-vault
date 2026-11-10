---
name: cursify
description: Build animated, interactive custom cursors, magnetic cursor tracking, particle trails, spotlight pointers, and fluid text cursors using Cursify for React and Next.js. Use when crafting interactive desktop pointer animations and micro-interactions.
---

# Cursify

Cursify is a dedicated cursor animation and interaction library for React and Next.js created by UI-Layouts. It provides spring-based cursor followers, magnetic attraction to interactive elements, particle trails, cursor spotlights, and fluid text cursors.

- Website: https://cursify.vercel.app
- GitHub: https://github.com/ui-layouts/cursify

---

## When to Use

- Replacing the standard operating system cursor with a customized, smooth-lagging follower.
- Creating magnetic snap effects where the cursor snaps to buttons, links, or cards on hover.
- Adding particle trails, glowing spotlight halos, or expanding lens effects that track pointer movement.
- Implementing contextual cursor states (e.g. changing cursor text or icon when hovering over images, videos, or draggable sliders).

---

## Installation & Setup

```bash
# Install core animation dependencies
npm install framer-motion clsx tailwind-merge
# pnpm add framer-motion clsx tailwind-merge
```

---

## Core Components & Recipes

### 1. Spring-Follower Smooth Cursor
A buttery smooth trailing cursor dot with spring physics:

```tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function SmoothCursor() {
  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics
  const springX = useSpring(cursorX, { stiffness: 450, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 450, damping: 28 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-900/30 dark:border-white/40 bg-zinc-900/10 dark:bg-white/10 backdrop-blur-[1px]"
      style={{
        x: springX,
        y: springY,
        width: 32,
        height: 32,
      }}
    />
  );
}
```

### 2. Magnetic Attraction Button
Attracts the pointer towards the button center when hovering nearby:

```tsx
'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Magnetic pull distance
    setPosition({
      x: (clientX - centerX) * 0.35,
      y: (clientY - centerY) * 0.35,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
      className="px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-medium shadow-md transition-shadow"
    >
      {children}
    </motion.button>
  );
}
```

---

## Best Practices

1. **Disable on Touch Devices**: Custom cursors should NEVER appear on touch/mobile screens (`pointer: coarse`). Always gate with `@media (pointer: fine)` or media query checks:
   ```ts
   const isFinePointer = window.matchMedia('(pointer: fine)').matches;
   ```
2. **Pointer Events**: Always add `pointer-events: none` to the trailing cursor DOM node to avoid intercepting clicks intended for underlying buttons and inputs.
3. **Hide Default Cursor Safely**: If hiding the native system cursor (`cursor-none`), apply it exclusively to non-input containers—never hide the cursor over `<input>`, `<textarea>`, or contenteditable fields.
