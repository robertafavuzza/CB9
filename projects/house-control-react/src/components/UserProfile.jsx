import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="profile-container">
      <img className="profile-image" src="path/to/profile/image.jpg" alt="User Profile" />
      <div>
        <h2>Alex</h2>
      </div>
    </div>
  );
};

export default UserProfile;
