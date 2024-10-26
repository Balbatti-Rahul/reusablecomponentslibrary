// src/components/ImageUpload.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ImageUpload = ({ onImageChange }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      onImageChange(file);
    }
  };

  return (
    <div className="mb-3">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Preview" className="img-thumbnail mt-2" />}
    </div>
  );
};

ImageUpload.propTypes = {
  onImageChange: PropTypes.func.isRequired,
};

export default ImageUpload;
