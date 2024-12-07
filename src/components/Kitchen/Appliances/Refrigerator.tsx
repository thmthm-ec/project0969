import { useHover } from '../../../hooks/useHover';

interface RefrigeratorProps {
  position: [number, number, number];
}

export function Refrigerator({ position }: RefrigeratorProps) {
  const { isHovered, hoverProps } = useHover();

  return (
    <group position={position}>
      {/* Main Body */}
      <mesh castShadow {...hoverProps}>
        <boxGeometry args={[0.8, 1.8, 0.7]} />
        <meshStandardMaterial
          color={isHovered ? '#f0f0f0' : '#e0e0e0'}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>

      {/* Handle */}
      <mesh position={[0.41, 0, 0]} castShadow>
        <boxGeometry args={[0.05, 1.4, 0.05]} />
        <meshStandardMaterial
          color="#c0c0c0"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}