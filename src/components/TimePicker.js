// src/components/TimePicker.js
import React from 'react';
import PropTypes from 'prop-types';

const TimePicker = ({ label, value, onChange }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type="time"
        className="form-control"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

TimePicker.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TimePicker;
