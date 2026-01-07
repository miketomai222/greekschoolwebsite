# Claude Instructions for Greek Community School Website

## Project Overview

Static website for the Greek Community School of Newcastle - a community school teaching Greek language and culture to children and adults in Newcastle upon Tyne, UK.

## Tech Stack

- **Bundler:** Vite
- **Styling:** Tailwind CSS
- **JavaScript:** Vanilla JS Web Components (light DOM)
- **Pages:** Multiple HTML files (not SPA)
- **Hosting:** GitHub Pages

## Project Structure

```
/
├── src/
│   ├── components/      # Web components
│   ├── styles/          # CSS/Tailwind
│   ├── js/              # Shared utilities
│   └── assets/          # Images, fonts
├── pages/               # HTML pages (about, admissions, etc.)
├── index.html           # Home page
├── SPEC.md              # Full specification
└── vite.config.js
```

## Design System

### Colors (Tailwind config)
- Primary: Aegean Blue `#1e3a5f`
- Primary Light: Sky Blue `#4a90b8`
- Primary Pale: Soft Blue `#e8f4f8`
- Secondary: Warm White `#fefdfb`
- Accent: Greek Gold `#c9a227`

### Fonts
- Headings: Playfair Display (Google Fonts)
- Body: Source Sans 3 (Google Fonts)

### Components (Light DOM)
All web components use light DOM (no Shadow DOM) so Tailwind classes work directly.

## Key Information

- **School Name:** Greek Community School of Newcastle
- **Email:** contact@greekschoolnewcastle.co.uk
- **Phone:** 07958 732 764
- **Location:** St Mary's Catholic School, Benton Park Road, Newcastle Upon Tyne, NE7 7PE
- **Facebook:** https://www.facebook.com/GreekSchoolNewcastleUponTyne/

## Pages

1. Home (`index.html`)
2. About (`about.html`)
3. Admissions (`admissions.html`)
4. Gallery (`gallery.html`)
5. Get Involved (`get-involved.html`)
6. Contact (`contact.html`)

## Conventions

- Use semantic HTML5 elements
- Mobile-first responsive design
- Keep components simple - this is a content site, not an app
- Placeholder links use `#` until Google Form URLs are provided
- English content first; Greek translations will be added later via i18n

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Notes

- No images/logo yet - use placeholders
- Registration forms link to external Google Forms (URLs TBD)
- Bilingual support (EN/GR) planned - structure should accommodate language switching
- See SPEC.md for full content and design details
