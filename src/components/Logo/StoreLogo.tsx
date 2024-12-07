import { Text, Center } from '@react-three/drei';

export function StoreLogo() {
  return (
    <group position={[0, 4, 0]}>
      {/* Main Logo Container */}
      <group>
        {/* Company Name */}
        <Center position={[0, 0, 0]}>
          <Text
            fontSize={1.2}
            maxWidth={10}
            lineHeight={1}
            letterSpacing={0.05}
            textAlign="center"
            anchorX="center"
            anchorY="middle"
            color="#1a1a1a"
          >
            HM
            {'\n'}
            CUISINE MODERNE
          </Text>
        </Center>

        {/* Decorative Line */}
        <mesh position={[0, -0.8, 0]}>
          <boxGeometry args={[4, 0.05, 0.05]} />
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Tagline */}
        <Center position={[0, -1.2, 0]}>
          <Text
            fontSize={0.2}
            letterSpacing={0.1}
            textAlign="center"
            anchorX="center"
            anchorY="middle"
            color="#333333"
          >
            L'EXCELLENCE EN DESIGN
          </Text>
        </Center>
      </group>
    </group>
  );
}