import React from 'react';
import './styles/NavigationLink.css';

const NavigationLink = ({ category, onCategoryChange }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onCategoryChange(category);
  };

  return (
    <div className="navigation--link">
      <a href="#" onClick={handleClick}>{category}</a>
    </div>
  );
};

export default NavigationLink;
