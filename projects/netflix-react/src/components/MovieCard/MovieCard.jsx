/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './moviecard.module.scss';
import Modal from '../Modal/Modal';

const MovieCard = ({ title = 'Movie Title', imgUrl, refProp, movie }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCardClick = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <div ref={refProp} className={styles.movieCard} onClick={handleCardClick}>
        <img
          src={`https://image.tmdb.org/t/p/w500${imgUrl}`}
          alt="movie-card-img"
        />
        <p>{title}</p>
      </div>
      {isModalVisible && (
        <Modal
          handleCloseClick={() => {
            setIsModalVisible(false);
          }}
          movie={movie}
        />
      )}
    </>
  );
};

export default MovieCard;
