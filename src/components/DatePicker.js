// src/components/DatePicker.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DatePicker = ({ label, selectedDate, onChange }) => {
  const [date, setDate] = useState(selectedDate);

  const handleDateChange = (e) => {
    setDate(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type="date"
        className="form-control"
        value={date}
        onChange={handleDateChange}
      />
    </div>
  );
};

DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  selectedDate: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

DatePicker.defaultProps = {
  selectedDate: '',
};

export default DatePicker;
