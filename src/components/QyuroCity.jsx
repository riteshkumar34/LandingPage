import React, { useEffect, useRef } from "react";

function QyuroCity() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Force mute and play logic
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.warn("Video auto-play failed. Browser might be blocking it:", error);
      });
    }
  }, []);

  return (
    <section className="qyuro-city">
      {/* VIDEO BACKGROUND */}
      <div className="qyuro-city-video-wrap">
        <video
          ref={videoRef}
          className="qyuro-city-video"
          loop
          muted
          playsInline
          autoPlay
          preload="auto"
        >
          <source src="/quorocity.mp4" type="video/mp4" />
        </video>
      </div>

      {/* DARK OVERLAY */}
      <div className="qyuro-city-overlay"></div>

      {/* CONTENT */}
      <div className="qyuro-city-content">
        <p className="qyuro-city-headline">Explore your</p>
        <h2 className="qyuro-city-title">
          <span className="qyuro-city-title-inner">Qyuro.city</span>
        </h2>
        <p className="qyuro-city-sub">
          Get news & articles based on your conversations or pick any topic from anywhere!
        </p>
        <p className="qyuro-city-desc">
          Qyuro.city is designed to fuel & fulfill your curiosity.
        </p>
      </div>
    </section>
  );
}

export default QyuroCity;