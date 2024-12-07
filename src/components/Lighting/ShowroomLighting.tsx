import { Environment } from '@react-three/drei';

export function ShowroomLighting() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.0}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <spotLight
        position={[-5, 5, 0]}
        intensity={0.6}
        angle={Math.PI / 4}
        penumbra={0.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[0, 3, 0]} intensity={0.4} color="#ffd4a3" />
      <Environment preset="apartment" background blur={0.6} />
    </>
  );
}