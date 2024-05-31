import React, { useContext } from 'react';
import { FaVolumeUp, FaThermometerHalf, FaLightbulb, FaTshirt, FaWifi, FaTv, FaFan, FaLock, FaUnlock, FaSnowflake, FaCoffee } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { DeviceContext } from '../context/DeviceContext';
import './Card.css';

const getIcon = (type, status) => {
  switch (type) {
    case 'speaker':
      return <FaVolumeUp />;
    case 'thermostat':
      return <FaThermometerHalf />;
    case 'lamp':
      return <FaLightbulb />;
    case 'washingMachine':
      return <FaTshirt />;
    case 'router':
      return <FaWifi />;
    case 'tv':
      return <FaTv />;
    case 'ac':
      return <FaFan />;
    case 'doorLock':
      return status === 'locked' ? <FaLock /> : <FaUnlock />;
    case 'fridge':
      return <FaSnowflake />;
    case 'coffeeMaker':
      return <FaCoffee />;
    default:
      return null;
  }
};

const Card = ({ id, type, name, status, battery, temperature, brightness, signalStrength, channel, volume, mode }) => {
  const { updateDeviceStatus } = useContext(DeviceContext);
  const navigate = useNavigate();

  const toggleStatus = (e) => {
    e.stopPropagation();
    const newStatus = status === 'on' ? 'off' : 'on';
    updateDeviceStatus(id, newStatus);
  };

  const handleCardClick = () => {
    if (type === 'thermostat') {
      navigate('/manage-thermo', { state: { device: { id, type, name, status, temperature, mode } } });
    } else if (type === 'ac') {
      navigate('/manage-air-conditioner', { state: { device: { id, type, name, status, temperature, heater: false, cooling: true, swing: false, fan: false } } });
    } else if (type === 'lamp') {
      navigate('/manage-lamp', { state: { device: { id, type, name, status, color: '#ffffff', intensity: 72 } } });
    }
  };

  return (
    <div className="card-container" onClick={handleCardClick}>
      <div className="icon-container">
        {getIcon(type, status)}
      </div>
      <h3>{name}</h3>
      {type === 'thermostat' && <p>Temperature: {temperature}°C</p>}
      {type === 'lamp' && <p>Brightness: {brightness}%</p>}
      {type === 'speaker' && <p>Battery: {battery}%</p>}
      {type === 'router' && <p>Signal: {signalStrength}%</p>}
      {type === 'tv' && <p>Channel: {channel}, Volume: {volume}</p>}
      {type === 'ac' && <p>Temperature: {temperature}°C</p>}
      {type === 'doorLock' && <p>Status: <span className={status === 'locked' ? 'status-locked' : 'status-unlocked'}>{status}</span></p>}
      {type === 'fridge' && <p>Temperature: {temperature}°C</p>}
      {type === 'coffeeMaker' && <p>Status: <span className={status === 'on' ? 'status-on' : 'status-off'}>{status}</span></p>}
      {type !== 'doorLock' && type !== 'coffeeMaker' && <p>Status: <span className={status === 'on' ? 'status-on' : 'status-off'}>{status}</span></p>}
      <button onClick={toggleStatus}>{status === 'on' || status === 'locked' ? 'Turn Off / Unlock' : 'Turn On / Lock'}</button>
    </div>
  );
};

export default Card;
