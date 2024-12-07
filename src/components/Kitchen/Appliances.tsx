import { MeshStandardMaterial } from 'three';

interface ApplianceProps {
  position: [number, number, number];
}

export function Stove({ position }: ApplianceProps) {
  return (
    <group position={position}>
      <mesh position={[0, 0.4, 0]} castShadow>
        <boxGeometry args={[0.6, 0.8, 0.6]} />
        <meshStandardMaterial color="#2f2f2f" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Cooktop */}
      <mesh position={[0, 0.81, 0]} castShadow>
        <boxGeometry args={[0.58, 0.02, 0.58]} />
        <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.1} />
      </mesh>
    </group>
  );
}

export function Refrigerator({ position }: ApplianceProps) {
  return (
    <mesh position={position} castShadow>
      <boxGeometry args={[0.8, 1.8, 0.7]} />
      <meshStandardMaterial color="#e0e0e0" metalness={0.5} roughness={0.2} />
    </mesh>
  );
}

export function Sink({ position }: ApplianceProps) {
  return (
    <group position={position}>
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[0.6, 0.1, 0.4]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.8} roughness={0.1} />
      </mesh>
      {/* Faucet */}
      <mesh position={[0, 0.9, -0.1]} castShadow>
        <cylinderGeometry args={[0.02, 0.02, 0.3]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.8} roughness={0.1} />
      </mesh>
    </group>
  );
}