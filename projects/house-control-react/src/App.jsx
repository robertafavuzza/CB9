import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Search from './components/Search';
import Settings from './components/Settings';
import ManageThermo from './components/ManageThermo';
import ManageAirConditioner from './components/ManageAirConditioner';
import ManageLamp from './components/ManageLamp';  // aggiunto
import Navbar from './components/Navbar';
import DeviceProvider from './context/DeviceContext';
import './App.css';

const App = () => {
  return (
    <DeviceProvider>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/manage-thermo" element={<ManageThermo />} />
          <Route path="/manage-air-conditioner" element={<ManageAirConditioner />} />
          <Route path="/manage-lamp" element={<ManageLamp />} />  // aggiunto
        </Routes>
        <Navbar />
      </div>
    </DeviceProvider>
  );
};

export default App;
