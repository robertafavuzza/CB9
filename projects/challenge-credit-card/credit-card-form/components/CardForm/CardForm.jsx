import { useState } from 'react';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import styles from './cardform.module.scss';

const CardForm = ({ onUpdate }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState('');

  const handleInputChange = (setter, key) => (e) => {
    const value = e.target.value;

    if (key === 'cardNumber' && !/^\d*$/.test(value)) {
      return; // Blocca l'input se non è un numero
    }

    if (key === 'cardName' && /[^a-zA-Z\s]/.test(value)) {
      return; // Blocca l'input se non è una lettera o uno spazio
    }

    if ((key === 'expiryMonth' || key === 'expiryYear' || key === 'cvc') && !/^\d*$/.test(value)) {
      return; // Blocca l'input se non è un numero
    }

    setter(value);
    onUpdate((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleConfirmClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmPurchase = () => {
    setThankYouMessage('Grazie per il tuo acquisto! Ora sei povero.');
    setShowModal(false);
  };

  return (
    <div>
      <form className={styles.cardForm}>
        <div className={styles.formGroup}>
          <label>CARDHOLDER NAME</label>
          <input
            type="text"
            value={cardName}
            onChange={handleInputChange(setCardName, 'cardName')}
          />
        </div>
        <div className={styles.formGroup}>
          <label>CARD NUMBER</label>
          <input
            type="text"
            value={cardNumber}
            onChange={handleInputChange(setCardNumber, 'cardNumber')}
            maxLength="16"
          />
        </div>
        <div className={styles.formGroup}>
          <label>EXP. DATE</label>
          <div className={styles.expiryDate}>
            <input
              type="text"
              value={expiryMonth}
              onChange={handleInputChange(setExpiryMonth, 'expiryMonth')}
              maxLength="2"
              placeholder="MM"
            />
            <input
              type="text"
              value={expiryYear}
              onChange={handleInputChange(setExpiryYear, 'expiryYear')}
              maxLength="2"
              placeholder="YY"
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>CVC</label>
          <input
            type="text"
            value={cvc}
            onChange={handleInputChange(setCvc, 'cvc')}
            maxLength="3"
          />
        </div>
        <button type="button" className={styles.confirmButton} onClick={handleConfirmClick}>CONFIRM</button>
      </form>
      {thankYouMessage && <p className={styles.thankYouMessage}>{thankYouMessage}</p>}
      <ConfirmModal show={showModal} onClose={handleCloseModal} onConfirm={handleConfirmPurchase} />
    </div>
  );
};

export default CardForm;
