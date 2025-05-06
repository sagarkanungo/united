import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { 
      question: 'What services does theitunited offer?', 
      answer: 'theitunited offers IT consulting, software development, cloud solutions, and digital transformation services tailored to your business needs.' 
    },
    { 
      question: 'How can I get a free consultation?', 
      answer: 'You can get a free consultation by filling out the contact form on our website or reaching out via phone or email.' 
    },
    { 
      question: 'What industries do you work with?', 
      answer: 'We work with a variety of industries, including healthcare, finance, retail, and technology, offering customized solutions.' 
    },
    { 
      question: 'How can I track the progress of my project?', 
      answer: 'We provide regular updates and reports through our project management portal, keeping you informed every step of the way.' 
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="faq-main-container">
        <div className="faq-main-heading">
          <h2>Why Choose Us</h2>
        </div>
      </div>
      <div className="faq-container">
      {/* Left Section */}
      <div className="faq-left">
        <h1>FAQ</h1>
        <p>Most common answers and questions</p>
        <button>View All</button>
      </div>

      {/* Right Section */}
      <div className="faq-right">
        {faqs.map((item, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              <h3>{item.question}</h3>
              <span>{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
    
    </>

  );
};

export default FAQ;
