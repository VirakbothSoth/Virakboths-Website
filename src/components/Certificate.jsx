import React from 'react';

const Certificate = ({ image, url, altText }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="certificate-i"
    >
      <img
        src={image}
        alt={altText}
        className="certificate-item"
      />
    </a>
  );
};

export default Certificate;
