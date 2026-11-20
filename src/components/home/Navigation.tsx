import React from 'react';

export function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-brand">
        <h1>little wonder</h1>
        <span className="star">✦</span>
      </div>
      <div className="nav-menu">
        <a href="#">Shop all</a>
        <a href="#">Shop by age⌄</a>
        <a href="#">Our favorites</a>
        <a href="#">Our story</a>
      </div>
      <div className="nav-tools">
        <button className="nav-icon" aria-label="Search">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.7" fill="none">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>
        <button className="nav-icon" aria-label="Account">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.7" fill="none">
            <circle cx="12" cy="8" r="4"></circle>
            <path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6"></path>
          </svg>
        </button>
        <button className="nav-icon cart-icon" aria-label="Shopping bag">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.7" fill="none">
            <path d="M6 7h12v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V7z"></path>
            <path d="M9 4h6v3H9z"></path>
          </svg>
          <span className="cart-count">(0)</span>
        </button>
      </div>
    </nav>
  );
}