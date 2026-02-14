import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="container">
                <div className="not-found-content">
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>The page you're looking for doesn't exist or has been moved.</p>
                    <Link to="/" className="btn-primary">
                        <Home size={20} />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </div>

            <style>{`
        .not-found {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-warm);
        }

        .not-found-content {
          text-align: center;
          padding: 4rem 2rem;
        }

        .not-found-content h1 {
          font-size: 8rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .not-found-content h2 {
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .not-found-content p {
          font-size: 1.2rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
      `}</style>
        </div>
    );
};

export default NotFound;
