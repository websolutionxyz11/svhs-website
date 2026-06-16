# School Website Build Prompt

Use this comprehensive prompt to build a modern, responsive school website similar to **Sree Vidya High School**.

---

## 📋 Project Overview

Build a modern, SEO-optimized school website for a K-10 educational institution using React, TanStack Router, and Tailwind CSS with SSR support (TanStack Start). The site showcases the school's mission, facilities, events, admissions, and achievements with smooth animations and responsive design.

**Target School:** [School Name]  
**Grade Levels:** K-10  
**Key Focus:** Admissions, Events, Achievements, Community Engagement  
**Deployment:** Vercel with SSR (TanStack Start)

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 19 with TypeScript
- **Router:** TanStack Router v1.168+ (file-based routing)
- **SSR:** TanStack Start v1.167+ (server-side rendering)
- **Styling:** Tailwind CSS v4 with custom design tokens
- **Animations:** Framer Motion v12+ for smooth transitions
- **UI Components:** Radix UI (accordion, dialog, tabs, etc.)
- **Forms:** React Hook Form v7 + Zod validation
- **Data Fetching:** TanStack React Query v5

### Build & Dev
- **Build Tool:** Vite v7 with TanStack plugin
- **Package Manager:** npm or Bun
- **Server:** Nitro v3 (serverless functions on Vercel)
- **Linting:** ESLint + Prettier

### Deployment
- **Host:** Vercel (with auto-scaling functions)
- **Database:** Optional (Supabase, MongoDB, or Firebase for forms/CMS)
- **CDN:** Vercel Edge Network

---

## 📄 Page Structure

### 1. **Home Page** (`/`)
- **Hero Section:** Full-width header with school tagline, CTA buttons (Admissions, Events, Contact)
- **Quick Stats:** Cards showing student count, years established, achievements
- **Core Values:** 3-4 pillars (Academic Excellence, Holistic Development, Community, Innovation)
- **Facilities Showcase:** Grid of facility images (classrooms, lab, library, sports ground, etc.)
- **Testimonials:** Carousel of student/parent quotes
- **Call-to-Action:** Admission banner with link to admission form
- **FAQ:** Accordion with common questions
- **Newsletter Signup:** Email subscription form

### 2. **Admissions** (`/admissions`)
- **Hero:** Admissions overview with key dates
- **Admission Timeline:** Step-by-step process (Apply → Assessment → Interview → Confirmation)
- **Admission Criteria:** Grade-wise requirements, eligibility
- **Download Resources:** Prospectus PDF, application form, fee structure
- **FAQ Accordion:** Admission-specific questions
- **Application Form:** Web form or link to external form (Google Forms, TypeForm, or custom)
- **Contact Card:** Admissions office contact info + WhatsApp link
- **Scholarship Information:** Eligibility and benefits

### 3. **Events** (`/events`)
- **Hero:** Events tagline
- **Upcoming Events:** Grid/carousel of upcoming events with dates, locations, category badges
- **Timeline:** Visual timeline of annual events (vertical timeline component)
- **Past Events Section:** Filterable grid by category (Sports, Cultural, Academic)
  - **NEW: Image Carousel (Gallery Highlights):** Full-width auto-playing carousel with:
    - 5+ high-quality event photos
    - Left/right navigation arrows
    - Bottom dot pagination
    - Auto-play (pause on hover)
    - Swipe/touch support
    - Captions overlay with category badge
    - Smooth fade animations
- **Event Videos:** Grid of embedded YouTube videos with play buttons
- **CTA:** Join WhatsApp community for event updates

### 4. **Gallery** (`/gallery`)
- **Hero:** Gallery headline
- **Lightbox Gallery:** Grid of school photos (campus, events, activities, classrooms)
- **Category Filter:** Filter by (All, Campus, Events, Academics, Sports, Cultural)
- **Lazy Loading:** Images load on scroll
- **Lightbox Modal:** Click to expand image with navigation

