import { CabinetDoor } from './CabinetDoor';
import { MaterialSet, MaterialId } from '../../../types/materials';
import { getMaterialProps } from '../../../utils/materials';

interface KitchenUnitProps {
  position: [number, number, number];
  materials: MaterialSet;
}

export function KitchenUnit({ position, materials }: KitchenUnitProps) {
  const cabinetProps = getMaterialProps(materials.cabinet);
  const countertopProps = getMaterialProps(materials.countertop);

  return (
    <group position={position}>
      {/* Base Cabinet */}
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.8, 0.6]} />
        <meshStandardMaterial {...cabinetProps} />
      </mesh>

      {/* Counter Top */}
      <mesh position={[0, 0.85, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.85, 0.05, 0.65]} />
        <meshStandardMaterial {...countertopProps} />
      </mesh>

      <CabinetDoor
        position={[0, 0.4, 0.31]}
        material={materials.cabinet}
        handleColor={materials.handle}
      />
    </group>
  );
}