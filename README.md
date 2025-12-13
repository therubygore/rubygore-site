# The Ruby Gore - Next.js Website

A modern, performant website for Ruby Gore's tattoo studio, built with Next.js, React, and TypeScript.

## Quick Start

### Prerequisites
- **Node.js ≥20.9.0** (required for Next.js 16)
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm run start
```

## Project Structure

```
rubygore-site/
├── src/app/
│   ├── _components/      # Reusable React components
│   ├── page.tsx          # Homepage
│   ├── about/            # About page
│   ├── blog/             # Blog index
│   ├── contact/          # Contact page
│   ├── pricing/          # Pricing page
│   ├── faqs/             # FAQs page
│   ├── vegan-tattoos/    # Vegan tattoos page
│   ├── scar-cover-up-tattoos/  # Scar cover-ups page
│   ├── survivor-tattoo-project/  # Survivor project page
│   ├── booking-process/  # Booking process page
│   ├── booking-policies/ # Booking policies page
│   ├── apply-now/        # Application page
│   ├── enhanced-cleaning/  # Safety protocols page
│   ├── privacy/          # Privacy policy
│   ├── terms/            # Terms of service
│   ├── disclaimer/       # Disclaimer
│   ├── globals.css       # Global styles
│   └── layout.tsx        # Root layout
├── public/
│   ├── images/           # All images organized by category
│   └── fonts/            # Local fonts
├── package.json
├── next.config.ts
└── tsconfig.json
```

## Features

### Completed
- ✅ 14 fully functional pages
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Interactive components (carousel, accordion, mobile menu)
- ✅ SEO-optimized with metadata
- ✅ Type-safe with TypeScript
- ✅ Accessible navigation
- ✅ Google Fonts integration
- ✅ All original styles preserved

### Tech Stack
- **Framework**: Next.js 16.0.10 (App Router)
- **UI Library**: React 19.2.1
- **Language**: TypeScript 5
- **Styling**: CSS (globals.css)
- **Content**: MDX ready (for blog posts)
- **Fonts**: Google Fonts via next/font

## Key Components

### Reusable Components
- `Header` - Navigation with mobile menu
- `Footer` - Studio info, newsletter, map
- `PageHero` - Page title/subtitle section
- `CtaSection` - Call-to-action blocks
- `TocLayout` - Table of contents with sections
- `FaqAccordion` - FAQ with expand/collapse
- `CoverflowCarousel` - Auto-rotating image carousel
- `Testimonials` - Client testimonial grid
- `LogoGrid` - Publication logo display
- `HeroSection` - Homepage hero

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, services, pricing, FAQs |
| `/about` | About Ruby Gore |
| `/vegan-tattoos` | Vegan tattooing information |
| `/scar-cover-up-tattoos` | Scar cover-up FAQs |
| `/survivor-tattoo-project` | Survivor project details |
| `/booking-process` | How to book |
| `/booking-policies` | Policies and fees |
| `/enhanced-cleaning` | Safety protocols |
| `/pricing` | Pricing tiers |
| `/faqs` | Frequently asked questions |
| `/contact` | Contact form and map |
| `/apply-now` | Studio hours and application |
| `/blog` | Blog index |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/disclaimer` | Legal disclaimer |

## Development

### Adding a New Page
1. Create `src/app/your-page/page.tsx`
2. Add metadata export
3. Use existing components (`PageHero`, `TocLayout`, etc.)
4. Link from navigation in `Header.tsx`

### Styling
- Global styles in `src/app/globals.css`
- CSS custom properties for colors, spacing, fonts
- Responsive breakpoints: 768px (tablet), 1024px (desktop)

### Images
- Store in `public/images/`
- Reference as `/images/your-image.jpg`
- Use `loading="lazy"` for below-the-fold images

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
- Build command: `npm run build`
- Publish directory: `.next`

### Environment Variables
None required for basic deployment. Add these if needed:
- `NEXT_PUBLIC_GOOGLE_ANALYTICS` - GA tracking ID
- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager ID

## SEO

Each page includes:
- Unique `<title>` tag
- Meta description
- Open Graph tags (can be added)
- Semantic HTML structure
- Responsive meta viewport

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance
- Optimized Google Fonts loading
- Lazy loading for images
- CSS loaded as single global file
- React Server Components where possible
- Static generation for most pages

## Troubleshooting

### "Node.js version >=20.9.0 is required"
Update Node.js:
```bash
# Using nvm
nvm install 20
nvm use 20

# Using Homebrew (macOS)
brew upgrade node
```

### Images not loading
- Verify images are in `public/images/`
- Check image paths start with `/images/`
- Ensure case matches exactly (case-sensitive on Linux)

### Build errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## Future Enhancements
- [ ] Individual blog post pages (MDX)
- [ ] Form backend integration
- [ ] Google Tag Manager
- [ ] Optimize images with Next.js `<Image>`
- [ ] Add aftercare resource pages
- [ ] Implement newsletter signup backend

## Contributing
This is a private project for The Ruby Gore. For questions or issues, contact [contact@therubygore.com](mailto:contact@therubygore.com).

## License
All rights reserved © 2024 The Ruby Gore / Black Thorne Tattoo

---

**Studio Information**

Black Thorne Tattoo  
419 SE 13th Ave  
Portland, OR 97214  

[contact@therubygore.com](mailto:contact@therubygore.com)  
[(503) 908-5188](tel:5039085188)  
[therubygore.com](https://www.therubygore.com)
