import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-blur hero-blur-one"></div>
      <div className="hero-blur hero-blur-two"></div>

      <div className="container hero-grid">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="hero-badge">
            Empanelled with CPWD for IT and building related works
          </span>

          <h1>Integrated Office Infrastructure Pvt. Ltd.</h1>

          <p className="hero-text">
            We deliver complete IT and office infrastructure solutions including
            photocopiers, multi-functional printers, scanners, computers,
            laptops, servers, firewalls, switches, CCTV cameras, UPS systems,
            shredders, air purifiers, smart classrooms and conference room
            audio-visual solutions.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Contact Us
            </a>
            <a href="#services" className="btn btn-outline">
              Explore Services
            </a>
          </div>

          <div className="hero-points">
            <span>ISO Certified</span>
            <span>MSME Registered</span>
            <span>GeM Registered</span>
            <span>CPWD Empanelled</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="hero-card floating-card">
            <img src="images/gem-logo.png" alt="GeM Logo" className="hero-gem-logo" />
            <h3>Single Platform for Multiple Office Needs</h3>
            <p>
              Sales, Services, Repair, Rental Support, Integrated AMC and
              Maintenance Contracts for a wide range of office and IT equipment.
            </p>

            <ul>
              <li>Photocopiers & Multi-Function Printers</li>
              <li>Computers, Laptops & Servers</li>
              <li>Security, CCTV & Networking</li>
              <li>Smart Classrooms & Conference Rooms</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}