# GitHub Pages Deployment Script for Portfolio
# This script automates the deployment process

Write-Host "🚀 Portfolio Deployment Script" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "⚠️  Git not initialized. Initializing now..." -ForegroundColor Yellow
    git init
    Write-Host "✅ Git initialized" -ForegroundColor Green
}

# Check if remote exists
$remoteUrl = git remote get-url origin 2>$null
if (-not $remoteUrl) {
    Write-Host ""
    Write-Host "❌ No GitHub remote found!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please add your GitHub repository as remote:" -ForegroundColor Yellow
    Write-Host "git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git" -ForegroundColor White
    Write-Host ""
    Write-Host "Replace YOUR-USERNAME with your actual GitHub username" -ForegroundColor Yellow
    exit 1
}

Write-Host "📦 GitHub Remote: $remoteUrl" -ForegroundColor Green
Write-Host ""

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "📥 Installing dependencies..." -ForegroundColor Yellow
    bun install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ Dependencies installed" -ForegroundColor Green
    Write-Host ""
}

# Ask user to confirm
Write-Host "This will:" -ForegroundColor Cyan
Write-Host "  1. Add and commit all changes" -ForegroundColor White
Write-Host "  2. Push to GitHub main branch" -ForegroundColor White
Write-Host "  3. Build and deploy to GitHub Pages" -ForegroundColor White
Write-Host ""
$confirm = Read-Host "Continue? (y/n)"

if ($confirm -ne "y" -and $confirm -ne "Y") {
    Write-Host "❌ Deployment cancelled" -ForegroundColor Red
    exit 0
}

Write-Host ""
Write-Host "📝 Committing changes..." -ForegroundColor Yellow
git add .

$commitMessage = Read-Host "Enter commit message (or press Enter for default)"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Update portfolio - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
}

git commit -m "$commitMessage"

Write-Host ""
Write-Host "⬆️  Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to push to GitHub" -ForegroundColor Red
    Write-Host "You may need to set up authentication or check your remote URL" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Pushed to GitHub" -ForegroundColor Green
Write-Host ""

Write-Host "🏗️  Building and deploying to GitHub Pages..." -ForegroundColor Yellow
bun run deploy

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Deployment failed" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ Deployment successful! 🎉" -ForegroundColor Green
Write-Host ""
Write-Host "Your portfolio will be live in 1-3 minutes at:" -ForegroundColor Cyan
Write-Host "https://YOUR-USERNAME.github.io" -ForegroundColor White
Write-Host ""
Write-Host "Don't forget to:" -ForegroundColor Yellow
Write-Host "  1. Go to your GitHub repository Settings > Pages" -ForegroundColor White
Write-Host "  2. Make sure 'gh-pages' branch is selected" -ForegroundColor White
Write-Host "  3. Wait for the green checkmark" -ForegroundColor White
Write-Host ""