import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
    const { id } = useParams();
    return (
        <>
            <Helmet>
                <title>Blog Post - Udayan Trust</title>
            </Helmet>
            <div className="container" style={{ marginTop: '8rem', padding: '3rem 0' }}>
                <section>
                    <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>Blog Post Detail</h1>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                        Full blog post content, images, and related articles will be displayed here.
                    </p>
                </section>
            </div>
        </>
    );
};

export default BlogDetail;
