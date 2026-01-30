import React from 'react'

function Hero() {
  return (
    <main className="hero">
      <span className="hero-tag">Talk. Reflect. Understand.</span>

      <img
        src="/Qyuro talking orb.png"
        alt="Qyuro Talking Orb"
        className="hero-orb"
        width="527"
        height="404"
      />

      <h1 className="hero-title">
        The AI chatbot that doesn't guess.
      </h1>

      <p className="hero-sub">
        Experience the power of a conversational assistant grounded in real-time truth.
      </p>

      <div className="hero-badges">
        <a href="#" className="hero-badge">
          <img
            src="/Google Play.png"
            alt="Get it on Google Play"
            className="hero-badge-img"
          />
        </a>

        <a href="#" className="hero-badge">
          <img
            src="/Apple Store.png"
            alt="Download on the App Store"
            className="hero-badge-img"
          />
        </a>
      </div>
    </main>
  )
}

export default Hero
