import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import React, { Suspense } from "react";
import { renderToString } from "react-dom/server";
import "./Icon3d.css";
import { degToRad } from "three/src/math/MathUtils";

const Icon3d = ({ image }) => {
  const iconSVGString = encodeURIComponent(renderToString(image));
  const iconDataUrl = `data:image/svg+xml,${iconSVGString}`;
  const decal = useTexture(iconDataUrl);
  const gold = 0xf78307;
  const teal = 0x02d1fa;
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <directionalLight color={gold} position={[50, -50, -50]} intensity={20} />
      <directionalLight color={teal} position={[-50, 50, -50]} intensity={20} />
      <directionalLight position={[0, 0, 10]} intensity={2.7} />
      <mesh scale={0.31}>
        <torusGeometry args={[10, 0.5]} />
        <meshStandardMaterial color={0xfa117e} />
      </mesh>
      <mesh castShadow receiveShadow scale={0.5} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[5, 5, 1, 48]} />
        <meshStandardMaterial
          color={0xfa117e}
          polygonOffset
          polygonOffsetFactor={-5}
          // flatShading
        />
        <Decal
          // debug
          position={[0, 2.5, 0]}
          rotation={[degToRad(270), 0, 0]}
          flatShading
          map={decal}
          scale={5}
        />
      </mesh>
    </Float>
  );
};

const Icon3dCanvas = ({ image }) => {
  return (
    <Canvas gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Icon3d image={image} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Icon3dCanvas;
