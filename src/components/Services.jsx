import { motion } from "framer-motion";

const services = [
  "Photocopiers / Multi Functional Printers / Scanners & Consumables",
  "Outsourcing / Rental Services for Photocopy Work",
  "Computers / Laptops / Servers / Firewalls / Switches / Security Softwares & IT Peripherals",
  "Design of Smart Class Rooms & Complete Conference Rooms with Audio-Visuals",
  "On/Off Line UPS Systems / Shredder Machines / Air Purifiers / CCTV Cameras",
];

export default function Services() {
  return (
    <section id="services" className="section light-bg">
      <div className="container">
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag">Deals In</span>
          <h2>Our Core Services</h2>
        </motion.div>

        <div className="services-grid">
          {services.map((item, index) => (
            <motion.div
              className="service-card reveal-card"
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="service-index">{index + 1}</div>
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}