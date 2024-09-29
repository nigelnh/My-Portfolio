import React from 'react';

const Lightbox = ({ image, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="max-w-3xl max-h-full p-4">
        <img
          src={image}
          alt="Lightbox"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Lightbox;