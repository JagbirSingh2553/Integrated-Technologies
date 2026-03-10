import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag">Contact</span>
          <h2>Let’s Connect</h2>
        </motion.div>

        <div className="contact-wrapper">
          <motion.div
            className="contact-card-large reveal-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Integrated Office Infrastructure Pvt. Ltd.</h3>
            <p>
              <strong>Address:</strong> C-54, 3rd Floor, Flatted Factory
              Complex, Jhandewalan, Delhi - 110055
            </p>
            <p>
              <strong>Mobile:</strong> 9811075930
            </p>
            <p>
              <strong>Landline:</strong> 011-42381305, 45081305
            </p>
            <p>
              <strong>Email:</strong> info@ioipl.in
            </p>
          </motion.div>

          <motion.div
            className="contact-card-large highlight reveal-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <h3>Why Choose IOIPL?</h3>
            <ul>
              <li>Complete IT solution company</li>
              <li>Authorized partner ecosystem</li>
              <li>GeM presence and enterprise trust</li>
              <li>Single-platform AMC support</li>
              <li>ISO Certified & MSME Registered</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}