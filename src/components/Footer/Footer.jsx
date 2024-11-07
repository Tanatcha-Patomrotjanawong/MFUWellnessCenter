// src/components/Footer/Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFacebook, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>MFU Wellness Center</h3>
          <p>เลขที่ 365 หมู่ 12 ต.นางแล อำเภอเมือง
          จังหวัดเชียงราย 57100</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: wellness-center@mfu.ac.th</p>
          <p>Phone: 0-5391-3201</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/MFUWellnessCenter/?locale=th_TH" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://lin.ee/QGGB253" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faLine} size="2x" />
            </a>
            <a href="https://www.instagram.com/mfuwellnesscenter/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MFU Wellness Center.</p>
      </div>
    </footer>
  );
};

export default Footer;
