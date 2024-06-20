import React from "react";
import styles from "./MovieDetailsModal.module.scss";
import { FaTimes } from "react-icons/fa";

const MovieDetailsModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        <div className={styles.modalHeader}>{movie.title}</div>
        <div className={styles.modalBody}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
          <div className={styles.movieDetails}>
            <div className={styles.detailLabel}>Genre:</div> {movie.genre_ids.join(", ")}
          </div>
          <div className={styles.movieDetails}>
            <div className={styles.detailLabel}>Description:</div> {movie.overview}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
