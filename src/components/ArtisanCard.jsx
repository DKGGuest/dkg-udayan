import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

const ArtisanCard = ({ artisan }) => {
  return (
    <Link to={`/artisans/${artisan.id}`} className="artisan-card">
      <div className="artisan-image-wrapper">
        <img src={artisan.image} alt={artisan.name} className="artisan-image" />
        <div className="artisan-overlay">
          <span className="view-profile">
            View Profile <ArrowRight size={16} />
          </span>
        </div>
      </div>
      <div className="artisan-info">
        <h3 className="artisan-name">{artisan.name}</h3>
        <p className="artisan-craft">{artisan.craft}</p>
        <div className="artisan-location">
          <MapPin size={14} />
          <span>{artisan.location}</span>
        </div>
      </div>

      <style>{`
        .artisan-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
          display: block;
        }

        .artisan-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 30px rgba(125, 90, 80, 0.15);
        }

        .artisan-image-wrapper {
          position: relative;
          width: 100%;
          padding-top: 100%;
          overflow: hidden;
          background: var(--bg-warm);
        }

        .artisan-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }

        .artisan-card:hover .artisan-image {
          transform: scale(1.1);
        }

        .artisan-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 1.5rem;
          opacity: 0;
          transition: var(--transition);
        }

        .artisan-card:hover .artisan-overlay {
          opacity: 1;
        }

        .view-profile {
          background: white;
          color: var(--primary);
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .artisan-info {
          padding: 1.5rem;
        }

        .artisan-name {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .artisan-craft {
          color: var(--secondary);
          font-size: 0.95rem;
          margin-bottom: 0.8rem;
          font-weight: 500;
        }

        .artisan-location {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-muted);
          font-size: 0.85rem;
        }
      `}</style>
    </Link>
  );
};

export default ArtisanCard;
