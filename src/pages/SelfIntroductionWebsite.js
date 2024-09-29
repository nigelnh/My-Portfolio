import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Lightbox from '../components/Lightbox';
import DarkModeToggle from '../components/DarkModeToggle';
import ShootingStars from '../components/ShootingStars';

const SelfIntroductionWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const handleNavClick = (section) => {
    setActiveSection(section);
    closeMenu();
  };
  const openLightbox = (imageSrc) => setLightboxImage(imageSrc);
  const closeLightbox = () => setLightboxImage(null);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <ShootingStars />
      <Header
        activeSection={activeSection}
        handleNavClick={handleNavClick}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      <main className="container mx-auto px-6 py-8">
        {activeSection === "home" && <Home />}
        {activeSection === "about" && <About />}
        {activeSection === "portfolio" && <Portfolio openLightbox={openLightbox} />}
        {activeSection === "contact" && <Contact />}
      </main>
      <Footer />
      {lightboxImage && <Lightbox image={lightboxImage} onClose={closeLightbox} />}
    </div>
  );
};

export default SelfIntroductionWebsite;