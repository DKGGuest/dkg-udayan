import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ArtisanCard from '../components/ArtisanCard';
import ProductCard from '../components/ProductCard';
import { Sparkles, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';

const Home = () => {
  // Sample data - replace with API calls
  const featuredArtisans = [
    {
      id: 1,
      name: 'Lakshmi Devi',
      craft: 'Madhubani Painting',
      location: 'Bihar',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&h=500&fit=crop'
    },
    {
      id: 2,
      name: 'Ramesh Kumar',
      craft: 'Pottery & Terracotta',
      location: 'Rajasthan',
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&h=500&fit=crop'
    },
    {
      id: 3,
      name: 'Savita Sharma',
      craft: 'Handloom Weaving',
      location: 'Gujarat',
      image: 'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=500&h=500&fit=crop'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Hand-Painted Madhubani Wall Art',
      artisan: 'Lakshmi Devi',
      description: 'Traditional Madhubani art depicting nature and mythology',
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=450&fit=crop',
      featured: true
    },
    {
      id: 2,
      name: 'Terracotta Decorative Vase',
      artisan: 'Ramesh Kumar',
      description: 'Handcrafted terracotta vase with traditional motifs',
      image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&h=450&fit=crop',
      featured: false
    },
    {
      id: 3,
      name: 'Handwoven Cotton Saree',
      artisan: 'Savita Sharma',
      description: 'Pure cotton saree with intricate handloom patterns',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=450&fit=crop',
      featured: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Udayan Public Empowerment Trust - Empowering Rural Artisans</title>
        <meta name="description" content="Udayan Public Empowerment Trust empowers rural artisans, especially women, by preserving traditional Indian crafts and providing sustainable livelihood opportunities." />
        <meta name="keywords" content="rural artisans, women empowerment, traditional crafts, handloom, Indian art, NGO" />
      </Helmet>

      <HeroSection />

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <Sparkles size={16} />
              Our Mission
            </span>
            <h2>Empowering Artisans, Preserving Heritage</h2>
            <p className="section-description">
              We believe in creating sustainable livelihoods while keeping traditional Indian crafts alive for future generations.
            </p>
          </div>

          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">
                <Users size={32} />
              </div>
              <h3>Artisan Empowerment</h3>
              <p>Providing skill development, training, and market access to rural artisans, with special focus on women empowerment.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <Award size={32} />
              </div>
              <h3>Heritage Preservation</h3>
              <p>Documenting and preserving traditional art forms, techniques, and cultural knowledge for future generations.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <TrendingUp size={32} />
              </div>
              <h3>Market Access</h3>
              <p>Connecting artisans with ethical buyers and creating sustainable income opportunities through digital platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="featured-artisans">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <Users size={16} />
              Meet Our Artisans
            </span>
            <h2>Stories of Skill & Resilience</h2>
            <p className="section-description">
              Every artisan has a unique story of heritage, craftsmanship, and determination.
            </p>
          </div>

          <div className="artisan-grid">
            {featuredArtisans.map(artisan => (
              <ArtisanCard key={artisan.id} artisan={artisan} />
            ))}
          </div>

          <div className="section-cta">
            <Link to="/artisans" className="btn-primary">
              View All Artisans
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <Sparkles size={16} />
              Handcrafted with Love
            </span>
            <h2>Explore Traditional Crafts</h2>
            <p className="section-description">
              Each product tells a story of tradition, skill, and cultural heritage.
            </p>
          </div>

          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="section-cta">
            <Link to="/marketplace" className="btn-outline">
              Browse Marketplace
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Join Us in Making a Difference</h2>
            <p>Whether you're an artisan, volunteer, or partner, there are many ways to get involved with our mission.</p>
            <div className="cta-buttons">
              <Link to="/get-involved" className="btn-primary">Get Involved</Link>
              <Link to="/contact" className="btn-outline btn-white">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .mission-section,
        .featured-artisans,
        .featured-products {
          padding: 5rem 0;
        }

        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 4rem;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(125, 90, 80, 0.1);
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          color: var(--primary);
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--primary);
        }

        .section-description {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        .mission-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .mission-card {
          background: white;
          padding: 2.5rem;
          border-radius: 8px;
          box-shadow: var(--shadow);
          transition: var(--transition);
        }

        .mission-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(125, 90, 80, 0.15);
        }

        .mission-icon {
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

        .mission-card h3 {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          color: var(--primary);
        }

        .mission-card p {
          color: var(--text-muted);
          line-height: 1.7;
        }

        .artisan-grid,
        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin-bottom: 3rem;
        }

        .section-cta {
          text-align: center;
        }

        .section-cta .btn-primary,
        .section-cta .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cta-section {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          padding: 5rem 0;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          border-radius: 50%;
        }

        .cta-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          color: white;
          margin-bottom: 1.5rem;
        }

        .cta-content p {
          font-size: 1.2rem;
          color: rgba(255,255,255,0.9);
          margin-bottom: 2.5rem;
          line-height: 1.7;
        }

        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }

        .btn-white {
          background: white;
          color: var(--primary);
          border-color: white;
        }

        .btn-white:hover {
          background: transparent;
          color: white;
        }

        @media (max-width: 992px) {
          .mission-grid,
          .artisan-grid,
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .mission-grid,
          .artisan-grid,
          .product-grid {
            grid-template-columns: 1fr;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .cta-content h2 {
            font-size: 2rem;
          }

          .cta-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
