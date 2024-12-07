import { materials, MaterialKey } from '../Materials/KitchenMaterials';
import { KitchenDisplay } from './KitchenDisplay';

interface StyleConfig {
  cabinets: MaterialKey;
  countertop: MaterialKey;
  handles: string;
}

const kitchenStyles: Record<string, StyleConfig> = {
  modern: {
    cabinets: 'highGlossWhite',
    countertop: 'granite',
    handles: '#c0c0c0'
  },
  luxury: {
    cabinets: 'highGlossGray',
    countertop: 'marble',
    handles: '#d4af37'
  },
  rustic: {
    cabinets: 'oakWood',
    countertop: 'granite',
    handles: '#4a3728'
  },
  contemporary: {
    cabinets: 'mattBlack',
    countertop: 'marble',
    handles: '#c0c0c0'
  }
};

export function KitchenShowroom() {
  return (
    <group>
      {/* Modern Style Kitchen */}
      <KitchenDisplay 
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        style={kitchenStyles.modern}
        label="Modern Collection"
      />
      
      {/* Luxury Style Kitchen */}
      <KitchenDisplay 
        position={[0, 0, 8]}
        rotation={[0, Math.PI, 0]}
        style={kitchenStyles.luxury}
        label="Luxury Series"
      />
      
      {/* Rustic Style Kitchen */}
      <KitchenDisplay 
        position={[-8, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        style={kitchenStyles.rustic}
        label="Rustic Charm"
      />
      
      {/* Contemporary Style Kitchen */}
      <KitchenDisplay 
        position={[8, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        style={kitchenStyles.contemporary}
        label="Contemporary Elite"
      />
    </group>
  );
}