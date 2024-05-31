import React from 'react';
import './styles/PurchaseModal.css';

const PurchaseModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Congratulazioni!</h2>
        <p>Sei troppo povero per poter fare shopping.</p>
        <button className="back-button" onClick={onClose}>Torna a piangere</button>
      </div>
    </div>
  );
};

export default PurchaseModal;
