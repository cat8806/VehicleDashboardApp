import React, { useState, useEffect } from "react";


const ChargingButton = ({ initialChargingState = false, onClick = null }) => {
    const [isCharging, setIsCharging] = useState(initialChargingState);

    // Sync internal state with prop when `initialChargingState` changes.
    useEffect(() => {
        setIsCharging(initialChargingState);
    }, [initialChargingState]);

    // Toggles `isCharging` state and triggers parent `onClick` callback if provided.
    const toggleCharging = () => {
        setIsCharging((prevState) => !prevState);
        onClick?.();
    };

    return (
        <button
            onClick={toggleCharging}
            style={{
                backgroundColor: "#1e1e1e",
                outline: "none",
                border: "none",
                padding: "6px",
                alignItems: "center",
                marginLeft: "160px"
            }}
        >
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="65px" height="65px" viewBox="0 0 223.000000 223.000000"
            >

                <g transform="translate(0.000000,223.000000) scale(0.100000,-0.100000)"
                    fill={isCharging ?  "blue":"#555"} stroke="none" style={{
                        // Add transition for smooth color change
                        transition: "fill 0.5s ease-in-out", 
                    }}>
                    <path d="M1060 2074 c-152 -18 -258 -49 -377 -114 -588 -317 -674 -1119 -168
-1559 104 -91 293 -191 361 -191 71 0 68 67 -4 88 -78 24 -218 101 -287 159
-135 113 -238 274 -285 443 -63 227 -21 493 110 693 304 462 947 529 1338 140
386 -386 312 -1063 -143 -1318 -176 -98 -312 -81 -371 49 -24 53 -49 171 -58
269 -5 57 -5 57 63 57 87 0 150 22 199 69 73 71 77 89 77 331 0 215 0 215
-380 215 -380 0 -380 0 -380 -215 0 -244 4 -261 85 -334 54 -48 79 -58 173
-65 79 -6 79 -6 82 -91 6 -154 44 -276 111 -349 93 -104 224 -116 393 -36 240
114 400 321 468 606 23 98 23 305 0 408 -70 306 -285 557 -582 680 -113 47
-314 77 -425 65z"/>
                    <path d="M908 1699 c-16 -9 -18 -26 -18 -124 0 -85 3 -115 13 -116 46 -3 97 0
106 5 18 12 14 197 -5 224 -16 24 -65 30 -96 11z"/>
                    <path d="M1276 1694 c-13 -12 -16 -39 -16 -124 0 -108 0 -108 49 -112 84 -6
81 -10 81 111 0 92 -3 110 -18 124 -23 21 -76 22 -96 1z"/>
                </g>
            </svg>

        </button>
    );
};

export default ChargingButton;
