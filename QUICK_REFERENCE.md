# Quick Start & Deployment Guide

## ⚡ 30-Second Setup

```bash
npm install
npm run dev
# Visit http://localhost:3000
```

## 🎯 Key Features at a Glance

✅ **Premium Apple Design** - Liquid glass components with backdrop blur
✅ **Dark/Light Mode** - Toggle in top-right corner
✅ **Smooth Animations** - Viewport-triggered scroll interactions
✅ **Responsive** - Mobile-first design
✅ **Contact Form** - Connected to Formspree backend
✅ **Dynamic Filtering** - Career pipeline with category filters

## 🚀 Deployment Options

### Option 1: Vercel (Fastest)
```bash
npm install -g vercel
vercel
# Login, select folder, auto-deploys
```

### Option 2: GitHub + Vercel
1. Push to GitHub: `git push`
2. Import repo at vercel.com
3. Click "Deploy"

### Option 3: Netlify
1. Push to GitHub
2. Connect at netlify.com
3. Auto-deploys on push

### Option 4: Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 Content Updates

### Change Experience
Edit `ReshmiPortfolio.jsx` lines 380-430:
```javascript
const experiences = [
  {
    role: 'Your Role',
    company: 'Company Name',
    duration: 'Start – End',
    description: 'What you did',
    category: 'Enterprise', // or 'Fintech', 'Research'
  },
  // ... more roles
];
```

### Change Skills
Edit lines 190-210:
```javascript
const skillsData = [
  {
    title: 'Category',
    skills: ['Skill1', 'Skill2', 'Skill3'],
  },
];
```

### Change Colors
Edit lines 12-24:
```javascript
colors: {
  accent: '#E11D48',      // Rose pink
  accentAlt: '#FBBF24',   // Amber yellow
  background: isDark ? '#0A0A0A' : '#F8F7F5',
}
```

## 📊 File Structure Explained

```
ReshmiPortfolio.jsx          ← All React components (1000+ lines)
├── ThemeProvider            ← Dark/light mode context
├── Header                   ← Hero section
├── SkillsSection            ← Technical skills grid
├── ExperienceSection        ← Career timeline with filters
├── EducationSection         ← Education history
├── CertificationsSection    ← Certifications grid
├── ContactForm              ← Formspree-integrated form
└── Footer                   ← Contact & links

page.jsx                     ← Next.js page wrapper
globals.css                  ← Base styles & Tailwind
tailwind.config.js           ← Tailwind customization
next.config.js               ← Next.js settings
package.json                 ← Dependencies
```

## 🔌 Formspree Setup (Contact Form)

1. Visit https://formspree.io/
2. Sign up free
3. Create new form
4. Copy form ID (e.g., mnqkelvk)
5. In ReshmiPortfolio.jsx line ~525, update:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
6. Forms will email to: reshmimaity.2207@gmail.com (configure in Formspree dashboard)

## 🎨 Animation Tuning

### Change animation speed
Edit transition duration in any component:
```javascript
transition={{ duration: 0.8, delay: 0.2 }}
// Lower = faster, Higher = slower
```

### Disable animations (for slower devices)
Wrap with motion detection:
```javascript
const prefersReducedMotion = useMotionTemplate();
// And conditionally render animations
```

## 📱 Mobile Testing

```bash
npm run dev
# Open http://localhost:3000 on phone
# Or use: Dev Tools → Toggle Device Toolbar (F12)
```

## 🔒 Security Checklist

- ✅ No sensitive data in code
- ✅ Environment variables in .env.local
- ✅ Formspree handles email security
- ✅ CSP headers configured in next.config.js

## 🚨 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
# Runs on port 3001
```

### Build fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Form not sending
1. Check Formspree form ID is correct
2. Verify email in Formspree dashboard
3. Check browser console (F12) for errors

### Animations not working
- Ensure framer-motion is installed: `npm install framer-motion`
- Check browser supports ES6 (modern browsers only)

## 📈 Performance Metrics

- **Lighthouse Score**: Target 90+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🌐 SEO Optimization

- Meta title: "Reshmi Maity | Data Scientist & AI Engineer"
- Meta description: Auto-generated in page.jsx
- Open Graph tags: Configured for social sharing
- Structured data: Add JSON-LD for schema.org

## 💡 Tips & Tricks

1. **Export as PDF**: Print → Save as PDF (Ctrl+P)
2. **Custom Domain**: Buy domain, point DNS to Vercel
3. **Analytics**: Add Google Analytics to next.config.js
4. **Email Notifications**: Configure Formspree to send email on submission
5. **CDN**: Automatically used by Vercel/Netlify

## 🔄 Version Control

```bash
git init
git add .
git commit -m "Initial commit: Portfolio site"
git remote add origin https://github.com/username/reshmi-portfolio
git push -u origin main
```

## 📞 Getting Help

- **Next.js**: https://nextjs.org/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Tailwind CSS**: https://tailwindcss.com
- **Formspree**: https://formspree.io/help/

---

**Your portfolio is production-ready. Deploy in 60 seconds with Vercel!**
