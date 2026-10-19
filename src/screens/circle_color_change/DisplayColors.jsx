import { useState } from "react";
import { Link } from "react-router-dom";

const colors = [
  "red",
  "black",
  "grey",
  "yellow",
  "green",
  "orange",
  "skyblue",
  "blue",
  "purple",
  "violet",
  "teal",
  "coral",
  "purple",
  "aqua",
];

function DisplayColors() {
  const [activeColors, setActiveColors] = useState("red");

  // Remove duplicate colors
  const newColors = [...new Set(colors)];

  const radius = 150;

  return (
    <div style={{textAlign:'center'}}>
      <h2>Display Colors</h2>

      <div
        style={{
          position: "relative",
          width: "400px",
          height: "400px",
          margin: "50px auto",
          border: "1px solid #ddd",
          borderRadius: "50%",
        }}
      >
        {/* Center Circle */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: activeColors,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {activeColors}
        </div>

        {/* Outer Circles */}
        {newColors.map((color, index) => {
          const angle = (index / newColors.length) * 2 * Math.PI;

          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div
              key={color}
              onClick={() => setActiveColors(color)}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: `translate(
                  calc(-50% + ${x}px),
                  calc(-50% + ${y}px)
                )`,
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: `1px solid ${color}`,
                background: color,
                cursor: "pointer",
              }}
              title={color}
            />
          );
        })}
      </div>
      <Link to="/">Returen to Home</Link>
    </div>
  );
}

export default DisplayColors;
