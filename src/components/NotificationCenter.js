// src/components/NotificationCenter.js
import React from 'react';
import PropTypes from 'prop-types';

const NotificationCenter = ({ notifications, onRemove }) => {
  return (
    <div className="mb-3">
      <h4>Notifications</h4>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>
            {notification}
            <button onClick={() => onRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

NotificationCenter.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default NotificationCenter;
