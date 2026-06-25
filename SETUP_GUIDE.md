# Reshmi Maity's Premium Portfolio Website

A production-ready Apple-inspired React portfolio built with Next.js, Framer Motion, and Tailwind CSS.

## 🎨 Features

- **Liquid Glass Design**: Premium frosted glass components with backdrop blur effects
- **Dark/Light Mode Toggle**: Seamless theme switching with CSS variables
- **Framer Motion Animations**: Smooth scroll interactions and viewport-triggered animations
- **Responsive Layout**: Mobile-optimized with adaptive grid systems
- **Dynamic Content Filtering**: Career pipeline with category-based filtering
- **Contact Form**: Integrated Formspree backend for message submissions
- **Performance Optimized**: Built with Next.js 14 and production-ready configurations

## 📋 Project Structure

```
reshmi-portfolio/
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.jsx           # Main page component
│   └── globals.css        # Global styles and Tailwind directives
├── components/
│   └── ReshmiPortfolio.jsx # Main React component (all UI modules)
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS plugins configuration
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Git (optional, for version control)

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd reshmi-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up Formspree (for contact form)**
   - Visit https://formspree.io/
   - Create a new form endpoint
   - Replace the form ID in `ReshmiPortfolio.jsx` (line ~525):
     ```javascript
     const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     ```

4. **Run the development server**
   ```bash
   npm run dev
   # Server runs at http://localhost:3000
   ```

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 🎯 Key Components

### ThemeProvider & useTheme Hook
Global theme context managing dark/light mode colors and toggles.

### BackgroundCanvas
Animated gradient mesh background with slow-moving blob animations.

### LiquidGlassPanel
Reusable component creating frosted glass effect with backdrop blur and borders.

### Viewport Triggers
All sections use Framer Motion's `useInView` hook for scroll-triggered animations:
- Cards fade and translate on viewport entry
- Progress bars fill with spring physics
- Skill tags cascade animate with staggered delays

### ExperienceSection
Dynamic filtering system allowing users to view all, Enterprise, Fintech, or Research roles.

### ContactForm
Multi-state form component:
- `idle`: Ready for input
- `loading`: Submission in progress
- `success`: Message sent (auto-clears after 3s)
- `error`: Submission failed (auto-clears after 3s)

## 🎨 Customization Guide

### Colors
Edit theme colors in `ReshmiPortfolio.jsx` (lines 12-24):
```javascript
colors: {
  accent: '#E11D48',      // Primary rose color
  accentAlt: '#FBBF24',   // Secondary amber color
  // ... other colors
}
```

### Typography
Font sizes and weights are defined with Tailwind classes:
- Hero titles: `text-6xl font-bold`
- Section titles: `text-4xl font-bold`
- Body text: Default 16px with 1.7 line height

### Animations
Framer Motion variants can be customized in individual components:
- `initial`: Starting state
- `animate`: Target state
- `transition`: Duration, delay, easing
- `whileHover`: Interactive hover states
- `whileTap`: Button press feedback

### Gradient Background
Modify the animated blob gradients in `BackgroundCanvas` component (lines 75-88).

## 📱 Responsive Behavior

The portfolio uses Tailwind's responsive prefixes:
- `md:` breakpoint at 768px
- Grid layouts switch from 1 column (mobile) to 2 columns (desktop)
- All text scales appropriately for smaller screens

## 🔧 Form Configuration

The contact form submits to Formspree. To set it up:

1. Go to https://formspree.io/
2. Sign up or log in
3. Create a new form
4. Copy the form ID
5. Update this line in `ReshmiPortfolio.jsx`:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

Alternatively, update the email field in Formspree settings to send to: reshmimaity.2207@gmail.com

## 📊 Content Management

All content is hardcoded in the component for simplicity. To update:

### Professional Experience
Edit the `experiences` array in `ExperienceSection` (lines ~380-430)

### Education
Modify the `education` array in `EducationSection` (lines ~550-580)

### Skills
Update `skillsData` in `SkillsSection` (lines ~190-210)

### Certifications
Edit the `certifications` array in `CertificationsSection` (lines ~630-640)

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository at vercel.com
3. Deploy with one click

### Other Platforms
- **Netlify**: Connect GitHub, auto-deploys on push
- **AWS Amplify**: Git-based deployment with CI/CD
- **Docker**: Create Dockerfile with Node.js base image

### Environment Variables
No environment variables required for basic deployment. For email notifications, configure Formspree settings.

## ⚡ Performance Optimization

- Next.js automatic code splitting
- Framer Motion GPU-accelerated animations
- Tailwind CSS purged unused styles
- Image optimization enabled
- Production minification enabled

## 🔍 SEO

Metadata is configured in `page.jsx`:
- Title: "Reshmi Maity | Data Scientist & AI Engineer"
- Description: Portfolio tagline
- Open Graph tags for social sharing

## 🐛 Troubleshooting

### Form not submitting
- Verify Formspree form ID is correct
- Check browser console for CORS errors
- Ensure email field name matches form expectation

### Animations lag on mobile
- Reduce animation complexity in lower-end devices
- Use `reduceMotion` media query for accessibility

### Theme not persisting
- Add localStorage persistence to ThemeProvider
- Use Next.js custom storage adapter

## 📦 Dependencies

- **next**: React framework for production
- **react & react-dom**: Core React libraries
- **framer-motion**: Animation library
- **tailwindcss**: Utility-first CSS framework

## 📄 License

This portfolio is provided as-is for personal use by Reshmi Maity.

## 📞 Support

For deployment issues or customization help, refer to:
- Next.js docs: https://nextjs.org/docs
- Framer Motion: https://www.framer.com/motion/
- Tailwind CSS: https://tailwindcss.com/docs

---

**Built with ❤️ using React, Next.js, Framer Motion, and Tailwind CSS**
