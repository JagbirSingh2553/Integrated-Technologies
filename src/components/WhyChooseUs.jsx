import { motion } from "framer-motion";

const points = [
  "Complete IT solution provider",
  "Authorized multi-brand partner ecosystem",
  "Government & enterprise project experience",
  "Integrated AMC support under one contract",
  "Pan India service capability",
  "Scalable office infrastructure solutions",
];

export default function WhyChooseUs() {
  return (
    <section className="section light-bg">
      <div className="container">
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Why Choose Us</span>
          <h2>Why Businesses Choose IOIPL</h2>
        </motion.div>

        <div className="choose-grid">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="choose-card reveal-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <span>✔</span>
              <p>{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}