### 5. **Achievements** (`/achievements`)
- **Hero:** Achievements headline
- **Stats Section:** Key achievements (Awards won, Students excelled, etc.)
- **Achievements Timeline:** Year-by-year achievements with icons
- **Student Spotlights:** Featured student stories/profiles (card grid)
- **Awards & Recognition:** Logos/badges of awards received
- **Topper's Section:** Top scorers gallery

### 6. **About** (`/about`)
- **Hero:** School mission & vision
- **Our Story:** School history section
- **Mission & Vision:** Highlighted text blocks
- **Leadership Team:** Faculty/staff profiles (cards with photos, roles)
- **Core Values:** 4-5 core values with icons and descriptions
- **Accreditations:** Logos and certifications

### 7. **Contact** (`/contact`)
- **Hero:** Contact headline
- **Contact Form:** Name, Email, Phone, Message with validation
- **School Info Cards:** Address, phone, email, hours
- **Location Map:** Embedded Google Map
- **Social Media Links:** Facebook, Instagram, Twitter, LinkedIn, YouTube
- **Quick Response:** "We'll get back to you within 24 hours" message

### 8. **Sitemap** (`/sitemap.xml`)
- **Auto-generated XML sitemap** for SEO

---

## 🎨 Design System

### Color Scheme
- **Primary:** Deep Blue (`#1E3A8A`)
- **Secondary:** Amber/Gold (`#F59E0B`)
- **Accent:** Teal (`#14B8A6`)
- **Background:** Light Gray (`#F9FAFB`)
- **Card:** White (`#FFFFFF`)
- **Text:** Dark Gray (`#1F2937`)
- **Muted:** Medium Gray (`#6B7280`)

### Typography
- **Headline Font:** "Plus Jakarta Sans" (Bold, 700, 800)
- **Body Font:** "Inter" (Regular, 500, 600)
- **Sizes:** H1 (48px), H2 (36px), H3 (24px), Body (16px), Small (14px)

### Spacing & Sizing
- **Container Max Width:** 1280px
- **Section Padding:** 80px vertical, 24px horizontal (responsive)
- **Gap/Margins:** 8px base unit (8, 16, 24, 32, 40, 48px)
- **Border Radius:** 12px (cards), 16px (buttons), 24px (containers)

### Components
- **Cards:** Subtle shadow, hover lift effect, rounded corners
- **Buttons:** Primary gradient, secondary outline, tertiary text
- **Input Fields:** Rounded borders, focus states, validation feedback
- **Links:** Underline on hover, color change to accent

---

## ⚡ Key Features & Requirements

### Global Features
- ✅ **Responsive Design:** Mobile-first, optimized for all breakpoints (320px, 768px, 1024px, 1280px+)
- ✅ **Dark Mode:** Optional toggle (store preference in localStorage)
- ✅ **Accessibility:** WCAG 2.1 AA compliant (alt text, ARIA labels, keyboard navigation)
- ✅ **SEO Optimization:** Meta tags, canonical URLs, Open Graph, structured data (schema.org)
- ✅ **Performance:** Lazy loading, image optimization, code splitting
- ✅ **Animations:** Smooth page transitions, entrance animations on scroll, hover effects
- ✅ **Loading States:** Skeleton screens or spinners for async data
- ✅ **Error Pages:** 404 page with helpful navigation

### Page-Specific Features

**Home Page:**
- Scroll-triggered entrance animations (Reveal component)
- Stats counter animation
- Testimonial carousel (auto-playing)
- Sticky navigation header with scroll effects

**Admissions Page:**
- Form validation with real-time feedback
- Success/error toast notifications
- Downloadable PDFs
- Step-by-step timeline animation

**Events Page:**
- **Image Carousel (NEW):**
  - Embla or Framer Motion-based carousel
  - 5-6 event photos
  - Auto-play every 4-5 seconds
  - Pause on hover
  - Swipe support (50px+ to switch)
  - Smooth fade transitions
  - Bottom dot pagination (clickable)
  - Left/right arrow buttons
  - Slide counter (e.g., "3/6")
  - Caption overlay with category badge
  - Responsive aspect ratio (16:9 on desktop, 4:3 on mobile)
