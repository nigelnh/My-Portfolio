import React from 'react';

const ShootingStars = () => {
  return (
    <div className="shooting-stars">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="shooting-star" style={{
          '--delay': `${Math.random() * 5}s`,
          '--top': `${Math.random() * 100}%`,
          '--left': `${Math.random() * 100}%`,
        }}></div>
      ))}
    </div>
  );
};

export default ShootingStars;