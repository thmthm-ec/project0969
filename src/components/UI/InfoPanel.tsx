import { Text, Billboard } from '@react-three/drei';
import { useState } from 'react';
import { animated, useSpring } from '@react-spring/three';

interface InfoPanelProps {
  description: string;
  position: [number, number, number];
}

export function InfoPanel({ description, position }: InfoPanelProps) {
  const [hovered, setHovered] = useState(false);
  
  const { scale, opacity } = useSpring({
    scale: hovered ? 1.1 : 1,
    opacity: hovered ? 1 : 0.8,
    config: { tension: 300, friction: 10 }
  });

  return (
    <Billboard position={position}>
      <animated.group scale={scale}>
        <mesh
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <planeGeometry args={[3, 1]} />
          <meshStandardMaterial color="#1a1a1a" transparent opacity={opacity} />
        </mesh>
        <Text
          position={[0, 0, 0.01]}
          fontSize={0.12}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          textAlign="center"
        >
          {description}
        </Text>
      </animated.group>
    </Billboard>
  );
}