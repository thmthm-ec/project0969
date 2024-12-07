import { MaterialKey } from '../Materials/KitchenMaterials';

interface StyleConfig {
  cabinets: MaterialKey;
  countertop: MaterialKey;
  handles: string;
  label: string;
  description: string;
  features: string[];
  price: {
    base: number;
    premium: number;
  };
}

export const kitchenStyles: Record<string, StyleConfig> = {
  modern: {
    cabinets: 'highGlossWhite',
    countertop: 'granite',
    handles: '#c0c0c0',
    label: 'Modern Collection',
    description: 'Sleek and minimalist design with clean lines and high-gloss finishes',
    features: [
      'Handle-less cabinet options',
      'LED under-cabinet lighting',
      'Soft-close drawers and doors',
      'Integrated appliances'
    ],
    price: {
      base: 15000,
      premium: 25000
    }
  },
  luxury: {
    cabinets: 'highGlossGray',
    countertop: 'marble',
    handles: '#d4af37',
    label: 'Luxury Series',
    description: 'Premium materials and exquisite craftsmanship for the discerning homeowner',
    features: [
      'Custom-made cabinets',
      'Premium stone countertops',
      'Gold-plated hardware',
      'Smart appliance integration'
    ],
    price: {
      base: 25000,
      premium: 40000
    }
  },
  rustic: {
    cabinets: 'oakWood',
    countertop: 'granite',
    handles: '#4a3728',
    label: 'Rustic Charm',
    description: 'Warm and inviting spaces with natural materials and traditional craftsmanship',
    features: [
      'Solid wood construction',
      'Hand-finished surfaces',
      'Farmhouse sink options',
      'Vintage-style hardware'
    ],
    price: {
      base: 18000,
      premium: 30000
    }
  },
  contemporary: {
    cabinets: 'mattBlack',
    countertop: 'marble',
    handles: '#c0c0c0',
    label: 'Contemporary Elite',
    description: 'Bold, modern designs with a perfect balance of form and function',
    features: [
      'Mixed material finishes',
      'Modular storage solutions',
      'Smart lighting systems',
      'Premium appliance packages'
    ],
    price: {
      base: 20000,
      premium: 35000
    }
  }
};