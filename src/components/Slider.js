// src/components/Slider.js
import React from 'react';
import PropTypes from 'prop-types';

const Slider = ({ min, max, value, onChange }) => {
  return (
    <div className="mb-3">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="form-range"
      />
      <div>Value: {value}</div>
    </div>
  );
};

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Slider;
