import React from "react";

const BatteryTemperatureIcon = ({
  width = "60px",
  height = "60px",
  fillColor = "#555",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 238.000000 229.000000"
      width={width}
      height={height}
    >
      <g
        transform="translate(0.000000,229.000000) scale(0.100000,-0.100000)"
        fill={fillColor}
        stroke="none"
      >
        <path d="M636 2139 c-17 -13 -28 -34 -32 -60 -7 -39 -7 -39 -96 -39 -80 0 -91
-2 -113 -24 -13 -13 -26 -39 -30 -57 -3 -19 -5 -437 -3 -929 3 -972 0 -926 58
-950 17 -7 191 -10 527 -8 502 3 502 3 525 26 23 23 23 23 23 957 0 1095 17
977 -142 985 -97 5 -97 5 -99 40 -1 23 -10 41 -28 57 -27 23 -30 23 -295 23
-256 0 -269 -1 -295 -21z m450 -175 c1 -11 2 -27 3 -37 1 -10 12 -29 26 -43
24 -23 31 -25 110 -23 47 1 88 0 90 -3 3 -2 5 -364 5 -804 l0 -799 -387 -3
-388 -2 2 807 c2 807 2 807 90 804 83 -2 90 -1 116 23 24 22 33 44 28 70 -6
28 11 31 155 30 137 -2 149 -3 150 -20z"/>
        <path d="M1889 1947 c-57 -21 -97 -54 -126 -105 -28 -47 -28 -47 -28 -527 0
-472 0 -481 22 -520 11 -22 33 -51 47 -64 24 -23 26 -30 26 -117 0 -69 -3 -93
-14 -97 -22 -9 -56 -90 -56 -135 0 -190 241 -278 363 -132 60 71 61 191 2 254
-23 24 -25 35 -25 111 0 81 2 87 34 130 55 72 58 100 54 601 -3 451 -3 451
-33 500 -56 90 -175 135 -266 101z m156 -117 c34 -32 47 -81 43 -164 -3 -70
-3 -70 -64 -67 -44 2 -64 -2 -73 -13 -22 -26 -2 -36 70 -36 69 0 69 0 69 -70
0 -70 0 -70 -64 -70 -72 0 -99 -17 -75 -46 11 -13 26 -15 76 -11 63 6 63 6 63
-68 0 -75 0 -75 -57 -69 -65 6 -101 -10 -90 -40 5 -13 21 -16 77 -16 70 0 70
0 70 -60 0 -33 1 -63 3 -67 1 -5 -32 -10 -73 -13 -67 -4 -75 -7 -75 -25 0 -18
8 -20 74 -23 73 -3 73 -3 69 -70 -2 -50 -9 -76 -26 -99 -48 -67 -156 -67 -204
0 -23 32 -23 32 -23 504 0 463 0 472 21 500 30 41 62 54 117 50 32 -3 56 -12
72 -27z"/>
      </g>
    </svg>
  );
};

export default BatteryTemperatureIcon;
