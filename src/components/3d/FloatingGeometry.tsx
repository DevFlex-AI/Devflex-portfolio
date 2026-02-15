import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingGeometryProps {
  position?: [number, number, number];
  geometry?: 'box' | 'sphere' | 'torus' | 'octahedron' | 'icosahedron';
  color?: string;
  size?: number;
  speed?: number;
  distort?: number;
  wireframe?: boolean;
}

const FloatingGeometry = ({
  position = [0, 0, 0],
  geometry = 'octahedron',
  color = '#00FFFF',
  size = 1,
  speed = 1,
  distort = 0.3,
  wireframe = true,
}: FloatingGeometryProps) => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      mesh.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    }
  });

  const GeometryComponent = () => {
    switch (geometry) {
      case 'box': return <boxGeometry args={[size, size, size]} />;
      case 'sphere': return <sphereGeometry args={[size, 32, 32]} />;
      case 'torus': return <torusGeometry args={[size, size * 0.4, 16, 100]} />;
      case 'icosahedron': return <icosahedronGeometry args={[size, 0]} />;
      default: return <octahedronGeometry args={[size, 0]} />;
    }
  };

  return (
    <mesh ref={mesh} position={position}>
      <GeometryComponent />
      <MeshDistortMaterial
        color={color}
        wireframe={wireframe}
        distort={distort}
        speed={2}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

export default FloatingGeometry;
