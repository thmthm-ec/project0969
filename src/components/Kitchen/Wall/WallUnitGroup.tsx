import { WallUnit } from './WallUnit';
import { MaterialKey } from '../../../types/materials';

interface WallUnitGroupProps {
  position: [number, number, number];
  materials: {
    cabinet: MaterialKey;
    handle: string;
  };
}

export function WallUnitGroup({ position, materials }: WallUnitGroupProps) {
  return (
    <group position={position}>
      <WallUnit 
        position={[0, 0, 0]} 
        materials={{...materials, glass: true}}
      />
      <WallUnit 
        position={[0.8, 0, 0]} 
        materials={materials}
      />
      <WallUnit 
        position={[1.6, 0, 0]} 
        materials={{...materials, glass: true}}
      />
      <WallUnit 
        position={[2.4, 0, 0]} 
        materials={materials}
      />
    </group>
  );
}