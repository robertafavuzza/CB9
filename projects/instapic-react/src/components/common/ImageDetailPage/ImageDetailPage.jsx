import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPhotoById } from '../../../services/unsplash';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import styles from './ImageDetailPage.module.scss';

const ImageDetailPage = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const getPhoto = async () => {
      const data = await fetchPhotoById(id);
      setPhoto(data);
    };
    getPhoto();
  }, [id]);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleSave = () => {
    setSaved(!saved);
  };

  if (!photo) return <div>Loading...</div>;

  return (
    <div className={styles.imageDetailPage}>
      <div className={styles.header}>
        <img src={photo.user.profile_image.medium} alt={photo.user.name} />
        <div>
          <h2>{photo.user.username}</h2>
          <p>{new Date(photo.created_at).toLocaleDateString()}</p>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={photo.urls.regular} alt={photo.alt_description} />
      </div>
      <div className={styles.footer}>
        <div className={styles.icons}>
          <div onClick={toggleLike} className={styles.icon}>
            {liked ? <IoIosHeart color="red" /> : <IoIosHeartEmpty />}
          </div>
          <div onClick={toggleSave} className={styles.icon}>
            {saved ? <FaBookmark color="orange" /> : <FaRegBookmark />}
          </div>
        </div>
        <p>{photo.likes} likes</p>
        <p>{photo.description || 'Nessuna descrizione disponibile'}</p>
      </div>
    </div>
  );
};

export default ImageDetailPage;
