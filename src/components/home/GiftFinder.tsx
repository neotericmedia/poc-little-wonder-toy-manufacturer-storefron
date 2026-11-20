import React from 'react';

export function GiftFinder() {
  return (
    <section className="gift-finder">
      <div className="gift-content">
        <span className="section-label">A LITTLE HELP FROM US</span>
        <h2>Big smiles,<br />beautifully wrapped.</h2>
        <p>For birthdays, just-because days, and every little milestone.</p>
        <button className="btn-primary">
          Find the perfect gift
          <span className="arrow">→</span>
        </button>
      </div>
      <div className="gift-image">
        <img src="/figma-assets/1af4cda885ec830f3d096eec206cec5b4055ed0e.jpg" alt="Gifts made for little wonders" />
      </div>
    </section>
  );
}