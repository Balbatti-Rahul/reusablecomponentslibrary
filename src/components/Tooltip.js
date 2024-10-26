// src/components/Tooltip.js
import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ message }) => {
  return (
    <div className="tooltip" role="tooltip">
      {message}
    </div>
  );
};

Tooltip.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Tooltip;
