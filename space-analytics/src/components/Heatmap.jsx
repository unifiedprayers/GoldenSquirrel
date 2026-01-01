import React from "react";
import { Stage, Layer, Image, Circle } from "react-konva";
import useImage from "use-image";

export default function Heatmap({ points }) {
  // Load the floorplan image from public folder
  const [floorplan] = useImage("/supermarket-floorplan.png"); // <-- root path

  return (
    <Stage width={700} height={500}>
      <Layer>
        {/* Floor plan background */}
        <Image image={floorplan} width={700} height={500} />

        {/* Heat points */}
        {points.map((p, i) => (
          <Circle
            key={i}
            x={p.x}
            y={p.y}
            radius={p.value / 2} // adjust intensity
            fill="red"
            opacity={0.4}
          />
        ))}
      </Layer>
    </Stage>
  );
}
