import React from 'react'

function Communicate() {
  return (
    <section className="communicate">
      <div className="communicate-inner">
        <h2 className="communicate-title">Communicate, but not just with the words</h2>
        <p className="communicate-sub">Talk the way you want! Upload files, send text, or use voice. Qyuro connects everything into one clear, continuous conversation.</p>
        
        {/* Search Bar */}
        <div className="communicate-search">
          <img src="/Frame 292.png" alt="Search Bar" className="search-bar-image" />
        </div>

        {/* Feature Cards */}
        <div className="communicate-cards">
          <div className="communicate-card">
            <h3 className="communicate-card-title">Chat with the text:</h3>
            <p className="communicate-card-text">The default mode for broad, real-time knowledge.</p>
          </div>
          <div className="communicate-card">
            <h3 className="communicate-card-title">Chat with files:</h3>
            <p className="communicate-card-text">Not just the texts, use images and files to present a query.</p>
          </div>
          <div className="communicate-card">
            <h3 className="communicate-card-title">Chat with Voice:</h3>
            <p className="communicate-card-text">Extract answers directly from Voice memos.</p>
          </div>
          <div className="communicate-card">
            <h3 className="communicate-card-title">Talk to Qyuro:</h3>
            <p className="communicate-card-text">Tap into endless discussions with handsfree mode.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Communicate
