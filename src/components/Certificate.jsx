import React from 'react';

const Certificate = ({ image, url, altText }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="certificate-item"
    >
      <img
        src={image}
        alt={altText}
      />
    </a>
  );
};

export default Certificate;
