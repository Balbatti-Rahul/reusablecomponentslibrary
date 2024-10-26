// src/components/Chip.js
import React from 'react';
import PropTypes from 'prop-types';

const Chip = ({ label, onRemove }) => {
  return (
    <div className="badge bg-primary me-2">
      {label} <button className="btn-close btn-close-white" onClick={onRemove}></button>
    </div>
  );
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Chip;
