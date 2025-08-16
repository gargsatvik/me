# Satvik Garg - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful desktop layout
- **Smooth Animations**: Framer Motion powered entrance and hover effects
- **Fast Performance**: Optimized for speed and SEO
- **Accessible**: WCAG compliant with proper semantic HTML
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS

## 📱 Sections

- **Hero**: Name, tagline, and contact information
- **About**: Personal introduction and background
- **Projects**: Showcase of 6 featured projects with tech stacks
- **Leadership**: Leadership roles and achievements
- **Skills**: Technical and soft skills organized by category
- **Contact**: Call-to-action and contact information
- **Footer**: Social links and additional information

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd satvik-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
satvik-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Main page
│   │   └── globals.css         # Global styles
│   ├── components/              # React components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Leadership.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── data/
│       └── profile.json        # Content data
├── public/
│   ├── images/projects/        # Project screenshots
│   └── cv/                     # CV download
├── tailwind.config.js          # Tailwind configuration
└── package.json
```

## 🎨 Customization

### Content Updates

All content is stored in `src/data/profile.json`. Update this file to modify:

- Personal information
- Project details
- Skills and technologies
- Leadership roles
- Contact information

### Styling

- Colors: Update `tailwind.config.js` for brand colors
- Layout: Modify component classes in each component
- Animations: Adjust Framer Motion settings

### Adding New Sections

1. Create a new component in `src/components/`
2. Add it to `src/app/page.tsx`
3. Update the navigation if needed

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Manual Deployment

1. Build: `npm run build`
2. Export: `npm run export`
3. Upload the `out` folder to your hosting provider

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting (recommended)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 SEO Features

- Meta tags and Open Graph
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design

## 🔒 Security

- No sensitive data in client-side code
- Secure external links with `rel="noopener noreferrer"`
- HTTPS enforcement in production

## 📈 Analytics

To add analytics:

1. **Google Analytics**: Add GA4 tracking code
2. **Vercel Analytics**: Built-in with Vercel deployment
3. **Plausible**: Privacy-focused analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support:
- Email: gargsatvik31@outlook.com
- LinkedIn: [linkedin.com/in/garg-satvik](https://linkedin.com/in/garg-satvik)
- GitHub: [github.com/gargsatvik](https://github.com/gargsatvik)

---

Built with ❤️ using Next.js and Tailwind CSS
