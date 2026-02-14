import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span className="logo-text">UDAYAN</span>
              <span className="logo-sub">Public Empowerment Trust</span>
            </Link>
            <p className="footer-desc">
              Empowering rural artisans and preserving traditional Indian crafts through sustainable community initiatives.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><Facebook size={20} /></a>
              <a href="#" className="social-icon"><Instagram size={20} /></a>
              <a href="#" className="social-icon"><Twitter size={20} /></a>
              <a href="#" className="social-icon"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/artisans">Artisans Directory</Link></li>
              <li><Link to="/marketplace">Marketplace</Link></li>
              <li><Link to="/workshops">Workshops</Link></li>
              <li><Link to="/blog">Blog & Stories</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Get Involved</h4>
            <ul>
              <li><Link to="/get-involved">Register as Artisan</Link></li>
              <li><Link to="/get-involved">Volunteer</Link></li>
              <li><Link to="/partnerships">Partner with Us</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <MapPin size={18} className="icon" />
              <span>13 A, Vijay Mandal Enclave, (near IIT Delhi, Hauz Khas) New Delhi - 110016</span>
            </div>
            <div className="contact-item">
              <Phone size={18} className="icon" />
              <span>Tel: 2656 7557</span>
            </div>
            <div className="contact-item">
              <Mail size={18} className="icon" />
              <span>information@udayantrust.org</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Udayan Public Empowerment Trust. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
