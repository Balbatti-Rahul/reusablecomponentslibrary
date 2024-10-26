// src/components/Checkbox.js
import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="form-check">
      <input type="checkbox" className="form-check-input" checked={checked} onChange={onChange} />
      <label className="form-check-label">{label}</label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
