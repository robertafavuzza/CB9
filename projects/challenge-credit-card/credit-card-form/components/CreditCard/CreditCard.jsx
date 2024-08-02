import styles from './creditcard.module.scss';

const CreditCard = ({ cardDetails }) => {
  const { cardNumber, cardName, expiryMonth, expiryYear, cvc } = cardDetails;

  return (
    <div className={styles.creditCardContainer}>
      <div className={styles.creditCardFront}>
        <img src="/logo.svg" alt="logo" className={styles.logo} />
        <div className={styles.cardNumber}>{cardNumber.padEnd(16, '0').replace(/(\d{4})(?=\d)/g, '$1 ')}</div>
        <div className={styles.cardName}>{cardName.toUpperCase() || 'JOHN DOE'}</div>
        <div className={styles.expiryDate}>{`${expiryMonth.padStart(2, '0')}/${expiryYear.padStart(2, '0')}`}</div>
      </div>
      <div className={styles.creditCardBack}>
        <div className={styles.blackStripe}></div>
        <img src="/logo.svg" alt="logo" className={styles.logoBack} />
        <div className={styles.signatureBox}>
          <span className={styles.signatureText}></span>
          <div className={styles.cvc}>{cvc.padEnd(3, '0')}</div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
