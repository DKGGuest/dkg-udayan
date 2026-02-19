import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Mail, ArrowLeft } from 'lucide-react';
import EnquiryModal from '../components/EnquiryModal';

import { artisans } from '../data/artisans';

const ArtisanDetail = () => {
  const { id } = useParams();
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const artisan = artisans.find(a => a.id === parseInt(id));

  if (!artisan) {
    return (
      <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <h2>Artisan not found</h2>
        <Link to="/artisans" className="btn-primary" style={{ marginTop: '2rem' }}>Back to Artisans</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{artisan.name} - {artisan.craft} - Udayan Trust</title>
        <meta name="description" content={`Meet ${artisan.name}, a skilled ${artisan.craft} artisan from ${artisan.location}. ${artisan.story}`} />
      </Helmet>

      <div className="artisan-detail-page">
        <section className="detail-hero">
          <div className="container">
            <Link to="/artisans" className="back-link">
              <ArrowLeft size={20} />
              <span>Back to Artisans</span>
            </Link>
          </div>
        </section>

        <section className="artisan-profile">
          <div className="container">
            <div className="profile-grid">
              <div className="profile-image">
                <img src={artisan.image} alt={artisan.name} />
              </div>
              <div className="profile-info">
                <h1>{artisan.name}</h1>
                <p className="craft-type">{artisan.craft}</p>
                <div className="location-info">
                  <MapPin size={18} />
                  <span>{artisan.location}</span>
                </div>
                <div className="story-section">
                  <h3>Story</h3>
                  <p>{artisan.story}</p>
                </div>
                <div className="specialization-section">
                  <h3>Specialization</h3>
                  <p>{artisan.specialization}</p>
                </div>
                <button className="btn-primary" onClick={() => setIsInquiryOpen(true)}>
                  <Mail size={18} />
                  <span>Send Inquiry</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <EnquiryModal
          isOpen={isInquiryOpen}
          onClose={() => setIsInquiryOpen(false)}
          title="Artisan Inquiry"
          formType="enquiry"
          artisanName={artisan.name}
        />

        <section className="artisan-gallery">
          <div className="container">
            <h2>Gallery</h2>
            <div className="gallery-grid">
              {artisan.gallery.map((img, idx) => (
                <div key={idx} className="gallery-item">
                  <img src={img} alt={`${artisan.name} work ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .detail-hero {
          padding: 8rem 0 2rem;
          margin-top: 5rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary);
          font-weight: 500;
          transition: var(--transition);
        }

        .back-link:hover {
          gap: 0.8rem;
        }

        .artisan-profile {
          padding: 2rem 0 5rem;
        }

        .profile-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: start;
        }

        .profile-image {
          position: sticky;
          top: 6rem;
        }

        .profile-image img {
          width: 100%;
          border-radius: 8px;
          box-shadow: var(--shadow);
        }

        .profile-info h1 {
          font-size: 3rem;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .craft-type {
          font-size: 1.3rem;
          color: var(--secondary);
          font-weight: 500;
          margin-bottom: 1.5rem;
        }

        .location-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          margin-bottom: 3rem;
        }

        .story-section,
        .specialization-section {
          margin-bottom: 2.5rem;
        }

        .story-section h3,
        .specialization-section h3 {
          font-size: 1.5rem;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .story-section p,
        .specialization-section p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-muted);
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .artisan-gallery {
          padding: 5rem 0;
          background: var(--bg-warm);
        }

        .artisan-gallery h2 {
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: 3rem;
          text-align: center;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .gallery-item {
          position: relative;
          padding-top: 75%;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: var(--shadow);
          cursor: pointer;
          transition: var(--transition);
        }

        .gallery-item:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 30px rgba(125, 90, 80, 0.2);
        }

        .gallery-item img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 992px) {
          .profile-grid {
            grid-template-columns: 1fr;
          }

          .profile-image {
            position: static;
          }

          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </>
  );
};

export default ArtisanDetail;
