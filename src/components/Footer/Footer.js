import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="brand-name">Ayra International</h2>
          <p className="brand-description">
            Connecting global customers with premium products through trusted platforms like Amazon & TikTok Shop.
          </p>
        </div>

        <div className="footer-links">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/stores">Stores</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3 className="footer-title">Contact</h3>
          <p><Mail size={16} /> info@ayrainternational.com</p>
          <p><MapPin size={16} /> Nottingham • United Kingdom</p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ayra International. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
