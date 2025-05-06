import React from "react";
import "./WhyChooseUs.css";
import Process from "../../../components/process/Process";

function WhyChooseUs() {
  return (
    <>
      <div className="why-choose-us-container">
        <div className="why-choose-us-heading">
          <h2>Why Choose Us</h2>
        </div>
      </div>

      <div className="why-choose-us-content-wrapper">
        <div className="why-choose-us-content">
          <h3>Trusted IT Expertise</h3>
          <p>
            Providing Top IT Solutions and Skilled Talent for Business Growth
          </p>
        </div>
        <div className="why-choose-us-description">
          <p>
            We offer a range of IT solutions and staff augmentation services to
            help businesses scale efficiently. Our expert team delivers
            cutting-edge software solutions tailored to meet your unique needs,
            while our flexible staff augmentation services provide you with
            top-tier talent to support both short-term projects and long-term
            team expansion. With a focus on innovation and reliability, we
            ensure that your business has the right resources and technologies
            to drive success and stay ahead in today’s competitive market.
          </p>
        </div>
      </div>

      {/* Second section */}
      <div className="why-choose-us-section">
        <div className="why-choose-us-image">
          <img src="/team2.jpg" alt="Trust" loading="lazy" />
        </div>
        <div className="why-choose-us-text">
          <div className="why-choose-us-mission">
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower businesses by providing innovative IT
              solutions and expert staff augmentation services. We aim to
              deliver customized, high-quality services that help companies
              scale efficiently, meet project goals, and drive long-term
              success.
            </p>
          </div>
          <div className="why-choose-us-vision">
            <h2>Our Vision</h2>
            <p>
              Our vision is to be a leading provider of IT solutions and staff
              augmentation services, helping businesses achieve sustainable
              growth and success. We strive to empower organizations with the
              right technology and skilled professionals to drive innovation.
            </p>
          </div>
        </div>
      </div>

    </>
  );
}

export default WhyChooseUs;
