// src/components/ListGroup.js
import React from 'react';
import PropTypes from 'prop-types';

const ListGroup = ({ items, onSelect }) => {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li className="list-group-item" key={index} onClick={() => onSelect(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

ListGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ListGroup;

