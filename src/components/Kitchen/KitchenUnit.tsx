import { useRef, useState } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';

interface KitchenUnitProps {
  position: [number, number, number];
  color: string;
}

export function KitchenUnit({ position, color }: KitchenUnitProps) {
  const cabinetRef = useRef<Mesh>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (cabinetRef.current) {
      const targetRotation = isOpen ? Math.PI / 4 : 0;
      cabinetRef.current.rotation.y += (targetRotation - cabinetRef.current.rotation.y) * delta * 5;
    }
  });

  return (
    <group position={position}>
      {/* Base Cabinet */}
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.8, 0.6]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.1} 
          roughness={0.8}
        />
      </mesh>
      
      {/* Counter Top */}
      <mesh position={[0, 0.85, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.85, 0.05, 0.65]} />
        <meshStandardMaterial 
          color="#393939" 
          metalness={0.5} 
          roughness={0.2} 
        />
      </mesh>

      {/* Cabinet Door */}
      <mesh 
        position={[0, 0.4, 0.31]} 
        ref={cabinetRef}
        onClick={() => setIsOpen(!isOpen)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        castShadow
      >
        <boxGeometry args={[0.75, 0.75, 0.02]} />
        <meshStandardMaterial 
          color={hovered ? '#f0f0f0' : color} 
          metalness={0.1} 
          roughness={0.3}
          envMapIntensity={0.5}
        />
      </mesh>

      {/* Handle */}
      <mesh 
        position={[0.3, 0.4, 0.32]} 
        castShadow
      >
        <boxGeometry args={[0.1, 0.02, 0.03]} />
        <meshStandardMaterial 
          color="#c0c0c0" 
          metalness={0.8} 
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}