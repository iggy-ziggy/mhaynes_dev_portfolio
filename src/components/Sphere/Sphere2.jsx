import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Sphere = () => {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

const SphereCanvas = () => {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [0, 0, 1.5], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight intensity={1000} position={[10, 10, 10]} />
      <Sphere />
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

const SphereGrid = () => {
  const valuesArray = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']; // Your array of values

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        // gap: '.1rem',
        width: '100%',
        // height: '100%',
      }}
    >
      {valuesArray.map((value, index) => (
        <div
          key={index}
          style={{
            width: '100%',
            aspectRatio: '1 / 1',
            // border: '1px solid #ccc',
            // borderRadius: '10px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '500',
            position: 'absolute',
            textAlign: 'center',
            left: '35%',
            top: '38%',
            zIndex: '1'
          }}>{value}</h2>
          <SphereCanvas />
        </div>
      ))}
    </div>
  );
};

export default SphereGrid;
