import React from 'react';
import './styles/Product.css';

const Product = ({ product, onProductClick }) => {
  return (
    <div className="product" onClick={() => onProductClick(product)}>
      <img src={product.image} alt={product.title} className="product--image" />
      <h3 className="product--title">{product.title}</h3>
      <p className="product--price">${product.price}</p>
    </div>
  );
};

export default Product;
