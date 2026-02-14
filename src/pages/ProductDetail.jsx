import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Heart, Share2 } from 'lucide-react';
import EnquiryModal from '../components/EnquiryModal';

const ProductDetail = () => {
    const { id } = useParams();
    const [isInquiryOpen, setIsInquiryOpen] = useState(false);

    // Sample data - in a real app, fetch by id
    const product = {
        id: id,
        name: 'Hand-Painted Madhubani Wall Art',
        artisan: 'Lakshmi Devi',
        category: 'Paintings',
        price: 'Contact for Price',
        description: 'This exquisite piece of traditional Madhubani art is hand-painted on handmade paper using natural dyes and pigments. The artwork depicts a vibrant scene from nature, featuring delicate floral patterns and symbolic motifs that are characteristic of the Mithila region.',
        specifications: [
            { label: 'Material', value: 'Handmade Paper, Natural Pigments' },
            { label: 'Dimensions', value: '12 x 18 inches' },
            { label: 'Origin', value: 'Madhubani, Bihar' },
            { label: 'Technique', value: 'Freehand Painting with Nib Pens and Brushes' }
        ],
        images: [
            'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop'
        ]
    };

    return (
        <>
            <Helmet>
                <title>{product.name} - Marketplace - Udayan Trust</title>
                <meta name="description" content={product.description} />
            </Helmet>

            <div className="product-detail-page">
                <section className="detail-header">
                    <div className="container">
                        <Link to="/marketplace" className="back-link">
                            <ArrowLeft size={20} />
                            <span>Back to Marketplace</span>
                        </Link>
                    </div>
                </section>

                <section className="product-main">
                    <div className="container">
                        <div className="product-grid">
                            <div className="product-gallery">
                                <div className="main-image">
                                    <img src={product.images[0]} alt={product.name} />
                                </div>
                                <div className="thumbnail-grid">
                                    {product.images.map((img, idx) => (
                                        <div key={idx} className="thumbnail">
                                            <img src={img} alt={`${product.name} ${idx + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="product-info">
                                <span className="category-tag">{product.category}</span>
                                <h1>{product.name}</h1>
                                <p className="artisan-credit">By <Link to="/artisans/1">{product.artisan}</Link></p>

                                <div className="price-tag">{product.price}</div>

                                <div className="description-section">
                                    <h3>Description</h3>
                                    <p>{product.description}</p>
                                </div>

                                <div className="specs-section">
                                    <h3>Specifications</h3>
                                    <div className="specs-grid">
                                        {product.specifications.map((spec, idx) => (
                                            <div key={idx} className="spec-item">
                                                <span className="spec-label">{spec.label}:</span>
                                                <span className="spec-value">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="action-buttons">
                                    <button className="btn-primary" onClick={() => setIsInquiryOpen(true)}>
                                        <MessageCircle size={20} />
                                        <span>Send Inquiry</span>
                                    </button>
                                    <button className="btn-outline">
                                        <Heart size={20} />
                                    </button>
                                    <button className="btn-outline">
                                        <Share2 size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <EnquiryModal
                    isOpen={isInquiryOpen}
                    onClose={() => setIsInquiryOpen(false)}
                    title="Product Inquiry"
                    formType="enquiry"
                    productName={product.name}
                />
            </div>

            <style>{`
                .product-detail-page {
                    padding-bottom: 5rem;
                }

                .detail-header {
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

                .product-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: 4rem;
                    align-items: start;
                }

                .main-image {
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: var(--shadow);
                    margin-bottom: 1.5rem;
                }

                .main-image img {
                    width: 100%;
                    display: block;
                }

                .thumbnail-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1rem;
                }

                .thumbnail {
                    border-radius: 8px;
                    overflow: hidden;
                    cursor: pointer;
                    border: 2px solid transparent;
                    transition: var(--transition);
                }

                .thumbnail:hover {
                    border-color: var(--primary);
                }

                .thumbnail img {
                    width: 100%;
                    display: block;
                }

                .category-tag {
                    display: inline-block;
                    padding: 0.4rem 1rem;
                    background: var(--bg-warm);
                    color: var(--secondary);
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }

                .product-info h1 {
                    font-size: 2.5rem;
                    color: var(--primary);
                    margin-bottom: 0.5rem;
                    line-height: 1.2;
                }

                .artisan-credit {
                    font-size: 1.1rem;
                    color: var(--text-muted);
                    margin-bottom: 2rem;
                }

                .artisan-credit a {
                    color: var(--secondary);
                    font-weight: 600;
                    text-decoration: underline;
                }

                .price-tag {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--text-main);
                    margin-bottom: 2.5rem;
                    padding: 1rem 1.5rem;
                    background: var(--bg-warm);
                    border-radius: 8px;
                    display: inline-block;
                }

                .description-section, .specs-section {
                    margin-bottom: 2.5rem;
                }

                .description-section h3, .specs-section h3 {
                    font-size: 1.3rem;
                    color: var(--primary);
                    margin-bottom: 1rem;
                }

                .description-section p {
                    color: var(--text-muted);
                    line-height: 1.8;
                }

                .specs-grid {
                    display: grid;
                    gap: 0.8rem;
                }

                .spec-item {
                    display: flex;
                    gap: 1rem;
                    font-size: 0.95rem;
                }

                .spec-label {
                    font-weight: 600;
                    color: var(--text-main);
                    min-width: 120px;
                }

                .spec-value {
                    color: var(--text-muted);
                }

                .action-buttons {
                    display: flex;
                    gap: 1rem;
                    margin-top: 3rem;
                }

                .btn-primary {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.8rem;
                    padding: 1rem;
                }

                .btn-outline {
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid var(--border-color);
                    background: white;
                    border-radius: 8px;
                    color: var(--text-muted);
                    transition: var(--transition);
                }

                .btn-outline:hover {
                    border-color: var(--primary);
                    color: var(--primary);
                    background: var(--bg-warm);
                }

                @media (max-width: 992px) {
                    .product-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                }
            `}</style>
        </>
    );
};

export default ProductDetail;
