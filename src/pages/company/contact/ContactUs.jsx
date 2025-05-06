import React, { useState } from "react";
import "./contactUs.css";

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState("address");

  return (
    <>
      <div className="contact-main-container">
        <div className="contact-main-container-heading">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className="contact-container-wrapper">
        <div className="form-container">
          <h2>Get In Touch</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />

            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" placeholder="Your Phone" required />

            <label htmlFor="message">Description</label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows={5}
              required
            />

            <button type="submit">Get Free Consultation</button>
          </form>
        </div>

        <div className="tabs-container">
          <div className="tabs">
            <button
              className={activeTab === "address" ? "active" : ""}
              onClick={() => setActiveTab("address")}
            >
              Address
            </button>
            <button
              className={activeTab === "map" ? "active" : ""}
              onClick={() => setActiveTab("map")}
            >
              Google Map
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "address" ? (
              <div className="address-content">
                <h3>Our Location</h3>
                <p>Orangeboom street, Mariakerke, ghent Belgium </p>

                <h3>Send Us Mail</h3>
                <p>theitunited@gmail.com</p>

                <h3>Call Us</h3>
                <p>+91 7477075407</p>
              </div>
            ) : (
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps?q=Orangeboom+street,+Mariakerke,+Ghent,+Belgium&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
