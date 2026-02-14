import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Blog & Stories - Udayan Trust</title>
                <meta name="description" content="Articles, stories, and resources about traditional crafts and artisan empowerment." />
            </Helmet>
            <div className="blog-page">
                <section className="page-hero" style={{
                    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&h=600&fit=crop) center/cover',
                    padding: '10rem 0 6rem',
                    textAlign: 'center',
                    color: 'white',
                    marginBottom: '4rem'
                }}>
                    <div className="container">
                        <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1rem' }}>Blog & Stories</h1>
                        <p style={{ fontSize: '1.4rem', opacity: '0.9', maxWidth: '800px', margin: '0 auto' }}>Stories of artisans, traditional crafts, and cultural heritage</p>
                    </div>
                </section>

                <div className="container" style={{ marginBottom: '6rem' }}>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '4rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto 4rem' }}>
                        Explore articles, artisan stories, craft techniques, and educational resources about traditional Indian arts and crafts.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem' }}>
                        <article style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)', transition: 'transform 0.3s ease' }}>
                            <img src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=350&fit=crop" alt="Madhubani Art Story" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>The Art of Madhubani Painting</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1rem' }}>
                                    Discover the rich history and intricate techniques of Madhubani art, passed down through generations of women artisans in Bihar.
                                </p>
                                <span style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Read More →</span>
                            </div>
                        </article>

                        <article style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)', transition: 'transform 0.3s ease' }}>
                            <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=350&fit=crop" alt="Textile Weaving Story" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>Handloom Weaving Traditions</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1rem' }}>
                                    Explore the timeless craft of handloom weaving and how modern artisans are keeping this ancient tradition alive.
                                </p>
                                <span style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Read More →</span>
                            </div>
                        </article>

                        <article style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)', transition: 'transform 0.3s ease' }}>
                            <img src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&h=350&fit=crop" alt="Pottery Story" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>Terracotta Pottery Heritage</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1rem' }}>
                                    Learn about the ancient art of terracotta pottery and the skilled artisans who shape clay into beautiful forms.
                                </p>
                                <span style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Read More →</span>
                            </div>
                        </article>

                        <article style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)', transition: 'transform 0.3s ease' }}>
                            <img src="https://images.unsplash.com/photo-1590004953392-5aba2e72269a?w=600&h=350&fit=crop" alt="Women Empowerment Story" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>Empowering Women Through Craft</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1rem' }}>
                                    Stories of transformation as women artisans gain economic independence and social recognition through their skills.
                                </p>
                                <span style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Read More →</span>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
