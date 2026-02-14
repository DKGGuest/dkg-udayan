import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Mail, ArrowLeft } from 'lucide-react';
import EnquiryModal from '../components/EnquiryModal';

const ArtisanDetail = () => {
  const { id } = useParams();
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  // Sample data - replace with API call
  const artisan = {
    id: 1,
    name: 'Lakshmi Devi',
    craft: 'Madhubani Painting',
    location: 'Bihar',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&h=800&fit=crop',
    story: 'Lakshmi Devi has been practicing Madhubani painting for over 20 years. She learned this traditional art form from her mother and grandmother, continuing a family legacy that spans generations. Her work depicts stories from Hindu mythology and celebrates the beauty of nature.',
    specialization: 'Traditional Madhubani art featuring intricate patterns, vibrant colors, and mythological themes',
    gallery: [
      'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop'
    ]
  };

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
