import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section section-soft">
      <div className="container">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Company Profile</span>
          <h2>Who We Are</h2>
        </motion.div>

        <div className="about-grid">

          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src="/logo.png" alt="IOIPL Logo" className="about-logo"/>

            <h3>Integrated Office Infrastructure Pvt. Ltd.</h3>
            <p className="subtitle">Complete IT Solution Company</p>
          </motion.div>


          <div className="about-right">

            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p>
                Integrated Office Infrastructure Pvt. Ltd. is a system integrator
                focused on executing turnkey projects and delivering reliable IT
                and office infrastructure services.
              </p>

              <p>
                We have executed projects through Broadcast Engineering
                Consultants India Limited (BECIL), a PSE under the Government of
                India, Ministry of Information & Broadcasting.
              </p>

            </motion.div>


            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p>
                We are proud authorized partners of reputed companies like
                HP, Kyocera, Panasonic, Fujifilm, Uniline, Eaton,
                BPE and Promark.
              </p>

              <p>
                We are registered on GeM and support ministries and
                departments across Delhi NCR and pan India with sales,
                repair and maintenance service contracts.
              </p>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}