import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export function CameraControls() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(-5, 3, 8);
  }, [camera]);

  return (
    <OrbitControls
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 2}
      minDistance={5}
      maxDistance={15}
    />
  );
}