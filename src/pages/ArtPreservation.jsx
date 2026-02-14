import React from 'react';
import { Helmet } from 'react-helmet-async';

const ArtPreservation = () => {
    return (
        <>
            <Helmet>
                <title>Art & Craft Preservation - Udayan Trust</title>
                <meta name="description" content="Preserving traditional Indian arts and crafts for future generations." />
            </Helmet>
            <div className="container" style={{ marginTop: '8rem', padding: '3rem 0' }}>
                <section>
                    <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>Preservation of Art & Craft</h1>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        India's traditional arts and crafts represent centuries of cultural heritage, passed down through generations. At Udayan Trust, we are committed to documenting, preserving, and promoting these invaluable art forms.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                        Our preservation efforts include creating digital archives of traditional techniques, documenting regional art forms, conducting research on historical practices, organizing cultural exhibitions, and creating educational resources for younger generations to learn and appreciate traditional crafts.
                    </p>
                </section>
            </div>
        </>
    );
};

export default ArtPreservation;
