import { useState, useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import MovieList from './components/MovieList/MovieList'
import { AUTH_KEY } from './constants'
import MovieDetail from './components/MovieDetail/MovieDetail'

const items = [
  {
    id: 0,
    text: 'Home',
    href: '/#',
  },
  {
    id: 1,
    text: 'TV Shows',
    href: '/#',
  },
  {
    id: 2,
    text: 'Movies',
    href: '/#',
  },
  {
    id: 3,
    text: 'New & Popular',
    href: '/#',
  },
]

const BASE_URL = 'https://api.themoviedb.org/3/movie/'

function App() {
  const [popularList, setPopularList] = useState([])
  const [topRatedList, setTopRatedList] = useState([])
  const [movieDetail, setMovieDetail] = useState(null)

  useEffect(() => {
    fetch(`${BASE_URL}popular`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AUTH_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPopularList(data.results))

    fetch(`${BASE_URL}top_rated`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AUTH_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTopRatedList(data.results))

    fetch(`${BASE_URL}429`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AUTH_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setMovieDetail(data))
  }, [])

  return (
    <div>
      {/* <Navigation items={items} />
      <MovieList movieList={popularList}>
        <h1>My Fav Movies</h1>
        <p>Things you like the most</p>
      </MovieList>
      <MovieList movieList={topRatedList}>
        <h3>Top Rated</h3>
      </MovieList> */}
      {movieDetail && (
        <MovieDetail
          cast={[
            { id: 0, name: 'Clint Eastwood' },
            { id: 1, name: 'Eli Wallach' },
            { id: 2, name: 'Lee Van Cleef' },
          ]}
          genres={movieDetail.genres}
          image={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`}
          match={movieDetail.vote_count}
          releaseDate={movieDetail.release_date}
          title={movieDetail.original_title}
          overview={movieDetail.overview}
        />
      )}
    </div>
  )
}

export default App
