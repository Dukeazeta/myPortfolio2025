import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useTheme } from '../../contexts/ThemeContext';
import './ThreeBackground.css';

function ParticleField() {
  const ref = useRef();
  const { isDark } = useTheme();

  // Generate particle positions - fewer particles for minimalism
  const positions = useMemo(() => {
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 8;
    }

    return posArray;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += 0.0005;
      ref.current.rotation.x += 0.0002;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={isDark ? '#ffffff' : '#000000'}
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
}

const ThreeBackground = () => {
  return (
    <div id="background-canvas" className="three-background">
      <Canvas
        camera={{ position: [0, 0, 2], fov: 75 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance"
        }}
      >
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
