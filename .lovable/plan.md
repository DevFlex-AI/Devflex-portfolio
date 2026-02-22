

# Music Player Button + Error Fixes

## Important Note on Music
I cannot bundle copyrighted music (Eminem's "Lose Yourself") into the project. You will need to:
1. Obtain a legally licensed clean version MP3
2. Place it at `public/music/lose-yourself-clean.mp3`

The player component will be fully built and ready to play as soon as the file is added.

---

## Changes

### 1. New Music Player Component

**New file: `src/components/MusicPlayer.tsx`**
- Fixed button in the **bottom-left** corner (opposite the AI chat widget in bottom-right)
- Play/Pause toggle with a music note icon from `lucide-react`
- Uses an HTML5 `<audio>` element with `loop` enabled
- Source: `/music/lose-yourself-clean.mp3`
- Subtle, professional styling matching the design system (glass background, rounded, small)
- Shows a pulsing animation when music is playing
- Persists play state across page navigations (component lives in Layout)

### 2. Integrate into Layout

**File: `src/components/Layout.tsx`**
- Import and render `MusicPlayer` alongside the existing `AIChatWidget`

### 3. Create placeholder directory

**New file: `public/music/.gitkeep`**
- Creates the `public/music/` directory where you'll drop the MP3

---

## Technical Details

- The `<audio>` element uses `loop={true}` for continuous playback
- Audio persists across route changes since `MusicPlayer` is in the global `Layout`
- The button uses `z-50` positioning to stay above page content, positioned `bottom-6 left-6`
- No errors to fix -- the console only shows benign WebGL warnings and cross-origin postMessage noise (not from our code)

