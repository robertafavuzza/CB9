import React from 'react';
import styles from './PopularMovie.module.scss';

const PopularMovie = ({ movie }) => (
  <div className={styles.popularMovie}>
    <img src={movie.poster_path} alt={movie.title} />
    <div className={styles.popularMovieContent}>
      <h3>{movie.title}</h3>
    </div>
  </div>
);

export default PopularMovie;
