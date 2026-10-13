# IRON PULSE FITNESS

A premium, modern gym and athletic performance website engineered with React, Vite, Tailwind CSS, and Lucide React. Designed with an editorial dark aesthetic (`#0A0A0A`), high-contrast typography, and purposeful interactive features.

---

## 🏋️ Brand Identity & Design Direction

- **Brand Name:** IRON PULSE FITNESS
- **Tagline:** BUILT BY DISCIPLINE. DEFINED BY STRENGTH.
- **Color Palette:**
  - Main Background: `#0A0A0A`
  - Secondary Surface: `#121212`
  - Card Background: `#181818`
  - Primary Accent: `#E63946`
  - Hover Accent: `#FF4D5A`
  - Main Typography: `#F5F5F5`
  - Secondary Muted Typography: `#A3A3A3`
  - Subtle Borders: `rgba(255, 255, 255, 0.10)`
- **Typography:**
  - Display Headlines: `Barlow Condensed` / `Oswald` (uppercase, condensed, athletic weights)
  - Body & UI: `Inter` (high legibility, balanced line heights)

---

## ⚡ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3 with PostCSS & Autoprefixer
- **Icons:** Lucide React
- **Animations:** CSS transitions with `prefers-reduced-motion` compliance

---

## 📁 Project Architecture

```
├── index.html                   # HTML entry point, Google Fonts preconnect, Favicon
├── package.json                 # Project dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Custom gym color system and typography
├── vite.config.js               # Vite build and dev server configuration
└── src/
    ├── main.jsx                 # Application root render
    ├── App.jsx                  # Main page orchestrator, modal state, plan prefill
    ├── index.css                # Global styles, scrollbar, reduced motion rules
    ├── data/
    │   └── gymData.js           # Centralized configuration (plans, pricing, trainers, FAQs)
    ├── components/
    │   ├── Button.jsx           # Reusable button with variants & accessible focus
    │   ├── SectionHeading.jsx   # Consistent editorial section header with badge
    │   ├── Navbar.jsx           # Sticky nav with mobile drawer and active scroll spy
    │   ├── Footer.jsx           # Brand statement, quick links, schedule, disclaimer
    │   ├── ProgramCard.jsx      # Photographic card with hover zoom & dark overlay
    │   ├── ProgramModal.jsx     # Detailed blueprint modal with workout breakdown
    │   ├── TrainerCard.jsx      # Coach profile with specialty, credentials & bio
    │   ├── MembershipCard.jsx   # Tiered plan card with checkmarks & prefill CTA
    │   ├── FAQAccordion.jsx     # Accessible ARIA accordion with keyboard navigation
    │   └── ContactForm.jsx      # Validation form with client demo notice & state handling
    └── sections/
        ├── Hero.jsx             # Cinematic hero with high-contrast text & CTAs
        ├── Highlights.jsx       # Trust bar with 4 foundational gym pillars
        ├── About.jsx            # Two-column standard statement with layered imagery
        ├── Programs.jsx         # 4-blueprint training grid
        ├── TrainingExperience.jsx # Atmospheric mid-page focus section
        ├── Trainers.jsx         # 3 coach profiles with clear demonstration notice
        ├── Memberships.jsx      # Starter (₹999), Performance (₹1,799), Elite (₹2,999)
        ├── Philosophy.jsx       # "Consistency Creates Change" principle
        ├── Testimonials.jsx     # 3 community review cards
        ├── FAQ.jsx              # 5 accessible FAQ items
        └── Contact.jsx          # Facility information, hours, and inquiry form
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ or v20+)
- npm

### Installation
```bash
# Clone or navigate to the repository folder
cd "path/to/project"

# Install dependencies
npm install
```

### Running Locally
```bash
# Start the Vite development server
npm run dev
```
Open your browser at `http://localhost:3000` (or the port indicated in your terminal).

### Production Build
```bash
# Compile and bundle for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🛠️ How to Customize

All business information, pricing, coaches, and copy can be customized in a single configuration file:
👉 **`src/data/gymData.js`**

- **Change Gym Name & Tagline:** Edit `GYM_CONFIG.brandName`, `GYM_CONFIG.tagline`, `GYM_CONFIG.preHeadline`.
- **Change Membership Prices:** Modify the `memberships` array in `GYM_CONFIG.memberships` (e.g., change `₹999` to `$29/month` or any currency).
- **Change Programs & Modals:** Edit `GYM_CONFIG.programs` to add exercises, schedules, or change images.
- **Change Contact & Hours:** Edit `GYM_CONFIG.contact`.
- **Connect a Backend to the Contact Form:**
  In `src/components/ContactForm.jsx`, replace the simulated timeout in `handleSubmit` with your API endpoint (e.g., `fetch('/api/inquiries', { method: 'POST', body: JSON.stringify(formData) })`) or services like Formspree or Resend.

---

## ♿ Accessibility & Performance

- **Semantic landmarks:** `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<dialog>`.
- **Color contrast:** High contrast text on `#0A0A0A` / `#181818` surfaces.
- **Accessible keyboard support:** Interactive elements support keyboard navigation with distinct `:focus-visible` rings.
- **Accordion accessibility:** FAQ items include `aria-expanded`, `aria-controls`, and `role="region"`.
- **Reduced motion:** Respects `prefers-reduced-motion` settings.
- **No external tracking or unsolicited telemetry.**
