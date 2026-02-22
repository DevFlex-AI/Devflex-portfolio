

# Dark/Light Theme Toggle, AI Agent Fix, and Visual Polish

## Issues Found

1. **AI Agent is broken**: The `AIChatWidget` uses `import.meta.env.VITE_SUPABASE_URL` and `import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY` which resolve to `undefined` at runtime. The edge function URL becomes `undefined/functions/v1/portfolio-agent`, causing a 404.

2. **No light mode**: The site only has dark theme CSS variables with no light mode alternative and no toggle mechanism.

3. **Visual consistency**: Pages look good overall but need minor polish for the theme toggle integration.

---

## Changes

### 1. Fix AI Agent (Critical)

**File: `src/components/AIChatWidget.tsx`**
- Replace `import.meta.env.VITE_SUPABASE_URL` with the Supabase client's URL imported from `@/integrations/supabase/client`
- Use `supabase.functions.invoke()` instead of raw fetch, OR construct the URL using the supabase client config
- This will fix the `undefined` URL and `undefined` auth token issues

### 2. Add Light Theme CSS Variables

**File: `src/index.css`**
- Add a `.light` class (or `:root` for light, `.dark` for dark) with light mode color values:
  - Light backgrounds (white/gray tones)
  - Dark foreground text
  - Adjusted primary/accent colors for light backgrounds
  - Updated glass/glow utilities that work on both themes
- Keep the current dark values under `.dark` class

### 3. Theme Toggle Component

**New file: `src/components/ThemeToggle.tsx`**
- A Sun/Moon icon toggle button
- Reads/writes theme preference to `localStorage`
- Toggles `.dark` class on the `<html>` element
- Defaults to dark mode

### 4. Integrate Toggle into Navbar

**File: `src/components/Navbar.tsx`**
- Add the `ThemeToggle` button next to the Contact button in the navbar
- Include it in both desktop and mobile layouts

### 5. Visual Polish

- Update `src/components/Footer.tsx` glass/border styles to respect theme
- Ensure `AIChatWidget` panel styling works in both light and dark modes
- Verify 3D scene backgrounds are transparent so they work against both themes
- Update `glass` and `glass-strong` utilities to use theme-aware colors

---

## Technical Details

- Theme system uses the `class` strategy (already configured in `tailwind.config.ts` with `darkMode: ["class"]`)
- The `next-themes` package is already installed and can be used for theme management, or a lightweight custom hook
- The AI agent fix uses the Supabase JS client's built-in `functions.invoke()` method which automatically handles the correct URL and auth headers
- No database changes needed

