# Greek Community School of Newcastle - Website Specification

## Overview

A static content website for the Greek Community School of Newcastle, serving the local Greek community with information about Greek language and culture education for children and adults.

---

## Tech Stack

| Technology | Choice |
|------------|--------|
| Bundler | Vite |
| Styling | Tailwind CSS |
| JavaScript | Vanilla JS Web Components (light DOM) |
| Routing | Multiple HTML pages |
| Hosting | GitHub Pages |

---

## Design System

### Color Palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | Aegean Blue | `#1e3a5f` | Headers, nav, primary buttons |
| Primary Light | Sky Blue | `#4a90b8` | Links, accents, hover states |
| Primary Pale | Soft Blue | `#e8f4f8` | Section backgrounds, cards |
| Secondary | Warm White | `#fefdfb` | Page backgrounds |
| Accent | Greek Gold | `#c9a227` | Highlights, icons, decorative borders |
| Text Primary | Charcoal | `#2d3748` | Body text |
| Text Secondary | Slate | `#64748b` | Captions, secondary text |
| White | Pure White | `#ffffff` | Cards, contrast elements |

**Color rationale:** The blue and white reflect the Greek flag and national identity, while warm undertones (cream whites, gold accents) create an inviting, community-focused feel appropriate for an educational institution.

### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Headings | **Playfair Display** | 600-700 | 2rem - 3rem |
| Body | **Source Sans 3** | 400-500 | 1rem |
| Navigation | Source Sans 3 | 500 | 0.95rem |
| Buttons | Source Sans 3 | 600 | 0.9rem |

**Font pairing rationale:**
- **Playfair Display** - Elegant serif with classical, academic character reminiscent of Greek typographic traditions. Conveys trust and heritage.
- **Source Sans 3** - Clean, highly legible sans-serif with excellent support for both Latin and Greek character sets. Professional and modern.

### Design Principles

1. **Warm & Welcoming** - Soft shadows, rounded corners, generous whitespace to feel approachable for families
2. **Academic & Trustworthy** - Classical typography, structured layouts, clear visual hierarchy
3. **Community-Focused** - Prominent space for imagery, people-first content presentation
4. **Culturally Connected** - Subtle Greek visual motifs, blue/white palette, gold accents
5. **Accessible** - WCAG AA contrast ratios, clear navigation, mobile-first responsive design

### UI Elements

