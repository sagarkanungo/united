import React from 'react';
import './StaffAuggmentation..css';

const StaffAugmentation = () => {
  return (
    <div className="staff-augmentation-container">

      {/* ======= TOP SECTION ======= */}
      <div className="staff-bottom">
      <div className="staff-zigzag-image">
        <img src="/team2.jpg" alt="Staff Augmentation" />
        </div>
        <div className="staff-content">
          <h2>Staff Augmentation Services by InnoScales</h2>
          <p>
            InnoScales offers expert staff augmentation services to help businesses scale their workforce with highly skilled professionals for both short-term and long-term needs. Whether you’re dealing with a sudden increase in workload, need specialized talent for a particular project, or want to expand your team quickly, we provide flexible staffing solutions tailored to your company’s requirements.
          </p>
          {/* <p>
            Our staff augmentation model allows you to tap into a global talent pool, ensuring access to top-tier experts without the complexities of recruitment or the overhead costs of hiring full-time employees. We take pride in delivering quality professionals who integrate seamlessly with your existing teams to drive project success and business growth.
          </p> */}
        </div>

      
      </div>


     

      {/* ======= BOTTOM SECTION ======= */}
      <div className="staff-top">
       

        <div className="staff-card">
          <h2>Our Services</h2>
          <div className="services-links">
            <a href="#">Web Development</a>
            <a href="#">App Development</a>
            <a href="#">Cloud Service</a>
            <a href="#">Staff Augmentation</a>
            <a href="#">Digital Marketing</a>
          </div>
        </div>
        <div className="staff-image">
          <img src="/team2.jpg" alt="Staff Augmentation" />
        </div>
      </div>

    </div>
  );
};

export default StaffAugmentation;
