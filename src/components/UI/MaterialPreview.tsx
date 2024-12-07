import { useRef } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { materials } from '../Materials/KitchenMaterials';

interface MaterialPreviewProps {
  material: string;
  label: string;
  position: [number, number, number];
  onSelect: () => void;
  isSelected: boolean;
}

export function MaterialPreview({ material, label, position, onSelect, isSelected }: MaterialPreviewProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current && isSelected) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onClick={onSelect}
        onPointerOver={(e) => (e.object.scale.setScalar(1.1))}
        onPointerOut={(e) => (e.object.scale.setScalar(1))}
      >
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial {...materials[material]} />
      </mesh>
      <Text
        position={[0, -0.4, 0]}
        fontSize={0.1}
        color={isSelected ? "#2c3e50" : "#666666"}
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}