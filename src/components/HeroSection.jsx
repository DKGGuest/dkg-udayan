import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Heart size={16} />
            <span>Empowering Rural Artisans Since 2010</span>
          </div>
          <h1 className="hero-title">
            Preserving Heritage,<br />
            <span className="gradient-text">Empowering Communities</span>
          </h1>
          <p className="hero-description">
            Udayan Public Empowerment Trust is dedicated to uplifting rural artisans,
            especially women, by preserving traditional Indian crafts and providing
            sustainable livelihood opportunities through skill development and market access.
          </p>
          <div className="hero-buttons">
            <Link to="/artisans" className="btn-primary">
              Meet Our Artisans
              <ArrowRight size={20} />
            </Link>
            <Link to="/get-involved" className="btn-outline">
              Get Involved
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <Users size={28} className="stat-icon" />
              <div>
                <h3>500+</h3>
                <p>Artisans Empowered</p>
              </div>
            </div>
            <div className="stat-item">
              <Award size={28} className="stat-icon" />
              <div>
                <h3>150+</h3>
                <p>Workshops Conducted</p>
              </div>
            </div>
            <div className="stat-item">
              <Heart size={28} className="stat-icon" />
              <div>
                <h3>25+</h3>
                <p>Traditional Crafts</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 8rem;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #FDF6EC 0%, #F5E6D3 50%, #E5D4C1 100%);
          z-index: -1;
        }

        .hero-background::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(125, 90, 80, 0.08) 0%, transparent 70%);
          border-radius: 50%;
        }

        .hero-background::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(180, 132, 108, 0.06) 0%, transparent 70%);
          border-radius: 50%;
        }

        .hero-container {
          position: relative;
          z-index: 1;
        }

        .hero-content {
          max-width: 800px;
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(125, 90, 80, 0.1);
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          color: var(--primary);
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 2rem;
          border: 1px solid rgba(125, 90, 80, 0.2);
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--text-main);
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.2rem;
          line-height: 1.8;
          color: var(--text-muted);
          margin-bottom: 3rem;
          max-width: 650px;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .hero-buttons .btn-primary,
        .hero-buttons .btn-outline {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          padding-top: 3rem;
          border-top: 1px solid var(--border-color);
        }

        .stat-item {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .stat-icon {
          color: var(--secondary);
          flex-shrink: 0;
        }

        .stat-item h3 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 0.2rem;
        }

        .stat-item p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .hero {
            min-height: auto;
            padding: 8rem 0 4rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .hero-stats {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
