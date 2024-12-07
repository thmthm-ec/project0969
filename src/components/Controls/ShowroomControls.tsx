import { useShowroomStore } from '../../store/useShowroomStore';
import { useControls, folder } from 'leva';

export function ShowroomControls() {
  const { activeKitchen, customizations, updateCustomization } = useShowroomStore();
  const currentCustomization = customizations[activeKitchen];

  useControls({
    Kitchen: folder({
      cabinets: {
        value: currentCustomization.cabinets,
        options: ['highGlossWhite', 'highGlossGray', 'oakWood', 'walnutWood', 'mattBlack', 'mattWhite'],
        onChange: (value) => updateCustomization(activeKitchen, 'cabinets', value)
      },
      countertop: {
        value: currentCustomization.countertop,
        options: ['granite', 'marble', 'quartz', 'woodBlock'],
        onChange: (value) => updateCustomization(activeKitchen, 'countertop', value)
      },
      handles: {
        value: currentCustomization.handles,
        options: {
          'Brushed Steel': '#c0c0c0',
          'Matte Black': '#1a1a1a',
          'Gold': '#d4af37',
          'Copper': '#b87333'
        },
        onChange: (value) => updateCustomization(activeKitchen, 'handles', value)
      },
      lighting: {
        value: currentCustomization.lighting,
        options: ['warm', 'cool', 'natural'],
        onChange: (value) => updateCustomization(activeKitchen, 'lighting', value)
      }
    })
  });

  return null;
}