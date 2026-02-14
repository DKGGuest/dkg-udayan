import React from 'react';
import { Helmet } from 'react-helmet-async';

const MarketAccess = () => {
    return (
        <>
            <Helmet>
                <title>Platform & Market Access - Udayan Trust</title>
                <meta name="description" content="Providing market access and digital platforms for rural artisans." />
            </Helmet>
            <div className="container" style={{ marginTop: '8rem', padding: '3rem 0' }}>
                <section>
                    <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>Platform & Market Access</h1>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        One of the biggest challenges faced by rural artisans is accessing markets for their products. Udayan Trust bridges this gap by providing digital platforms, connecting artisans with ethical buyers, and facilitating fair trade practices.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                        Our market access initiatives include online marketplace presence, participation in craft fairs and exhibitions, B2B connections with retailers and designers, export opportunities, and direct customer connections through our inquiry-based system that ensures fair compensation for artisans.
                    </p>
                </section>
            </div>
        </>
    );
};

export default MarketAccess;