| Element | Style |
|---------|-------|
| Buttons | Rounded corners (8px), solid primary or outlined variants, subtle lift on hover |
| Cards | White background, soft shadow (`0 2px 8px rgba(0,0,0,0.08)`), 12px border radius |
| Links | Sky Blue (#4a90b8), underline on hover |
| Sections | Alternating Warm White / Soft Blue backgrounds for rhythm |
| Icons | Line style, Greek Gold accent color |
| Borders | 1px light gray (`#e2e8f0`) or Gold for emphasis |
| Form inputs | Rounded (8px), light border, focus ring in Sky Blue |

### Spacing Scale

| Use | Tailwind Class |
|-----|----------------|
| Section padding (desktop) | `py-16` / `py-20` |
| Section padding (mobile) | `py-10` / `py-12` |
| Container max-width | `max-w-6xl` |
| Card padding | `p-6` |
| Component gaps | `gap-4` to `gap-8` |
| Text spacing | `space-y-4` |

### Visual Motifs (Optional Enhancements)

- **Greek key (meander) pattern** - Subtle decorative borders on hero sections or dividers
- **Wave dividers** - Soft SVG waves between sections
- **Olive branch illustrations** - Decorative elements for headings or empty states
- **Blue gradient overlays** - On hero images for text readability

### Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Mobile | < 640px | Single column, stacked nav |
| Tablet | 640px - 1024px | Two columns, expanded nav |
| Desktop | > 1024px | Full layout, horizontal nav |

---

## Pages

### 1. Home (`index.html`)

**Content:**
- **Headline:** "Connecting Generations Through Greek Language & Culture"
- **Subheadline:** "A welcoming school for children and adults to learn Greek, explore history, and engage with Greek traditions"
- **For Children section:** Saturday classes, Reception to A Levels, key benefits (lessons, customs, literature, community)
- **For Adults section:** Wednesday in-person, Monday online classes
- **Calendar placeholder**

### 2. About (`about.html`)

**Content:**
- **Our Story:** School history (started with 9 children, now 50+ students at St. Mary's Catholic School)
- **Teaching Staff:**
  - Louisa Meffan, Head Teacher – GCSE
  - Despoina Terpsiadou, Teacher – Primary
  - Savina Iliadou, Teacher – Primary
  - Georgia Kara, Teacher – Reception & Primary
  - Ioanna Pampalou, Teacher – Primary
  - Evangelia Melachroinoudi, Teacher – Adults
  - Aspasia Foteinou, Teacher – Adults
  - Maria Touskou, Teacher – Reception
- **Board Members:**
  - Sofia Konstadinidi, Chair
  - Demis Thanopoulos, Treasurer
  - Maria Panteli, Secretary
  - Michael Tomaras, IT & Vice Secretary

### 3. Admissions (`admissions.html`)

**Content:**
- **How to Enroll (3 steps):**
  1. Fill out online registration form (Google Form - placeholder link)
  2. Submit payment (Sort Code: 30-96-26, Account: 5612 8760)
  3. Email payment confirmation to contact@greekschoolnewcastle.co.uk
- **Tuition Fees:**
  - Children: Per term, sibling discounts available
  - Adults: Monthly basis
- **FAQs:**
  - Prior knowledge not required
  - Teachers provide materials
  - Trial lessons available

### 4. Gallery (`gallery.html`)

**Content:**
- Intro text about school community and traditions
- Event categories (images to be added later):
  - Ayiasmos (blessing)
  - October 28th (Greek National Day)
  - March 25th (Greek Independence Day)
  - April 1st (Cyprus National Day)
  - Christmas celebration & fundraising
  - Carnival party (Apokries)
  - Online author visits
  - Student performances
  - Themed art exhibitions
  - Community collaboration initiative

### 5. Get Involved (`get-involved.html`)

**Content:**
- **Volunteer:** Teaching assistant opportunities
- **Donate Books:** Greek books for lending library
- **Donate Stationery:** Pencils, pens, markers, notebooks, craft supplies
- **Make a Donation:** Financial support (non-profit charity)
- **Qualified Teachers:** Expression of interest for future vacancies
- **Events:** Upcoming and past events
- **Follow Us:** Social media links
- **Vacancies section:** Teacher positions (hourly, Saturdays, requirements listed)
- **Teacher Job Description:** Detailed duties, responsibilities, person specification

### 6. Contact (`contact.html`)

**Content:**
- **Address:**
  - St Mary's Catholic School
  - Benton Park Road
  - Newcastle Upon Tyne, NE7 7PE
- **Phone:** 07958 732 764
- **Email:** contact@greekschoolnewcastle.co.uk
- **Google Maps embed**

---

## Components

### `<site-header>`
- School name/logo
- Navigation menu (Home, About, Admissions, Gallery, Get Involved, Contact)
- Language switcher (EN/GR) - prepared for future translations
- Mobile responsive hamburger menu

### `<site-footer>`
- Contact information
- Social media links (Facebook)
- Copyright notice

### `<hero-section>`
- Reusable hero banner component
- Props: title, subtitle, background

### Additional components as needed
- FAQ accordion
- Team member cards
- Gallery grid
- Event cards

---

## External Links

| Purpose | URL |
|---------|-----|
| Facebook | https://www.facebook.com/GreekSchoolNewcastleUponTyne/ |
| Children Registration | # (placeholder - Google Form TBD) |
| Adults Registration | # (placeholder - Google Form TBD) |
| Email | contact@greekschoolnewcastle.co.uk |

---

## Internationalization (i18n)

- **Primary language:** English
- **Secondary language:** Greek (translations to be added later)
- **Implementation:** Language switcher in header, content structure prepared for bilingual support

---

## Assets (TBD)

- [ ] School logo
- [ ] Hero images
- [ ] Gallery photos
- [ ] Team photos (optional)

---

## Deployment

- **Platform:** GitHub Pages
- **Build command:** `npm run build`
- **Output directory:** `dist/`

---

## Contact Information

- **Email:** contact@greekschoolnewcastle.co.uk
- **Phone:** 07958 732 764
- **Address:** St Mary's Catholic School, Benton Park Road, Newcastle Upon Tyne, NE7 7PE
