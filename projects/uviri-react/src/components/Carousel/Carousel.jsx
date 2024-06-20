import React, { useRef } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./Carousel.module.scss";

const Carousel = ({ movies, onMovieClick }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.carousel}>
      <button className={`${styles.carouselButton} ${styles.left}`} onClick={scrollLeft}>
        <FaArrowLeft className={styles.icon} />
      </button>
      <div className={styles.carouselInner} ref={carouselRef}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
        ))}
      </div>
      <button className={`${styles.carouselButton} ${styles.right}`} onClick={scrollRight}>
        <FaArrowRight className={styles.icon} />
      </button>
    </div>
  );
};

export default Carousel;
