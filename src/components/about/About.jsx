import React from "react";
import "./about.css";
import image from "../../../public/assets/webdevelopmentimage1.jpg";
import { BrainCircuit, Cog, Server, Users } from "lucide-react";

function About() {
  return (
    <>
      <div className="about-container">
        <div>
          <img src={image} alt="image" loading="lazy"/>
        </div>
        <div>
          <h1>
            Supporting IT Companies in Scaling Engineering Teams Seamlessly
          </h1>
          <p>
            At TheItUnited, we specialize in empowering IT companies to
            seamlessly scale their engineering teams through tailored solutions.
            Whether you're tackling complex IT projects or need expert staff
            augmentation, we deliver the right talent and technology to meet
            your goals. Our flexible engagement models ensure that you can scale
            quickly without compromising on quality or efficiency. From software
            development to cloud integration, our skilled professionals are
            equipped to handle diverse IT needs, enabling your business to
            innovate and grow. With a proven track record in IT project delivery
            and staff augmentation, we provide the expertise and scalability you
            need to stay ahead in a competitive market.
          </p>
          <b>Key Highlights:</b>
          <p>
            Dedicated IT project management for timely delivery. Access to a
            global talent pool for staff augmentation. Scalable solutions
            tailored to your engineering capacity needs. Expertise in
            cutting-edge technologies and development frameworks. Let us help
            you overcome resource constraints and achieve your IT objectives
            effortlessly. Partner with us for scalable engineering solutions
            that drive success.
          </p>
        </div>
      </div>
      <div className="about-container">
        <div className="left-side-content">
          <h1>Why Chouse Us?</h1>
          <h1>
            Empowering Your Business with <br></br>IT Innovation and Workforce
            Flexibility
          </h1>
          <p>
            Transform your business with innovative IT solutions and scalable
            workforce options. Our expertise combines customized software
            development with flexible staff augmentation, empowering you to meet
            project demands, accelerate growth, and stay ahead in the
            ever-evolving tech industry. Partner with us for seamless innovation
            and team scalability.
          </p>
        </div>
        <div className="card-container">
          {/* Left Column with Offset */}
          <div className="card-column-left">
            <div className="card">
              <div className="card-content">
                <Cog size={38} color="#4A90E2" className="card-icon" />
                <h4>Tailored Tech</h4>
                <p>
                  Streamline your business with tailored, innovative software
                  solutions designed to meet your unique needs.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
              <Server size={38} color="#4A90E2" className="card-icon" />
                <h4>Cloud Solutions</h4>
                <p>
                  Enhance productivity with scalable and secure cloud services,
                  enabling seamless business operations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Higher) */}
          <div className="card-column-right">
            <div className="card">
              <div className="card-content">
              <BrainCircuit size={38} color="#4A90E2" className="card-icon" />              
                <h4>AI Solutions</h4>
                <p>
                  Harness the power of AI to optimize processes, improve
                  efficiency, and drive business growth.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
              <Users size={38} color="#4A90E2" className="card-icon" />
                <h4>Staff Augmentation</h4>
                <p>
                  Expand your team with skilled IT professionals, ensuring
                  successful project execution and scalability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
