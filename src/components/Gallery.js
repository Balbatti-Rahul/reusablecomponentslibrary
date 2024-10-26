// src/components/Gallery.js
import React from 'react';
import PropTypes from 'prop-types';

const Gallery = ({ images }) => {
  return (
    <div className="row">
      {images.map((image, index) => (
        <div className="col-3 mb-3" key={index}>
          <img src={image} alt={`Gallery ${index}`} className="img-fluid" />
        </div>
      ))}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;
