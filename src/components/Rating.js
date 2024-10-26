// src/components/Rating.js
import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, onChange }) => {
  return (
    <div className="mb-3">
      {[...Array(5)].map((_, index) => (
        <span key={index} onClick={() => onChange(index + 1)}>
          {index < value ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Rating;
