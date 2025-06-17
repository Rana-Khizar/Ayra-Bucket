import React from 'react';
import { Users } from 'lucide-react';
import Pic1 from '../../Image/Pic1.jpg';
import Pic2 from '../../Image/Pic2.jpg';
import zee from '../../Image/zee.png';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: "Rana Zeeshan Khan",
      position: "CEO & Founder",
      image: [zee],
      description: "Visionary leader with 10+ years in international trade"
    },
    {
      name: "Rana Khizar",
      position: "Operations Manager",
      image: [Pic1],
      description: "Expert in logistics and supply chain management"
    },
    {
      name: "Pankaj Kumar",
      position: "Marketing Advisor",
      image: [Pic2],
      description: "Digital marketing specialist focused on global expansion"
    }
    // {
    //   name: "James Wilson",
    //   position: "Sales Team Lead",
    //   image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    //   description: "Results-driven sales professional with international experience"
    // }
  ];

  return (
    <section className="team-section section">
      <div className="team-background"></div>
      <div className="container">
        <div className="fade-in">
          <h2 className="section-title gradient-text">
            Meet Our Team
          </h2>
          <p className="section-subtitle">
            The passionate professionals driving Ayra International towards global success
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="team-card fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="team-image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
                <p className="team-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="join-team-section">
          <div className="join-team-card fade-in">
            <div className="join-team-icon">
              <Users size={64} />
            </div>
            <h3 className="join-team-title">Join Our Growing Family</h3>
            <p className="join-team-description">
              We're always looking for talented individuals to join our international team
            </p>
            <button className="button-primary">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
