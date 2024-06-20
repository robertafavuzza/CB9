import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosHeartEmpty, IoIosHeart, IoIosChatbubbles } from 'react-icons/io';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import styles from './Post.module.scss';

const Post = ({ post, onLike }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    onLike(post);
  };

  const toggleSave = () => {
    setSaved(!saved);
  };

  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <img src={post.user.profile_image.medium} alt={post.user.username} />
        <div>
          <p className={styles.username}>{post.user.username}</p>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <Link to={`/image/${post.id}`}>
          <img src={post.urls.regular} alt={post.alt_description} />
        </Link>
      </div>
      <div className={styles.footer}>
        <div className={styles.icons}>
          <div onClick={toggleLike} className={styles.icon}>
            {liked ? <IoIosHeart color="red" /> : <IoIosHeartEmpty />}
          </div>
          <div className={styles.icon}>
            <IoIosChatbubbles />
          </div>
          <div onClick={toggleSave} className={styles.icon}>
            {saved ? <FaBookmark color="orange" /> : <FaRegBookmark />}
          </div>
        </div>
        <p className={styles.likes}>{post.likes} likes</p>
      </div>
    </div>
  );
};

export default Post;
