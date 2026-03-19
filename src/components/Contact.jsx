import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsSending(true);

    try {
      await emailjs.send(
        "service_tg6v3md",
        "template_aazvooq",
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          phone: formData.phone,
          message: formData.message,
        },
        {
          publicKey: "hUZ6lqFr0x6M2gpNF",
        }
      );

      setStatus("Enquiry sent successfully.");
      setFormData({
        from_name: "",
        from_email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Failed to send enquiry. Please try again.");
    } finally {
      setIsSending(false);
    }
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
              name="from_name"
              placeholder="Your Name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Email Address"
              value={formData.from_email}
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

            <button type="submit" className="btn-primary" disabled={isSending}>
              {isSending ? "Sending..." : "Submit Enquiry"}
            </button>

            {status && <p className="form-status">{status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}