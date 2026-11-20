import React, { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <span className="section-label">GOOD THINGS COME IN LITTLE EMAILS</span>
        <h2>A little joy in your inbox.</h2>
        <p>Get 10% off your first order, plus new toys and playful ideas.</p>
      </div>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary">
          Count me in
          <span className="arrow">→</span>
        </button>
      </form>
      <p className="newsletter-fine-print">Only the good stuff. Unsubscribe whenever.</p>
    </section>
  );
}