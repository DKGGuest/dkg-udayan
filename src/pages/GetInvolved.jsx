import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Users, Briefcase, X } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const GetInvolved = () => {
  const [activeForm, setActiveForm] = useState(null);

  const openForm = (formType) => {
    setActiveForm(formType);
  };

  const closeForm = () => {
    setActiveForm(null);
  };

  return (
    <>
      <Helmet>
        <title>Get Involved - Udayan Public Empowerment Trust</title>
        <meta name="description" content="Join us in empowering artisans. Register as an artisan, volunteer, or partner with us." />
      </Helmet>

      <div className="get-involved-page">
        <section className="page-hero">
          <div className="container">
            <h1>Get Involved</h1>
            <p>Join our mission to empower artisans and preserve traditional crafts</p>
          </div>
        </section>

        <section className="involvement-options">
          <div className="container">
            <div className="options-grid">
              <div className="option-card">
                <div className="option-icon">
                  <Users size={40} />
                </div>
                <h3>Register as Artisan</h3>
                <p>Are you a skilled artisan? Join our community and access training, resources, and market opportunities.</p>
                <button className="btn-primary" onClick={() => openForm('artisan')}>Register Now</button>
              </div>

              <div className="option-card">
                <div className="option-icon">
                  <Heart size={40} />
                </div>
                <h3>Volunteer</h3>
                <p>Share your skills and time to support artisan training, workshops, and community development programs.</p>
                <button className="btn-primary" onClick={() => openForm('volunteer')}>Become a Volunteer</button>
              </div>

              <div className="option-card">
                <div className="option-icon">
                  <Briefcase size={40} />
                </div>
                <h3>Partner with Us</h3>
                <p>Collaborate with us as a corporate partner, NGO, or academic institution to create greater impact.</p>
                <button className="btn-primary" onClick={() => openForm('partner')}>Explore Partnerships</button>
              </div>
            </div>
          </div>
        </section>

        {/* Modal for forms */}
        {activeForm && (
          <div className="modal-overlay" onClick={closeForm}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeForm}>
                <X size={24} />
              </button>
              <div className="modal-header">
                <h2>
                  {activeForm === 'artisan' && 'Register as Artisan'}
                  {activeForm === 'volunteer' && 'Volunteer Application'}
                  {activeForm === 'partner' && 'Partnership Inquiry'}
                </h2>
                <p>Fill out the form below and we'll get back to you soon.</p>
              </div>
              <ContactForm formType={activeForm} />
            </div>
          </div>
        )}

        <section className="contact-section">
          <div className="container">
            <div className="contact-wrapper">
              <h2>Have Questions?</h2>
              <p>Reach out to us and we'll help you find the best way to get involved.</p>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .page-hero {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          padding: 8rem 0 5rem;
          text-align: center;
          color: white;
          margin-top: 5rem;
        }

        .page-hero h1 {
          font-size: 3rem;
          color: white;
          margin-bottom: 1rem;
        }

        .page-hero p {
          font-size: 1.2rem;
          opacity: 0.95;
        }

        .involvement-options {
          padding: 5rem 0;
        }

        .options-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .option-card {
          background: white;
          padding: 3rem 2rem;
          border-radius: 8px;
          box-shadow: var(--shadow);
          text-align: center;
          transition: var(--transition);
        }

        .option-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(125, 90, 80, 0.2);
        }

        .option-icon {
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin: 0 auto 2rem;
        }

        .option-card h3 {
          font-size: 1.6rem;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .option-card p {
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .contact-section {
          padding: 5rem 0;
          background: var(--bg-warm);
        }

        .contact-wrapper {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-wrapper h2 {
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .contact-wrapper p {
          color: var(--text-muted);
          font-size: 1.1rem;
          margin-bottom: 3rem;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          max-width: 700px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .modal-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: var(--bg-warm);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          z-index: 10;
        }

        .modal-close:hover {
          background: var(--primary);
          color: white;
          transform: rotate(90deg);
        }

        .modal-header {
          padding: 2.5rem 2.5rem 1rem;
          border-bottom: 1px solid var(--border-color);
        }

        .modal-header h2 {
          font-size: 2rem;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .modal-header p {
          color: var(--text-muted);
          margin: 0;
        }

        .modal-content :global(.contact-form) {
          box-shadow: none;
          border-radius: 0;
        }

        @media (max-width: 992px) {
          .options-grid {
            grid-template-columns: 1fr;
          }

          .modal-overlay {
            padding: 1rem;
          }

          .modal-content {
            max-height: 95vh;
          }

          .modal-header {
            padding: 2rem 1.5rem 1rem;
          }

          .modal-header h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default GetInvolved;
