import React from 'react';
import { Helmet } from 'react-helmet-async';

const News = () => {
    return (
        <>
            <Helmet>
                <title>News & Announcements - Udayan Trust</title>
                <meta name="description" content="Latest news, events, and announcements from Udayan Public Empowerment Trust." />
            </Helmet>
            <div className="container" style={{ marginTop: '8rem', padding: '3rem 0' }}>
                <section>
                    <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>News & Announcements</h1>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                        Stay updated with the latest news, events, community updates, and press mentions about Udayan Trust and our artisan community.
                    </p>
                </section>
            </div>
        </>
    );
};

export default News;
