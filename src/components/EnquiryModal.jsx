import React from 'react';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';

const EnquiryModal = ({ isOpen, onClose, title, formType, productName, artisanName }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="modal-header">
          <h2>{title}</h2>
          <p>Fill out the form below and we'll get back to you soon.</p>
        </div>
        <div className="modal-body">
          <ContactForm
            formType={formType}
            productName={productName}
            artisanName={artisanName}
          />
        </div>
      </div>

      <style>{`
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
          from { opacity: 0; }
          to { opacity: 1; }
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
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
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

        .modal-body :global(.contact-form) {
          box-shadow: none;
          border-radius: 0;
          padding: 2rem 2.5rem;
        }

        @media (max-width: 992px) {
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
    </div>
  );
};

export default EnquiryModal;
