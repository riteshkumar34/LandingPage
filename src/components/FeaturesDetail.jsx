import React from 'react'

function FeaturesDetail() {
  return (
    <section className="features-detail">
      <div className="features-detail-orb">
        <img src="/Qyuro Svg 1.svg" alt="Qyuro Orb" className="orb-image" />
      </div>
      <div className="features-detail-content">
        <div className="feature-item feature-item-left">
          <h3 className="feature-item-title">Conversational Context:</h3>
          <p className="feature-item-text">Don't start over. Qyoro remembers what you just said. Ask follow-up questions, refine your query, or dive deeper into a specific point just like you would with a human expert.</p>
        </div>
        <div className="feature-item feature-item-right">
          <h3 className="feature-item-title">Real-Time Grounding:</h3>
          <p className="feature-item-text">Standard chatbots are stuck in the past. Qyoro lives in the now. Whether it's today's stock prices or news from five minutes ago, our AI has access to the live web.</p>
        </div>
        <div className="feature-item feature-item-left">
          <h3 className="feature-item-title">Zero Hallucinations:</h3>
          <p className="feature-item-text">Creativity is great for poetry, not for facts. We engineered Qyoro to prioritize accuracy. Every claim is cited, linked, and verifiable.</p>
        </div>
      </div>
    </section>
  )
}

export default FeaturesDetail
