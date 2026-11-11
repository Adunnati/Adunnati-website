# Adunnati Centralized Design System & Developer Guidelines

> **Single Source of Truth:** All visual tokens (fonts, colors, sizes, button radii, spacing rhythms) are defined in [`src/styles/tokens.css`](file:///e:/working%20projects/adunnati-website/src/styles/tokens.css).
> Modifying a token in that file updates the entire website simultaneously.

---

## 1. Core Architecture

The design system is structured into four modular stylesheets imported at the top of [`src/index.css`](file:///e:/working%20projects/adunnati-website/src/index.css):

```
src/styles/
├── tokens.css        <- All CSS custom properties (:root variables)
├── typography.css    <- Headings, subheadings, eyebrows, card typography & aliases
├── buttons.css       <- Universal button hierarchy, variants, sizes & hover states
└── layout.css        <- Symmetric section padding, container widths & mobile rhythms
```

All existing section-specific classes (`.services-title`, `.why-heading`, `.dark-button`, etc.) are automatically mapped to these tokens for 100% backward compatibility.

---

## 2. Typography Rules & Classes

The website uses a dual-font luxury editorial system:
* **Primary Sans-Serif (`--font-sans`):** `'DM Sans', -apple-system, sans-serif` for titles, eyebrows, buttons, and metrics.
* **Editorial Serif (`--font-serif`):** `'Noto Serif', Georgia, serif` for subheadings, narrative intros, and card descriptions.

### Standard Typography Hierarchy

| Component | Class Name | Font Family | Default Desktop Size | Weight | Color Token |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Eyebrow Category** | `.ad-eyebrow-text` / `.hero-copy .eyebrow` | `var(--font-eyebrow)` | 12px (0.18em tracking) | 600 | `var(--color-gold-text)` |
| **Hero Headline (H1)** | `.ad-hero-headline` / `.hero-headline` | `var(--font-heading)` | 56px (tight 1.1 line) | 500 | `var(--color-ink)` |
| **Hero Subheading** | `.ad-hero-subheading` / `.hero-subheading` | `var(--font-subheading)` | 20px (1.6 line-height) | 500 | `var(--color-ink-subheading)` |
| **Section Title (H2)** | `.ad-section-title` / `.services-title` etc. | `var(--font-heading)` | 56px (tight 1.08 line) | 500 | `var(--color-ink)` |
| **Gold Highlight** | `.ad-title-gold` | Inherit | Inherit | 500 | `var(--color-gold-gradient)` |
| **Section Subheading** | `.ad-section-subheading` / `.services-subheading` etc. | `var(--font-subheading)` | 16px (1.6 line-height) | 500 | `var(--color-ink-subheading)` |
| **Card Heading** | `.ad-card-title` / `.service-card-title` | `var(--font-heading)` | 24px (1.15 line-height) | 500 | `var(--color-ink)` |
| **Card Description** | `.ad-card-desc` / `.service-card-desc` | `var(--font-subheading)` | 14.5px (1.6 line-height) | 500 | `var(--color-ink-subheading)` |

### Eyebrow Markup Standard
Every section header must include the standardized gold badge + line:
```tsx
<div className="ad-eyebrow">
  <span className="ad-eyebrow-text">OUR SERVICES</span>
  <span className="ad-eyebrow-line" aria-hidden="true" />
</div>
```

---

## 3. Universal Button Hierarchy

All buttons use `.ad-btn` combined with a variant and optional size modifier.

### Button Variants

```tsx
{/* 1. Primary Solid Dark (Main CTAs, Form Submit, Hero Action) */}
<a href="#contact" className="ad-btn ad-btn-primary">
  <span>Discuss Your Goals</span>
  <span className="ad-btn-arrow" aria-hidden="true">↗</span>
</a>

{/* 2. Outline Frosted Glass (Secondary CTAs, View All) */}
<a href="#services" className="ad-btn ad-btn-outline">
  <span>View All Services</span>
  <span className="ad-btn-arrow" aria-hidden="true">↗</span>
</a>

{/* 3. Gold Accent (High-priority action) */}
<button type="submit" className="ad-btn ad-btn-gold">
  <span>Submit Enquiry</span>
</button>

{/* 4. Ghost / Text link */}
<a href="#about" className="ad-btn ad-btn-ghost">
  <span>Learn More</span>
</a>
```

### Sizing Modifiers
* `.ad-btn-sm`: `10px 18px`, font size 12px
* `.ad-btn-md`: `13px 26px`, font size 13.5px (default)
* `.ad-btn-lg`: `14px 28px`, font size 14.5px

---

## 4. Layout, Section Padding & Container Bounds

Every section must adhere to the exact same vertical and horizontal rhythm on desktop, tablet, and mobile (iOS & Android).

### Spacing Standards

| Viewport | Vertical Section Padding (`padding: Y 0`) | Container Width | Left & Right Gutter |
| :--- | :--- | :--- | :--- |
| **Desktop (`>768px`)** | `84px` top, `84px` bottom | `min(92%, 1360px)` | 4% auto |
| **Tablet (`<=768px`)** | `56px` top, `56px` bottom | `min(92%, 1360px)` | 4% auto |
| **Mobile (`<=480px`)** | `44px` top, `44px` bottom | `min(90%, 1360px)` | 5% auto + iOS Safe Areas |

### Section Header Architecture (Desktop Split / Mobile Stacked)
```tsx
<div className="ad-section-header">
  <div className="ad-section-header-left">
    <div className="ad-eyebrow">
      <span className="ad-eyebrow-text">SECTION EYEBROW</span>
      <span className="ad-eyebrow-line" aria-hidden="true" />
    </div>
    <h2 className="ad-section-title">
      First Line of Heading<br />
      <span className="ad-title-gold">Second Line in Gold</span>
    </h2>
  </div>

  <div className="ad-section-header-right">
    <p className="ad-section-subheading">
      Editorial narrative describing the value proposition with clarity and elegance.
    </p>
  </div>
</div>
```

---

## 5. Copy-Paste Template for New Sections

Whenever creating a new page or section, use this standard template:

```tsx
import React from 'react';

export const NewSection: React.FC = () => {
  return (
    <section className="ad-section" id="new-section">
      <div className="ad-container">
        {/* Standard Section Header */}
        <div className="ad-section-header">
          <div className="ad-section-header-left">
            <div className="ad-eyebrow">
              <span className="ad-eyebrow-text">CATEGORY</span>
              <span className="ad-eyebrow-line" aria-hidden="true" />
            </div>

            <h2 className="ad-section-title">
              Section Headline<br />
              <span className="ad-title-gold">With Brand Gold Highlight</span>
            </h2>
          </div>

          <div className="ad-section-header-right">
            <p className="ad-section-subheading">
              Supportive editorial narrative explaining the intent of this section.
            </p>
          </div>
        </div>

        {/* Section Content Grid */}
        <div className="your-content-grid">
          {/* Card example */}
          <div className="service-card">
            <h3 className="ad-card-title">Card Title</h3>
            <p className="ad-card-desc">Card narrative description.</p>
            <a href="#contact" className="ad-btn ad-btn-primary ad-btn-sm">
              <span>Action</span>
              <span className="ad-btn-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSection;
```

---

## 6. Strict Instructions for AI & Developers

When making any changes or additions to the website:

1. **NEVER Hardcode Font Families:**
   - Do NOT write `font-family: 'DM Sans' ...` or `font-family: 'Noto Serif' ...` in ad-hoc selectors.
   - ALWAYS use `var(--font-heading)` or `var(--font-subheading)` or use `.ad-section-title` / `.ad-section-subheading`.
2. **NEVER Hardcode Colors for Brand Elements:**
   - Use `var(--color-ink)` for dark charcoal text.
   - Use `var(--color-ink-subheading)` for editorial text.
   - Use `var(--color-gold)` / `var(--color-gold-gradient)` for gold highlights.
3. **NEVER Hardcode Section Top/Bottom Padding:**
   - Do NOT invent arbitrary padding like `padding: 70px 0 90px;`.
   - Wrap sections in `.ad-section` which automatically enforces `84px` desktop, `56px` tablet, and `44px` mobile.
4. **NEVER Invent Custom Container Margins:**
   - Wrap inner content in `.ad-container` or `.container` so horizontal left and right gutters align to the exact same pixel across Android, iOS, tablet, and desktop.
5. **Single Point of Site-Wide Changes:**
   - If the user requests a change to the font, button radius, gold accent, or section gap across the website, make the edit in [`src/styles/tokens.css`](file:///e:/working%20projects/adunnati-website/src/styles/tokens.css). Do NOT search-and-replace across multiple files.

