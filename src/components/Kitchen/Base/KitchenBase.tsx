import { KitchenUnit } from './KitchenUnit';
import { Sink } from '../Appliances/Sink';
import { Stove } from '../Appliances/Stove';
import { MaterialKey } from '../../Materials/KitchenMaterials';

interface KitchenBaseProps {
  position: [number, number, number];
  materials: {
    cabinet: MaterialKey;
    countertop: MaterialKey;
    handle: string;
  };
}

export function KitchenBase({ position, materials }: KitchenBaseProps) {
  return (
    <group position={position}>
      <KitchenUnit position={[0, 0, 0]} materials={materials} />
      <KitchenUnit position={[0.8, 0, 0]} materials={materials} />
      <Sink position={[1.6, 0, 0]} />
      <KitchenUnit position={[2.4, 0, 0]} materials={materials} />
      <Stove position={[3.2, 0, 0]} />
      <KitchenUnit position={[4, 0, 0]} materials={materials} />
    </group>
  );
}