- Category filtering with smooth transitions
- Video lightbox modal

**Gallery Page:**
- Grid layout with masonry effect (optional)
- Filter buttons for categories
- Click to expand in lightbox
- Keyboard navigation (arrow keys)
- Image preloading for smooth viewing

**Contact Page:**
- Form validation (email, phone format)
- Success message after submission
- Integration with email service (SendGrid, Resend, etc.)
- Map with directions

---

## 📱 Mobile & Responsive Design

- **Mobile Menu:** Hamburger menu (slides in from left/right)
- **Touch Targets:** Minimum 44x44px for buttons
- **Swipe Gestures:** Carousel swipe, mobile navigation swipe
- **Viewport:** Proper meta viewport tag set
- **Image Sizes:** Responsive images with `srcset` for different screen sizes
- **Font Sizes:** Scale text for mobile readability

---

## 🔍 SEO & Performance

### SEO Requirements
- **Title & Meta Tags:** Unique for each page
- **Meta Descriptions:** 150-160 characters
- **Open Graph Tags:** For social media sharing
- **Schema.org Markup:** EducationalOrganization, LocalBusiness, Event
- **Sitemap:** Auto-generated and submitted to search engines
- **Robots.txt:** Configured for crawling
- **Canonical URLs:** Set for each page
- **Internal Linking:** Proper link structure

### Performance Targets
- **Lighthouse Score:** 90+ on all metrics
- **First Contentful Paint (FCP):** < 1.5 seconds
- **Largest Contentful Paint (LCP):** < 2.5 seconds
- **Cumulative Layout Shift (CLS):** < 0.1
- **Time to Interactive (TTI):** < 3 seconds
- **Image Optimization:** WebP format, lazy loading
- **Code Splitting:** Separate bundles per route

---

## 📧 Forms & Integrations

### Contact Form
- Fields: Name, Email, Phone, Message
- Validation: Required fields, email format, phone format
- Submission: Send email (via backend service)
- Confirmation: Thank you message + auto-reply email

### Admission Inquiry Form
- Fields: Name, Grade, Parent Email, Phone, Message
- Integration: Store in database or send email

### Newsletter Signup
- Field: Email
- Integration: Mailchimp, ConvertKit, or similar

### Social Media
- Links: Facebook, Instagram, Twitter, LinkedIn, YouTube, WhatsApp
- WhatsApp Business: Direct link to WhatsApp group

---

## 🗂️ Folder Structure

```
src/
├── routes/                    # File-based routes
│   ├── __root.tsx            # Root layout
│   ├── index.tsx             # Home page
│   ├── admissions.tsx        # Admissions page
│   ├── events.tsx            # Events page
│   ├── gallery.tsx           # Gallery page
│   ├── achievements.tsx      # Achievements page
│   ├── about.tsx             # About page
│   ├── contact.tsx           # Contact page
│   └── sitemap[.]xml.ts      # Sitemap generator
├── components/
│   ├── ui/                   # Radix UI primitives (accordion, dialog, etc.)
│   ├── Navigation/           # Header, footer, mobile menu
│   ├── Hero.tsx              # Page hero component
│   ├── Carousel.tsx          # Image carousel
│   ├── Lightbox.tsx          # Image lightbox
│   ├── Form.tsx              # Reusable form component
│   ├── Card.tsx              # Card component
│   └── ...
├── hooks/
│   ├── useForm.ts            # Form handling
│   ├── useIntersection.ts    # Scroll animation trigger
│   └── ...
├── lib/
│   ├── api/                  # API client functions
│   ├── utils.ts              # Utility functions
│   ├── config.ts             # App configuration
│   └── error-handling.ts     # Error handling utilities
├── assets/
│   ├── images/               # School photos
│   ├── icons/                # SVG icons
│   └── ...
└── styles/
    └── globals.css           # Global styles
```

