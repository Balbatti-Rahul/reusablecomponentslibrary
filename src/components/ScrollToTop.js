// src/components/ScrollToTop.js
import React from 'react';

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button onClick={handleScrollToTop} className="btn btn-primary">
      Scroll to Top
    </button>
  );
};

export default ScrollToTop;
