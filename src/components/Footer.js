import React, { useState } from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isSubmitted: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill in all fields',
        isError: true,
        isSubmitted: false
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        message: 'Please enter a valid email address',
        isError: true,
        isSubmitted: false
      });
      return;
    }

    // Simulate form submission
    setFormStatus({
      message: 'Thank you for your message! We will get back to you soon.',
      isError: false,
      isSubmitted: true
    });

    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // In a real application, you would send the data to your backend here
  };

  return (
    <footer className="footer-section" id="contact">
      <div className="footer-cta">
        <h2 className="footer-heading">Let's Build a More Accessible Digital World</h2>
        <p className="footer-subheading">Contact us to start your accessibility journey or scale your efforts.</p>
      </div>
      <div className="footer-content">
        <div className="footer-company-info">
          <div className="company-logo">
            <h2>EnableDocs</h2>
            <p className="tagline">Making Digital Content Accessible For All</p>
          </div>
          
          <div className="company-contact">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+91 8750478048</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>docsenable@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Saraswati Puram Lane No17, Nathuwala, Dehradun-248008, Uttarakhand</span>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedinIn /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaInstagram /></a>
          </div>
        </div>
        
        <div className="footer-contact-form">
          <h3>Contact Us</h3>
          <p>Have questions or need a quote? Send us a message!</p>
          
          {formStatus.isSubmitted ? (
            <div className="form-success">
              <p>{formStatus.message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={formStatus.isError && !formData.name ? "error" : ""}
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={formStatus.isError && !formData.email ? "error" : ""}
                />
              </div>
              
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleChange}
                  className={formStatus.isError && !formData.message ? "error" : ""}
                ></textarea>
              </div>
              
              {formStatus.message && formStatus.isError && (
                <div className="form-error">
                  <p>{formStatus.message}</p>
                </div>
              )}
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          )}
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="/privacy" aria-label="Privacy Policy">Privacy Policy</a>
          <a href="/terms" aria-label="Terms of Service">Terms of Service</a>
          <a href="/accessibility" aria-label="Accessibility Statement">Accessibility Statement</a>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} EnableDocs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;