# Deployment Guide - The Ruby Gore Website

## Pre-Deployment Checklist

### ✅ Code Quality
- [x] All pages compile without errors
- [x] TypeScript types are correct
- [x] All images referenced exist in `public/images/`
- [x] No broken internal links
- [x] Metadata set for all pages

### ✅ Testing (Run locally before deploying)
- [ ] Test on Node.js 20.9.0+
- [ ] Run `npm run build` successfully
- [ ] Test `npm run start` (production mode)
- [ ] Visual QA on desktop (1920px)
- [ ] Visual QA on tablet (768px-1024px)
- [ ] Visual QA on mobile (375px-767px)
- [ ] Test all interactive components:
  - [ ] Carousel auto-rotation
  - [ ] FAQ accordion
  - [ ] Mobile menu
  - [ ] TOC navigation
  - [ ] All CTAs link correctly

### ⚠️ Environment Requirements
- Node.js ≥20.9.0
- npm or yarn package manager

---

## Option 1: Deploy to Vercel (Recommended)

### Why Vercel?
- Built by Next.js creators
- Zero-config deployment
- Automatic HTTPS
- Edge network (fast globally)
- Free tier for personal projects
- Built-in analytics

### Steps

#### 1. Install Vercel CLI
```bash
npm i -g vercel
```

#### 2. Login to Vercel
```bash
vercel login
```

#### 3. Deploy (First Time)
```bash
cd /Users/rubygore/Documents/code-projects/rubygore-site
vercel
```

Follow prompts:
- Link to existing project? `N`
- What's your project's name? `rubygore-site`
- In which directory is your code located? `./`
- Want to modify settings? `N`

#### 4. Deploy to Production
```bash
vercel --prod
```

#### 5. Custom Domain Setup
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add `therubygore.com`
3. Update DNS at your domain registrar:
   - **A Record**: `76.76.21.21` (Vercel's IP)
   - **CNAME**: `cname.vercel-dns.com`
4. Wait for DNS propagation (up to 24 hours)

### Vercel Configuration (Optional)
Create `vercel.json` if you need custom config:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

---

## Option 2: Deploy to Netlify

### Steps

#### 1. Install Netlify CLI
```bash
npm i -g netlify-cli
```

#### 2. Login to Netlify
```bash
netlify login
```

#### 3. Initialize Site
```bash
cd /Users/rubygore/Documents/code-projects/rubygore-site
netlify init
```

#### 4. Configure Build Settings
- Build command: `npm run build`
- Publish directory: `.next`
- Functions directory: (leave empty)

#### 5. Deploy
```bash
netlify deploy --prod
```

#### 6. Custom Domain
1. Go to Netlify Dashboard → Domain Settings
2. Add custom domain `therubygore.com`
3. Update DNS at your registrar:
   - **A Record**: Netlify's IP (provided in dashboard)
   - Or **CNAME**: `your-site.netlify.app`

### Netlify Configuration
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Option 3: Self-Hosted (VPS/Dedicated Server)

### Requirements
- Ubuntu/Debian server
- Node.js 20.9.0+
- Nginx or Apache
- PM2 for process management

### Steps

#### 1. Copy Files to Server
```bash
scp -r /Users/rubygore/Documents/code-projects/rubygore-site user@your-server:/var/www/
```

#### 2. SSH into Server
```bash
ssh user@your-server
cd /var/www/rubygore-site
```

#### 3. Install Dependencies & Build
```bash
npm install
npm run build
```

#### 4. Install PM2
```bash
npm install -g pm2
```

#### 5. Start Application
```bash
pm2 start npm --name "rubygore-site" -- start
pm2 save
pm2 startup
```

#### 6. Configure Nginx
```nginx
server {
    listen 80;
    server_name therubygore.com www.therubygore.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### 7. Restart Nginx
```bash
sudo nginx -t
sudo systemctl restart nginx
```

#### 8. SSL Certificate (Let's Encrypt)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d therubygore.com -d www.therubygore.com
```

---

## Post-Deployment Tasks

### 1. DNS Configuration
When pointing `therubygore.com` to new site:
- Current site is at old location
- Set up new site at subdomain first: `new.therubygore.com`
- Test thoroughly
- Update main domain DNS
- Keep landing page (`rubygore-landing-page/`) separate

### 2. Add Google Tag Manager
In `src/app/layout.tsx`, add after `<body>` tag:
```typescript
<Script
  id="gtm-script"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-XXXXXXX');
    `,
  }}
