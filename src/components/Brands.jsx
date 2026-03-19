import { motion } from "framer-motion";

const brands = [
  { name: "Kyocera", image: "/images/Kyocera.png" },
  { name: "Panasonic", image: "/images/Panasonic.png" },
  { name: "Eaton", image: "/images/eaton.png" },
  { name: "Fujifilm", image: "/images/Fujifilm.png" },
  { name: "HP", image: "/images/HP.png" },
  { name: "Promark", image: "/images/promark.png" },
];

export default function Brands() {
  return (
    <section id="brands" className="section brands-section">
      <div className="container">
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag">Associated Brands</span>
          <h2>Trusted Partners</h2>
        </motion.div>

        <div className="brands-grid">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="brand-card logo-card"
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="brand-image-wrap">
                <img src={brand.image} alt={brand.name} />
              </div>
              {/* <p>{brand.name}</p> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}