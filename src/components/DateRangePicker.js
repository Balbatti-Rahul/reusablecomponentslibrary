// src/components/DateRangePicker.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DateRangePicker = ({ label, onChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartChange = (e) => {
    setStartDate(e.target.value);
    onChange(e.target.value, endDate);
  };

  const handleEndChange = (e) => {
    setEndDate(e.target.value);
    onChange(startDate, e.target.value);
  };

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <div>
        <input
          type="date"
          className="form-control"
          value={startDate}
          onChange={handleStartChange}
        />
        <input
          type="date"
          className="form-control"
          value={endDate}
          onChange={handleEndChange}
        />
      </div>
    </div>
  );
};

DateRangePicker.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DateRangePicker;
