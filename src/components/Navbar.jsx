import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="top-red-bar"></div>
      <div className="top-green-bar"></div>

      <div className="container nav-inner">
        <motion.a
          href="#home"
          className="brand"
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          
          <img src="images/logo.png" alt="IOIPL Logo" className="brand-logo" />
          <div className="brand-text">
            <h2>Integrated Office Infrastructure Pvt. Ltd.</h2>
            <p>Complete IT Solution Company</p>
          </div>
        </motion.a>

        <nav className="nav-links desktop-nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#brands">Brands</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.25 }}
          >
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#industries" onClick={closeMenu}>Industries</a>
            <a href="#brands" onClick={closeMenu}>Brands</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}