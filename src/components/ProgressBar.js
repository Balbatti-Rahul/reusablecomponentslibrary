// src/components/ProgressBar.js
import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ value, max }) => {
  return (
    <div className="progress">
      <div className="progress-bar" role="progressbar" style={{ width: `${(value / max) * 100}%` }} aria-valuenow={value} aria-valuemin="0" aria-valuemax={max}>
        {value}%
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default ProgressBar;
