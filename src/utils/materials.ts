import { MaterialDefinition, MaterialId } from '../types/materials';
import { materials } from '../data/materials';

export const getMaterialProps = (materialId: MaterialId): MaterialDefinition['properties'] => {
  const material = materials[materialId];
  if (!material) {
    throw new Error(`Material ${materialId} not found`);
  }
  return material.properties;
};

export const createMaterial = (materialId: MaterialId): MaterialDefinition => {
  const material = materials[materialId];
  if (!material) {
    throw new Error(`Material ${materialId} not found`);
  }
  return material;
};