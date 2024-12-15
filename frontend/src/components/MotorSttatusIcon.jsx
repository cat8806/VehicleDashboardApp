import React from "react";

const MotorStatusIcon = ({ motorStatus, width = "50px", height = "50px" }) => {
  const fillColor = motorStatus ? "#fa0000" : "#555";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 104 128"
      width={width}
      height={height}
    >
      <g
        transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
        fill={fillColor}
      >
        <path d="M475 1198 c-2 -7 -5 -26 -7 -43 -3 -30 -3 -30 -59 -27 -63 4 -110
-12 -151 -51 -28 -26 -28 -26 -28 -410 0 -383 0 -383 32 -414 44 -42 82 -55
148 -51 55 3 55 3 60 -37 5 -40 5 -40 55 -40 50 0 50 0 55 40 5 40 5 40 62 37
72 -5 120 11 153 49 25 31 25 31 25 413 0 366 -1 384 -20 408 -32 41 -83 60
-153 56 -62 -3 -62 -3 -67 37 -5 40 -5 40 -53 43 -32 2 -49 -1 -52 -10z m75
-48 c0 -25 -4 -30 -25 -30 -21 0 -25 5 -25 30 0 25 4 30 25 30 21 0 25 -5 25
-30z m173 -85 c1 -6 -70 -11 -195 -13 -181 -2 -211 1 -191 22 11 11 383 2 386
-9z m38 -400 c0 -357 0 -357 -236 -357 -236 0 -236 0 -236 356 1 196 1 357 1
359 0 1 106 1 235 0 236 -2 236 -2 236 -358z m-33 -397 c-4 -10 -50 -14 -179
-16 -177 -3 -219 1 -219 18 0 6 76 10 201 10 156 0 200 -3 197 -12z m-178 -88
c0 -25 -4 -30 -25 -30 -20 0 -25 5 -25 23 0 28 7 37 32 37 13 0 18 -8 18 -30z"/>
        <path d="M512 734 c-84 -93 -92 -119 -33 -111 22 3 42 3 45 0 2 -3 -6 -25 -20
-51 -13 -25 -22 -48 -19 -50 12 -13 155 153 155 179 0 8 -14 10 -40 6 -22 -3
-42 -1 -45 3 -3 5 4 24 16 44 40 68 13 58 -59 -20z"/>
      </g>
    </svg>
  );
};

export default MotorStatusIcon;
