// src/components/SearchBar.js
import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ placeholder, value, onChange }) => {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
