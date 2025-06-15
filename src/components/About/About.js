import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content fade-in">
          <h2 className="section-title gradient-text">About Us</h2>
          <p className="about-description">
            At <strong>Ayra International</strong>, we are dedicated to delivering premium quality products globally through innovative platforms like TikTok Shop and Amazon. Our mission is to connect with customers worldwide by offering trending and high-demand products that meet their lifestyle needs.
          </p>
          <p className="about-description">
            With a team of passionate professionals and a commitment to excellence, we continuously strive to expand our global footprint. We believe in authenticity, innovation, and creating meaningful experiences for our customers.
          </p>
          <p className="about-highlight">
            Your trust is our success — welcome to the future of global e-commerce.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
