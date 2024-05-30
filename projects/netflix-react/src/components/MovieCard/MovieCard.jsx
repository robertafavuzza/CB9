/* eslint-disable react/prop-types */
import './MovieCard.css'
import { useState } from 'react'

const MovieCard = ({
  image,
  match,
  rating,
  releaseDate,
  isHD,
  categories = [],
}) => {
  const [isActive, setIsActive] = useState(false)

  const handleMouse = () => {
    setIsActive(!isActive)
  }

  return (
    <div
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
      className="movie-card"
    >
      <img src={image} alt={''} className="card-image" />
      {/* conditional rendering */}
      {isActive && (
        <div className="card-info">
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
      )}
    </div>
  )
}

export default MovieCard
