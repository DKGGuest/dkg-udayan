import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Heart } from 'lucide-react';

const ProductCard = ({ product, onInquiry }) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
        <button className="wishlist-btn">
          <Heart size={18} />
        </button>
        {product.featured && <span className="featured-badge">Featured</span>}
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-artisan">By {product.artisan}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <button onClick={() => onInquiry(product)} className="btn-inquiry">
            <MessageCircle size={16} />
            <span>Send Inquiry</span>
          </button>
        </div>
      </div>

      <style>{`
        .product-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(125, 90, 80, 0.15);
        }

        .product-image-wrapper {
          position: relative;
          width: 100%;
          padding-top: 75%;
          overflow: hidden;
          background: var(--bg-warm);
        }

        .product-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }

        .product-card:hover .product-image {
          transform: scale(1.05);
        }

        .wishlist-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: var(--transition);
        }

        .wishlist-btn:hover {
          background: var(--primary);
          color: white;
          transform: scale(1.1);
        }

        .featured-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--secondary);
          color: white;
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .product-info {
          padding: 1.5rem;
        }

        .product-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .product-artisan {
          color: var(--text-muted);
          font-size: 0.85rem;
          margin-bottom: 0.8rem;
          font-style: italic;
        }

        .product-description {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1.2rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .btn-inquiry {
          background: var(--primary);
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 4px;
          font-weight: 500;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: var(--transition);
        }

        .btn-inquiry:hover {
          background: var(--primary-light);
          transform: translateX(3px);
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
