// src/components/Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, variant = 'primary', size = 'md' }) => {
  return (
    <button className={`btn btn-${variant} btn-${size}`} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
  size: PropTypes.string,
};

export default Button;