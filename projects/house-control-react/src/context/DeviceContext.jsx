import React, { createContext, useState } from 'react';

export const DeviceContext = createContext();

const DeviceProvider = ({ children }) => {
  const [devices, setDevices] = useState([
    {
      id: 1,
      name: "Portable Speaker",
      type: "speaker",
      status: "off",
      battery: 47
    },
    {
      id: 2,
      name: "Smart Thermostat",
      type: "thermostat",
      status: "on",
      temperature: 23
    },
    {
      id: 3,
      name: "Ceiling Lamp",
      type: "lamp",
      status: "on",
      brightness: 35,
      color: '#ffffff',
      intensity: 72
    },
    {
      id: 4,
      name: "Washing Machine",
      type: "washingMachine",
      status: "off"
    },
    {
      id: 5,
      name: "Wi-Fi Router",
      type: "router",
      status: "on",
      signalStrength: 75
    },
    {
      id: 6,
      name: "Smart TV",
      type: "tv",
      status: "off",
      channel: 5,
      volume: 20
    },
    {
      id: 7,
      name: "Air Conditioner",
      type: "ac",
      status: "on",
      temperature: 22,
      mode: "cool",
      heater: false,
      cooling: true,
      swing: false,
      fan: false
    },
    {
      id: 8,
      name: "Smart Door Lock",
      type: "doorLock",
      status: "locked"
    },
    {
      id: 9,
      name: "Refrigerator",
      type: "fridge",
      status: "on",
      temperature: 4
    },
    {
      id: 10,
      name: "Coffee Maker",
      type: "coffeeMaker",
      status: "off"
    }
  ]);

  const updateDeviceStatus = (id, newStatus) => {
    setDevices(devices.map(device => 
      device.id === id ? { ...device, status: newStatus } : device
    ));
  };

  const updateDeviceTemperature = (id, newTemperature) => {
    setDevices(devices.map(device =>
      device.id === id ? { ...device, temperature: newTemperature } : device
    ));
  };

  const updateDeviceSettings = (id, newSettings) => {
    setDevices(devices.map(device =>
      device.id === id ? { ...device, ...newSettings } : device
    ));
  };

  return (
    <DeviceContext.Provider value={{ devices, updateDeviceStatus, updateDeviceTemperature, updateDeviceSettings }}>
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceProvider;
