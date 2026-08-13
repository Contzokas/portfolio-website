# 🚀 Constantinos Tzokas - Developer Portfolio

A modern, minimalistic portfolio website showcasing my software development projects, robotics achievements, and professional experience. Built with Next.js 16 and featuring a sleek, techy design with dynamic color-coded awards system.

![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

### 🎨 Modern Design
- **Techy Aesthetic**: Grid patterns, scanlines, animated gradient orbs
- **Dark Mode**: Fully responsive dark theme
- **Smooth Animations**: Fade-in, slide-up, and scale transitions
- **Mobile Responsive**: Optimized for all devices with hamburger menu

### 📄 Pages

#### 🏠 **Home**
- Profile photo with tech grid background
- GitHub profile integration
- About section

#### 💼 **Projects**
- Auto-synced with GitHub repositories
- README description extraction with Greek alphabet support
- HTML tag removal for clean descriptions
- Repository stats (stars, forks, language)
- Direct links to live projects and source code

#### 📧 **Contact**
- Email, LinkedIn, Facebook, Instagram cards
- Gradient hover effects
- Direct contact links

#### 📄 **CV**
- Bilingual PDF viewer (English/Greek)
- Language toggle
- Download functionality
- Embedded PDF iframe

#### 🏆 **Awards**
- Dynamic color system based on placement (Gold/Silver/Bronze)
- Clickable award cards
- Multi-image gallery with navigation
- Image modal/lightbox with prev/next buttons
- Dot indicators for multiple images
- LinkedIn integration

### 🎯 Special Features

#### 🎨 **Dynamic Award Colors**
Awards automatically display colors based on placement:
- **🥇 1st Place/Gold**: Yellow-400/500, Orange-500 gradient
- **🥈 2nd Place/Silver**: Gray-400/500 gradient
- **🥉 3rd Place/Bronze**: Orange-600, Amber-700 gradient

#### 🔍 **GitHub Integration**
- Fetches live repository data via GitHub API
- Parses README files with UTF-8 support
- Displays repository statistics
- Filters out forked repositories

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.0.0](https://nextjs.org/) (App Router)
- **UI Library**: [React 19.2.0](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Image Optimization**: next/image
- **Font**: Geist Sans & Geist Mono
- **API Integration**: GitHub REST API
- **Deployment**: Vercel-ready

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/Contzokas/website-portfolio.git
cd website-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 📁 Project Structure

```
website-portfolio/
├── app/
│   ├── components/
│   │   ├── Navigation.js      # Responsive navbar with hamburger menu
│   │   └── Footer.js          # Reusable footer component
│   ├── photos/
│   │   └── IMG_1561.jpg       # Profile photo
│   ├── awards/
│   │   └── page.js            # Awards page with dynamic colors
│   ├── contact/
│   │   └── page.js            # Contact information
│   ├── cv/
│   │   └── page.js            # Bilingual CV viewer
│   ├── projects/
│   │   └── page.js            # GitHub projects showcase
│   ├── layout.js              # Root layout with metadata
│   ├── page.js                # Homepage
│   └── globals.css            # Custom animations & styles
├── public/
│   ├── awards/                # Award images
│   ├── cv-english.pdf         # English CV
│   ├── cv-greek.pdf           # Greek CV
│   ├── favicon.ico            # Favicon files
│   └── *.png                  # App icons
├── next.config.mjs            # Next.js configuration
├── tailwind.config.js         # Tailwind configuration
└── package.json
```

## 🎨 Customization

### Update Personal Information

1. **GitHub Username**: Change `Contzokas` in API calls
2. **Contact Links**: Update URLs in `app/contact/page.js`
3. **CV Files**: Replace PDFs in `public/` folder
4. **Awards**: Edit awards array in `app/awards/page.js`
5. **Profile Photo**: Replace `app/photos/IMG_1561.jpg`

### Add New Award

```javascript
{
  id: 4,
  title: "1st Place – Your Award Title",
  issuer: "Award Organization",
  date: "Month Year",
  description: "Award description here",
  images: ["/awards/your-image.jpg"]
}
```

The color system automatically detects:
- "1st", "first", or "Gold" → Gold colors
- "2nd", "second", or "Silver" → Silver colors
- "3rd", "third", or "Bronze" → Bronze colors

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Contzokas/website-portfolio)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

Optimized for all devices:
- 📱 **Mobile**: < 640px (hamburger menu, stacked layout)
- 📱 **Tablet**: 640px - 1024px
- 💻 **Desktop**: 1024px+

## 🎯 Features Roadmap

- [x] GitHub integration
- [x] Multi-language CV support
- [x] Dynamic award colors
- [x] Mobile responsive design
- [x] Social media posts integration
- [x] Image galleries
- [ ] Blog section
- [ ] Dark/Light mode toggle
- [ ] Contact form with backend
- [ ] Project filtering/search
- [ ] Analytics integration

## 🐛 Known Issues

- None currently! 🎉

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Constantinos Tzokas**
- GitHub: [@Contzokas](https://github.com/Contzokas)
- LinkedIn: [Constantinos Tzokas](https://www.linkedin.com/in/constantinos-tzokas/)
- Portfolio: [Your Live URL]

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vercel](https://vercel.com/) - Hosting platform

---

⭐ **Star this repo if you find it helpful!**

Built with 💙 by Constantinos Tzokas
