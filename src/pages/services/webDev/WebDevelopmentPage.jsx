import React from "react";
import "./WebDevelopmentPage.css";

function WebDevelopmentPage() {
  return (
    <>
      <div className="webDevelopment-heading-container">
        <div className="main-heading">
          <h2>Web Development</h2>
        </div>
      </div>

      <div className="webDevelopment-content-container">
        
        <div className="webDevelopment-content-wrapper">
          {/* Left Side - Large Image with Text */}
          <div className="webDevelopment-left-side">
            <div className="top-image">
              <img
                src="/src/assets/webdevelopmentimage1.jpg"
                alt="Web Development"
                loading="lazy"
              />
            </div>

            {/* Main Text Content */}
            <div className="webDevelopment-text-section">
              <h3>Web Development Services by InnoScales</h3>
              <p>
                In today’s digital-first world, your website is often the first
                impression your business makes. At InnoScales, we specialize in
                creating custom, scalable, and user-friendly websites that
                reflect your brand’s identity and drive measurable results. From
                startups to enterprises, we craft tailored web solutions that
                cater to your specific business goals.
              </p>
              <br></br>
              <p>
                Our team of expert developers and designers combines technical
                excellence with creative innovation to deliver websites that are
                not only visually stunning but also optimized for performance,
                functionality, and scalability. Whether you need a robust
                e-commerce platform, a corporate website, or a feature-rich web
                application, InnoScales has you covered.
              </p>

              <h4>Why Choose InnoScales</h4>
              <ul>
                <li>Expert Web Development Solutions for Business Growth</li>
                <li>Building Robust, Scalable, and Custom Websites</li>
                <li>Tailored to Meet the Unique Needs of Your Business</li>
                <li>Empowering Your Online Presence for Long-Term Success</li>
              </ul>

              <h4>Technologies We Use</h4>
              <p>
                At InnoScales, we work with a wide range of cutting-edge
                technologies and frameworks to deliver high-performing web
                solutions. Our expertise includes:
              </p>

              <ul>
                <li>
                  <strong>Front-End Development:</strong> React, Angular,
                  Vue.js, HTML5, CSS3, JavaScript
                </li>
                <li>
                  <strong>Back-End Development:</strong> Python (Django, Flask),
                  Node.js, PHP (Laravel, CodeIgniter), Ruby on Rails
                </li>
                <li>
                  <strong>E-Commerce Platforms:</strong> Shopify, WooCommerce,
                  Magento, BigCommerce
                </li>
                <li>
                  <strong>CMS Platforms:</strong> WordPress, Joomla, Drupal
                </li>
                <li>
                  <strong>Databases:</strong> MySQL, MongoDB, PostgreSQL,
                  Firebase
                </li>
                <li>
                  <strong>Cloud Services:</strong> AWS, Microsoft Azure, Google
                  Cloud
                </li>
              </ul>

              <h4>Our Web Development Services</h4>

              <ul>
                <li>
                  <strong>Custom Website Design and Development:</strong>
                  We build websites from scratch to match your brand’s unique
                  identity and requirements, ensuring seamless functionality and
                  an exceptional user experience.
                </li>
                <li>
                  <strong>E-Commerce Development:</strong>
                  Boost your online sales with a secure, scalable, and
                  user-friendly e-commerce platform tailored to your business.
                </li>
                <li>
                  <strong>Web Application Development:</strong>
                  Develop powerful web applications with advanced features,
                  built for scalability and performance.
                </li>
                <li>
                  <strong>Content Management Systems (CMS):</strong>
                  Simplify your website management with intuitive CMS platforms
                  like WordPress, Drupal, and Joomla.
                </li>
                <li>
                  <strong>Responsive Web Design:</strong>
                  Ensure your website looks and works perfectly on all devices,
                  including desktops, tablets, and smartphones.
                </li>
                <li>
                  <strong>SEO-Optimized Development:</strong>
                  Every website we create is optimized for search engines to
                  increase visibility and drive traffic to your site.
                </li>
                <li>
                  <strong>Maintenance and Support:</strong>
                  Keep your website updated, secure, and running smoothly with
                  our ongoing maintenance and support services.
                </li>
              </ul>

              <h4>
                Benefits of Partnering with InnoScales for Web Development
              </h4>

              <ul>
                <li>
                  <strong>Enhanced User Experience:</strong> Our websites are
                  designed for smooth navigation and a superior user experience.
                </li>
                <li>
                  <strong>Improved Online Presence:</strong> Drive traffic and
                  engage users with a site optimized for SEO and performance.
                </li>
                <li>
                  <strong>Increased Conversions:</strong> We build websites
                  designed to turn visitors into loyal customers.
                </li>
                <li>
                  <strong>Ongoing Support:</strong> Our team is always available
                  to ensure your website runs efficiently.
                </li>
              </ul>

              <h4>Industries We Serve</h4>

              <p>
                We provide web development services across a variety of
                industries, including:
              </p>

              <ul>
                <li>E-Commerce and Retail</li>
                <li>Finance and Banking</li>
                <li>Healthcare and Medical</li>
                <li>Education and E-Learning</li>
                <li>Technology and Startups</li>
                <li>Real Estate and Construction</li>
              </ul>

              <h4>Our Web Development Process</h4>

              <ol>
                <li>
                  <strong>Requirement Gathering:</strong> We begin by
                  understanding your business goals, audience, and technical
                  requirements.
                </li>
                <li>
                  <strong>Planning and Strategy:</strong> Our team creates a
                  comprehensive project plan, including timelines and
                  deliverables.
                </li>
                <li>
                  <strong>Design and Development:</strong> We design a visually
                  appealing layout and bring it to life with cutting-edge
                  development practices.
                </li>
                <li>
                  <strong>Testing and Optimization:</strong> Rigorous testing
                  ensures your website is fast, secure, and bug-free.
                </li>
                <li>
                  <strong>Launch and Support:</strong> Once your site is live,
                  we provide ongoing support and updates to ensure its success.
                </li>
              </ol>

              <div className="webDevelopment-cta-section">
                <h3>Let’s Build Your Dream Website</h3>
                <p>
                  Ready to create a powerful online presence? Contact InnoScales
                  today to discuss your web development needs. Our team is
                  dedicated to delivering exceptional websites that align with
                  your vision and drive your business forward.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Two Images */}
          <div className="webDevelopment-right-side">
            <div className="webDevelopment-right-top-image">
              <img
                src="/src/assets/webdevelopmentimage2.jpg"
                alt="Image 1"
                loading="lazy"
              />
            </div>
            <div className="webDevelopment-right-bottom-image">
              <img
                src="/src/assets/webdevelopmentimage3.jpg"
                alt="Image 2"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

    
    </>
  );
}

export default WebDevelopmentPage;
