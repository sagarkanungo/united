import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { ChevronDown, ChevronUp } from "lucide-react";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };
  return (
    <header className="header-home">
          <div >
            <img src="/public/IT UNITED.png" alt="logo" className="logo-home" loading="lazy"/>
          </div>

          <nav className="nav-links-home">
            <Link to="/">HOME</Link>

            {/* About Dropdown */}
            <div
              className="dropdown"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
                             <div className="dropdown-link-container">

              <Link  className="dropdown-link">
                COMPANY{" "}
                {activeDropdown ? (
                  <ChevronUp className="arrow-icon" size={16} />
                ) : (
                  <ChevronDown className="arrow-icon" size={16} />
                )}
              </Link>
              </div>

              {activeDropdown === "about" && (
                <div className="dropdown-menu">
                  <Link to="/company/about">About Company</Link>
                  <Link to="/company/why-choose-us">Why Choose Us</Link>
                  <Link to="/company/contact-us">Get In Touch</Link>
                  <Link to="/company/FAQ">FAQ</Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="dropdown"
              onMouseEnter={() => handleMouseEnter("service")}
              onMouseLeave={handleMouseLeave}
            >
               <div className="dropdown-link-container">
              <Link  className="dropdown-link">
                SERVICES    {activeDropdown ? (
                  <ChevronUp className="arrow-icon" size={16} />
                ) : (
                  <ChevronDown className="arrow-icon" size={16} />
                )}
              </Link>
              </div>

              {activeDropdown === "service" && (
                <div className="dropdown-menu">
                  <Link to="/services/webDev">Web Development</Link>
                  <Link to="/services/mobileapp">Mobile Development</Link>
                  <Link to="/services/cloudservice">Cloud Solutions</Link>
                  <Link to="/services/staff">Staff Augmentation</Link>
                </div>
              )}
            </div>

            <Link to="/contact">CONTACT US</Link>
          </nav>

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
