import React, { useState, useEffect } from 'react';

const Gauge = ({ value, min, max, units, label, numTicks }) => {
  const radius = 100; // Radius of the gauge
  const strokeWidth = 10; // Width of the gauge's stroke
  const center = radius + strokeWidth; // Center point of the gauge
  const circumference = 2 * Math.PI * radius; // Full circumference of the circle

  const [rotationAngle, setRotationAngle] = useState(-140); // Initial angle of the pointer

  // Clamp the value between min and max
  const limitedValue = Math.min(Math.max(value, min), max);

  // Calculate the percentage
  const percentage = (limitedValue - min) / (max - min);

  // Calculate the new rotation angle for the pointer
  const newAngle = percentage * 280 - 140; // Maps the value to -140 to 140 degrees

  // Smoothly update the pointer's rotation angle
  useEffect(() => {
    const timeout = setTimeout(() => {
      setRotationAngle(newAngle);
    }, 50); // Minor delay for smoother transitions
    return () => clearTimeout(timeout);
  }, [newAngle]);

  // Calculate the dash offset for the foreground circle
  const dashOffset = circumference * (1 - percentage);

  // Generate scale ticks
  const renderTicks = () => {
    const ticks = [];
    for (let i = 0; i <= numTicks; i++) {
      const angle = (i / numTicks) * 280 - 230; // Map to the -140 to 140 range
      const x1 = center + (radius - 10) * Math.cos((angle * Math.PI) / 180);
      const y1 = center + (radius - 10) * Math.sin((angle * Math.PI) / 180);
      const x2 = center + radius * Math.cos((angle * Math.PI) / 180);
      const y2 = center + radius * Math.sin((angle * Math.PI) / 180);

      const labelValue = Math.round(min + (i / numTicks) * (max - min));
      const labelX = center + (radius - 25) * Math.cos((angle * Math.PI) / 180);
      const labelY = center + (radius - 25) * Math.sin((angle * Math.PI) / 180);

      ticks.push(
        <g key={i}>
          {/* Tick */}
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ccc" strokeWidth={2} />
          {/* Label */}
          <text
            x={labelX}
            y={labelY}
            fill="#ccc"
            fontSize="10"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {labelValue}
          </text>
        </g>
      );
    }
    return ticks;
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <svg
        width={2 * (radius + strokeWidth)}
        height={2 * (radius + strokeWidth)}
        style={{ overflow: 'visible' }}
      >
        {/* Background Circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#7b7a7a"
          strokeWidth={strokeWidth}
        />
        {/* Foreground Circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#red"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          transform={`rotate(-0 ${center} ${center})`}
        />
        {/* Scale Ticks */}
        {renderTicks()}
        {/* Pointer */}
        <line
          x1={center}
          y1={center}
          x2={center}
          y2={center - radius + strokeWidth / 2 + 30}
          stroke="#a8a8a8"
          strokeWidth={5}
          style={{
            transformOrigin: `${center}px ${center}px`,
            transform: `rotate(${rotationAngle}deg)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        />
        {/* Center dot */}
        <circle cx={center} cy={center} r={5} fill="#a8a8a8" />
      </svg>
      {/* Value Display */}
      <div style={{ marginTop: '10px', fontSize: '16px', fontWeight: 'bold' }}>
        {value} {units}
      </div>
      {/* Label */}
      <div style={{ fontSize: '14px', color: '#777' }}>{label}</div>
    </div>
  );
};

// Default props for testing
Gauge.defaultProps = {
  value: 0,
  min: 0,
  max: 1000,
  units: 'kW',
  label: 'Power Output',
  numTicks: 10, // Number of scale divisions
};

export default Gauge;
