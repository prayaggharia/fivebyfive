# fivebyfive — DJ Portfolio

A music portfolio site for DJ **fivebyfive**, built with React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion. Features a custom audio player (Howler.js), animated waveform visualizer, and page transitions.

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Type-check + production build (tsc -b && vite build)
npm run lint       # ESLint
npm run preview    # Preview production build
```

## Project Structure

```
src/
  App.tsx                     # Router + layout shell (Navbar, Footer, AnimatePresence)
  pages/
    Home.tsx                  # Hero, stats, about snippet, event highlights, booking CTA
    About.tsx                 # Artist bio
    Mixes.tsx                 # Audio player page — add tracks here
    Events.tsx                # Event listings
    Contact.tsx               # Booking/contact form
  components/
    layout/Navbar.tsx
    layout/Footer.tsx
    ui/AudioPlayer.tsx        # Howler.js player with track list, progress bar, volume
    ui/WaveformBars.tsx       # Animated SVG waveform visualizer
    ui/PageTransition.tsx     # Framer Motion page wrapper
```

Routes: `/`, `/about`, `/mixes`, `/events`, `/contact`

## Adding Music

1. Drop audio files (MP3/WAV/FLAC) into `/public/music/`
2. Add entries to the `tracks` array in `src/pages/Mixes.tsx`:

```ts
{
  title: 'Brewery Set',
  description: 'Soulful deep house warmup into melodic peak',
  genre: 'Deep House',
  bpm: '112–118',
  duration: '58:32',
  src: '/music/valentine-set.mp3',
}
```

The player auto-advances through tracks and shows a "Mixes Coming Soon" placeholder when the array is empty.

## Design System

Custom Tailwind config (`tailwind.config.js`) defines:

- **Colors**: `neon-cyan` (`#00d4ff`), `neon-purple` (`#7b2fff`), `neon-pink`, `dark-800`, `dark-900`
- **Utilities**: `glass` (backdrop blur card), `neon-border`, `neon-border-purple`, `text-gradient`, `text-gradient-purple`, `grid-bg`, `btn-primary`, `btn-secondary`

## Embedding SoundCloud / Mixcloud

In `src/pages/Mixes.tsx`, replace the placeholder `<div>` at the bottom of the file with an iframe from SoundCloud or Mixcloud.
