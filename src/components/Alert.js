// src/components/Alert.js
import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message, variant }) => {
  return <div className={`alert alert-${variant}`} role="alert">{message}</div>;
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

Alert.defaultProps = {
  variant: 'info',
};

export default Alert;
