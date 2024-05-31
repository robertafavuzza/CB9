import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Switch } from 'antd';
import CircularSlider from '@fseehawer/react-circular-slider';
import { DeviceContext } from '../context/DeviceContext';
import './ManageAirConditioner.css';

const ManageAirConditioner = () => {
  const location = useLocation();
  const { device } = location.state;
  const { updateDeviceStatus, updateDeviceTemperature, updateDeviceSettings } = useContext(DeviceContext);

  const [temperature, setTemperature] = useState(device.temperature || 21);
  const [heaterOn, setHeaterOn] = useState(device.heater || false);
  const [coolingOn, setCoolingOn] = useState(device.cooling || true);
  const [swingOn, setSwingOn] = useState(device.swing || false);
  const [fanOn, setFanOn] = useState(device.fan || false);

  const handleTemperatureChange = (value) => {
    setTemperature(value);
    updateDeviceTemperature(device.id, value);
  };

  const handleToggle = (toggleFunc, currentState, deviceProperty) => {
    toggleFunc(!currentState);
    updateDeviceSettings(device.id, { [deviceProperty]: !currentState });
  };

  return (
    <div className="manage-air-conditioner-container">
      <h2>Air Conditioner</h2>
      <p>Living Room</p>
      <div className="circular-slider-wrapper">
        <CircularSlider
          label="°C"
          min={16}
          max={28}
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
          <div className="temperature-label">Temperature</div>
        </div>
      </div>
      <div className="mode-buttons">
        <div className="mode-button">
          <span>Heater</span>
          <span>{heaterOn ? 'On' : 'Off'}</span>
          <Switch checked={heaterOn} onChange={() => handleToggle(setHeaterOn, heaterOn, 'heater')} />
        </div>
        <div className="mode-button">
          <span>Cooling</span>
          <span>{coolingOn ? 'On' : 'Off'}</span>
          <Switch checked={coolingOn} onChange={() => handleToggle(setCoolingOn, coolingOn, 'cooling')} />
        </div>
        <div className="mode-button">
          <span>Swing</span>
          <span>{swingOn ? 'On' : 'Off'}</span>
          <Switch checked={swingOn} onChange={() => handleToggle(setSwingOn, swingOn, 'swing')} />
        </div>
        <div className="mode-button">
          <span>Fan</span>
          <span>{fanOn ? 'On' : 'Off'}</span>
          <Switch checked={fanOn} onChange={() => handleToggle(setFanOn, fanOn, 'fan')} />
        </div>
      </div>
    </div>
  );
};

export default ManageAirConditioner;
