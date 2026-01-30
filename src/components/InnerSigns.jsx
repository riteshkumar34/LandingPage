import React, { useState } from 'react';

const signsData = [
  {
    id: 1,
    title: "Inner signs",
    desc: "Takes care of yourself. Aligns your health, mind and stars, because that's what an assistant should take care of.",
    cardImg: "/Frame 268.png", 
  },
  {
    id: 2,
    title: "Health Check-ins",
    desc: "Share your symptoms and get helpful, easy-to-understand guidance. Designed to inform, not replace, professional medical advice.",
    cardImg: "/Frame 287.png", 
  },
  {
    id: 3,
    title: "Today's Alignments",
    desc: "Explore planetary alignments and cosmic movements shaping the moment. Insights to help you reflect and align.",
    cardImg: "/Frame 288.png", 
  },
  {
    id: 4,
    title: "Palm Reading",
    desc: "Discover the stories your hands quietly hold. Interpretations based on traditional palmistry for reflection.",
    cardImg: "/Frame 289.png", 
  }
];

function InnerSigns() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="inner-signs">
      <div className="inner-signs-inner">
        
        {/* Left Side: Icons + Text */}
        <div className="inner-signs-left">
          
          {/* Vertical Navigation Bar */}
          <div className="inner-signs-nav">
            {signsData.map((_, index) => (
              <div 
                key={index}
                className={`nav-icon-circle ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {/* Yahan icons placeholder hain, aap SVG ya image daal sakte ho */}
                <div className="dot"></div>
              </div>
            ))}
          </div>

          {/* Text Area */}
          <div className="inner-signs-text">
            <h2 className="inner-signs-title">{signsData[activeTab].title}</h2>
            <p className="inner-signs-desc">{signsData[activeTab].desc}</p>
          </div>
        </div>

        {/* Right Side: Image Card */}
        <div className="inner-signs-right">
          <div className="card-container">
            <img 
              key={activeTab} // Unique key helps trigger animation
              src={signsData[activeTab].cardImg} 
              alt="Feature Card" 
              className="inner-signs-card-img fade-up-animation" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default InnerSigns;