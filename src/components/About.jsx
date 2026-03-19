import { motion } from "framer-motion";

export default function About() {
  const badges = [
    "ISO Certified",
    "MSME Registered",
    "GeM Registered",
    "CPWD Empanelled",
  ];

  return (
    <section id="about" className="section section-soft about-section">
      <div className="container">
        <motion.div
          className="section-header about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Company Profile</span>
          <h2>Who We Are</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-left-card reveal-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="about-logo-wrap">
              <img
                src="/logo.png"
                alt="Integrated Office Infrastructure Pvt. Ltd."
                className="about-main-logo"
              />
            </div>

            <h3>Integrated Office Infrastructure Pvt. Ltd.</h3>
            <p className="about-subtitle">Complete IT Solution Company</p>

            <div className="about-badges">
              {badges.map((badge, index) => (
                <span key={index} className="about-badge-chip">
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="about-right">
            <motion.div
              className="about-card reveal-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p>
                Integrated Office Infrastructure Pvt. Ltd. is a system integrator
                focused on executing turnkey projects and delivering reliable IT
                and Office Infrastructure Services.
              </p>
              <p>
                We have executed projects through Broadcast Engineering
                Consultants India Limited (BECIL), a PSE under the Government of
                India, Ministry of Information & Broadcasting.
              </p>
            </motion.div>

            <motion.div
              className="about-card reveal-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12 }}
            >
              <p>
                We are proud authorized partners of reputed companies like HP,
                Kyocera, Panasonic, Fujifilm, Uniline, Eaton, BPE and Promark.
              </p>
              <p>
                We are registered on GeM and support ministries and departments
                across Delhi NCR and pan India with sales, repair and maintenance
                service contracts.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}