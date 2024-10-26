// src/components/Icon.js
import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ name, size = 24 }) => {
  return <i className={`bi-${name}`} style={{ fontSize: size }}></i>;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default Icon;
