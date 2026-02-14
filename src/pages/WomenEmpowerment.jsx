import React from 'react';
import { Helmet } from 'react-helmet-async';

const WomenEmpowerment = () => {
    return (
        <>
            <Helmet>
                <title>Women Artisan Empowerment - Udayan Trust</title>
                <meta name="description" content="Empowering women artisans through skill development, market access, and community support." />
            </Helmet>
            <div className="women-empowerment-page">
                <section className="page-hero" style={{
                    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1590004953392-5aba2e72269a?w=1600&h=600&fit=crop) center/cover',
                    padding: '10rem 0 6rem',
                    textAlign: 'center',
                    color: 'white',
                    marginBottom: '4rem'
                }}>
                    <div className="container">
                        <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1rem' }}>Women Artisan Empowerment</h1>
                        <p style={{ fontSize: '1.4rem', opacity: '0.9', maxWidth: '800px', margin: '0 auto' }}>Building independence and dignity through traditional craftsmanship.</p>
                    </div>
                </section>

                <div className="container">
                    <section className="empowerment-intro" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
                        <div className="text-content">
                            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>Our Commitment</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                                At Udayan Trust, we believe in the transformative power of empowering women artisans. Over 70% of our registered artisans are women who have found economic independence and social recognition through their craft.
                            </p>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                                By providing tools, training, and a global platform, we help women break the cycle of poverty while keeping ancient traditions alive for the next generation.
                            </p>
                        </div>
                        <div className="image-content">
                            <img src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=1000&h=700&fit=crop" alt="Elderly Indian woman artisan painting traditional crafts" style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-lg)' }} />
                        </div>
                    </section>

                    <section className="initiatives" style={{ marginBottom: '6rem' }}>
                        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '3rem' }}>Key Initiatives</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                            <div style={{ background: '#fdf6f0', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                                <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&h=350&fit=crop" alt="Skill Development" style={{ width: '100%', borderRadius: '8px', marginBottom: '1.5rem', height: '200px', objectFit: 'cover' }} />
                                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Skill Development</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Masterclass sessions with veteran artisans to refine techniques and learn modern design trends.</p>
                            </div>
                            <div style={{ background: '#fdf6f0', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                                <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&h=350&fit=crop" alt="Financial Literacy" style={{ width: '100%', borderRadius: '8px', marginBottom: '1.5rem', height: '200px', objectFit: 'cover' }} />
                                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Financial Literacy</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Training in banking, savings, and digital payments to ensure full control over their earnings.</p>
                            </div>
                            <div style={{ background: '#fdf6f0', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                                <img src="https://images.unsplash.com/photo-1542621334-a254cf47733d?w=400&h=300&fit=crop" alt="Leadership" style={{ width: '100%', borderRadius: '8px', marginBottom: '1.5rem' }} />
                                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Leadership</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Empowering women to lead community clusters and manage production cycles independently.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default WomenEmpowerment;
