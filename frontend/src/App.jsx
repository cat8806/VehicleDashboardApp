import { useState } from 'react';
import './App.css';
import VehicleDashboard from './components/VehicleDashboard'; // Import the VehicleDashboard component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Add the VehicleDashboard component */}
      <VehicleDashboard />
    </>
  );
}

export default App;