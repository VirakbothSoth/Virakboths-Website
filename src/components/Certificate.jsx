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
        className="w-auto h-auto max-w-sm shadow-lg hover:scale-105 duration-300"
      />
    </a>
  );
};

export default Certificate;
