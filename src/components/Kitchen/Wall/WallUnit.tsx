import { useRef, useState } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import { MaterialKey } from '../../../types/materials';
import { useHover } from '../../../hooks/useHover';

interface WallUnitProps {
  position: [number, number, number];
  materials: {
    cabinet: MaterialKey;
    handle: string;
    glass?: boolean;
  };
}

export function WallUnit({ position, materials }: WallUnitProps) {
  const doorRef = useRef<Mesh>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { isHovered, hoverProps } = useHover();

  useFrame((_, delta) => {
    if (doorRef.current) {
      const targetRotation = isOpen ? Math.PI / 3 : 0;
      doorRef.current.rotation.y += (targetRotation - doorRef.current.rotation.y) * delta * 5;
    }
  });

  return (
    <group position={position}>
      {/* Wall Cabinet */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.6, 0.35]} />
        <meshStandardMaterial {...materials.cabinet} />
      </mesh>

      {/* Cabinet Door */}
      <mesh 
        position={[0, 0, 0.175]} 
        ref={doorRef}
        onClick={() => setIsOpen(!isOpen)}
        {...hoverProps}
        castShadow
      >
        <boxGeometry args={[0.75, 0.55, 0.02]} />
        {materials.glass ? (
          <meshPhysicalMaterial 
            color={isHovered ? '#e8f4f8' : '#c5e4f3'}
            metalness={0.2}
            roughness={0.1}
            transmission={0.6}
            thickness={0.05}
            envMapIntensity={1.5}
          />
        ) : (
          <meshStandardMaterial 
            {...materials.cabinet}
            color={isHovered ? '#f0f0f0' : materials.cabinet.color}
          />
        )}
      </mesh>

      {/* Handle */}
      <mesh position={[0.3, 0, 0.185]} castShadow>
        <boxGeometry args={[0.1, 0.02, 0.03]} />
        <meshStandardMaterial 
          color={materials.handle}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}