# Prason Portfolio

Personal portfolio site for [Prason (Narcissus-tazetta)](https://github.com/Narcissus-tazetta).

Live: https://narcissus-tazetta.github.io/Portfolio/

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS 4
- react-router-dom

## Development

```bash
bun install
bun run dev
```

Other commands: `bun run build`, `bun run preview`, `bun run tsc`, `bun run lint`

## Project structure

```
src/
  components/   UI components
  content/      Site copy, projects, navigation (JA/EN)
  contexts/     Theme and language providers
  pages/        Route pages (Home, About, Works, Contact)
public/
  works/        Project thumbnails
  avatar.png
  icons.svg
  livewallpaper-icon.png
```

Content edits: update files under `src/content/`. Project images live in `public/works/`.

Loader preview: append `?loaderMs=3000` to the URL (local or GitHub Pages) to hold the splash for 3 seconds.
