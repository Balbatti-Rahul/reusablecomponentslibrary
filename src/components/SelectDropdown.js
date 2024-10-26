// src/components/SelectDropdown.js
import React from 'react';
import PropTypes from 'prop-types';

const SelectDropdown = ({ options, onChange, label }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select className="form-select" onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default SelectDropdown;
