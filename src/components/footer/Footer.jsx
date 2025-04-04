import React from "react";
import { MapPin, Mail, Phone } from "lucide-react"; // Lucide icons
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h3 className="footer-title">Company Name</h3>
        <p>© 2025 Innoscales. All Rights Reserved.</p>
      </div>

      <div className="footer-section">
        <h3 className="footer-title">Company</h3>
        <ul>
          <li>About Us</li>
          <li>Help & FAQs</li>
          <li>Our Services</li>
          <li>Our Blogs</li>
          <li>Why Choose Us</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3 className="footer-title">Solutions</h3>
        <ul>
          <li>Web Development</li>
          <li>App Development</li>
          <li>Staff Augmentation</li>
          <li>Cloud Services</li>
          <li>Digital Marketing</li>
        </ul>
      </div>

      <div className="footer-section contact-info">
        <h3 className="footer-title">Contact Info</h3>
        <div className="contact-item">
          <MapPin size={18} /> 
          <span>Shiv Shakti Enclave, Sector 81, Noida 201304</span>
        </div>
        <div className="contact-item">
          <Mail size={18} /> 
          <span>info@innoscales.com</span>
        </div>
        <div className="contact-item">
          <Mail size={18} /> 
          <span>hr@innoscales.com</span>
        </div>
        <div className="contact-item">
          <Phone size={18} /> 
          <span>+91 8447893777</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
