import React from 'react';
import './WhyEnableDocs.css';

function WhyEnableDocs() {
  const reasons = [
    {
      title: "Dedicated Experts",
      description: "Decades of experience with accessibility standards",
      icon: "🧑‍💼" // You can replace this with an actual icon or image
    },
    {
      title: "Scalable Solutions",
      description: "Custom workflows for organizations of all sizes",
      icon: "📈" // You can replace this with an actual icon or image
    },
    {
      title: "Compliance-Focused",
      description: "WCAG, ADA, Section 508, and PDF/UA",
      icon: "✓" // You can replace this with an actual icon or image
    },
    {
      title: "AI + Human",
      description: "The best of automation and expert review",
      icon: "🤖" // You can replace this with an actual icon or image
    }
  ];

  return (
    <section className="why-enabledocs-section" id="why">
      <div className="container">
        <h2 className="section-title" data-text="Why EnableDocs?">Why EnableDocs?</h2>
        <p className="section-subtitle">What makes us the right partner for your accessibility needs</p>
        <div className="reasons-container">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon"><span>{reason.icon}</span></div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyEnableDocs;