import React, { useEffect, useState } from 'react';
import Stories from './Stories/Stories';
import Post from './Post/Post';
import { fetchPhotos } from '../../services/unsplash';
import styles from './Homepage.module.scss';

const Homepage = ({ onLike }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const photos = await fetchPhotos(5);
      setPosts(photos);
    };

    getPosts();
  }, []);

  return (
    <div className={styles.homepage}>
      <Stories />
      <div className={styles.posts}>
        {posts.map(post => (
          <Post key={post.id} post={post} onLike={onLike} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
