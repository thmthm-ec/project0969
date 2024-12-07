import { MaterialDefinition, MaterialId } from '../types/materials';

export const materials: Record<MaterialId, MaterialDefinition> = {
  highGlossWhite: {
    type: 'glossy',
    properties: {
      color: '#ffffff',
      metalness: 0.4,
      roughness: 0.05,
      envMapIntensity: 2.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    }
  },
  highGlossGray: {
    type: 'glossy',
    properties: {
      color: '#2c3e50',
      metalness: 0.4,
      roughness: 0.05,
      envMapIntensity: 2.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    }
  },
  oakWood: {
    type: 'wood',
    properties: {
      color: '#deb887',
      metalness: 0.0,
      roughness: 0.7,
      envMapIntensity: 0.5,
      clearcoat: 0.3,
      clearcoatRoughness: 0.4
    }
  },
  walnutWood: {
    type: 'wood',
    properties: {
      color: '#5c4033',
      metalness: 0.0,
      roughness: 0.7,
      envMapIntensity: 0.5,
      clearcoat: 0.3,
      clearcoatRoughness: 0.4
    }
  },
  mattBlack: {
    type: 'matte',
    properties: {
      color: '#1a1a1a',
      metalness: 0,
      roughness: 0.9,
      envMapIntensity: 0.3
    }
  },
  mattWhite: {
    type: 'matte',
    properties: {
      color: '#f5f5f5',
      metalness: 0,
      roughness: 0.9,
      envMapIntensity: 0.3
    }
  },
  granite: {
    type: 'stone',
    properties: {
      color: '#2c3e50',
      metalness: 0.3,
      roughness: 0.4,
      envMapIntensity: 1.0
    }
  },
  marble: {
    type: 'stone',
    properties: {
      color: '#f5f5f5',
      metalness: 0.2,
      roughness: 0.3,
      envMapIntensity: 1.2
    }
  }
};

export const getMaterialProperties = (materialId: MaterialId): MaterialDefinition => {
  const material = materials[materialId];
  if (!material) {
    throw new Error(`Material ${materialId} not found`);
  }
  return material;
};