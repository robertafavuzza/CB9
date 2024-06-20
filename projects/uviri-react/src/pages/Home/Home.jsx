import React, { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Carousel from "../../components/Carousel/Carousel";
import MovieDetailsModal from "../../components/MovieDetailsModal/MovieDetailsModal";
import styles from "./Home.module.scss";

const Home = () => {
  const [popularMovie, setPopularMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_TMDB_API_URL}/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
      );
      const data = await response.json();
      setPopularMovie(data.results[0]);
      setMovies(data.results);
    };

    fetchPopularMovies();
  }, []);

  return (
    <div className={styles.home}>
      {popularMovie && <Hero movie={popularMovie} />}
      <Carousel movies={movies} onMovieClick={setSelectedMovie} />
      {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default Home;
