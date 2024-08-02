import styles from './confirmmodal.module.scss';

const ConfirmModal = ({ show, onClose, onConfirm }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <p>Vuoi procedere con il tuo acquisto?</p>
        <div className={styles.buttonGroup}>
          <button onClick={onConfirm} className={styles.confirmButton}>Si</button>
          <button onClick={onClose} className={styles.cancelButton}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
