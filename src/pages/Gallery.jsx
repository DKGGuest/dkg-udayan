import React from 'react';
import { Helmet } from 'react-helmet-async';

const Gallery = () => {
    return (
        <>
            <Helmet>
                <title>Gallery - Udayan Trust</title>
                <meta name="description" content="Photo gallery showcasing artisan work, workshops, and community events." />
            </Helmet>
            <div className="gallery-page">
                <section className="page-hero" style={{
                    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=1600&h=600&fit=crop) center/cover',
                    padding: '10rem 0 6rem',
                    textAlign: 'center',
                    color: 'white',
                    marginBottom: '4rem'
                }}>
                    <div className="container">
                        <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1rem' }}>Gallery</h1>
                        <p style={{ fontSize: '1.4rem', opacity: '0.9', maxWidth: '800px', margin: '0 auto' }}>Celebrating artisan work, workshops, and community events</p>
                    </div>
                </section>

                <div className="container" style={{ marginBottom: '6rem' }}>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '4rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto 4rem' }}>
                        Browse our collection of photographs showcasing artisan work, workshops, community events, and traditional crafts.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                            <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&h=400&fit=crop" alt="Traditional textile work" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
                        </div>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                            <img src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=500&h=400&fit=crop" alt="Artisan at work" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
                        </div>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                            <img src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&h=400&fit=crop" alt="Pottery craftsmanship" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
                        </div>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                            <img src="https://images.unsplash.com/photo-1615529182904-14819c35db37?w=500&h=400&fit=crop" alt="Block printing" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
                        </div>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                            <img src="https://images.unsplash.com/photo-1590004953392-5aba2e72269a?w=500&h=400&fit=crop" alt="Community workshop" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
                        </div>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&h=400&fit=crop" alt="Embroidery work" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
                        </div>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                            <img src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=500&h=400&fit=crop" alt="Training session" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;
