import React from "react";
import styles from "./MovieCard.module.scss";

const MovieCard = ({ movie, onClick }) => {
  return (
    <div className={styles.movieCard} onClick={() => onClick(movie)}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className={styles.movieDetails}>
        <div className={styles.movieTitle}>{movie.title}</div>
        <div className={styles.movieRating}>
          ⭐ {movie.vote_average} / 10
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
