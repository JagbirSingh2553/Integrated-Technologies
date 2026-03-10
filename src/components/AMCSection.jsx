import { motion } from "framer-motion";

export default function AMCSection() {
  return (
    <section className="section amc-section">
      <div className="container amc-grid">
        <motion.div
          className="amc-left"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag">Integrated AMC</span>
          <h2>Maintenance Services Under One Contract</h2>
          <p>
            We provide integrated AMC and maintenance services for multiple
            categories of office and IT equipment through a single platform.
          </p>
        </motion.div>

        <motion.div
          className="amc-right"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="amc-box reveal-card">
            <ul>
              <li>Photocopiers & Multi Functional Printers</li>
              <li>Computers, Laptops, Servers & Peripherals</li>
              <li>Firewalls, Switches & Security Software</li>
              <li>Smart Classrooms & Conference Room AV Setups</li>
              <li>UPS Systems, Shredders, Air Purifiers & CCTV</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}