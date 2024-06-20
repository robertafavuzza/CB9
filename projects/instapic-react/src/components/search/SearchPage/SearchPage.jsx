import React, { useState } from 'react';
import { fetchPhotos } from '../../../services/unsplash';
import { useNavigate } from 'react-router-dom';
import styles from './SearchPage.module.scss';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    const photos = await fetchPhotos(query);
    setResults(photos);
  };

  return (
    <div className={styles.searchPage}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Cerca..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className={styles.results}>
        {results.map(result => (
          <div
            key={result.id}
            className={styles.imageWrapper}
            onClick={() => navigate(`/image/${result.id}`)}
          >
            <img src={result.urls.small} alt={result.alt_description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
