import React from 'react';
import './Navbar.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a href="https://www.facebook.com"><FaFacebook /></a>
          <a href="https://www.twitter.com"><FaTwitter /></a>
          <a href="https://www.instagram.com"><FaInstagram /></a>
          <a href="https://www.linkedin.com"><FaLinkedin /></a>
        </div>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Navbar;