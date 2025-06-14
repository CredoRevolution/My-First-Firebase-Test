# Deployment Instructions

## Pushing Code to GitHub Repository

To push your code to the GitHub repository, follow these steps:

1. **Add the remote repository**:
   ```bash
   git remote add origin https://github.com/CredoRevolution/My-First-Firebase-Test.git
   ```

2. **Stage all changes**:
   ```bash
   git add .
   ```

3. **Commit the changes**:
   ```bash
   git commit -m "Initial commit with Firebase authentication"
   ```

4. **Push to GitHub**:
   ```bash
   git push -u origin master
   ```

   Note: If the repository already has content and you're getting conflicts, you might need to force push:
   ```bash
   git push -f origin master
   ```
   (Use force push with caution as it overwrites remote changes)

## Deploying to GitHub Pages

There are two ways to deploy to GitHub Pages:

### Method 1: Using npm script

1. **Run the deploy script**:
   ```bash
   npm run deploy
   ```

   This script builds the project and uses gh-pages to deploy it to the gh-pages branch.

### Method 2: Using GitHub Actions (Automatic Deployment)

The repository is already configured with GitHub Actions for automatic deployment:

1. **Push changes to the main branch**:
   ```bash
   git push origin master
   ```

2. **GitHub Actions will automatically**:
   - Build the project
   - Deploy to the gh-pages branch

3. **Check deployment status**:
   - Go to the GitHub repository
   - Click on "Actions" tab to see workflow runs
   - Wait for the "Deploy to GitHub Pages" workflow to complete

## Verifying Deployment

After deployment, your application will be available at:
https://credorevolution.github.io/My-First-Firebase-Test/

It may take a few minutes for the changes to propagate.

## Troubleshooting

If you encounter issues with deployment:

1. **Check GitHub Actions logs** for any errors
2. **Verify repository settings**:
   - Go to repository Settings > Pages
   - Ensure source is set to "gh-pages" branch

3. **Check vue.config.js** to ensure publicPath is correctly set to '/My-First-Firebase-Test/'