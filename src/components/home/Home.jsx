import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import image from "../../assets/cyberjet-banner-pic-2.png";
import About from "../about/About";
import Process from "../process/Process";
import Services from "../services/Service";
import Technologies from "../technologies/Technologies";
import Footer from "../footer/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";

function Home() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <div className="home-container">
     

        <div className="content-container-home">
          <div className="text-content">
            <h1>
              Empowering <br /> IT Projects
            </h1>
            <p>
              We help businesses transform ideas into reality with cutting-edge
              technology solutions.
            </p>
          </div>
          <div className="image-container">
            <img src={image} alt="Empowering IT Projects" />
          </div>
        </div>
      </div>

      <About />
      <Process />
      <Services />
      <Technologies />
    </>
  );
}

export default Home;
