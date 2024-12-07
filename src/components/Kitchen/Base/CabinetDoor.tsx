import { useRef, useState } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import { MaterialId } from '../../../types/materials';
import { getMaterialProps } from '../../../utils/materials';
import { useHover } from '../../../hooks/useHover';

interface CabinetDoorProps {
  position: [number, number, number];
  material: MaterialId;
  handleColor: string;
}

export function CabinetDoor({ position, material, handleColor }: CabinetDoorProps) {
  const doorRef = useRef<Mesh>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { isHovered, hoverProps } = useHover();

  useFrame((_, delta) => {
    if (doorRef.current) {
      const targetRotation = isOpen ? Math.PI / 4 : 0;
      doorRef.current.rotation.y += (targetRotation - doorRef.current.rotation.y) * delta * 5;
    }
  });

  const materialProps = getMaterialProps(material);

  return (
    <group position={position}>
      <mesh
        ref={doorRef}
        onClick={() => setIsOpen(!isOpen)}
        {...hoverProps}
        castShadow
      >
        <boxGeometry args={[0.75, 0.75, 0.02]} />
        <meshStandardMaterial
          {...materialProps}
          color={isHovered ? '#f0f0f0' : materialProps.color}
        />
      </mesh>

      <mesh position={[0.3, 0, 0.01]} castShadow>
        <boxGeometry args={[0.1, 0.02, 0.03]} />
        <meshStandardMaterial
          color={handleColor}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}