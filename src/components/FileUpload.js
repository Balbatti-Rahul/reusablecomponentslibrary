// src/components/FileUpload.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FileUpload = ({ onFileChange }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    onFileChange(selectedFiles);
  };

  return (
    <div className="mb-3">
      <input type="file" multiple onChange={handleFileChange} />
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

FileUpload.propTypes = {
  onFileChange: PropTypes.func.isRequired,
};

export default FileUpload;
