import React from "react";

import { FaGlobe, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src="https://sklassics.com/wp-content/uploads/2024/06/Sklassics.png" alt="Logo" className="footer-logo" />

        <div className="footer-input-container">
          <FaEnvelope className="footer-icon" />
          <input
            type="email"
            placeholder="Subscribe to our newsletter"
            className="footer-input"
          />
          <button className="footer-subscribe-btn">Subscribe</button>
        </div>

        <div className="footer-social-icons">
         <FaFacebook className="footer-social-icon"/>
          <FaTwitter className="footer-social-icon" />
          <FaLinkedin className="footer-social-icon" />
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Support</span>
        </div>

        <div className="footer-language">
          <FaGlobe className="footer-globe" />
          <span>English</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
