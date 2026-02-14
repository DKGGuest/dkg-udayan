import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Udayan Public Empowerment Trust</title>
        <meta name="description" content="Get in touch with Udayan Public Empowerment Trust. We're here to answer your questions about artisan empowerment and traditional crafts." />
      </Helmet>

      <div className="contact-page">
        {/* Hero */}
        <section className="page-hero">
          <div className="container">
            <h1>Get in Touch</h1>
            <p>We'd love to hear from you. Whether you're an artisan, partner, or supporter, reach out to us.</p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="contact-content">
          <div className="container">
            <div className="contact-grid">
              {/* Contact Info */}
              <div className="contact-info">
                <h2>Contact Information</h2>
                <p className="info-description">
                  Feel free to reach out through any of these channels. We typically respond within 24-48 hours.
                </p>

                <div className="info-cards">
                  <div className="info-card">
                    <div className="info-icon">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4>Visit Us</h4>
                      <p>13 A, Vijay Mandal Enclave<br />(near IIT Delhi, Hauz Khas)<br />New Delhi - 110016</p>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="info-icon">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4>Call Us</h4>
                      <p>Tel: 2656 7557</p>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="info-icon">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4>Email Us</h4>
                      <p>information@udayantrust.org</p>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="info-icon">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4>Office Hours</h4>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56077.87902759326!2d77.15258991769473!3d28.543703905176084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce20b87af929b%3A0x74d72e8e3f7bb895!2sUdayan%20Trust!5e0!3m2!1sen!2sus!4v1770966506346!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Udayan Trust Location"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div className="form-wrapper">
                <h2>Send Us a Message</h2>
                <p className="form-description">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
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
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-content {
          padding: 5rem 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .contact-info h2,
        .form-wrapper h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--primary);
        }

        .info-description,
        .form-description {
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          line-height: 1.7;
        }

        .info-cards {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .info-card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: var(--shadow);
          display: flex;
          gap: 1.5rem;
          transition: var(--transition);
        }

        .info-card:hover {
          transform: translateX(5px);
          box-shadow: 0 8px 30px rgba(125, 90, 80, 0.15);
        }

        .info-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .info-card h4 {
          font-size: 1.1rem;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .info-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .map-container {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: var(--shadow);
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .page-hero {
            padding: 6rem 0 4rem;
          }

          .page-hero h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
