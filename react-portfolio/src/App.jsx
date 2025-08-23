import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ThreeBackground from './components/ThreeBackground/ThreeBackground';
import MagneticCursor from './components/MagneticCursor/MagneticCursor';
import ProjectsPage from './pages/ProjectsPage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <MagneticCursor />
          <ThreeBackground />
          <Header />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
              </main>
            } />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
