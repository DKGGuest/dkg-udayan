import React from 'react';
import { Helmet } from 'react-helmet-async';

const Partnerships = () => {
    return (
        <>
            <Helmet>
                <title>Partnerships & Collaboration - Udayan Trust</title>
                <meta name="description" content="Partner with Udayan Trust to create impact through CSR, collaborations, and B2B opportunities." />
            </Helmet>
            <div className="container" style={{ marginTop: '8rem', padding: '3rem 0' }}>
                <section>
                    <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>Partnerships & Collaboration</h1>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                        We welcome partnerships with corporates, NGOs, academic institutions, and ethical businesses to create greater impact in artisan empowerment and craft preservation.
                    </p>
                </section>
            </div>
        </>
    );
};

export default Partnerships;
