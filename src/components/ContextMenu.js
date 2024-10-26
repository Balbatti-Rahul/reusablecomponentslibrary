// src/components/ContextMenu.js
import React from 'react';
import PropTypes from 'prop-types';

const ContextMenu = ({ items, position, visible }) => {
  return (
    <div style={{
      position: 'absolute',
      top: position.y,
      left: position.x,
      display: visible ? 'block' : 'none',
      border: '1px solid #ccc',
      backgroundColor: '#fff',
      zIndex: 1000,
    }}>
      <ul className="list-unstyled">
        {items.map((item, index) => (
          <li key={index} onClick={item.onClick}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
};

ContextMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  })).isRequired,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  visible: PropTypes.bool.isRequired,
};

export default ContextMenu;
