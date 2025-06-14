import React from 'react';
import { ExternalLink, Globe, Star, TrendingUp, ShoppingBag, Play } from 'lucide-react';
import './Stores.css';

const Stores = () => {
  const stores = [
    {
      id: 'tiktok',
      name: 'TikTok Shop',
      url: 'https://shop.tiktok.com',
      description: 'Trending products for the social generation',
      icon: <Play size={24} />,
      gradient: 'tiktok-gradient'
    },
    {
      id: 'amazon',
      name: 'Amazon Store',
      url: 'https://amazon.com',
      description: 'Premium quality products with fast delivery',
      icon: <ShoppingBag size={24} />,
      gradient: 'amazon-gradient'
    }
  ];

  const features = [
    {
      icon: <Globe size={48} />,
      title: 'Global Reach',
      description: 'Serving customers across multiple continents',
      color: 'blue'
    },
    {
      icon: <Star size={48} />,
      title: 'Premium Quality',
      description: 'Only the finest products make it to our stores',
      color: 'purple'
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Growing Fast',
      description: 'Expanding our presence every quarter',
      color: 'green'
    }
  ];

  const handleStoreClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="stores-section">
      <div className="stores-container">
        <div className="stores-header fade-in">
          <h2 className="section-title gradient-text">Our Global Stores</h2>
          <p className="section-subtitle">
            Discover our premium products across multiple platforms, reaching customers worldwide
          </p>
        </div>

        <div className="stores-grid">
          {stores.map((store, index) => (
            <div 
              key={store.id}
              className={`store-card ${store.gradient} scale-on-hover slide-up`}
              onClick={() => handleStoreClick(store.url)}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="store-card-header">
                <div className="store-icon">
                  {store.icon}
                </div>
                <ExternalLink size={20} className="external-link" />
              </div>
              <h3 className="store-name">{store.name}</h3>
              <p className="store-description">{store.description}</p>
              <div className="store-button">
                <span>Visit Store →</span>
              </div>
            </div>
          ))}
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`feature-card card scale-on-hover slide-up`}
              style={{ animationDelay: `${(index + 2) * 0.2}s` }}
            >
              <div className={`feature-icon ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stores;