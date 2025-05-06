import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { ChevronDown, ChevronUp } from "lucide-react";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header-home">
      <div className="logo-wrapper">
        <Link to="/">
          <img
            src="/IT UNITED.png"
            alt="logo"
            className="logo-home"
            loading="lazy"
          />
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
      </div>

      {/* Desktop Nav */}
      <nav className="nav-links-home desktop-nav">
        <Link to="/">HOME</Link>
        <div className="dropdown">
          <div className="dropdown-link-container">
            <Link className="dropdown-link">
              COMPANY {activeDropdown === "about" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </Link>
          </div>
          <div className="dropdown-menu">
            <Link to="/company/about">About Company</Link>
            <Link to="/company/why-choose-us">Why Choose Us</Link>
            <Link to="/company/contact-us">Get In Touch</Link>
            <Link to="/company/FAQ">FAQ</Link>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropdown-link-container">
            <Link className="dropdown-link">
              SERVICES {activeDropdown === "service" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </Link>
          </div>
          <div className="dropdown-menu">
            <Link to="/services/webDev">Web Development</Link>
            <Link to="/services/mobileapp">Mobile Development</Link>
            <Link to="/services/cloudservice">Cloud Solutions</Link>
            <Link to="/services/staff">Staff Augmentation</Link>
          </div>
        </div>

        <Link to="/contact">CONTACT US</Link>
      </nav>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={toggleMobileMenu}>HOME</Link>
          <Link to="/company/about" onClick={toggleMobileMenu}>About Company</Link>
          <Link to="/company/why-choose-us" onClick={toggleMobileMenu}>Why Choose Us</Link>
          <Link to="/company/contact-us" onClick={toggleMobileMenu}>Get In Touch</Link>
          <Link to="/company/FAQ" onClick={toggleMobileMenu}>FAQ</Link>
          <Link to="/services/webDev" onClick={toggleMobileMenu}>Web Development</Link>
          <Link to="/services/mobileapp" onClick={toggleMobileMenu}>Mobile Development</Link>
          <Link to="/services/cloudservice" onClick={toggleMobileMenu}>Cloud Solutions</Link>
          <Link to="/services/staff" onClick={toggleMobileMenu}>Staff Augmentation</Link>
          <Link to="/contact" onClick={toggleMobileMenu}>CONTACT US</Link>
        </div>
      )}

      <div className="contact-sec-home">
        <ul>
          <li className="contact-home">
            <FontAwesomeIcon icon={faPhone} className="phone-icon" />
            <p>
              Contact us today! <br />
              <a href="tel:+917477075407">+91 7477075407</a>
            </p>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
