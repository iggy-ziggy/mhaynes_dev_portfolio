import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  Text,
  useTexture,
} from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
import "./Sphere.css";

const Sphere = () => {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

const SphereCanvas = () => {
  const orange = 0xfcbd7e;
  const blue = 0x58dcfc;
  const pink = 0xfc88b3;

  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 1.5], fov: 50 }}
    >
      {/* <ambientLight intensity={0.5} />
      <pointLight intensity={1000} position={[10, 10, 10]} /> */}
      <directionalLight position={[-10, -10, -15]} intensity={3} color={blue} />
      <directionalLight
        position={[15, 15, 20]}
        intensity={2.5}
        color={pink}
      />
      <Sphere />
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

// const Sphere = () => {
//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <mesh scale={2.5}>
//         <sphereGeometry args={[1, 48, 48]} />
//         <meshStandardMaterial color={0xcccccc} />
//       </mesh>
//     </Float>
//   );
// };

// const SphereCanvas = () => {
// const orange = 0xfcbd7e;
// const blue = 0x58dcfc;
// const pink = 0xfc88b3;
//   return (
//     <Canvas>
// <directionalLight position={[10, 10, -15]} intensity={3} color={blue} />
// <directionalLight
//   position={[-15, -15, 20]}
//   intensity={2.5}
//   color={pink}
// />
//       <Sphere />
//     </Canvas>
//   );
// };

export default SphereCanvas;
