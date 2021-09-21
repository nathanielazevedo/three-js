/** @format */
import * as THREE from "three";
import "./App.css";
import { Physics } from "use-cannon";
import CameraControls from "./components/CameraControls";
import CameraButtons from "./components/CameraButtons";
import Background from "./components/Background";
import Cars from './components/Cars'
import Lights from "./components/Lights";
import Floor from "./components/Floor";
import Orbit from "./components/Orbit";
import ColorPicker from "./components/ColorPicker";
import { Canvas, extend } from "react-three-fiber";
import { Suspense } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPicker />
        <CameraButtons/>
      <Canvas
        shadowMap
        style={{ background: "black" }}
        camera={{ position: [7, 7, 7] }}
      >
        <CameraControls/>
        <Lights/>
        <Orbit />
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Physics>
          <Cars/>
          <Floor position={[0, -0.5, 0]} />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
