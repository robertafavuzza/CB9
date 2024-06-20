import React, { useState } from 'react';
import styles from './ProfileStat.module.scss';

const ProfileStat = () => {
  const [bio, setBio] = useState('Developer Front End');
  const [isEditing, setIsEditing] = useState(false);
  const [isPride, setIsPride] = useState(false);

  const handleEditBio = () => {
    setIsEditing(!isEditing);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handlePrideToggle = () => {
    setIsPride(!isPride);
  };

  return (
    <div className={`${styles.profileStat} ${isPride ? styles.pride : ''}`}>
      <div className={styles.profileInfo}>
        <img src="https://via.placeholder.com/150" alt="Profile" className={styles.profileImage} />
        <div className={styles.info}>
          <h2>bobi_darling</h2>
          {isEditing ? (
            <input type="text" value={bio} onChange={handleBioChange} onBlur={handleEditBio} autoFocus />
          ) : (
            <p onClick={handleEditBio}>{bio}</p>
          )}
          <div className={styles.buttons}>
            <button onClick={handleEditBio} className={styles.editButton}>
              {isEditing ? 'Save' : 'Edit Bio'}
            </button>
            <button onClick={handlePrideToggle} className={styles.prideButton}>
              Pride!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStat;
