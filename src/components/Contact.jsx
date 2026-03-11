import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted", formData);

    alert("Your enquiry has been submitted!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

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

          {/* Company Info */}

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

            <div className="contact-features">
              <span>ISO Certified</span>
              <span>MSME Registered</span>
              <span>GeM Registered</span>
            </div>

          </motion.div>


          {/* Contact Form */}

          <motion.form
            onSubmit={handleSubmit}
            className="contact-form-card reveal-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >

            <h3>Send Enquiry</h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Requirement"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn-primary">
              Submit Enquiry
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  );
}