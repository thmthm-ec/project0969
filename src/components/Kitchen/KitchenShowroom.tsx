import { useShowroomStore } from '../../store/useShowroomStore';
import { KitchenDisplay } from './KitchenDisplay';
import { ShowroomControls } from '../Controls/ShowroomControls';
import { kitchenStyles } from '../../data/kitchenStyles';

export function KitchenShowroom() {
  const { viewMode, activeKitchen, customizations } = useShowroomStore();

  if (!kitchenStyles[activeKitchen]) {
    return null;
  }

  return (
    <group>
      <ShowroomControls />
      
      {viewMode === 'overview' ? (
        <>
          {Object.entries(kitchenStyles).map(([id, style]) => (
            <KitchenDisplay
              key={id}
              position={getKitchenPosition(id)}
              rotation={[0, 0, 0]}
              style={style}
              customization={customizations[id]}
              label={style.label}
              isActive={activeKitchen === id}
            />
          ))}
        </>
      ) : (
        <KitchenDisplay
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          style={kitchenStyles[activeKitchen]}
          customization={customizations[activeKitchen]}
          label={kitchenStyles[activeKitchen].label}
          isActive={true}
          detailed={true}
        />
      )}
    </group>
  );
}

function getKitchenPosition(id: string): [number, number, number] {
  const positions = {
    modern: [-4, 0, -4],
    luxury: [4, 0, -4],
    rustic: [-4, 0, 4],
    contemporary: [4, 0, 4]
  };
  return positions[id as keyof typeof positions] || [0, 0, 0];
}