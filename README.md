# V555 Fitness Zone

A premium, modern, fully responsive marketing website for **V555 Fitness Zone** — a luxury gym brand. Built with a sleek black aesthetic, gold/red accents, glassmorphism, smooth scroll animations and a mobile-first layout.

> **Slogan:** Transform Your Body. Transform Your Life.

## ✨ Features

- **Luxury dark aesthetic** — black base with gold & ember (red) CTA accents, glass cards and gradient overlays.
- **Smooth scroll animations** — fade-up / slide-in reveals on scroll via Framer Motion.
- **Animated stat counters**, **testimonial carousel** (auto-play + manual controls), **scroll-to-top** button and an **animated hero scroll indicator**.
- **Fully responsive** — mobile, tablet and desktop, with an animated mobile menu.
- **Performance-minded** — lazy-loaded images with graceful fallbacks, code-split vendor chunks, semantic HTML.
- **Accessible & SEO-friendly** — semantic landmarks, ARIA labels, focus styles, meta tags, Open Graph and JSON-LD structured data.

## 🧱 Tech Stack

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- Google Fonts — **Poppins**

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# production build → ./dist
npm run build

# preview the production build
npm run preview

# lint
npm run lint
```

## 📁 Project Structure

```
V555/
├── index.html                 # HTML shell + fonts + SEO/meta + JSON-LD
├── vite.config.js             # Vite + manual vendor chunks
├── tailwind.config.js         # Theme: colors, fonts, keyframes
├── postcss.config.js
└── src/
    ├── main.jsx               # React entry
    ├── App.jsx                # Page composition (section order)
    ├── index.css              # Tailwind layers + design tokens / utilities
    ├── data/
    │   └── content.js         # ALL copy, links & image URLs (single source of truth)
    ├── utils/
    │   └── motion.js          # Shared Framer Motion variants
    └── components/
        ├── Navbar.jsx         # Sticky, glass-on-scroll nav + mobile menu
        ├── Hero.jsx           # Full-screen hero + CTAs + scroll indicator
        ├── About.jsx          # Image + feature points
        ├── Equipment.jsx      # Equipment cards w/ hover zoom
        ├── Services.jsx       # Service cards w/ icons
        ├── PersonalTraining.jsx
        ├── WhyChooseUs.jsx    # Animated counters + feature cards
        ├── Gallery.jsx        # Masonry-style grid w/ hover zoom
        ├── Testimonials.jsx   # Carousel
        ├── Contact.jsx        # Form + info + map embed + socials
        ├── Footer.jsx
        ├── ScrollToTop.jsx
        ├── Logo.jsx
        └── ui/                # Reusable primitives
            ├── Reveal.jsx
            ├── SectionHeading.jsx
            ├── LazyImage.jsx
            └── Counter.jsx
```

## ✏️ Customizing Content

All text, contact details, links and image URLs live in **`src/data/content.js`** — edit there to rebrand without touching components. Theme colors and fonts live in **`tailwind.config.js`**.

## 🖼️ Images

Placeholder imagery is served from Unsplash via `<LazyImage>`, which lazy-loads each image and shows a branded gradient fallback if a URL ever fails. Replace the URLs in `content.js` (and the hero image in `Hero.jsx`) with your own optimized assets for production.

## 🗺️ Notes

- The contact form is front-end only (demo). Wire `handleSubmit` in `Contact.jsx` to your email service / backend.
- The Google Maps iframe uses a generic embed — replace the `src` with your gym's exact location embed URL.

---

© 2026 V555 Fitness Zone.
