import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LikedPage.module.scss';

const LikedPage = ({ likedPosts }) => {
  const navigate = useNavigate();

  if (likedPosts.length === 0) {
    return <p>Non ci sono post.</p>;
  }

  return (
    <div className={styles.likedPage}>
      {likedPosts.map(post => (
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

export default LikedPage;
