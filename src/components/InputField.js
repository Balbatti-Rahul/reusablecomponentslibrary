// src/components/InputField.js
import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ label, type, value, onChange }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input type={type} className="form-control" value={value} onChange={onChange} />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  type: 'text',
};

export default InputField;
