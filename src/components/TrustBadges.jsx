import { motion } from "framer-motion";

const badges = [
  "ISO Certified Company",
  "MSME Registered Enterprise",
  "GeM Registered Vendor",
  "CPWD Empanelled",
];

export default function TrustBadges() {
  return (
    <section className="section trust-section">
      <div className="container">
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Trust & Certifications</span>
          <h2>Trusted & Certified</h2>
        </motion.div>

        <div className="trust-grid">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              className="trust-card reveal-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <span className="trust-icon">✔</span>
              <p>{badge}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}