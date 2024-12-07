import { useState } from 'react';
import { Text, Billboard } from '@react-three/drei';
import { MaterialPreview } from './MaterialPreview';
import { useShowroomStore } from '../../store/useShowroomStore';
import { MaterialId } from '../../types/materials';

interface CustomizationPanelProps {
  position: [number, number, number];
}

export function CustomizationPanel({ position }: CustomizationPanelProps) {
  const [activeTab, setActiveTab] = useState<'cabinets' | 'countertop' | 'handles'>('cabinets');
  const { activeKitchen, customizations, updateCustomization } = useShowroomStore();

  const tabs = [
    { id: 'cabinets', label: 'Armoires' },
    { id: 'countertop', label: 'Plan de travail' },
    { id: 'handles', label: 'Poignées' }
  ];

  const cabinetMaterials: MaterialId[] = ['highGlossWhite', 'mattBlack', 'oakWood', 'walnutWood'];
  const countertopMaterials: MaterialId[] = ['granite', 'marble'];
  const handleColors = ['#c0c0c0', '#1a1a1a', '#d4af37', '#b87333'];

  return (
    <group position={position}>
      <Billboard position={[2, 6, 0]}>
        <mesh position={[0, 0, -0.1]}>
          <planeGeometry args={[4, 2]} />
          <meshStandardMaterial color="#f5f5f5" transparent opacity={0.9} />
        </mesh>
        
        {/* Tabs */}
        {tabs.map((tab, index) => (
          <group key={tab.id} position={[-1.5 + index, 0.8, 0]}>
            <mesh
              onClick={() => setActiveTab(tab.id as any)}
              onPointerOver={(e) => (e.object.scale.setScalar(1.1))}
              onPointerOut={(e) => (e.object.scale.setScalar(1))}
            >
              <planeGeometry args={[1.2, 0.3]} />
              <meshStandardMaterial 
                color={activeTab === tab.id ? "#2c3e50" : "#95a5a6"}
                transparent 
                opacity={0.9} 
              />
            </mesh>
            <Text
              position={[0, 0, 0.01]}
              fontSize={0.1}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              {tab.label}
            </Text>
          </group>
        ))}

        {/* Material Previews */}
        <group position={[0, 0, 0]}>
          {activeTab === 'cabinets' && (
            <>
              {cabinetMaterials.map((material, index) => (
                <MaterialPreview
                  key={material}
                  material={material}
                  label={getMaterialLabel(material)}
                  position={[-1.5 + index, 0, 0]}
                  onSelect={() => updateCustomization(activeKitchen, 'cabinets', material)}
                  isSelected={customizations[activeKitchen].cabinets === material}
                />
              ))}
            </>
          )}
          {activeTab === 'countertop' && (
            <>
              {countertopMaterials.map((material, index) => (
                <MaterialPreview
                  key={material}
                  material={material}
                  label={getMaterialLabel(material)}
                  position={[-0.5 + index, 0, 0]}
                  onSelect={() => updateCustomization(activeKitchen, 'countertop', material)}
                  isSelected={customizations[activeKitchen].countertop === material}
                />
              ))}
            </>
          )}
          {activeTab === 'handles' && (
            <>
              {handleColors.map((color, index) => (
                <group key={color} position={[-1.5 + index, 0, 0]}>
                  <mesh
                    onClick={() => updateCustomization(activeKitchen, 'handles', color)}
                    onPointerOver={(e) => (e.object.scale.setScalar(1.1))}
                    onPointerOut={(e) => (e.object.scale.setScalar(1))}
                  >
                    <boxGeometry args={[0.3, 0.3, 0.3]} />
                    <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
                  </mesh>
                  <Text
                    position={[0, -0.4, 0]}
                    fontSize={0.1}
                    color="#333333"
                    anchorX="center"
                    anchorY="middle"
                  >
                    {getHandleLabel(color)}
                  </Text>
                </group>
              ))}
            </>
          )}
        </group>
      </Billboard>
    </group>
  );
}

function getMaterialLabel(material: MaterialId): string {
  const labels: Record<MaterialId, string> = {
    highGlossWhite: 'Blanc Brillant',
    highGlossGray: 'Gris Brillant',
    oakWood: 'Chêne',
    walnutWood: 'Noyer',
    mattBlack: 'Noir Mat',
    mattWhite: 'Blanc Mat',
    granite: 'Granit',
    marble: 'Marbre'
  };
  return labels[material];
}

function getHandleLabel(color: string): string {
  const labels: Record<string, string> = {
    '#c0c0c0': 'Acier',
    '#1a1a1a': 'Noir',
    '#d4af37': 'Or',
    '#b87333': 'Cuivre'
  };
  return labels[color];
}