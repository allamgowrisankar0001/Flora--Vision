# Flora Vision

Flora Vision is a single-page marketing experience for a premium indoor plant boutique. The site spotlights curated hero imagery, trending plants, top sellers, customer stories, and an oxygen-rich plant lineup — all wrapped in a neon-glass aesthetic built with Tailwind CSS v4 utilities.

## Features
- Immersive hero with layered glassmorphism cards, CTA buttons, and live testimonial preview.
- Trendy and top-selling plant sections with custom SVG frames, price tags, and “add to bag” affordances.
- Customer reviews rendered as frosted cards with star strips and remote avatar imagery.
- Best O2 lineup highlighting air-purifying plants with stats, icons, and gradient badges.
- Responsive layout powered by Tailwind CSS `@tailwindcss/vite` plugin and React 19 components.

## Tech Stack
- React 19 with Vite 7 for lightning-fast dev server and production builds.
- Tailwind CSS 4 (via `@tailwindcss/vite`) for utility-first styling without manual config files.
- Lucide React icons plus handcrafted SVG assets for controls and accents.

## Getting Started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the dev server**
   ```bash
   npm run dev
   ```
   The Vite server prints a local URL (default `http://localhost:5173`). Open it in your browser to view the site.
3. **Create a production build**
   ```bash
   npm run build
   ```
4. **Preview the production bundle**
   ```bash
   npm run preview
   ```

## Project Structure
- `src/App.jsx` wires together every section of the landing experience.
- `src/component/HeroSection.jsx` renders the navbar, hero copy, layered plant card, and testimonial pill.
- `src/component/TrendyPlantsSection.jsx` + `TopSellingSection.jsx` showcase catalog cards with pricing and purchase affordances.
- `src/component/CustomerReviewSection.jsx` displays three testimonial cards with star ratings.
- `src/component/BestO2Section.jsx` focuses on high-oxygen plants and supporting metrics.
- `src/component/FooterSection.jsx` contains the closing CTA, newsletter form, and footer links.

All imagery lives under `src/assets/` and is imported directly into the React components.

## Available Scripts
- `npm run dev` — start the Vite dev server with hot module reloading.
- `npm run build` — generate a production-ready asset bundle.
- `npm run preview` — serve the built bundle locally for smoke testing.
- `npm run lint` — run ESLint with the React hooks/refresh presets.

## Contributing
Suggestions and pull requests are welcome. Please open an issue describing the change before submitting a PR, and ensure `npm run lint` passes.

## License
This project is open source under the MIT License. Feel free to reuse the layout and components with attribution.
