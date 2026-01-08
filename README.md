# Greek Community School of Newcastle Website

Static website for the Greek Community School of Newcastle - a community school teaching Greek language and culture to children and adults in Newcastle upon Tyne, UK.

## Tech Stack

- **Bundler:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **JavaScript:** Vanilla JS with Web Components (light DOM)
- **Pages:** Multi-page static site (not SPA)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Development

Start the development server with hot reload:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Production Build

Build the site for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
/
├── src/
│   ├── components/      # Web components
│   ├── styles/          # CSS/Tailwind
│   ├── js/              # Shared utilities
│   └── assets/          # Images, fonts
├── pages/               # HTML pages
├── index.html           # Home page
└── vite.config.js
```