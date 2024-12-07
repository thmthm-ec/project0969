import { useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { PriceTag } from '../UI/PriceTag';
import { FeatureList } from '../UI/FeatureList';
import { InfoPanel } from '../UI/InfoPanel';
import { CustomizationPanel } from '../UI/CustomizationPanel';
import { useShowroomStore } from '../../store/useShowroomStore';
import { useKitchenAnimation } from '../../hooks/useKitchenAnimation';
import { KitchenBase } from './Base/KitchenBase';
import { KitchenIsland } from './Base/KitchenIsland';
import { WallUnitGroup } from './Wall/WallUnitGroup';
import { Refrigerator } from './Appliances/Refrigerator';
import { MaterialSet } from '../../types/materials';

interface KitchenDisplayProps {
  position: [number, number, number];
  rotation: [number, number, number];
  style: any;
  customization: any;
  label: string;
  isActive: boolean;
  detailed?: boolean;
}

export function KitchenDisplay({
  position,
  rotation,
  style,
  customization,
  label,
  isActive,
  detailed = false
}: KitchenDisplayProps) {
  const groupRef = useKitchenAnimation(isActive);
  const { setActiveKitchen, setViewMode } = useShowroomStore();

  const handleClick = () => {
    if (!detailed) {
      setActiveKitchen(style.id);
      setViewMode('detail');
    }
  };

  const materials: MaterialSet = {
    cabinet: customization.cabinets,
    countertop: customization.countertop,
    handle: customization.handles
  };

  return (
    <group
      position={position}
      rotation={rotation}
      ref={groupRef}
      onClick={handleClick}
    >
      <KitchenBase position={[0, 0, 0]} materials={materials} />
      <KitchenIsland position={[2, 0, -1.5]} materials={materials} />
      <WallUnitGroup position={[0, 1.4, 0]} materials={materials} />
      <Refrigerator position={[4.8, 0.9, 0]} />

      <PriceTag price={style.price} position={[2, 2, 0]} />
      <FeatureList features={style.features} position={[-2, 2, 0]} />
      <InfoPanel description={style.description} position={[0, 2.5, 0]} />
      
      {detailed && <CustomizationPanel position={[0, -2, 0]} />}
    </group>
  );
}