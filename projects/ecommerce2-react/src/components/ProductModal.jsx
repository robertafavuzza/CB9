import React from 'react';
import './styles/ProductModal.css';

const ProductModal = ({ product, onClose, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} className="modal-image" />
        <p>{product.description}</p>
        <p className="modal-price">${product.price}</p>
        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductModal;
