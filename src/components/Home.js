import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Home.css';

const Home = ({ setCurrentSection }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="home-section">
      <div className="home-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
      
      <div className={`home-content ${isVisible ? 'slide-up' : ''}`}>
        <h1 className="home-title gradient-text pulse">
          Ayra International LTD
        </h1>
        <p className="home-subtitle">
          Building bridges across global markets with premium products and exceptional service
        </p>
        <div className="home-buttons">
          <button 
            className="btn-primary scale-on-hover"
            onClick={() => setCurrentSection('stores')}
          >
            Explore Our Stores
          </button>
          <button 
            className="btn-secondary scale-on-hover"
            onClick={() => setCurrentSection('team')}
          >
            Meet Our Team
          </button>
        </div>
        <div className="scroll-indicator bounce">
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  );
};

export default Home;