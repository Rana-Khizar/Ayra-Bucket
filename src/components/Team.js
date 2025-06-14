import React from 'react';
import { Users } from 'lucide-react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Visionary leader with 10+ years in international trade"
    },
    {
      name: "Michael Chen",
      position: "Operations Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Expert in logistics and supply chain management"
    },
    {
      name: "Emma Rodriguez",
      position: "Marketing Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Digital marketing specialist focused on global expansion"
    },
    {
      name: "James Wilson",
      position: "Sales Team Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      description: "Results-driven sales professional with international experience"
    }
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
// import React from 'react';
// import './Team.css';

// const teamMembers = [
//   {
//     name: 'Alice Johnson',
//     designation: 'CEO & Founder',
//     image: 'https://i.pravatar.cc/300?img=1'
//   },
//   {
//     name: 'Mark Davis',
//     designation: 'Lead Developer',
//     image: 'https://i.pravatar.cc/300?img=2'
//   },
//   {
//     name: 'Sarah Thompson',
//     designation: 'UI/UX Designer',
//     image: 'https://i.pravatar.cc/300?img=3'
//   },
//   {
//     name: 'Daniel Lee',
//     designation: 'Marketing Head',
//     image: 'https://i.pravatar.cc/300?img=4'
//   }
// ];

// const Team = () => {
//   return (
//     <section className="team-section">
//       <h2 className="team-title">Meet Our Team</h2>
//       <p className="team-subtitle">The people who make the magic happen</p>
//       <div className="team-grid">
//         {teamMembers.map((member, index) => (
//           <div
//             key={index}
//             className="team-card fade-in"
//             style={{ animationDelay: `${index * 0.2}s` }}
//           >
//             <div className="team-img-wrapper">
//               <img src={member.image} alt={member.name} className="team-img" />
//             </div>
//             <h3 className="team-name">{member.name}</h3>
//             <p className="team-role">{member.designation}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Team;
