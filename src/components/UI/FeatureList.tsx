import { Text, Billboard } from '@react-three/drei';
import { useState } from 'react';
import { animated, useSpring } from '@react-spring/three';

interface FeatureListProps {
  features: string[];
  position: [number, number, number];
}

export function FeatureList({ features, position }: FeatureListProps) {
  const [expanded, setExpanded] = useState(false);
  
  const { height } = useSpring({
    height: expanded ? features.length * 0.3 : 0.5,
    config: { tension: 200, friction: 20 }
  });

  return (
    <Billboard position={position}>
      <animated.group scale-y={height}>
        <mesh
          onClick={() => setExpanded(!expanded)}
          onPointerOver={(e) => (e.object.scale.x = 1.1)}
          onPointerOut={(e) => (e.object.scale.x = 1)}
        >
          <planeGeometry args={[2.5, expanded ? features.length * 0.3 : 0.5]} />
          <meshStandardMaterial color="#34495e" transparent opacity={0.9} />
        </mesh>
        {expanded ? (
          features.map((feature, index) => (
            <Text
              key={index}
              position={[0, 0.8 - index * 0.3, 0.01]}
              fontSize={0.12}
              color="white"
              anchorX="center"
              anchorY="middle"
              maxWidth={2}
            >
              • {feature}
            </Text>
          ))
        ) : (
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.15}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Cliquez pour voir les caractéristiques
          </Text>
        )}
      </animated.group>
    </Billboard>
  );
}