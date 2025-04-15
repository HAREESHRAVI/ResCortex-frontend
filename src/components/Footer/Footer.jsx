import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">ResCortex</div>
        <div className="footer-center">Empowering Diagnosis with <span className="highlight">AI Precision</span></div>
        <div className="footer-right">Final Year Project</div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
