import React from 'react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>little wonder ✦</h3>
          <p>For the wonderfully curious.</p>
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h4>THE TOY BOX</h4>
            <p>All toys     Shop by age     Gift cards</p>
          </div>
          <div className="footer-section">
            <h4>HERE TO HELP</h4>
            <p>Contact us     Shipping & returns     FAQs</p>
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-legal">
        <p>© 2026 Little Wonder. Made for play.</p>
        <p>Instagram     Pinterest</p>
        <p>Privacy policy     Terms     United States · USD $</p>
      </div>
    </footer>
  );
}