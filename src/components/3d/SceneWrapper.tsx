import { Canvas } from '@react-three/fiber';
import { Suspense, ReactNode } from 'react';

interface SceneWrapperProps {
  children: ReactNode;
  className?: string;
  camera?: { position: [number, number, number]; fov: number };
}

const SceneWrapper = ({
  children,
  className = 'absolute inset-0',
  camera = { position: [0, 0, 5], fov: 75 },
}: SceneWrapperProps) => {
  return (
    <div className={className}>
      <Canvas camera={camera} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#00FFFF" />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#FF00FF" />
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SceneWrapper;
