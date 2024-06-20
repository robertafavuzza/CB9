import React, { useEffect, useState } from 'react';
import { fetchPhotos } from '../../../services/unsplash';
import { useNavigate } from 'react-router-dom';
import styles from './PostGallery.module.scss';

const PostGallery = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      const photos = await fetchPhotos(9);
      setPosts(photos);
    };

    getPosts();
  }, []);

  return (
    <div className={styles.postGallery}>
      {posts.map(post => (
        <div
          key={post.id}
          className={styles.imageWrapper}
          onClick={() => navigate(`/image/${post.id}`)}
        >
          <img src={post.urls.small} alt={post.alt_description} />
        </div>
      ))}
    </div>
  );
};

export default PostGallery;
