// src/components/StickyNav.js
import React from 'react';

const StickyNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <a className="navbar-brand" href="#">Sticky Nav</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#">About</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default StickyNav;
