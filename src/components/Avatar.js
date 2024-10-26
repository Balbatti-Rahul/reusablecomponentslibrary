// src/components/Avatar.js
import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ src, alt, size = 50 }) => {
  return <img src={src} alt={alt} style={{ width: size, height: size, borderRadius: '50%' }} />;
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default Avatar;
