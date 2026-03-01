# Bonny - Luxury Jewelry Showcase

A premium frontend-only product showcase website for Bonny, a luxury jewelry brand that represents timeless elegance and exceptional craftsmanship. This project demonstrates modern web development practices with a focus on visual design, component architecture, and responsive user experience.

## 🎨 Brand Concept

**Bonny** embodies the heritage of fine jewelry making, combining Renaissance-era techniques with contemporary design sensibilities. The brand's identity revolves around:

- **Heritage**: Craftsmanship traditions dating back to 1985
- **Integrity**: Ethically-sourced materials and conflict-free gemstones
- **Excellence**: 30-day creation process with meticulous quality control
- **Timelessness**: Heirloom-quality pieces that transcend generations

The brand aesthetic balances warmth (soft pink accents) with sophistication (dark charcoal tones) and luxury (gold highlights), creating a digital experience that mirrors the physical beauty of fine jewelry.

## 🛠 Tech Stack

### Core Framework
- **Next.js 15** (App Router) - Chosen for its superior performance, built-in optimizations, and modern React patterns with Server/Client components
- **React 19** - Latest features for optimal user interactions
- **TypeScript** - Type safety and enhanced developer experience

### Styling & Design
- **Tailwind CSS v4** - Utility-first approach for rapid, consistent styling
- **Google Fonts (Playfair Display + Montserrat)** - Professional typography pairing
  - *Playfair Display*: Serif font for headings - elegant, classic, luxury appeal
  - *Montserrat*: Sans-serif for body - clean, modern, highly readable

### Why This Stack?
1. **Next.js**: SEO-ready, fast page loads, automatic code splitting, and image optimization
2. **TypeScript**: Catches errors at compile-time, better IDE support, self-documenting code
3. **Tailwind CSS**: Rapid prototyping, consistent design system, small production bundle
4. **No Backend Needed**: Static JSON data keeps the project simple, fast, and deployable anywhere

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd jewellery-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

The site will be optimized and ready for deployment.

## 🎯 Design Decisions

### Typography
- **Heading Font**: Playfair Display (serif)
  - *Rationale*: Conveys luxury, tradition, and sophistication. The high contrast between thick and thin strokes mirrors the precision of jewelry craftsmanship.
  
- **Body Font**: Montserrat (sans-serif)
  - *Rationale*: Clean, geometric, and highly legible across all screen sizes. Provides a modern counterbalance to the classical heading font.

- **Size Hierarchy**:
  - H1: 4xl-7xl (responsive) - Landing page hero
  - H2: 3xl-6xl - Section headings
  - Body: base-xl - Comfortable reading across devices

### Color Palette

```css
Primary Colors:
- Charcoal: #2d2d2d (Primary text, buttons, headers)
- Soft Pink: #fce2db (Background accents, hero section)
- Antique Gold: #d4af37 (Accent color, hover states, luxury highlights)
- Warm Gray: #5a5a5a (Secondary text)
- Pure White: #ffffff (Backgrounds, contrast)
```

**Rationale**:
- **Charcoal (#2d2d2d)**: Strong, elegant, provides excellent contrast
- **Soft Pink (#fce2db)**: Warm, inviting, feminine without being overwhelming
- **Antique Gold (#d4af37)**: Luxury signifier, draws attention, implies value
- **Limited palette**: Creates cohesion and prevents visual noise

### Spacing System

Tailwind's default spacing scale (4px base unit):
- Sections: 12-24 (48px-96px vertical padding)
- Components: 4-8 (16px-32px margins)
- Elements: 2-4 (8px-16px padding)

Consistent use of this scale creates visual rhythm and professional polish.

### Motion & Transitions

- **Hover States**: 300-400ms ease transitions
- **Image Zooms**: 700ms for elegant, smooth scaling
- **Drag Interactions**: 60ms LERP (linear interpolation) for buttery-smooth carousel
- **Philosophy**: Subtle, purposeful motion that enhances UX without distraction

### Layout Logic

**Landing Page**:
1. Hero section with overlapping circular images creates dynamic visual interest
2. Brand intro provides context and credibility
3. Featured products highlight best sellers with unique card styling
4. Collection preview uses horizontal drag carousel for engagement

**Product Listing**:
- 4-column grid (desktop) → 2-column (tablet) → 1-column (mobile)
- Consistent aspect ratios using `object-cover` prevent stretched images
- Filter/sort controls positioned for easy access

**Product Detail**:
- Two-column layout: Large image left, info right (stacks on mobile)
- Specifications displayed in clean, scannable format
- Related products encourage continued browsing

### Component Architecture

**Reusable Components**:
- `ProductCard` - Used in explore page and related products
- `PageHeader` - Consistent navigation across pages
- Product detail subcomponents (`QuantitySelector`, `AddToCartButton`, etc.)

**Separation of Concerns**:
- UI components in `/components/ui/`
- Product-specific components in `/components/product/`
- Page components import and compose smaller pieces

## 📱 Responsive Design

Breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Key responsive strategies:
- Fluid typography with responsive font sizes
- Grid columns adjust dynamically
- Touch-optimized interactions on mobile (drag carousel)
- Appropriate padding/spacing for each breakpoint

## ⚠️ Known Limitations & Trade-offs

1. **Static Data**: Products stored in JSON rather than a database
   - *Trade-off*: Simplicity and fast deployment vs. dynamic content management
   
2. **No Backend**: Cart and wishlist states don't persist
   - *Trade-off*: Lightweight showcase vs. full e-commerce functionality
   
3. **Image Loading**: Using external CDN (Unsplash) for product images
   - *Trade-off*: No image hosting costs vs. potential loading delays
   
4. **Search**: No search functionality implemented
   - *Trade-off*: Kept scope focused on showcase vs. full product discovery features

5. **Browser Support**: Modern browsers only (ES6+ features)
   - *Trade-off*: Clean, modern code vs. legacy browser compatibility

## 📁 Project Structure

```
jewellery-frontend/
├── app/
│   ├── page.tsx              # Landing page
│   ├── explore/
│   │   └── page.tsx          # Product listing
│   └── product/[id]/
│       └── page.tsx          # Product detail
├── components/
│   ├── Header.tsx            # Global navigation
│   ├── Hero.tsx              # Landing hero section
│   ├── BrandIntro.tsx        # Brand story section
│   ├── FeaturedProducts.tsx  # Curated products
│   ├── ProductCatalog.tsx    # Draggable carousel
│   ├── product/              # Product detail components
│   └── ui/                   # Reusable UI components
├── data/
│   └── products.json         # Product data
└── public/                   # Static assets
```

## ✨ Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Category filtering and price sorting
- ✅ Smooth drag-to-scroll product carousel
- ✅ Product detail with complete specifications
- ✅ Graceful error handling for invalid product IDs
- ✅ Optimized images with proper aspect ratios
- ✅ Hover states and micro-interactions
- ✅ Clean, maintainable component architecture
- ✅ Type-safe TypeScript implementation

## 🚢 Deployment

This project can be deployed to:
- **Vercel** (recommended) - One-click deployment
- **Netlify** - Static site hosting
- **GitHub Pages** - Free hosting option

No environment variables or build configuration required.

## 📄 License

This project is for portfolio/showcase purposes.

---

**Built with attention to detail and a commitment to excellence** ✨
