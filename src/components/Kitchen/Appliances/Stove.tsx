import { useHover } from '../../../hooks/useHover';

interface StoveProps {
  position: [number, number, number];
}

export function Stove({ position }: StoveProps) {
  const { isHovered, hoverProps } = useHover();

  return (
    <group position={position}>
      {/* Main Body */}
      <mesh position={[0, 0.4, 0]} castShadow {...hoverProps}>
        <boxGeometry args={[0.6, 0.8, 0.6]} />
        <meshStandardMaterial
          color={isHovered ? '#3f3f3f' : '#2f2f2f'}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>

      {/* Cooktop */}
      <mesh position={[0, 0.81, 0]} castShadow>
        <boxGeometry args={[0.58, 0.02, 0.58]} />
        <meshStandardMaterial
          color="#111111"
          metalness={0.8}
          roughness={0.1}
        />
      </mesh>

      {/* Burners */}
      {[[-0.15, -0.15], [0.15, -0.15], [-0.15, 0.15], [0.15, 0.15]].map(([x, z], index) => (
        <mesh key={index} position={[x, 0.82, z]} castShadow>
          <cylinderGeometry args={[0.06, 0.06, 0.02, 16]} />
          <meshStandardMaterial
            color="#000000"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}