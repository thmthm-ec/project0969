export function ShowroomFloor() {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.001, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial 
          color="#f0f0f0" 
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <gridHelper args={[50, 50, '#999999', '#CCCCCC']} />
      </mesh>
    </>
  );
}