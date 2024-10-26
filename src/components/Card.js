// src/components/Card.js
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, content, footer }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  footer: PropTypes.node,
};

export default Card;
