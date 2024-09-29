import React, { useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Lightbox from '../components/Lightbox';

const SelfIntroductionWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [lightboxImage, setLightboxImage] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    closeMenu();
  };

  const openLightbox = (imageSrc) => setLightboxImage(imageSrc);

  const closeLightbox = () => setLightboxImage(null);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header
        activeSection={activeSection}
        handleNavClick={handleNavClick}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />

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