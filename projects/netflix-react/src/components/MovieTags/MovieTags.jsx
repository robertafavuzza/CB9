/* eslint-disable react/prop-types */
const MovieTags = ({ children, list, title }) => {
  return (
    <section className="movie-tags">
      <span>{title}</span>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
        {children}
      </ul>
    </section>
  )
}

export default MovieTags
