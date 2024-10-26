// src/components/Toast.js
import React from 'react';
import PropTypes from 'prop-types';

const Toast = ({ message, onClose }) => {
  return (
    <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-body">
        {message}
        <button type="button" className="btn-close" onClick={onClose}></button>
      </div>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Toast;
