import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Linkedin, Twitter, Mail, Heart, Users, Star, Globe } from 'lucide-react';

const teamMembers = [
    {
        id: 1,
        name: 'Meera Devi Sharma',
        role: 'Founder & Executive Director',
        bio: 'A visionary leader with 20+ years of grassroots experience, Meera founded Udayan Trust to bridge the gap between rural artisans and global markets. Her work has been recognized by the Ministry of Textiles.',
        image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=face',
        expertise: ['Women Empowerment', 'Policy Advocacy', 'Rural Development'],
        email: 'meera@udayan.org',
        linkedin: '#',
        twitter: '#',
        color: '#7d5a50',
    },
    {
        id: 2,
        name: 'Rajiv Kumar Gupta',
        role: 'Head of Programs',
        bio: 'With a background in social work and craft heritage, Rajiv designs and oversees fieldwork programs across 5 states, ensuring artisans receive quality training and holistic support.',
        image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop&crop=face',
        expertise: ['Program Management', 'Craft Heritage', 'Field Operations'],
        email: 'rajiv@udayan.org',
        linkedin: '#',
        twitter: '#',
        color: '#b8860b',
    },
    {
        id: 3,
        name: 'Priya Anand',
        role: 'Community Outreach Coordinator',
        bio: 'Priya is the heart of Udayan\'s ground-level work. She builds trust within rural communities, identifies talented artisans, and ensures women are at the centre of every initiative.',
        image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face',
        expertise: ['Community Building', 'Women\'s Rights', 'Stakeholder Engagement'],
        email: 'priya@udayan.org',
        linkedin: '#',
        twitter: '#',
        color: '#5a8a5a',
    },
    {
        id: 4,
        name: 'Arjun Singh Rawat',
        role: 'Artisan Welfare Officer',
        bio: 'Arjun works closely with artisan cooperatives, manages grievance redressal, and ensures fair pricing and ethical practices across all partnerships with buyers and NGOs.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
        expertise: ['Fair Trade', 'Cooperative Development', 'Livelihood Support'],
        email: 'arjun@udayan.org',
        linkedin: '#',
        twitter: '#',
        color: '#c96a2a',
    },
    {
        id: 5,
        name: 'Sunita Bai Verma',
        role: 'Master Craft Trainer',
        bio: 'A celebrated Madhubani artist herself, Sunita leads skill-development workshops across villages. She has trained over 300 women in traditional weaving, pottery, and painting techniques.',
        image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&h=400&fit=crop&crop=face',
        expertise: ['Madhubani Art', 'Skill Training', 'Traditional Crafts'],
        email: 'sunita@udayan.org',
        linkedin: '#',
        twitter: '#',
        color: '#7a5c8a',
    },
    {
        id: 6,
        name: 'Deepak Nair',
        role: 'Digital & Market Access Lead',
        bio: 'Deepak drives Udayan\'s digital strategy, connecting artisans to e-commerce platforms and ethical buyers worldwide. He has helped generate ₹50+ lakh in online sales for artisans.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
        expertise: ['E-Commerce', 'Digital Marketing', 'Market Linkage'],
        email: 'deepak@udayan.org',
        linkedin: '#',
        twitter: '#',
        color: '#2a6a8a',
    },
];

const stats = [
    { icon: Users, label: 'Team Members', value: '25+' },
    { icon: Heart, label: 'Lives Impacted', value: '5,000+' },
    { icon: Star, label: 'Years of Service', value: '14+' },
    { icon: Globe, label: 'States Covered', value: '8' },
];

