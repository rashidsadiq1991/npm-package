# Setup Instructions for GitHub and npm Publishing

## 🚀 Quick Setup Guide

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Repository name: `npm-package` (or your preferred name)
3. Set it to **Public** if you want to publish to npm
4. **Don't** initialize with README, .gitignore, or license (we already have these)

### 2. Connect Local Repository to GitHub

```bash
# Add GitHub remote (replace 'username' with your GitHub username)
git remote add origin https://github.com/username/npm-package.git

# Push to GitHub
git push -u origin main
```

### 3. Configure npm Publishing

#### Option A: Manual Publishing
```bash
# Login to npm (create account at npmjs.com if needed)
npm login

# Publish the package
npm publish
```

#### Option B: Automated Publishing with GitHub Actions
1. Get your npm token:
   - Go to [npmjs.com](https://www.npmjs.com)
   - Go to Access Tokens in your account settings
   - Generate a new **Automation** token

2. Add the token to GitHub Secrets:
   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - Add new repository secret:
     - Name: `NPM_TOKEN`
     - Value: Your npm token

3. The GitHub Actions workflow will automatically publish when you push to main

### 4. Update Package Information

Before publishing, update these fields in `package.json`:

```json
{
  "name": "@your-username/your-package-name",
  "repository": {
    "url": "git+https://github.com/your-username/your-package-name.git"
  },
  "bugs": {
    "url": "https://github.com/your-username/your-package-name/issues"
  },
  "homepage": "https://github.com/your-username/your-package-name#readme"
}
```

### 5. Version Management

```bash
# Patch version (1.0.0 → 1.0.1)
npm version patch

# Minor version (1.0.0 → 1.1.0)
npm version minor

# Major version (1.0.0 → 2.0.0)
npm version major

# Push the new version tag
git push origin main --tags
```

## 📦 Package Features

✅ **TypeScript** - Full type safety  
✅ **Dual Builds** - CommonJS + ESM  
✅ **Testing** - Jest with coverage  
✅ **Linting** - ESLint + Prettier  
✅ **Git Hooks** - Pre-commit quality checks  
✅ **CI/CD** - GitHub Actions  
✅ **Documentation** - JSDoc + README  

## 🛠️ Development Commands

```bash
npm install          # Install dependencies
npm run build       # Build the package
npm test            # Run tests
npm run lint        # Check code quality
npm run format      # Format code
npm run dev         # Build in watch mode
```

## 🎯 Next Steps

1. **Customize the code** in `src/index.ts`
2. **Add more tests** in `src/index.test.ts`
3. **Update documentation** in `README.md`
4. **Set up GitHub repository**
5. **Configure npm publishing**
6. **Start building awesome features!**

---

**Happy coding! 🎉**
