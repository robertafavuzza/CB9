import MovieTags from '../MovieTags/MovieTags'

/* eslint-disable react/prop-types */
const MovieDetail = ({
  cast,
  genres,
  image,
  match,
  rating,
  releaseDate,
  title,
  overview,
  categories = [],
}) => {
  return (
    <div>
      <img src={image} alt={''} className="movie-image" />
      <h1>{title}</h1>
      <div className="movie-info">
        <section className="info">
          <p>{match}</p>
          <p>{rating}</p>
          <p>{releaseDate}</p>
        </section>
        <section className="categories">
          {categories.map((category, index) => (
            <p key={index}>{category}</p>
          ))}
        </section>
      </div>
      <div className="movie-overview">{overview}</div>
      <MovieTags list={cast} title="Cast">
        <li>more</li>
      </MovieTags>
      <MovieTags list={genres} title="Genres" />
    </div>
  )
}

export default MovieDetail
