import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Switch } from 'antd';
import CircularSlider from '@fseehawer/react-circular-slider';
import { DeviceContext } from '../context/DeviceContext';
import './ManageLamp.css';

const ManageLamp = () => {
  const location = useLocation();
  const { device } = location.state;
  const { updateDeviceStatus, updateDeviceSettings } = useContext(DeviceContext);

  const [color, setColor] = useState(device.color || '#ffffff');
  const [intensity, setIntensity] = useState(device.intensity || 72);
  const [lampOn, setLampOn] = useState(device.status === 'on');
  const [mode, setMode] = useState('custom');

  const handleColorChange = (newColor) => {
    setColor(newColor);
    updateDeviceSettings(device.id, { color: newColor });
  };

  const handleIntensityChange = (event) => {
    const newIntensity = event.target.value;
    setIntensity(newIntensity);
    updateDeviceSettings(device.id, { intensity: newIntensity });
  };

  const handleLampToggle = () => {
    const newStatus = lampOn ? 'off' : 'on';
    setLampOn(!lampOn);
    updateDeviceStatus(device.id, newStatus);
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    updateDeviceSettings(device.id, { mode: newMode });
  };

  return (
    <div className="manage-lamp-container">
      <div className="lamp-header">
        <h2>Central Light</h2>
        <Switch checked={lampOn} onChange={handleLampToggle} />
      </div>
      <div className="color-picker-wrapper">
        <CircularSlider
          label="Select Color"
          width={300}
          dataIndex={100}
          knobColor={color}
          progressColorFrom="#ff0000"
          progressColorTo="#0000ff"
          trackColor="#eeeeee"
          valueFontSize="2rem"
          labelColor="#6d6d6d"
          knobSize={36}
          trackSize={24}
          onChange={handleColorChange}
        />
      </div>
      <div className="intensity-slider">
        <label>Intensity {intensity}%</label>
        <input
          type="range"
          min="0"
          max="100"
          value={intensity}
          onChange={handleIntensityChange}
        />
      </div>
      <div className="mode-buttons">
        <div className={`mode-button ${mode === 'custom' ? 'active' : ''}`} onClick={() => handleModeChange('custom')}>
          <span>Custom</span>
        </div>
        <div className={`mode-button ${mode === 'bright' ? 'active' : ''}`} onClick={() => handleModeChange('bright')}>
          <span>Bright</span>
        </div>
        <div className={`mode-button ${mode === 'dimmed' ? 'active' : ''}`} onClick={() => handleModeChange('dimmed')}>
          <span>Dimmed</span>
        </div>
        <div className={`mode-button ${mode === 'gradient' ? 'active' : ''}`} onClick={() => handleModeChange('gradient')}>
          <span>Gradient</span>
        </div>
      </div>
    </div>
  );
};

export default ManageLamp;
