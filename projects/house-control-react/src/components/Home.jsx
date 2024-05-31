import React, { useContext } from 'react';
import './Home.css';
import Card from './Card';
import UserProfile from './UserProfile';
import { DeviceContext } from '../context/DeviceContext';

const Home = () => {
  const { devices } = useContext(DeviceContext);

  return (
    <div className="home-container">
      <UserProfile />
      <h1>Hi, Alex!</h1>
      <p>Manage your devices</p>
      <div className="cards-container">
        {devices.map(device => (
          <Card key={device.id} {...device} />
        ))}
      </div>
    </div>
  );
};

export default Home;
