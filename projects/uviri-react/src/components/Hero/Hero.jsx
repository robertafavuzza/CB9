import React from 'react';
import styles from './Hero.module.scss';

const Hero = ({ movie }) => {
  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{movie.title}</h1>
        <p className={styles.heroOverview}>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Hero;
