import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us - Udayan Public Empowerment Trust</title>
                <meta name="description" content="Learn about Udayan Public Empowerment Trust's mission to empower rural artisans and preserve traditional Indian crafts." />
            </Helmet>

            <div className="about-page">
                <section className="page-hero">
                    <div className="container">
                        <h1>About Udayan Trust</h1>
                        <p>Empowering artisans, preserving heritage, building sustainable futures</p>
                    </div>
                </section>

                <section className="about-content">
                    <div className="container">
                        <div className="content-grid">
                            <div className="text-content">
                                <h2>Our Story</h2>
                                <p>
                                    Founded in 2010, Udayan Public Empowerment Trust emerged from a deep commitment to preserve India's rich cultural heritage while empowering rural communities. We recognized that traditional artisans, especially women, faced significant challenges in accessing markets and sustaining their livelihoods.
                                </p>
                                <p>
                                    Over the years, we have grown from a small community initiative to a recognized organization supporting over 500 artisans across multiple states. Our approach combines skill development, market access, and cultural preservation to create sustainable impact.
                                </p>
                            </div>
                            <div className="image-content">
                                <img src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&h=400&fit=crop" alt="Artisan at work" />
                            </div>
                        </div>

                        <div className="values-grid">
                            <div className="value-card">
                                <div className="value-icon">
                                    <Target size={32} />
                                </div>
                                <h3>Our Mission</h3>
                                <p>To empower rural artisans through skill development, market access, and preservation of traditional crafts, creating sustainable livelihoods and cultural continuity.</p>
                            </div>

                            <div className="value-card">
                                <div className="value-icon">
                                    <Eye size={32} />
                                </div>
                                <h3>Our Vision</h3>
                                <p>A world where traditional artisans thrive with dignity, their crafts are valued globally, and cultural heritage is preserved for future generations.</p>
                            </div>

                            <div className="value-card">
                                <div className="value-icon">
                                    <Award size={32} />
                                </div>
                                <h3>Our Values</h3>
                                <p>Integrity, cultural respect, sustainability, women empowerment, community collaboration, and ethical practices guide everything we do.</p>
                            </div>

                            <div className="value-card">
                                <div className="value-icon">
                                    <Users size={32} />
                                </div>
                                <h3>Our Impact</h3>
                                <p>500+ artisans empowered, 150+ workshops conducted, 25+ traditional crafts preserved, and countless lives transformed through sustainable livelihoods.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <style>{`
        .page-hero {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          padding: 8rem 0 5rem;
          text-align: center;
          color: white;
          margin-top: 5rem;
        }

        .page-hero h1 {
          font-size: 3rem;
          color: white;
          margin-bottom: 1rem;
        }

        .page-hero p {
          font-size: 1.2rem;
          opacity: 0.95;
        }

        .about-content {
          padding: 5rem 0;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 5rem;
          align-items: center;
        }

        .text-content h2 {
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: 2rem;
        }

        .text-content p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .image-content img {
          width: 100%;
          border-radius: 8px;
          box-shadow: var(--shadow);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
        }

        .value-card {
          background: white;
          padding: 2.5rem;
          border-radius: 8px;
          box-shadow: var(--shadow);
          transition: var(--transition);
        }

        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(125, 90, 80, 0.15);
        }

        .value-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 1.5rem;
        }

        .value-card h3 {
          font-size: 1.5rem;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .value-card p {
          color: var(--text-muted);
          line-height: 1.7;
        }

        @media (max-width: 992px) {
          .content-grid {
            grid-template-columns: 1fr;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </>
    );
};

export default About;
