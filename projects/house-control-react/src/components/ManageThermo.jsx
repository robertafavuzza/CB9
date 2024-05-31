import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { FaSnowflake } from 'react-icons/fa';
import { GiCoolSpices } from 'react-icons/gi';
import { Switch } from 'antd';
import CircularSlider from '@fseehawer/react-circular-slider';
import { DeviceContext } from '../context/DeviceContext';
import './ManageThermo.css';

const ManageThermo = () => {
  const location = useLocation();
  const { device } = location.state;
  const { updateDeviceStatus, updateDeviceTemperature } = useContext(DeviceContext);

  const [temperature, setTemperature] = useState(device.temperature || 24);
  const [mode, setMode] = useState(device.mode || 'cool');
  const [thermostatOn, setThermostatOn] = useState(device.status === 'on');

  const handleTemperatureChange = (value) => {
    setTemperature(value);
    updateDeviceTemperature(device.id, value);
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  const handleThermostatToggle = () => {
    const newStatus = thermostatOn ? 'off' : 'on';
    setThermostatOn(!thermostatOn);
    updateDeviceStatus(device.id, newStatus);
  };

  return (
    <div className="manage-thermo-container">
      <div className="thermostat-header">
        <h2>Smart Thermostat</h2>
        <Switch
          checked={thermostatOn}
          onChange={handleThermostatToggle}
          className="thermostat-switch"
        />
      </div>
      <div className="circular-slider-wrapper">
        <CircularSlider
          label="°C"
          min={16}
          max={30}
          dataIndex={temperature - 16}
          onChange={handleTemperatureChange}
          labelColor="#fff"
          knobColor="#ff00ff"
          progressColorFrom="#ff00ff"
          progressColorTo="#ff6ec4"
          progressSize={24}
          trackColor="#ffffff33"
          trackSize={24}
          hideLabelValue={true}
        />
        <div className="temperature-display">
          {temperature}°C
        </div>
      </div>
      <div className="mode-buttons">
        <div className={`mode-button ${mode === 'dry' ? 'active' : ''}`} onClick={() => handleModeChange('dry')}>
          <GiCoolSpices />
          <span>Dry</span>
          <Switch checked={mode === 'dry'} onChange={() => handleModeChange('dry')} />
        </div>
        <div className={`mode-button ${mode === 'cool' ? 'active' : ''}`} onClick={() => handleModeChange('cool')}>
          <FaSnowflake />
          <span>Cool</span>
          <Switch checked={mode === 'cool'} onChange={() => handleModeChange('cool')} />
        </div>
      </div>
    </div>
  );
};

export default ManageThermo;
