import React from 'react';
import { motion } from 'framer-motion';
import './process.css'

const Process = () => {
  const steps = [
    { title: "Choose a Service", description: "Select from our expert IT solutions and staff augmentation to boost efficiency and growth." },
    { title: "Request a Meeting", description: "Schedule a meeting to discuss how our IT solutions and services can drive your business forward." },
    { title: "Receive Custom Plan", description: "Get a personalized plan tailored to your needs, ensuring optimal IT solutions and growth." },
    { title: "Let’s Make it Happen", description: "Partner with us to bring your vision to life through innovative IT solutions and expert teams." }
  ];

  return (
    <div className="process-container">
      <h2 className="heading">How We Work</h2>
      <div className="process-chain">
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            className="process-step"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="circle">{index + 1}</div>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Process;
