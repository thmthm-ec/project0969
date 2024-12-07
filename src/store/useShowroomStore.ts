import { create } from 'zustand';
import { KitchenCustomization, MaterialId } from '../types/materials';

export interface ShowroomState {
  activeKitchen: string;
  viewMode: 'overview' | 'detail';
  customizations: Record<string, KitchenCustomization>;
  setActiveKitchen: (kitchen: string) => void;
  setViewMode: (mode: 'overview' | 'detail') => void;
  updateCustomization: (kitchen: string, key: keyof KitchenCustomization, value: MaterialId | string) => void;
}

const defaultCustomization: KitchenCustomization = {
  cabinets: 'highGlossWhite',
  countertop: 'granite',
  handles: '#c0c0c0',
  lighting: 'warm'
};

export const useShowroomStore = create<ShowroomState>((set) => ({
  activeKitchen: 'modern',
  viewMode: 'overview',
  customizations: {
    modern: { ...defaultCustomization },
    luxury: { ...defaultCustomization, cabinets: 'highGlossGray', countertop: 'marble', handles: '#d4af37' },
    rustic: { ...defaultCustomization, cabinets: 'oakWood', handles: '#4a3728' },
    contemporary: { ...defaultCustomization, cabinets: 'mattBlack', countertop: 'marble' }
  },
  setActiveKitchen: (kitchen) => set({ activeKitchen: kitchen }),
  setViewMode: (mode) => set({ viewMode: mode }),
  updateCustomization: (kitchen, key, value) =>
    set((state) => ({
      customizations: {
        ...state.customizations,
        [kitchen]: {
          ...state.customizations[kitchen] || defaultCustomization,
          [key]: value
        }
      }
    }))
}));