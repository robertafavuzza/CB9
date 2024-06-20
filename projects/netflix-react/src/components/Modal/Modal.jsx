/* eslint-disable react/prop-types */
import styles from './modal.module.scss';
import { IoMdCloseCircle } from 'react-icons/io';

const Modal = ({ handleCloseClick, movie }) => {
  const { title, overview, backdrop_path } = movie;

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalWindow}>
        <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" />
        <div className={styles.modalInfo}>
          <h2>{title}</h2>
          <p className={styles.overview}>{overview}</p>
        </div>
        <div className={styles.closeButtonContainer}>
          <IoMdCloseCircle
            className={styles.iconClose}
            onClick={handleCloseClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
