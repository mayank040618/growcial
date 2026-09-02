import React from 'react';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <span className="text-gradient">Grow</span>cial
            </a>
            <p className="footer-desc">
              Building next-generation digital communities with data-driven social media strategies.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><MessageCircle size={20} /></a>
              <a href="#" className="social-icon"><Mail size={20} /></a>
              <a href="#" className="social-icon"><Phone size={20} /></a>
              <a href="#" className="social-icon"><MapPin size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">Services</h4>
            <ul>
              <li><a href="#">Social Strategy</a></li>
              <li><a href="#">Content Creation</a></li>
              <li><a href="#">Community Management</a></li>
              <li><a href="#">Paid Advertising</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Growcial Agency. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
