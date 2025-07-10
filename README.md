# Duke Azeta - Portfolio Website

A modern, minimalist portfolio website built with React, showcasing my work as a software developer. Features clean design, smooth animations, interactive 3D background, and dedicated project showcase pages.

## 🌟 Live Demo

Visit the live website: [dukeazeta.github.io/myPortfolio2025](https://dukeazeta.github.io/myPortfolio2025)

## ⚡ Features

- **React-Based Architecture**: Modern component-based structure with React 19
- **Dedicated Projects Page**: Comprehensive project showcase with routing
- **Interactive 3D Background**: Dynamic particle system using Three.js and React Three Fiber
- **Dark/Light Mode**: Seamless theme switching with context management
- **Smooth Page Transitions**: Beautiful animations using Framer Motion
- **Mobile-First Design**: Fully responsive with custom mobile navigation
- **Project Showcase**: Featured projects with live demos and downloads
- **Contact Integration**: Easy-to-use contact form for collaborations

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript ES6+
- **Styling**: CSS3 with CSS Variables for theming
- **Animations**: Framer Motion for smooth transitions
- **3D Graphics**: Three.js with React Three Fiber & Drei
- **Routing**: React Router DOM for navigation
- **Build Tool**: Vite for fast development and building
- **Icons**: Tabler Icons for consistent iconography

## 🏗️ Project Structure

```
react-portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Header/         # Navigation with mobile menu
│   │   ├── Hero/           # Hero section with skills marquee
│   │   ├── About/          # About section with timeline
│   │   ├── Projects/       # Homepage projects showcase
│   │   ├── Skills/         # Skills grid display
│   │   ├── Contact/        # Contact form
│   │   ├── Footer/         # Footer with social links
│   │   └── ThreeBackground/ # 3D particle background
│   ├── pages/              # Page components
│   │   └── ProjectsPage.jsx # Dedicated projects showcase
│   ├── contexts/           # React contexts
│   │   └── ThemeContext.jsx # Theme management
│   ├── App.jsx            # Main app with routing
│   └── main.jsx           # App entry point
└── public/                # Static assets
    ├── assets/            # Images and media
    └── apps/              # Downloadable applications
```

## 📱 Featured Projects

The portfolio showcases several projects across web and mobile development:

1. **FUPRE Sport Media**: A comprehensive sports media platform built with React and Next.js
2. **TicTacKoko**: A modern take on the classic Tic-Tac-Toe game built with Flutter
3. **WeatherKoko**: A minimalist weather application with BLoC pattern
4. **TimerKoko**: A clean and intuitive timer application

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Dukeazeta/myPortfolio2025.git
   cd myPortfolio2025/react-portfolio
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

## 🎨 Customization

- **Theme Colors**: Edit CSS variables in `src/App.css`
- **Components**: Modify React components in `src/components/`
- **Pages**: Add new pages in `src/pages/`
- **3D Background**: Customize particle system in `src/components/ThreeBackground/`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

- Email: azetaduke@gmail.com
- LinkedIn: [Duke Azeta](https://linkedin.com/in/duke-azeta)
- GitHub: [@Dukeazeta](https://github.com/Dukeazeta)
- X: [@Duke_Azeta_](https://x.com/Duke_Azeta_)
- Instagram: [@azetaduke](https://www.instagram.com/azetaduke)
