import React, { useState } from 'react';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import PostGallery from '../PostGallery/PostGallery';
import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  const [bio, setBio] = useState('Inserisci la tua Bio');
  const [isEditing, setIsEditing] = useState(false);
  const [prideMode, setPrideMode] = useState(false);

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const togglePrideMode = () => {
    setPrideMode(!prideMode);
  };

  return (
    <div className={`${styles.profilePage} ${prideMode ? styles.prideMode : ''}`}>
      <ProfileInfo bio={bio} />
      <div className={styles.bioSection}>
        {isEditing ? (
          <textarea
            value={bio}
            onChange={handleBioChange}
            className={styles.bioTextarea}
          />
        ) : (
          <p>{bio}</p>
        )}
        <div className={styles.buttons}>
          <button onClick={toggleEdit} className={styles.editButton}>
            {isEditing ? 'Save Bio' : 'Edit Bio'}
          </button>
          <button onClick={togglePrideMode} className={styles.prideButton}>
            Pride!
          </button>
        </div>
      </div>
      <PostGallery />
    </div>
  );
};

export default ProfilePage;
