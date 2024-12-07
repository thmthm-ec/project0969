import { MaterialId } from '../types/materials';

export interface KitchenStyle {
  id: string;
  label: string;
  description: string;
  features: string[];
  price: {
    base: number;
    premium: number;
  };
}

export const kitchenStyles: Record<string, KitchenStyle> = {
  modern: {
    id: 'modern',
    label: 'Collection Moderne',
    description: 'Design élégant et minimaliste avec des lignes épurées et des finitions brillantes',
    features: [
      'Options d\'armoires sans poignées',
      'Éclairage LED sous les armoires',
      'Tiroirs et portes à fermeture douce',
      'Appareils intégrés'
    ],
    price: {
      base: 15000,
      premium: 25000
    }
  },
  luxury: {
    id: 'luxury',
    label: 'Série Luxe',
    description: 'Matériaux haut de gamme et fabrication exquise pour le propriétaire exigeant',
    features: [
      'Armoires sur mesure',
      'Plans de travail en pierre premium',
      'Quincaillerie plaquée or',
      'Intégration d\'appareils intelligents'
    ],
    price: {
      base: 25000,
      premium: 40000
    }
  },
  rustic: {
    id: 'rustic',
    label: 'Charme Rustique',
    description: 'Espaces chaleureux et accueillants avec des matériaux naturels et un savoir-faire traditionnel',
    features: [
      'Construction en bois massif',
      'Surfaces finies à la main',
      'Options d\'évier de ferme',
      'Quincaillerie style vintage'
    ],
    price: {
      base: 18000,
      premium: 30000
    }
  },
  contemporary: {
    id: 'contemporary',
    label: 'Élite Contemporaine',
    description: 'Designs modernes audacieux avec un équilibre parfait entre forme et fonction',
    features: [
      'Finitions en matériaux mixtes',
      'Solutions de rangement modulaires',
      'Systèmes d\'éclairage intelligent',
      'Ensembles d\'appareils premium'
    ],
    price: {
      base: 20000,
      premium: 35000
    }
  }
};