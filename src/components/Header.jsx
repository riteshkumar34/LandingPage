import React from 'react'

function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <a href="/" className="logo">
        <img src="/logo.svg" alt="" className="logo-icon" width="32" height="32" />
        <span className="logo-text">QYURO</span>
      </a>

      {/* Navigation */}
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="https://qyuro.city" target="_blank" rel="noopener noreferrer">Qyuro.city</a>
        <a href="#support">Support</a>
        <a href="#faqs">FAQs</a>
      </nav>

      {/* CTA – 172×80 pill, glassy */}
      <a href="#" className="btn-cta" aria-label="Download">Download</a>
    </header>
  )
}

export default Header
