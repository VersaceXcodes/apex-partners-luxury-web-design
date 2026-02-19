# Apex Partners - Luxury Web Design & Development Agency

A premium, fully responsive website for a luxury web design and development agency built with React, TypeScript, and TailwindCSS.

## 🚀 Features

- **9 Pages**: Home, About, Services, Portfolio (with case studies), Process, Pricing, Contact, FAQ, Privacy Policy
- **47 Implemented Features**: All features from the brief fully implemented
- **Luxury Design System**: Black & white color palette with elegant serif headings and modern sans-serif body text
- **Fully Responsive**: Mobile-first design with hamburger menu
- **SEO Optimized**: Meta tags, semantic HTML, and Open Graph images
- **Portfolio System**: 8 placeholder projects with filtering by category
- **Contact Form**: Functional mailto-based form
- **Smooth Animations**: Subtle fade-in effects with 200ms transitions

## 🎨 Design System

- **Primary Black**: `#0B0B0B`
- **White**: `#FFFFFF`
- **Grey Text**: `#B8B8B8`
- **Border Grey**: `#1E1E1E`
- **Accent Gold**: `#C6A15B` (optional)
- **Fonts**: Playfair Display (headings) + Inter (body)
- **Border Radius**: 8px consistent
- **Transitions**: 200ms ease-out

## 📦 Tech Stack

- React 18
- TypeScript
- Vite
- TailwindCSS
- React Router v6
- React Helmet Async (SEO)
- Lucide React (icons)

## 🛠 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx (sticky header with nav)
│   │   └── Footer.tsx (brand statement, links, social)
│   └── ui/ (shadcn/ui components)
├── pages/
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ServicesPage.tsx
│   ├── PortfolioPage.tsx
│   ├── CaseStudyPage.tsx
│   ├── ProcessPage.tsx
│   ├── PricingPage.tsx
│   ├── ContactPage.tsx
│   ├── FAQPage.tsx
│   └── PrivacyPolicyPage.tsx
├── data/
│   └── portfolio.ts (8 portfolio projects)
├── App.tsx (routes)
└── index.css (global styles)
```

## 🎯 Pages Overview

### Home
- Hero section with CTAs and quick highlights
- Trust bar with client names
- 6 service cards
- Featured portfolio (3 projects)
- Why Apex section (3 columns)
- Process preview (4 steps)
- Testimonials (3 quotes)
- Final CTA band

### About
- Brand positioning intro
- 4 core values
- Target client types
- CTA button

### Services
- 6 detailed service blocks:
  - Starter Website
  - Business Website
  - Restaurant Website
  - Barber/Salon Website
  - E-Commerce
  - Full-Service Platform
- Optional add-ons section

### Portfolio
- Grid of 8 projects
- Filter by category (All, Restaurants, Barbers/Salons, Business, E-Commerce, Platforms)
- Click through to detailed case studies

### Case Study (Dynamic)
- Overview, Goals, Deliverables, Result, Screenshots
- Back to portfolio navigation

### Process
- 5-step timeline with descriptions and timelines

### Pricing
- 6 pricing tiers with starting prices
- Disclaimer about custom pricing
- CTA button

### Contact
- Full form with 7 fields
- Mailto action (no backend needed)
- Contact details and social links

### FAQ
- 8 common questions with accordion interaction

### Privacy Policy
- Standard privacy policy template

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```js
colors: {
  apex: {
    black: '#0B0B0B',
    white: '#FFFFFF',
    grey: '#B8B8B8',
    border: '#1E1E1E',
    gold: '#C6A15B',
  }
}
```

### Fonts
Edit `src/index.css` import URL and `tailwind.config.js` font families.

### Portfolio Projects
Edit `src/data/portfolio.ts` to add/modify projects.

## 📝 Content Replacement

To customize for production:

1. **Contact Email**: Replace `hello@apexpartners.com` in:
   - ContactPage.tsx
   - Footer.tsx
   - FAQPage.tsx

2. **Social Links**: Update Instagram and LinkedIn URLs in Footer.tsx and ContactPage.tsx

3. **Location**: Update location text in Footer.tsx and ContactPage.tsx

4. **Pricing**: Update price placeholders in PricingPage.tsx

5. **Images**: Replace placeholder backgrounds with real images in:
   - Portfolio thumbnails
   - Case study screenshots
   - Hero backgrounds

6. **Portfolio**: Replace/expand the 8 projects in `src/data/portfolio.ts`

## 🚀 Deployment

This is a static site and can be deployed to:
- Vercel (recommended for Vite projects)
- Netlify
- GitHub Pages
- Any static hosting service

Build command: `npm run build`  
Output directory: `public/`

## ✨ Key Features Implemented

✅ Sticky navigation with mobile hamburger menu  
✅ Full responsive design (mobile-first)  
✅ SEO meta tags on all pages  
✅ Smooth animations and transitions  
✅ Portfolio with category filtering  
✅ Dynamic case study pages  
✅ Contact form with mailto action  
✅ FAQ accordion  
✅ Luxury black & white aesthetic  
✅ Button hover states (inverted colors)  
✅ Open Graph image for social sharing  
✅ Privacy policy  
✅ TypeScript type safety  
✅ Clean, maintainable code structure

## 📄 License

This project is proprietary and confidential.

---

**Built with precision. Designed for luxury.**
