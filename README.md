# Atharva Ambade - Portfolio Website

A modern, responsive portfolio website showcasing my experience as a Software Engineer, Back-End Architect, and Cloud Engineer.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Animated Background**: Dynamic floating shapes and gradient effects
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Fast Performance**: Powered by Vite for lightning-fast development and builds
- **Type-Safe**: Written in TypeScript for better code quality

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: TanStack Query

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd personal-port-scraper
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
personal-port-scraper/
├── public/              # Static assets
│   ├── Professional photo.png
│   ├── Resume_Master.pdf
│   └── favicon.ico
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Footer.tsx
│   │   └── AnimatedBackground.tsx
│   ├── pages/          # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Customization

### Colors

The color scheme can be customized in `src/index.css` by modifying the CSS variables:

```css
:root {
  --primary: 220 90% 56%;
  --secondary: 280 70% 60%;
  --accent: 260 80% 65%;
  /* ... other colors */
}
```

### Content

Update the content in the respective component files:
- Personal info: `src/components/Hero.tsx`
- Skills: `src/components/Skills.tsx`
- Experience: `src/components/Experience.tsx`
- Projects: `src/components/Projects.tsx`
- Education: `src/components/Education.tsx`

## 📄 License

This project is private and proprietary.

## 👤 Author

**Atharva Ambade**
- LinkedIn: [linkedin.com/in/ambadeatharva](https://linkedin.com/in/ambadeatharva)
- GitHub: [github.com/AmbadeAtharva](https://github.com/AmbadeAtharva)
- Email: ambade.atharva@outlook.com
- Location: San Jose, CA

## 🤝 Contributing

This is a personal portfolio project and is not open for contributions.