# Duke Azeta - React Portfolio

A modern, responsive portfolio website built with React, showcasing projects, skills, and professional experience.

## 🚀 Features

- **Modern React Architecture**: Built with React 19 and functional components
- **Responsive Design**: Fully responsive across all devices
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **3D Background**: Interactive Three.js particle animation
- **Performance Optimized**: Code splitting and optimized builds
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript ES6+
- **Styling**: CSS3 with CSS Variables for theming
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Icons**: Tabler Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header/         # Navigation component
│   ├── Hero/           # Hero section with typing animation
│   ├── About/          # About section with timeline
│   ├── Projects/       # Projects showcase
│   ├── Skills/         # Skills grid
│   ├── Contact/        # Contact form
│   ├── Footer/         # Footer component
│   └── ThreeBackground/ # 3D particle background
├── contexts/           # React contexts
│   └── ThemeContext.jsx # Theme management
├── App.jsx            # Main app component
├── App.css            # Global styles
└── main.jsx           # App entry point
```

## 🎨 Customization

### Theme Colors
Edit the CSS variables in `src/App.css` to customize the color scheme:

```css
:root {
  --gradient-start: #0066ff;
  --gradient-end: #00d9ff;
  /* ... other variables */
}
```

### Content
Update the content in each component file to reflect your own information:
- `src/components/About/About.jsx` - Professional timeline
- `src/components/Projects/Projects.jsx` - Project showcase
- `src/components/Skills/Skills.jsx` - Skills and technologies

## 🚀 Deployment

The portfolio can be deployed to any static hosting service:

- **Netlify**: Connect your repository for automatic deployments
- **Vercel**: Import your project for seamless deployment
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Firebase Hosting**: Deploy with Firebase CLI

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Duke Azeta**
- Email: azetaduke@gmail.com
- LinkedIn: [duke-azeta](https://linkedin.com/in/duke-azeta)
- GitHub: [Dukeazeta](https://github.com/Dukeazeta)
- X: [@Duke_Azeta_](https://x.com/Duke_Azeta_)
