import React, { useState } from "react";
import "./AboutCompany.css";
import { Check } from "lucide-react";
import Process from "../../../components/process/Process";

function Company() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="company-container">
        <div className="main-heading">
          <h2>About Us</h2>
        </div>
      </div>
      <div className="img-content-container">
        <div className="content-container">
          <h3>Driving IT Projects and Scaling Teams Seamlessly</h3>
          <p>
            We specialize in delivering top-tier IT solutions and providing
            expert staff augmentation to help businesses efficiently scale their
            teams and drive project success. Our focus is on enabling
            organizations to achieve their goals by seamlessly integrating
            skilled professionals and implementing innovative IT strategies.
            Whether it's a critical project deadline or long-term team
            expansion, we ensure flexibility, reliability, and excellence at
            every step
          </p>

          <div className="accordion">
            {[
              {
                question: "What services does your company provide?",
                answer:
                  "We offer IT consulting, project management, staff augmentation, and custom software development.",
              },
              {
                question: "How does staff augmentation work with your company?",
                answer:
                  "We provide skilled IT professionals to join your team, either temporarily or permanently, based on your project needs.",
              },
              {
                question: "Why choose your company for IT solutions?",
                answer:
                  "We have a proven track record of delivering high-quality solutions with a focus on innovation and customer satisfaction.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`accordion-item ${
                  openIndex === index ? "open" : ""
                }`}
              >
                <div
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>➤</span> {item.question}
                </div>
                {openIndex === index && (
                  <div className="accordion-content">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="image-container-company">
          <img className="image1" src="/team1.jpg" alt="team1" loading="lazy" />
          <img className="image2" src="/team2.jpg" alt="team2" loading="lazy" />
        </div>
      </div>
      {/* secound section of this page */}
      <div className="second-section">
        <div className="left-image-container">
          <img src="/team2.jpg" alt="Trust" loading="lazy" />
        </div>
        <div className="right-content-container">
          <h3>Works About</h3>
          <h2>
            Earned Trust By <span> Happy Clients</span>
          </h2>
          <p>
            <br />
            At InnoScales, we take pride in earning the trust of clients
            worldwide by delivering innovative IT solutions and exceptional
            staff augmentation services. Our commitment to quality, reliability,
            and tailored solutions helps businesses thrive in today’s
            competitive market.
          </p>
          <div className="stats-container">
            <div className="stat-box">
              <h2>
                <Check size={24} /> 100%
              </h2>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-box">
              <h2>
                <Check size={24} /> World Class Worker
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Process/>
    </>
  );
}

export default Company;
