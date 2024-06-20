import React, { useEffect, useState } from 'react';
import { fetchPhotos } from '../../../services/unsplash';
import styles from './Stories.module.scss';

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const getStories = async () => {
      const photos = await fetchPhotos(5);
      setStories(photos);
    };

    getStories();
  }, []);

  return (
    <div className={styles.stories}>
      {stories.map(story => (
        <div key={story.id} className={styles.story}>
          <img src={story.urls.thumb} alt={story.alt_description} />
        </div>
      ))}
    </div>
  );
};

export default Stories;
