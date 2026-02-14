import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = ({ formType = 'contact', productName = null, artisanName = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: productName ? `Enquiry for ${productName}` : (artisanName ? `Enquiry for ${artisanName}` : ''),
    message: '',
    skills: '',
    organization: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Get form configuration based on type
  const getFormConfig = () => {
    switch (formType) {
      case 'artisan':
        return {
          title: 'Register as Artisan',
          emailSubject: 'Artisan Registration Request',
          showSkills: true,
          submitText: 'Submit Registration'
        };
      case 'volunteer':
        return {
          title: 'Volunteer Application',
          emailSubject: 'Volunteer Application',
          showSkills: true,
          submitText: 'Submit Application'
        };
      case 'partner':
        return {
          title: 'Partnership Inquiry',
          emailSubject: 'Partnership Inquiry',
          showOrganization: true,
          submitText: 'Submit Inquiry'
        };
      case 'enquiry':
        return {
          title: 'Send Enquiry',
          emailSubject: 'Enquiry Request',
          showSkills: true,
          submitText: 'Send Inquiry'
        };
      default:
        return {
          title: 'Contact Form',
          emailSubject: 'Contact Form Submission',
          submitText: 'Send Message'
        };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const config = getFormConfig();
    const recipientEmail = 'information@udayantrust.org';

    // Build email body
    let emailBody = `Name: ${formData.name}%0D%0A`;
    emailBody += `Email: ${formData.email}%0D%0A`;
    emailBody += `Phone: ${formData.phone}%0D%0A`;

    if (config.showSkills && formData.skills) {
      emailBody += `Skills/Expertise: ${formData.skills}%0D%0A`;
    }

    if (config.showOrganization && formData.organization) {
      emailBody += `Organization: ${formData.organization}%0D%0A`;
    }

    if (formData.subject) {
      emailBody += `Subject: ${formData.subject}%0D%0A`;
    }

    if (productName) {
      emailBody += `Product: ${productName}%0D%0A`;
    }

    if (artisanName) {
      emailBody += `Artisan: ${artisanName}%0D%0A`;
    }

    emailBody += `%0D%0AMessage:%0D%0A${formData.message}`;

    // Create mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(config.emailSubject)}&body=${emailBody}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        skills: '',
        organization: ''
      });
    }, 1000);
  };

  const config = getFormConfig();

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject *</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="How can we help?"
          />
        </div>
      </div>

      {config.showSkills && (
        <div className="form-group">
          <label htmlFor="skills">Skills/Expertise *</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
            placeholder="e.g., Pottery, Weaving, Marketing, Teaching"
          />
        </div>
      )}

      {config.showOrganization && (
        <div className="form-group">
          <label htmlFor="organization">Organization/Company *</label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            required
            placeholder="Your organization name"
          />
        </div>
      )}

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          placeholder="Tell us more about your inquiry..."
        ></textarea>
      </div>

      <button type="submit" className="submit-btn">
        <Send size={18} />
        <span>{config.submitText}</span>
      </button>

      <style>{`
        .contact-form {
          background: white;
          padding: 2.5rem;
          border-radius: 8px;
          box-shadow: var(--shadow);
        }

        .success-message {
          background: #d4edda;
          color: #155724;
          padding: 1rem 1.5rem;
          border-radius: 4px;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border: 1px solid #c3e6cb;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-weight: 500;
          color: var(--text-main);
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group textarea {
          padding: 0.8rem 1rem;
          border: 1px solid var(--border-color);
          border-radius: 4px;
          font-size: 0.95rem;
          font-family: 'Inter', sans-serif;
          transition: var(--transition);
          background: var(--bg-warm);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(125, 90, 80, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          background: var(--primary);
          color: white;
          padding: 1rem 2rem;
          border-radius: 4px;
          font-weight: 600;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: center;
          width: 100%;
          margin-top: 1rem;
        }

        .submit-btn:hover:not(:disabled) {
          background: var(--primary-light);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(125, 90, 80, 0.2);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .contact-form {
            padding: 1.5rem;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </form>
  );
};

export default ContactForm;
