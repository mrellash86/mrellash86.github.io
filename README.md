# Cloud Resume Challenge

This repository contains a modern, tech-savvy resume website for a DevOps Engineer, built with React and Vite.

## Project Structure

```
cloud-resume/                  ← Repository Root
├── .git/                     ← Git repository data
├── .github/
│   └── workflows/
│       └── deploy.yml        ← GitHub Actions deployment workflow
├── vite-project/             ← React/Vite application
│   ├── src/                  ← Source code
│   ├── public/               ← Static assets
│   ├── package.json          ← Dependencies
│   └── dist/                 ← Build output (generated)
└── README.md                 ← This file
```

## Features

- **Modern Resume Website**: Professional DevOps Engineer resume with interactive elements
- **Floating Advertisement**: Ell & Co. Solutions business showcase
- **Service Pages**: Detailed explanations of how resume skills apply to each service
- **Homepage**: Professional landing page with team structure
- **Responsive Design**: Mobile-friendly layout with modern CSS animations
- **Automated Deployment**: GitHub Actions workflow for GitHub Pages deployment

## Local Development

1. Navigate to the vite-project directory:
   ```bash
   cd vite-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

This project uses GitHub Actions to automatically deploy to GitHub Pages when changes are pushed to the main branch. The workflow:

1. Builds the React app in the `vite-project` directory
2. Deploys the built files to GitHub Pages
3. Makes the site available at your GitHub Pages URL

## Technologies Used

- **React 18**: Modern JavaScript framework
- **Vite**: Fast build tool and development server
- **Font Awesome**: Professional icon library
- **CSS3**: Advanced styling with gradients and animations
- **GitHub Actions**: Automated CI/CD pipeline
- **GitHub Pages**: Free static site hosting
