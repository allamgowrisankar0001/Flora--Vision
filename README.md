# Flora Vision

Flora Vision is a curated single-page experience for a premium indoor plant boutique. The site combines evocative storytelling, modern UI patterns, and high-fidelity imagery to guide visitors from inspiration to purchase in a single scroll.

## Live Deployment
- Production: [https://flora-vision-tawny.vercel.app/](https://flora-vision-tawny.vercel.app/)

## Key Capabilities
- **Immersive hero** featuring layered glassmorphism, dual CTAs, and a dynamic testimonial capsule.
- **Merchandising modules** for trending and top-selling plants, complete with pricing, product copy, and “add to bag” affordances.
- **Social proof track** with frosted review cards, star strips, and curated remote avatars.
- **Best O₂ lineup** highlighting air-purifying plants, quantified benefits, and feature badges.
- **Responsive layout** built on Tailwind CSS v4 utilities to ensure consistent rhythm and spacing.

## Technology Overview
- **Framework**: React 19 with Vite 7 for fast local development and optimized builds.
- **Styling**: Tailwind CSS 4 via `@tailwindcss/vite`, eliminating manual config overhead.
- **Iconography & accents**: Lucide React components and bespoke SVG assets.

## Getting Started
1. Install dependencies
   ```bash
   npm install
   ```
2. Start the development server
   ```bash
   npm run dev
   ```
   Vite prints the local preview URL (default `http://localhost:5173`).
3. Produce a production build
   ```bash
   npm run build
   ```
4. Preview the optimized bundle
   ```bash
   npm run preview
   ```

## Architecture
- `src/App.jsx` composes the hero, merchandising lanes, testimonial rail, and footer.
- `src/component/HeroSection.jsx` delivers navigation, headline copy, the hero product card, and testimonial.
- `src/component/TrendyPlantsSection.jsx` and `src/component/TopSellingSection.jsx` showcase curated SKUs with pricing actions.
- `src/component/CustomerReviewSection.jsx` renders the social proof column.
- `src/component/BestO2Section.jsx` focuses on high-oxygen plants and supporting metrics.
- `src/component/FooterSection.jsx` closes with a newsletter capture form and site links.

All imagery is located in `src/assets/` and imported directly into the React components so assets are optimized at build time.

## Scripts
- `npm run dev` — launch the Vite development server with HMR.
- `npm run build` — generate the production bundle.
- `npm run preview` — locally serve the built assets for verification.
- `npm run lint` — enforce ESLint rules (React hooks and refresh presets).

## Contributing
Contributions are welcome. Please open an issue describing the proposed enhancement before submitting a pull request, and ensure `npm run lint` completes successfully.

## License
Distributed under the MIT License. You may reuse the design system and components with attribution.
