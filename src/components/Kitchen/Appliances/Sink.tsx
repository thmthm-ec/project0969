import { useHover } from '../../../hooks/useHover';

interface SinkProps {
  position: [number, number, number];
}

export function Sink({ position }: SinkProps) {
  const { isHovered, hoverProps } = useHover();

  return (
    <group position={position}>
      {/* Sink Basin */}
      <mesh position={[0, 0.8, 0]} castShadow {...hoverProps}>
        <boxGeometry args={[0.6, 0.1, 0.4]} />
        <meshStandardMaterial
          color={isHovered ? '#d0d0d0' : '#c0c0c0'}
          metalness={0.8}
          roughness={0.1}
        />
      </mesh>

      {/* Faucet Base */}
      <mesh position={[0, 0.85, -0.15]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.1, 8]} />
        <meshStandardMaterial
          color="#c0c0c0"
          metalness={0.8}
          roughness={0.1}
        />
      </mesh>

      {/* Faucet Neck */}
      <mesh position={[0, 0.95, -0.1]} rotation={[-Math.PI / 4, 0, 0]} castShadow>
        <cylinderGeometry args={[0.02, 0.02, 0.2, 8]} />
        <meshStandardMaterial
          color="#c0c0c0"
          metalness={0.8}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}