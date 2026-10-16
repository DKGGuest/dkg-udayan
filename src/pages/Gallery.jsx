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
                    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/crafts/pottery_1.jpg) center/cover',
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

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                            <img src="/images/crafts/madhubani_2.jpg" alt="Madhubani Painting" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
                        </div>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                            <img src="/images/crafts/pottery_1.jpg" alt="Terracotta Pottery" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
                        </div>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                            <img src="/images/crafts/weaving_1.jpg" alt="Handloom Saree Weaving" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
                        </div>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                            <img src="/images/crafts/blockprint_2.jpg" alt="Hand Block Printing" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
                        </div>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                            <img src="/images/crafts/woodcarving_1.jpg" alt="Traditional Wood Carving" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
                        </div>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                            <img src="/images/crafts/embroidery_2.jpg" alt="Zardozi Embroidery" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;
