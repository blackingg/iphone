import React, { useState } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Iphone } from "./iphone";
import { OrbitControls } from "@react-three/drei";
import ColorPicker from "./colorPicker";
import { LoadingScreen } from "./LoadingScreen";

function App() {
  const [selectedColor, setSelectedColor] = useState("#1C1C1E"); // Default color
  const [started, setStarted] = useState(false);

  return (
    <div className="relative bg-[#CBD0B9] h-screen w-screen">
      <LoadingScreen
        started={started}
        setStarted={setStarted}
      />
      <Suspense fallback={null}>
        <Canvas
          shadows
          camera={{ position: [0, 0, 400], near: 0.1, far: 5000 }}
        >
          <color
            attach="background"
            args={["#CBD0B9"]}
          />
          <ambientLight
            color={"#FF6F61"}
            intensity={0.5}
          />
          <directionalLight
            color={"#FFFFFF"}
            position={[0, -50, 100]}
            intensity={1}
          />
          <directionalLight
            color={"#ffffff"}
            position={[0, 200, 300]}
            intensity={5}
          />
          <directionalLight
            color={"#ffffff"}
            position={[200, 0, 300]}
            intensity={5}
          />
          <directionalLight
            color={"#ffffff"}
            position={[-200, 200, 300]}
            intensity={5}
          />
          <Iphone color={selectedColor} />
          <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 2 - Math.PI / 3}
            maxPolarAngle={Math.PI / 2 + Math.PI / 3}
            enablePan={false}
          />
        </Canvas>
      </Suspense>
      <ColorPicker onColorChange={setSelectedColor} />
    </div>
  );
}

export default App;
