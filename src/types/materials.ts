export type MaterialType = 'glossy' | 'matte' | 'wood' | 'stone';

export interface MaterialProperties {
  color: string;
  metalness: number;
  roughness: number;
  envMapIntensity: number;
  clearcoat?: number;
  clearcoatRoughness?: number;
}

export interface MaterialDefinition {
  type: MaterialType;
  properties: MaterialProperties;
}

export type MaterialId = 
  | 'highGlossWhite' 
  | 'highGlossGray' 
  | 'oakWood' 
  | 'walnutWood' 
  | 'mattBlack' 
  | 'mattWhite' 
  | 'granite' 
  | 'marble';

export interface KitchenCustomization {
  cabinets: MaterialId;
  countertop: MaterialId;
  handles: string;
  lighting: string;
}

export interface MaterialSet {
  cabinet: MaterialId;
  countertop: MaterialId;
  handle: string;
}