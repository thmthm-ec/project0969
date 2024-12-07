export const materials = {
  // High gloss finishes
  highGlossWhite: {
    color: '#ffffff',
    metalness: 0.4,
    roughness: 0.05,
    envMapIntensity: 2.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1
  },
  highGlossGray: {
    color: '#2c3e50',
    metalness: 0.4,
    roughness: 0.05,
    envMapIntensity: 2.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1
  },
  
  // Wood finishes with realistic colors
  oakWood: {
    color: '#deb887',
    metalness: 0.0,
    roughness: 0.7,
    envMapIntensity: 0.5,
    clearcoat: 0.3,
    clearcoatRoughness: 0.4
  },
  walnutWood: {
    color: '#5c4033',
    metalness: 0.0,
    roughness: 0.7,
    envMapIntensity: 0.5,
    clearcoat: 0.3,
    clearcoatRoughness: 0.4
  },
  
  // Matt finishes
  mattBlack: {
    color: '#1a1a1a',
    metalness: 0,
    roughness: 0.9,
    envMapIntensity: 0.3
  },
  mattWhite: {
    color: '#f5f5f5',
    metalness: 0,
    roughness: 0.9,
    envMapIntensity: 0.3
  },
  
  // Premium countertops
  granite: {
    color: '#2c3e50',
    metalness: 0.3,
    roughness: 0.4,
    envMapIntensity: 1.0,
    clearcoat: 0.5,
    clearcoatRoughness: 0.2
  },
  marble: {
    color: '#f5f5f5',
    metalness: 0.2,
    roughness: 0.3,
    envMapIntensity: 1.2,
    clearcoat: 0.8,
    clearcoatRoughness: 0.1
  }
};

export type MaterialKey = keyof typeof materials;