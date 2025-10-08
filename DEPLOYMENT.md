# Deployment Guide

This guide covers various deployment options for your portfolio website.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)

Vercel offers the easiest deployment for Vite + React applications.

1. **Install Vercel CLI** (optional):
```bash
npm install -g vercel
```

2. **Deploy via CLI**:
```bash
vercel
```

3. **Or Deploy via GitHub**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

**Build Settings** (auto-detected):
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Option 2: Netlify

1. **Install Netlify CLI** (optional):
```bash
npm install -g netlify-cli
```

2. **Deploy via CLI**:
```bash
netlify deploy --prod
```

3. **Or Deploy via GitHub**:
   - Push your code to GitHub
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

**Create `netlify.toml`** (optional, for SPA routing):
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: GitHub Pages

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Update `package.json`**:
```json
{
  "homepage": "https://yourusername.github.io/repository-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update `vite.config.ts`**:
```typescript
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

4. **Deploy**:
```bash
npm run deploy
```

### Option 4: AWS S3 + CloudFront

1. **Build the project**:
```bash
npm run build
```

2. **Create S3 Bucket**:
   - Go to AWS S3 Console
   - Create a new bucket
   - Enable static website hosting
   - Set index document to `index.html`
   - Set error document to `index.html` (for SPA routing)

3. **Upload files**:
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
```

4. **Set up CloudFront** (optional, for HTTPS and CDN):
   - Create CloudFront distribution
   - Set origin to your S3 bucket
   - Configure custom error responses (404 → /index.html)
   - Add custom domain if needed

### Option 5: Docker

1. **Create `Dockerfile`**:
```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

2. **Create `nginx.conf`**:
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

3. **Build and run**:
```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

## 🔧 Pre-Deployment Checklist

- [ ] Update all personal information in components
- [ ] Add your professional photo to `/public`
- [ ] Add your resume PDF to `/public`
- [ ] Update meta tags in `index.html`
- [ ] Test all links (LinkedIn, GitHub, email, phone)
- [ ] Test resume download functionality
- [ ] Run production build locally: `npm run build && npm run preview`
- [ ] Check for console errors
- [ ] Test responsive design on mobile/tablet
- [ ] Optimize images (compress if needed)
- [ ] Update README.md with your information
- [ ] Remove any placeholder content
- [ ] Test all navigation and smooth scrolling
- [ ] Verify all animations work properly
- [ ] Check accessibility (keyboard navigation, screen readers)
- [ ] Run Lighthouse audit for performance/SEO
- [ ] Set up custom domain (if applicable)
- [ ] Configure SSL/HTTPS
- [ ] Set up analytics (Google Analytics, Plausible, etc.)

## 🎯 Performance Optimization

### Image Optimization
```bash
# Install image optimization tools
npm install --save-dev vite-plugin-imagemin
```

### Code Splitting
Vite automatically handles code splitting, but you can optimize further:
```typescript
// Lazy load components
const Projects = lazy(() => import('./components/Projects'));
```

### Bundle Analysis
```bash
npm run build
npx vite-bundle-visualizer
```

## 🔒 Security Headers

Add security headers in your hosting platform:

**Vercel** - Create `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

**Netlify** - Add to `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
```

## 📊 Analytics Setup

### Google Analytics
Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🌐 Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS records

## 🔄 Continuous Deployment

Both Vercel and Netlify support automatic deployments:
- Push to `main` branch → Auto-deploy to production
- Push to other branches → Deploy preview URLs
- Pull requests → Preview deployments

## 📝 Environment Variables

If you need environment variables:

1. **Create `.env.production`**:
```env
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your-analytics-id
```

2. **Access in code**:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

3. **Add to hosting platform**:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Environment Variables

## 🆘 Troubleshooting

### 404 on Refresh
- Ensure SPA routing is configured (see platform-specific guides above)

### Assets Not Loading
- Check `base` path in `vite.config.ts`
- Verify asset paths start with `/`

### Build Fails
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `rm -rf dist .vite`
- Check Node.js version: `node --version` (should be 18+)

## 📞 Support

For deployment issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- GitHub Pages: [docs.github.com/pages](https://docs.github.com/pages)