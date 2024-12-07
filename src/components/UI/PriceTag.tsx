import { Text, Billboard } from '@react-three/drei';
import { useState } from 'react';
import { animated, useSpring } from '@react-spring/three';

interface PriceTagProps {
  price: {
    base: number;
    premium: number;
  };
  position: [number, number, number];
}

export function PriceTag({ price, position }: PriceTagProps) {
  const [hovered, setHovered] = useState(false);
  
  const { scale } = useSpring({
    scale: hovered ? 1.2 : 1,
    config: { tension: 300, friction: 10 }
  });

  return (
    <Billboard position={position}>
      <animated.group scale={scale}>
        <mesh
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <planeGeometry args={[2, 0.8]} />
          <meshStandardMaterial color="#2c3e50" transparent opacity={0.9} />
        </mesh>
        <Text
          position={[0, 0.1, 0.01]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {`À partir de ${price.base.toLocaleString()}€`}
        </Text>
        <Text
          position={[0, -0.1, 0.01]}
          fontSize={0.12}
          color="#ecf0f1"
          anchorX="center"
          anchorY="middle"
        >
          {`Premium: ${price.premium.toLocaleString()}€`}
        </Text>
      </animated.group>
    </Billboard>
  );
}