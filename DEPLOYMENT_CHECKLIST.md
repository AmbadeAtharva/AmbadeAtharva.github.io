# 📋 GitHub Pages Deployment Checklist

Follow these steps in order to deploy your portfolio to GitHub Pages.

---

## ✅ Pre-Deployment Checklist

- [ ] **Node.js installed** - Run `node --version` to check
- [ ] **Git installed** - Run `git --version` to check
- [ ] **GitHub account created** - Sign up at [github.com](https://github.com)
- [ ] **All changes saved** - Make sure all your files are saved in VS Code

---

## 🚀 Deployment Steps

### Step 1: Create GitHub Repository

- [ ] Go to [GitHub](https://github.com) and log in
- [ ] Click the **"+"** icon → **"New repository"**
- [ ] Name it: `your-username.github.io` (replace with YOUR actual username)
- [ ] Set to **Public**
- [ ] **DO NOT** check "Initialize with README"
- [ ] Click **"Create repository"**
- [ ] **Copy the repository URL** (you'll need it in Step 2)

**Example:** If your username is `atharva-ambade`, name it `atharva-ambade.github.io`

---

### Step 2: Connect Your Project to GitHub

Open PowerShell in VS Code (Terminal → New Terminal) and run these commands **one by one**:

```powershell
# 1. Navigate to your project (if not already there)
Set-Location "c:\Users\ambad_1nacodr\Code\Projects\portfolio_website\personal-port-scraper"

# 2. Initialize git (if not already done)
git init

# 3. Add all files
git add .

# 4. Create first commit
git commit -m "Initial commit: Portfolio website"

# 5. Add your GitHub repository (REPLACE with your actual URL from Step 1)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# 6. Set main branch and push
git branch -M main
git push -u origin main
```

**⚠️ IMPORTANT:** Replace `YOUR-USERNAME` with your actual GitHub username in step 5!

**Checklist:**
- [ ] All commands ran without errors
- [ ] You can see your code on GitHub (refresh the repository page)

---

### Step 3: Install Dependencies

```powershell
# Install all required packages
npm install
```

**Checklist:**
- [ ] Command completed successfully
- [ ] No error messages
- [ ] `node_modules` folder created

---

### Step 4: Deploy to GitHub Pages

```powershell
# Build and deploy
npm run deploy
```

This will:
1. Build your project (creates production-ready files)
2. Create a `gh-pages` branch
3. Push the built files to that branch

**Checklist:**
- [ ] Build completed successfully
- [ ] "Published" message appears
- [ ] No error messages

---

### Step 5: Configure GitHub Pages

- [ ] Go to your repository on GitHub
- [ ] Click **Settings** tab (top right)
- [ ] Click **Pages** in the left sidebar
- [ ] Under "Build and deployment":
  - [ ] **Source:** "Deploy from a branch"
  - [ ] **Branch:** Select `gh-pages` and `/ (root)`
  - [ ] Click **Save**
- [ ] Wait 1-3 minutes for deployment
- [ ] Look for the green success message with your site URL

---

### Step 6: Verify Your Site

- [ ] Visit `https://your-username.github.io`
- [ ] Site loads correctly
- [ ] Professional photo appears
- [ ] Resume download button works
- [ ] All sections display properly
- [ ] Animations work (waving hand, floating shapes)
- [ ] Mobile responsive (test by resizing browser)

---

## 🔄 Future Updates

When you make changes to your portfolio:

```powershell
# 1. Make your changes in VS Code
# 2. Save all files
# 3. Run these commands:

git add .
git commit -m "Description of your changes"
git push
npm run deploy
```

**Or use the automated script:**

```powershell
.\deploy.ps1
```

---

## 🆘 Troubleshooting

### Problem: "npm is not recognized"
**Solution:** Install Node.js from [nodejs.org](https://nodejs.org/), then restart PowerShell

### Problem: "git is not recognized"
**Solution:** Install Git from [git-scm.com](https://git-scm.com/), then restart PowerShell

### Problem: "Permission denied" when pushing to GitHub
**Solutions:**
1. Set up GitHub authentication: [docs.github.com/authentication](https://docs.github.com/en/authentication)
2. Use GitHub Desktop app instead
3. Use a Personal Access Token

### Problem: Site shows 404 error
**Solutions:**
1. Wait 5 minutes - GitHub Pages takes time to deploy
2. Check GitHub Pages settings (Step 5)
3. Make sure `gh-pages` branch exists (check branches on GitHub)
4. Clear browser cache and try again

### Problem: Images not loading
**Solution:** Check that all image paths start with `/` (e.g., `/Professional photo.png`)

### Problem: Blank page
**Solutions:**
1. Check browser console for errors (Press F12)
2. Verify `base: '/'` in `vite.config.ts`
3. Try `npm run build` and `npm run preview` locally first

---

## 📞 Need More Help?

1. **Read the full guide:** `GITHUB_PAGES_DEPLOYMENT.md`
2. **GitHub Pages docs:** [docs.github.com/pages](https://docs.github.com/en/pages)
3. **Vite deployment docs:** [vitejs.dev/guide/static-deploy](https://vitejs.dev/guide/static-deploy.html)

---

## 🎉 Success!

Once everything is checked off, your portfolio is live on the internet!

**Share your link:**
- LinkedIn: Add to your profile
- Resume: Include the URL
- Email signature: Link to your portfolio
- Business cards: Print the URL

**Your live site:** `https://your-username.github.io`

---

**Last Updated:** $(Get-Date -Format 'yyyy-MM-dd')