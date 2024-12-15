import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid2,
  Typography,
  Switch,
  Slider,
  Card,
  CardContent,
  Button,
  LinearProgress,
  Box,
} from '@mui/material';

import Gauge from './Gauge';
import './VehicleDashboard.css'; // Add CSS styling for consistency
import BatteryLowIcon from './BatteryLowIcon';
import MotorStatusIcon from './MotorSttatusIcon';
import CheckEngineIcon from './CheckEngineIcon';
import ParkingBrakeIcon from './ParkingBrakeIcon';
import GearRatio from './GearRatioIcon';
import BatteryTemperatureIcon from './BatteryTemperatureIcon';
import ViewMenuIcon from './ViewMenuIcon';
import ChargingButton from './ChargingButton';


function VehicleDashboard() {
  const [vehicleData, setVehicleData] = useState({
    motorRpm: 0,
    batteryPercentage: 0,
    batteryTemperature: 0,
    gearRatio: 0,
    isCharging: false,
    parkingBrake: false,
    checkEngine: false,
    motorStatus: false,
    batteryLow: false,
    powerConsumption: 0,
  });

  // Fetch data periodically
  useEffect(() => {
    const fetchVehicleData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/vehicle/status`);
        if (response.ok) {
          const data = await response.json();
          setVehicleData(data);
        } else {
          console.error('Failed to fetch vehicle data');
        }
      } catch (error) {
        console.error('Error fetching vehicle data:', error);
      }
    };

    const intervalId = setInterval(fetchVehicleData, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Handle motor speed change
  const handleMotorSpeedChange = async (event, newValue) => {
    setVehicleData((prevData) => ({
      ...prevData,
      motorRpm: newValue,
    }));

    try {
      const updatedData = { ...vehicleData, motorRpm: newValue };
      const response = await fetch(`${process.env.REACT_APP_API_URL}/vehicle/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Failed to update motor speed');
      }
    } catch (error) {
      console.error('Error updating motor speed:', error);
    }
  };

  // Handle charging toggle
  const handleChargingToggle = async () => {
    const updatedChargingStatus = !vehicleData.isCharging;

    setVehicleData((prevData) => ({
      ...prevData,
      isCharging: updatedChargingStatus,
    }));

    try {
      const updatedData = { ...vehicleData, isCharging: updatedChargingStatus };
      const response = await fetch(`${process.env.REACT_APP_API_URL}/vehicle/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Failed to update charging status');
      }
    } catch (error) {
      console.error('Error updating charging status:', error);
    }
  };

  return (
    <Container maxWidth="md" className="vehicle-dashboard" style={{ backgroundColor: '#1e1e1e', color: '#ffffff', padding: '20px', borderRadius: '1px' }}>
      {/* Top Row Indicators */}
      <Grid2 container spacing={0.1} justifyContent="left" style={{ backgroundColor: '#000', borderRadius: '1px', borderBottom: '2px solid #5a5a5a' }}>
        <Grid2 item>
          <Box
            className="top-row-box"
          >
            <ParkingBrakeIcon parkingBrake={vehicleData.parkingBrake}></ParkingBrakeIcon>
          </Box>
        </Grid2>
        <Grid2 item>
          <Box
            className="top-row-box"
          >
            <CheckEngineIcon checkEngine={vehicleData.checkEngine}></CheckEngineIcon>
          </Box>
        </Grid2>
        <Grid2 item>
          <Box
            className="top-row-box"
          >
            <MotorStatusIcon motorStatus={vehicleData.motorStatus}></MotorStatusIcon>
          </Box>
        </Grid2>
        <Grid2 item>
          <Box
            className="top-row-box"
          >
            <BatteryLowIcon batteryLow={vehicleData.batteryLow}></BatteryLowIcon>
          </Box>
        </Grid2>
      </Grid2>
      {/* Gauges */}
      <Grid2 container style={{ borderBottom: '3px solid #5a5a5a' }}>
        <Grid2 item xs={12} md={6}>
          <Card style={{ backgroundColor: '#323232', color: '#ffffff' }}>
            <CardContent>
              <Gauge value={vehicleData.powerConsumption} min={-1000} max={1000} numTicks={8} units="kW" label="" />
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 item xs={12} md={6}>
          <Card style={{ backgroundColor: '#323232', color: '#ffffff' }}>
            <CardContent>
              <Gauge value={vehicleData.motorRpm} min={0} max={800} numTicks={8} units="RPM" label="" />
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

      {/* Middle Row Details */}
      <Grid2 container style={{ border: '1px solid #5a5a5a' }}>
        <Grid2 item>
          <Box
            className="mid-row-box"
          >
            <GearRatio width='50px' height='50px'></GearRatio>
            <Typography align="center">
              {vehicleData.gearRatio}
            </Typography>
          </Box>

        </Grid2>
        <Grid2 item>
          <Box
            className="mid-row-box"
          >
            <BatteryLowIcon batteryLow={false} width='70px' height='70px'></BatteryLowIcon>
            <Typography align="center">
              {vehicleData.batteryPercentage}
            </Typography>
            <Typography className='unit' align="center">
              %
            </Typography>
          </Box>

        </Grid2>
        <Grid2 item>
          <Box
            className="mid-row-box"
          >
            <BatteryTemperatureIcon width='70px' height='70px'></BatteryTemperatureIcon>
            <Typography align="center">
              {vehicleData.batteryTemperature}
            </Typography>
            <Typography className='unit' align="center">
              °C
            </Typography>
          </Box>

        </Grid2>
        <Grid2 item>
          <Box
            className="mid-row-box"
          >
            <MotorStatusIcon motorStatus={false} width='74px' height='74px'></MotorStatusIcon>
            <Typography align="center">
              {vehicleData.motorRpm}
            </Typography>
            <Typography className='unit' align="center">
              RPM
            </Typography>

          </Box>

        </Grid2>

        <Grid2 item xs={12} className='sliderGrid'>
          <Typography>MOTOR SPEED SETTING</Typography>
          <Slider
            value={vehicleData.motorRpm}
            onChange={handleMotorSpeedChange}
            min={0}
            max={800}
            defaultValue={0}
            step={200}
            valueLabelDisplay={'off'}
            marks={[
              { value: 0, label: 'OFF' },
              { value: 200, label: '1' },
              { value: 400, label: '2' },
              { value: 600, label: '3' },
              { value: 800, label: '4' },
            ]}
            style={{ color: '#323332' }}
            slotProps={{ markLabel: { style: { color: 'white' } } }}
          />
        </Grid2>
      </Grid2>

      {/* Low Row Details */}
      <Grid2 container style={{ border: '1px solid #5a5a5a', height: '85px' }}>
        <Grid2 item>
          <Box
            className="low-row-box"
          >
            <GearRatio width='50px' height='50px'></GearRatio>
          </Box>
        </Grid2>

        <Grid2 item>
          <Box
            className="low-row-box"
          >
            <MotorStatusIcon motorStatus={false} width='50px' height='50px'></MotorStatusIcon>
          </Box>

        </Grid2>
        <Grid2 item>
          <Box
            className="low-row-box"
          >
            <BatteryTemperatureIcon width='50px' height='50px'></BatteryTemperatureIcon>
          </Box>
        </Grid2>
        <Grid2 item justifyContent="center">
          <Box
            className="view-menu-box"
          >
            <ViewMenuIcon width='50px' height='50px'></ViewMenuIcon>
          </Box>
        </Grid2>
        <Grid2 item xs={12} justifyContent={'right'}>
          <ChargingButton initialChargingState={vehicleData.isCharging} onClick={handleChargingToggle}></ChargingButton>
        </Grid2>

      </Grid2>
    </Container>
  );
}

export default VehicleDashboard;
