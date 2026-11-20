import React from 'react';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="star-sm">✦</span>
          <span>SMALL TOYS. BIG POSSIBILITIES.</span>
        </div>
        <h2 className="hero-heading">A little play.<br />A world of<br />wonder.</h2>
        <p className="hero-description">
          Thoughtfully chosen toys for curious minds,<br />
          big imaginations, and the joy of being little.
        </p>
        <div className="hero-actions">
          <button className="btn-primary">
            Let's play
            <span className="arrow">→</span>
          </button>
          <a href="#" className="link-secondary">Find their next favorite →</a>
        </div>
        <div className="hero-social">
          <div className="stars">★★★★★</div>
          <p>Loved by 2,000+ happy little humans</p>
        </div>
      </div>
      <div className="hero-image">
        <img src="/figma-assets/77f8798847329d67b54d3d7816ae0b66cdbd6216.jpg" alt="Teddy bear and wooden toys" />
        <div className="badge">Made for "one more time!"</div>
      </div>
    </section>
  );
}