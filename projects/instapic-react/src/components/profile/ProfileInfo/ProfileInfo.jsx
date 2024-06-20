import React, { useState } from 'react';
import styles from './ProfileInfo.module.scss';

const ProfileInfo = () => {
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150");

  const handleImageClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.profileInfo}>
      <img 
        src={profileImage} 
        alt="Profile" 
        className={styles.profileImage} 
        onClick={handleImageClick} 
      />
      <input 
        type="file" 
        id="fileInput" 
        className={styles.hiddenFileInput} 
        accept="image/*" 
        onChange={handleFileChange} 
      />
      <div className={styles.info}>
        <h2>roberta_favuzza</h2>
        <p>Developer Front End</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
