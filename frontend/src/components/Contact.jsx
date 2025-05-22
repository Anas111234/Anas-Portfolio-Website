
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import '../Styling/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      // Use proxy in package.json or full backend URL here
      await axios.post('https://backend-anas-portfolio.onrender.com/api/contact', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Work Together
        </motion.h2>
        <motion.p
          className="contact-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Whether you're a recruiter, startup, or company — I'm open to exciting full-time MERN stack developer roles.
        </motion.p>

        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            className="contact-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {error && <p className="error-message" style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

            <div className="form-group">
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="form-group">
              <input
                id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
              <label htmlFor="company">Company Name (Optional)</label>
            </div>

            <div className="form-group">
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Your Email</label>
            </div>

            <div className="form-group">
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <label htmlFor="subject">Subject</label>
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label htmlFor="message">Message / Reason to Contact</label>
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            className="thank-you"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            ✅ Thank you! I'll get back to you soon.
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;
