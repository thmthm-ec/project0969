import { KitchenUnit } from './KitchenUnit';
import { MaterialKey } from '../../Materials/KitchenMaterials';

interface KitchenIslandProps {
  position: [number, number, number];
  materials: {
    cabinet: MaterialKey;
    countertop: MaterialKey;
    handle: string;
  };
}

export function KitchenIsland({ position, materials }: KitchenIslandProps) {
  return (
    <group position={position}>
      <KitchenUnit 
        position={[0, 0, 0]} 
        materials={materials}
      />
      <KitchenUnit 
        position={[0.8, 0, 0]} 
        materials={materials}
      />
    </group>
  );
}