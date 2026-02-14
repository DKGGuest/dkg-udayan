import React from 'react';
import { Helmet } from 'react-helmet-async';

const Workshops = () => {
    return (
        <>
            <Helmet>
                <title>Workshops & Training - Udayan Trust</title>
                <meta name="description" content="Skill development workshops and training programs for artisans." />
            </Helmet>
            <div className="workshops-page">
                <section className="page-hero" style={{
                    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1600&h=600&fit=crop) center/cover',
                    padding: '10rem 0 6rem',
                    textAlign: 'center',
                    color: 'white',
                    marginBottom: '4rem'
                }}>
                    <div className="container">
                        <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1rem' }}>Workshops & Training Programs</h1>
                        <p style={{ fontSize: '1.4rem', opacity: '0.9', maxWidth: '800px', margin: '0 auto' }}>Empowering artisans through skill development and modern techniques</p>
                    </div>
                </section>

                <div className="container" style={{ marginBottom: '6rem' }}>
                    <section style={{ marginBottom: '5rem' }}>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '2rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem' }}>
                            We conduct regular workshops and training programs to enhance artisan skills, introduce modern techniques while preserving traditional methods, and provide business and marketing knowledge.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '3rem', textAlign: 'center' }}>Our Training Programs</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
                            <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                                <img src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=500&h=300&fit=crop" alt="Skill Development Workshop" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Skill Development</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Advanced techniques and traditional craft refinement sessions</p>
                                </div>
                            </div>
                            <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=300&fit=crop" alt="Business Training" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Business Management</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Marketing, branding, and entrepreneurship training</p>
                                </div>
                            </div>
                            <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop" alt="Digital Literacy" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Digital Literacy</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Online marketing and digital payment systems</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Workshops;
