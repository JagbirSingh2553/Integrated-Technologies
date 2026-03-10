import { motion } from "framer-motion";

const industries = [
  "Government Departments",
  "Corporate Offices",
  "Educational Institutions",
  "Smart Classrooms",
  "Healthcare Institutions",
  "SMEs & Enterprises",
];

export default function Industries() {
  return (
    <section id="industries" className="section section-soft">
      <div className="container">
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Industries We Serve</span>
          <h2>Serving Diverse Sectors</h2>
        </motion.div>

        <div className="industries-grid">
          {industries.map((item, index) => (
            <motion.div
              className="industry-card reveal-card"
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <span className="industry-bullet">◆</span>
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}