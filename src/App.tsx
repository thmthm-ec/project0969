import { Canvas } from '@react-three/fiber';
import { KitchenShowroom } from './components/Kitchen/KitchenShowroom';
import { CameraControls } from './components/Controls/CameraControls';
import { ShowroomLighting } from './components/Lighting/ShowroomLighting';
import { ShowroomFloor } from './components/Environment/ShowroomFloor';
import { StoreLogo } from './components/Logo/StoreLogo';
import { Loader, Stats } from '@react-three/drei';

export default function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [-8, 5, 12], fov: 60 }}>
        <color args={['#f5f5f5']} attach="background" />
        
        <StoreLogo />
        <ShowroomLighting />
        <ShowroomFloor />
        <KitchenShowroom />
        <CameraControls />
        
        <Stats />
      </Canvas>
      <Loader />
    </>
  );
}