/>
```

### 3. Set Up Form Backend
Options for contact/application forms:
- **Formspree**: Simple, free tier available
- **Netlify Forms**: Built-in if using Netlify
- **SendGrid API**: Full control
- **Custom backend**: Node.js + Express

### 4. Analytics
- Google Analytics 4
- Vercel Analytics (if using Vercel)
- Plausible (privacy-focused alternative)

### 5. Monitoring
- Uptime monitoring: UptimeRobot, Pingdom
- Error tracking: Sentry
- Performance: Lighthouse CI

---

## Environment Variables

If you need environment variables, create `.env.local`:
```env
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Forms
NEXT_PUBLIC_FORMSPREE_ID=xxxxx

# Contact
NEXT_PUBLIC_CONTACT_EMAIL=contact@therubygore.com
NEXT_PUBLIC_PHONE=(503) 908-5188
```

---

## Landing Page Micro-site

**IMPORTANT**: Do NOT touch the existing landing page deployment!

The ad landing page (`rubygore-landing-page/`) must remain:
- At its current URL
- With its current deployment
- Completely separate from this new site

Only update the main domain (`therubygore.com`) to point to the new Next.js site.

---

## Rollback Plan

If issues arise after deployment:

### Vercel
```bash
# List deployments
vercel ls

# Rollback to previous
vercel rollback [deployment-url]
```

### Netlify
1. Go to Netlify Dashboard → Deploys
2. Find previous deploy
3. Click "Publish deploy"

### Self-Hosted
```bash
# Stop current
pm2 stop rubygore-site

# Revert code (if using git)
git reset --hard [previous-commit]
npm install
npm run build

# Restart
pm2 restart rubygore-site
```

---

## Performance Optimization (Post-Launch)

### 1. Image Optimization
Convert images to Next.js `<Image>` component:
```tsx
import Image from 'next/image';

<Image
  src="/images/photo.jpg"
  alt="Description"
  width={800}
  height={600}
  loading="lazy"
/>
```

### 2. Enable Compression
In `next.config.ts`:
```typescript
const nextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};
```

### 3. Analyze Bundle
```bash
npm install @next/bundle-analyzer
```

### 4. Add Caching Headers
For static assets, set cache headers in hosting config.

---

## Support Contacts

### Technical Issues
- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Netlify Support: https://www.netlify.com/support/

### Domain/DNS Issues
Contact your domain registrar's support

### Hosting Issues
Vercel: support@vercel.com  
Netlify: support@netlify.com

---

## Launch Timeline Recommendation

### Week 1: Setup & Testing
- Day 1-2: Set up hosting account (Vercel/Netlify)
- Day 3-4: Deploy to staging subdomain
- Day 5-7: Full testing (all devices, browsers)

### Week 2: Pre-Launch
- Day 1-2: Fix any issues found in testing
- Day 3-4: Set up analytics and monitoring
- Day 5: Final review with stakeholders
- Day 6-7: DNS preparation

### Week 3: Launch
- Day 1: Update DNS (morning)
- Day 1-7: Monitor closely, fix any issues

---

## Success Metrics to Track

After launch, monitor:
- **Performance**: Lighthouse scores (aim for 90+)
- **Uptime**: 99.9% target
- **Load Time**: < 3 seconds on 3G
- **Mobile Score**: > 95
- **SEO Score**: > 95
- **Conversion Rate**: Appointment bookings
- **Traffic**: Sessions, page views
- **Engagement**: Time on site, bounce rate

---

**Questions?**  
Contact: contact@therubygore.com  
Phone: (503) 908-5188

