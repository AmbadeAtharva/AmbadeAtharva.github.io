# 🚀 Deploy Your Portfolio to GitHub Pages

This guide will walk you through deploying your portfolio website to GitHub Pages in just a few steps!

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js and npm installed

---

## Option 1: Deploy to `username.github.io` (Recommended)

This will make your portfolio available at `https://your-username.github.io`

### Step 1: Create the GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon in the top right corner and select **"New repository"**
3. **IMPORTANT:** Name your repository exactly as: `your-username.github.io`
   - Replace `your-username` with your actual GitHub username
   - Example: If your username is `atharva-ambade`, name it `atharva-ambade.github.io`
4. Set the repository to **Public**
5. Do NOT initialize with README, .gitignore, or license (we'll push existing code)
6. Click **"Create repository"**

### Step 2: Initialize Git and Push Your Code

Open your terminal/PowerShell in the project directory and run:

```powershell
# Navigate to your project folder
Set-Location "c:\Users\ambad_1nacodr\Code\Projects\portfolio_website\personal-port-scraper"

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace YOUR-USERNAME with your actual username)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Install Dependencies and Deploy

```powershell
# Install the gh-pages package
npm install

# Build and deploy to GitHub Pages
npm run deploy
```

This command will:
1. Build your project (creates optimized production files in `dist` folder)
2. Push the built files to a `gh-pages` branch
3. GitHub will automatically serve your site from this branch

### Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - **Source:** Should be set to "Deploy from a branch"
   - **Branch:** Select `gh-pages` and `/ (root)`
   - Click **Save**

### Step 5: Wait and Visit Your Site! 🎉

- GitHub Pages will take 1-3 minutes to build and deploy
- Your site will be live at: `https://your-username.github.io`
- You'll see a green checkmark and the URL in the Pages settings when it's ready

---

## Option 2: Deploy to a Project Repository

If you want to use a different repository name (e.g., `portfolio`), your site will be at `https://your-username.github.io/portfolio`

### Additional Configuration Required

1. Update `vite.config.ts` - change the `base` property:
   ```typescript
   base: '/your-repo-name/',  // e.g., '/portfolio/'
   ```

2. Follow the same steps as Option 1, but:
   - Name your repository anything you want (e.g., `portfolio`)
   - The remote URL will be: `https://github.com/YOUR-USERNAME/your-repo-name.git`

---

## 🔄 Updating Your Site

Whenever you make changes to your portfolio:

```powershell
# Make your changes to the code
# Then commit and push to main branch
git add .
git commit -m "Update portfolio content"
git push

# Deploy the updated version
npm run deploy
```

The `npm run deploy` command will rebuild and redeploy your site automatically!

---

## 🛠️ Troubleshooting

### Issue: "npm is not recognized"
**Solution:** Install Node.js from [nodejs.org](https://nodejs.org/)

### Issue: "gh-pages not found"
**Solution:** Run `npm install` to install all dependencies

### Issue: Site shows 404 or blank page
**Solutions:**
- Make sure the `gh-pages` branch is selected in GitHub Pages settings
- Check that `base: '/'` is set correctly in `vite.config.ts`
- Wait a few minutes - GitHub Pages can take time to update
- Clear your browser cache and try again

### Issue: Images or assets not loading
**Solution:** Make sure all asset paths start with `/` (e.g., `/Professional photo.png`)

### Issue: "Permission denied" when pushing
**Solution:** 
- You may need to authenticate with GitHub
- Use a Personal Access Token instead of password
- Or set up SSH keys for GitHub

---

## 📝 Important Notes

1. **Build folder:** The `dist` folder is automatically created when you run `npm run deploy` - don't commit it to your main branch
2. **Branch structure:** 
   - `main` branch: Your source code
   - `gh-pages` branch: Built/compiled files (auto-generated)
3. **Custom domain:** You can add a custom domain in GitHub Pages settings
4. **HTTPS:** GitHub Pages automatically provides HTTPS for your site
5. **Updates:** Changes to your main branch won't automatically deploy - you must run `npm run deploy`

---

## 🎯 Quick Reference Commands

```powershell
# Start development server
npm run dev

# Build for production (test locally)
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy

# Check git status
git status

# Commit changes
git add .
git commit -m "Your commit message"
git push
```

---

## 🌟 Success Checklist

- [ ] Repository created with correct name
- [ ] Code pushed to GitHub
- [ ] Dependencies installed (`npm install`)
- [ ] Deployed successfully (`npm run deploy`)
- [ ] GitHub Pages configured to use `gh-pages` branch
- [ ] Site is live and accessible
- [ ] All images and assets loading correctly
- [ ] Resume download working
- [ ] Animations working smoothly

---

## 🆘 Need Help?

If you encounter any issues:
1. Check the GitHub Actions tab in your repository for build errors
2. Review the GitHub Pages settings
3. Check browser console for JavaScript errors (F12)
4. Verify all file paths are correct
5. Make sure you're using the correct repository name format

---

**Congratulations! Your portfolio is now live on the internet! 🎉**

Share your link: `https://your-username.github.io`