const Team = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <>
            <Helmet>
                <title>Our Team - Udayan Public Empowerment Trust</title>
                <meta
                    name="description"
                    content="Meet the passionate team behind Udayan Public Empowerment Trust — dedicated changemakers empowering rural artisans and preserving India's cultural heritage."
                />
            </Helmet>

            <div className="team-page">
                {/* Hero */}
                <section className="team-hero">
                    <div className="team-hero-bg" />
                    <div className="container team-hero-content">
                        <span className="team-badge">
                            <Users size={16} />
                            Our People
                        </span>
                        <h1>Meet the Team</h1>
                        <p>
                            Passionate changemakers united by a single purpose — to uplift rural artisans,
                            celebrate India's craft heritage, and create sustainable futures for communities.
                        </p>
                    </div>
                </section>

                {/* Stats Bar */}
                <section className="team-stats">
                    <div className="container">
                        <div className="stats-grid">
                            {stats.map((stat, i) => (
                                <div className="stat-item" key={i}>
                                    <div className="stat-icon">
                                        <stat.icon size={24} />
                                    </div>
                                    <div className="stat-value">{stat.value}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Grid */}
                <section className="team-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>The People Behind the Mission</h2>
                            <p className="section-description">
                                Each member brings unique expertise and a heartfelt commitment to Udayan's vision
                                of an India where traditional crafts thrive and artisans prosper.
                            </p>
                        </div>

                        <div className="team-grid">
                            {teamMembers.map((member) => (
                                <div
                                    className={`team-card ${hoveredId === member.id ? 'hovered' : ''}`}
                                    key={member.id}
                                    onMouseEnter={() => setHoveredId(member.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                >
                                    <div className="card-image-wrap">
                                        <img src={member.image} alt={member.name} className="member-photo" />
                                        <div className="card-overlay" style={{ background: `${member.color}dd` }}>
                                            <div className="overlay-links">
                                                <a href={`mailto:${member.email}`} className="social-btn" title="Email">
                                                    <Mail size={18} />
                                                </a>
                                                <a href={member.linkedin} className="social-btn" title="LinkedIn">
                                                    <Linkedin size={18} />
                                                </a>
                                                <a href={member.twitter} className="social-btn" title="Twitter">
                                                    <Twitter size={18} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <div className="member-accent" style={{ background: member.color }} />
                                        <h3 className="member-name">{member.name}</h3>
                                        <p className="member-role" style={{ color: member.color }}>{member.role}</p>
                                        <p className="member-bio">{member.bio}</p>
                                        <div className="expertise-tags">
                                            {member.expertise.map((tag, idx) => (
                                                <span className="tag" key={idx} style={{ borderColor: member.color, color: member.color }}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="team-values">
                    <div className="container">
                        <div className="values-banner">
                            <h2>What Drives Us</h2>
                            <p>
                                Every member of the Udayan family is bound together by shared values — integrity,
                                compassion, cultural pride, and an unwavering belief in the power of community.
                            </p>
                            <div className="values-pills">
                                {['Integrity', 'Compassion', 'Cultural Pride', 'Sustainability', 'Inclusion', 'Transparency', 'Empathy', 'Innovation'].map((v, i) => (
                                    <span className="value-pill" key={i}>{v}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <style>{`
        .team-page {
          min-height: 100vh;
        }

        /* Hero */
        .team-hero {
          position: relative;
          padding: 9rem 0 6rem;
          overflow: hidden;
          text-align: center;
          margin-top: 5rem;
        }

        .team-hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #4a2c20 0%, #7d5a50 50%, #b8860b 100%);
          z-index: 0;
        }

        .team-hero-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 50%, rgba(255,200,100,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 40%);
        }

        .team-hero-content {
          position: relative;
          z-index: 1;
          color: white;
          max-width: 750px;
          margin: 0 auto;
        }

        .team-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.25);
          padding: 0.5rem 1.3rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.95);
          margin-bottom: 1.5rem;
        }

        .team-hero-content h1 {
          font-size: 3.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1.5rem;
          line-height: 1.15;
        }

        .team-hero-content p {
          font-size: 1.2rem;
          color: rgba(255,255,255,0.88);
          line-height: 1.8;
        }

        /* Stats */
        .team-stats {
          background: white;
          padding: 3rem 0;
          box-shadow: 0 4px 30px rgba(0,0,0,0.08);
          position: relative;
          z-index: 2;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          border-right: 1px solid #f0e8e4;
        }

        .stat-item:last-child {
          border-right: none;
        }

        .stat-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, #7d5a50, #b8860b);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 0.5rem;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          color: #4a2c20;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #8a7a75;
          font-weight: 500;
        }

        /* Team Section */
        .team-section {
          padding: 6rem 0;
          background: #faf7f5;
        }

        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 4rem;
        }

        .section-header h2 {
          font-size: 2.6rem;
          font-weight: 800;
          color: #4a2c20;
          margin-bottom: 1rem;
        }

        .section-description {
          font-size: 1.1rem;
          color: #8a7a75;
          line-height: 1.8;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        /* Card */
        .team-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(74, 44, 32, 0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .team-card.hovered {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(74, 44, 32, 0.18);
        }

        .card-image-wrap {
          position: relative;
          height: 280px;
          overflow: hidden;
        }

        .member-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.5s ease;
        }

        .team-card.hovered .member-photo {
          transform: scale(1.06);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 1.5rem;
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .team-card.hovered .card-overlay {
          opacity: 1;
        }

        .overlay-links {
          display: flex;
          gap: 0.8rem;
        }

        .social-btn {
          width: 42px;
          height: 42px;
          background: rgba(255,255,255,0.92);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4a2c20;
          text-decoration: none;
          transform: translateY(20px);
          transition: transform 0.3s ease, background 0.2s;
        }

        .team-card.hovered .social-btn {
          transform: translateY(0);
        }

        .social-btn:hover {
          background: white;
          color: #7d5a50;
        }

        .card-body {
          padding: 1.8rem;
          position: relative;
        }

        .member-accent {
          position: absolute;
          top: 0;
          left: 1.8rem;
          right: 1.8rem;
          height: 3px;
          border-radius: 0 0 4px 4px;
          opacity: 0.7;
        }

        .member-name {
          font-size: 1.3rem;
          font-weight: 700;
          color: #2c1810;
          margin-bottom: 0.3rem;
          margin-top: 0.5rem;
        }

        .member-role {
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }

        .member-bio {
          font-size: 0.92rem;
          color: #6b5a54;
          line-height: 1.75;
          margin-bottom: 1.2rem;
        }

        .expertise-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag {
          font-size: 0.78rem;
          font-weight: 600;
          padding: 0.3rem 0.8rem;
          border-radius: 50px;
          border: 1.5px solid;
          background: transparent;
          transition: all 0.2s;
        }

        .team-card.hovered .tag {
          opacity: 0.85;
        }

        /* Values */
        .team-values {
          padding: 5rem 0;
          background: linear-gradient(135deg, #4a2c20 0%, #7d5a50 100%);
        }

        .values-banner {
          text-align: center;
          color: white;
          max-width: 700px;
          margin: 0 auto;
        }

        .values-banner h2 {
          font-size: 2.4rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
        }

        .values-banner p {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.85);
          line-height: 1.8;
          margin-bottom: 2.5rem;
        }

        .values-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          justify-content: center;
        }

        .value-pill {
          padding: 0.55rem 1.4rem;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          color: white;
          backdrop-filter: blur(6px);
          transition: background 0.2s, transform 0.2s;
          cursor: default;
        }

        .value-pill:hover {
          background: rgba(255,255,255,0.22);
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stat-item:nth-child(2) {
            border-right: none;
          }

          .stat-item:nth-child(3) {
            border-top: 1px solid #f0e8e4;
          }

          .stat-item:nth-child(4) {
            border-top: 1px solid #f0e8e4;
            border-right: none;
          }
        }

        @media (max-width: 640px) {
          .team-hero-content h1 {
            font-size: 2.3rem;
          }

          .team-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .section-header h2 {
            font-size: 2rem;
          }
        }
      `}</style>
        </>
    );
};

export default Team;
