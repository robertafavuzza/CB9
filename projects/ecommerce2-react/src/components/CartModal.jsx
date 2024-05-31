import React from 'react';
import './styles/CartModal.css';

const CartModal = ({ cart, onClose, onRemoveFromCart, onPurchase }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Your Cart</h2>
        <div className="cart-items">
          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <img src={product.image} alt={product.title} className="cart-item-image" />
              <div>
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>
              <button className="remove-button" onClick={() => onRemoveFromCart(product)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
        <button className="purchase-button" onClick={onPurchase}>Purchase</button>
      </div>
    </div>
  );
};

export default CartModal;
