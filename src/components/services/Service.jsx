import React from "react";
import "./service.css";

const Services = () => {
  const services = [
    {
      title: "Digital Marketing",
      description:
        " Boost your brand visibility with expert digital marketing strategies. From SEO to social media, we drive traffic, increase conversions, and grow your business.",
    },
    {
      title: "Cloud Service",
      description:
        "Maximize efficiency with our scalable cloud services. We provide secure, flexible cloud solutions that enhance performance, reduce costs, and support growth.",
    },
    {
      title: "App Development",
      description:
        " Build scalable, high-performance apps with our expert development services. We specialize in PWA, Android, Native, and iOS apps to boost user engagement. ",
    },
    {
      title: "Staff Augmentation",
      description:
        "  Scale your team with skilled professionals through our staff augmentation services. We provide top-tier talent to enhance your projects and drive success ",
    },
  ];

  return (
    <div className="services-container">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
