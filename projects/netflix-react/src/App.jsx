import { useEffect, useState } from "react";
import styles from "./app.module.scss";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import Carousel from "./components/Carousel/Carousel";

function App() {
  const [popularList, setPopularList] = useState([]);
  const [topRatedList, setTopRatedList] = useState([]);

  useEffect(() => {
    console.log("VITE_TMDB_API_KEY:", import.meta.env.VITE_TMDB_API_KEY);
    console.log("VITE_TMDB_API_URL:", import.meta.env.VITE_TMDB_API_URL);

    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_TMDB_API_URL}/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
        );
        console.log('Popular Movies Response:', response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPopularList(data.results.filter((_, index) => index < 8));
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    const fetchTopRatedMovies = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_TMDB_API_URL}/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
        );
        console.log('Top Rated Movies Response:', response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTopRatedList(data.results.filter((_, index) => index < 8));
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
      }
    };

    fetchPopularMovies();
    fetchTopRatedMovies();
  }, []);

  return (
    <main className={styles.mainContainer}>
      <HeroComponent
        imageUrl={popularList[0]?.backdrop_path}
        title={popularList[0]?.original_title}
      />
      <section className={styles.carouselSection}>
        <Carousel list={popularList} />
      </section>
      <section className={styles.carouselSection}>
        <Carousel list={topRatedList} />
      </section>
    </main>
  );
}

export default App;