---

## 🚀 Development Workflow

1. **Setup:** Clone repo, install dependencies (`npm install`)
2. **Development:** Run `npm run dev` (starts dev server on localhost:3000)
3. **Development Variant:** `npm run build:dev` for dev builds
4. **Production Build:** Run `npm run build` (creates optimized production bundle)
5. **Preview:** Run `npm run preview` to test production build locally
6. **Linting:** `npm run lint` to check code quality
7. **Formatting:** `npm run format` to auto-format code

---

## 🌐 Deployment on Vercel

1. **Connect Repository:** Link GitHub repo to Vercel
2. **Environment Variables:** Set any required env vars (API keys, etc.)
3. **Build Settings:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. **Vercel Config:** `vercel.json` with:
   - Framework: `tanstack-start`
   - Rewrites for SPA fallback (if needed)
5. **Auto-Deploy:** Every push to main branch triggers deployment
6. **Custom Domain:** Configure domain in Vercel dashboard

---

## 📋 Content Checklist

Before launch, ensure you have:
- [ ] School logo (SVG + PNG)
- [ ] Favicon (PNG + ICO)
- [ ] School photos (20+ high-quality images)
- [ ] Event photos (30+ images for carousel)
- [ ] Staff/team photos with bios
- [ ] School mission & vision statements
- [ ] Admission criteria & timeline
- [ ] Fee structure document
- [ ] FAQs (30-50 questions)
- [ ] Contact information (address, phone, email)
- [ ] Social media handles & links
- [ ] Google Analytics tracking code
- [ ] Google Search Console verification

---

## 🎯 Success Metrics

Track these KPIs after launch:
- **Traffic:** Sessions, page views, bounce rate
- **Admissions:** Inquiry form submissions, admission applications
- **Engagement:** Time on page, scroll depth, click-through rate
- **Conversions:** Email signups, WhatsApp group joins
- **SEO:** Ranking positions, organic search traffic
- **Performance:** Page load time, Lighthouse scores
- **Social:** Social media referrals, shares

---

## 🔐 Security & Privacy

- [ ] HTTPS enabled (automatic on Vercel)
- [ ] Environment variables for sensitive data (API keys, secrets)
- [ ] Form input validation (client & server-side)
- [ ] CSRF protection for forms
- [ ] Privacy Policy page
- [ ] Terms & Conditions page
- [ ] GDPR compliance (if applicable)
- [ ] Cookie consent banner (if using analytics)

---

## 📝 Optional Enhancements

- **CMS Integration:** Headless CMS (Sanity, Strapi, Contentful) for easy content updates
- **Blog:** Blog section with article archive and categories
- **Student Portal:** Login area for students/parents (requires backend)
- **Virtual Tour:** 360° campus tour or video walkthrough
- **Live Chat:** Intercom or Drift for live support
- **Multi-language:** i18n support (English, Hindi, etc.)
- **PWA:** Progressive Web App features (offline support)
- **Testimonial Videos:** Embedded YouTube videos from students/parents
- **Event Registration:** Integrate with Eventbrite or similar
- **Online Payment:** Accept fees/donations via Stripe/Razorpay

---

## 📞 Support & Maintenance

- **Bug Fixes:** Monitor Vercel logs and fix issues promptly
- **Content Updates:** Regular photo/event updates (monthly or as needed)
- **Security Patches:** Keep dependencies updated (`npm audit`, `npm update`)
- **Analytics Review:** Monthly review of Google Analytics
- **SEO Monitoring:** Track keyword rankings and organic traffic
- **Backup:** Regular backups of content and database (if applicable)

---

## 📚 Additional Resources

- **TanStack Router Docs:** https://tanstack.com/router/latest
- **TanStack Start Docs:** https://tanstack.com/start/latest
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **Vercel Docs:** https://vercel.com/docs
- **React Best Practices:** https://react.dev/
- **Web Accessibility:** https://www.w3.org/WAI/

---

**Last Updated:** June 2026  
**Version:** 1.0
