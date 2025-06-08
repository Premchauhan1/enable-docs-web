import React, { useState, useEffect } from "react";
import "./Services.css";
import { FaCheckCircle, FaFileAlt, FaCode, FaImage } from "react-icons/fa";

function Services() {
  const [activeService, setActiveService] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const serviceData = [
    {
      id: 0,
      title: "Document Remediation",
      subtitle: "Transform documents into accessible formats",
      description: "We remediate PDFs, Word, PowerPoint, Excel, and ePubs for accessibility, ensuring your documents are usable by everyone, including those who rely on assistive technologies. Our expert team follows all accessibility standards to deliver fully compliant documents.",
      imageSrc: require("./17973.jpg"),
      icon: <FaFileAlt />,
      features: [
        { text: "Screen reader-compatible tagging" },
        { text: "Proper heading structure implementation" },
        { text: "Accessible tables, forms, and lists" },
        { text: "Color contrast adjustments" },
        { text: "Assistive technology compatibility" },
        { text: "High-volume document processing" }
      ]
    },
    {
      id: 1,
      title: "Web Content Accessibility",
      subtitle: "Create inclusive digital experiences",
      description: "We help you build and maintain inclusive web experiences that comply with accessibility standards and regulations. Our comprehensive web accessibility services ensure your digital presence is accessible to users of all abilities.",
      imageSrc: require("./computer-screen-with-accessbility-word-graphic-popup.jpg"),
      icon: <FaCode />,
      features: [
        { text: "WCAG 2.1 compliance audits" },
        { text: "HTML/CSS/JS remediation" },
        { text: "ARIA roles and semantic structure" },
        { text: "Continuous accessibility monitoring" },
        { text: "Training for developers and content teams" },
        { text: "Responsive design accessibility" }
      ]
    },
    {
      id: 2,
      title: "Alt Text Writing",
      subtitle: "Precise image descriptions for accessibility",
      description: "We provide accurate and context-driven image descriptions that make your visual content accessible to everyone. Our specialized alt text services ensure your images convey the same information to all users, regardless of visual ability.",
      imageSrc: require("./8767132.jpg"),
      icon: <FaImage />,
      features: [
        { text: "Alt text for charts, infographics, and diagrams" },
        { text: "Domain-specific terminology expertise" },
        { text: "Multilingual alt text support" },
        { text: "Custom alt text style guides" },
        { text: "Large-scale alt text QA" },
        { text: "Integration with CMS workflows" }
      ]
    }
  ];
  
  const handleTabClick = (index) => {
    if (index === activeService || isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveService(index);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);
  };
  
  const activeServiceData = serviceData[activeService];

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h2 className="section-title" data-text="Our Services">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive solutions for digital accessibility compliance
        </p>
      </div>
      
      <div className="services-container">
        {/* Service tabs */}
        <div className="services-tabs">
          {serviceData.map((service, index) => (
            <div 
              key={service.id}
              className={`service-tab ${activeService === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {service.title}
            </div>
          ))}
        </div>
        
        {/* Service content */}
        <div className={`services-content ${isAnimating ? 'animating' : ''}`}>
          <div className="service-image-container">
            <div className="service-image">
              <img 
                src={activeServiceData.imageSrc} 
                alt={activeServiceData.title} 
              />
            </div>
          </div>
          
          <div className="service-details">
            <h3 className="service-title">{activeServiceData.title}</h3>
            <p className="service-subtitle">{activeServiceData.subtitle}</p>
            <p className="service-description">{activeServiceData.description}</p>
            
            <div className="service-features">
              <h4 className="feature-title">Key Features</h4>
              <ul className="feature-list">
                {activeServiceData.features.map((feature, idx) => (
                  <li className="feature-item" key={idx}>
                    <span className="feature-icon"><FaCheckCircle /></span>
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;