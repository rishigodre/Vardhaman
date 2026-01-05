// src/data/products.ts
import { IMAGES } from '@/config/cloudinary';


export interface ProductCategory {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  bgColor: string;
  image: string;
  gradient: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  features: string[];
  inStock: boolean;
}
//
//  broad product categories -
//  mattress, curtains, wallpaper, carpet, blinds(roller and vertical), glassfilm, headboard
//
export const productCategories: ProductCategory[] = [
  {
    id: 'wallpapers',
    name: 'Wallpapers',
    shortDescription: 'Art for your walls',
    description: 'Designer wallpapers to transform your walls',
    bgColor: 'bg-emerald-50',
    image: IMAGES.categories.wallpapers,
    gradient: 'from-purple-500/90 to-pink-600/90',
    icon: '🎨',
  },
  {
    id: 'mattresses',
    name: 'Mattresses',
    shortDescription: 'Sleep in luxury',
    description: 'Comfortable mattresses for better sleep',
    bgColor: 'bg-slate-100',
    image: IMAGES.categories.mattresses,
    gradient: 'from-blue-500/90 to-indigo-600/90',
    icon: '🛌',
  },
  {
    id: 'carpets',
    name: 'Carpets',
    shortDescription: 'Elegance woven in',
    description: 'Luxurious carpet collections for every space',
    bgColor: 'bg-stone-100',
    image: IMAGES.categories.carpets,
    gradient: 'from-burgundy-600/90 to-rose-700/90',
    icon: '🧶',
  },
  {
    id: 'blinds',
    name: 'Blinds',
    shortDescription: 'Transform your spaces',
    description: 'Stylish blinds offering privacy, light control, and elegance.',
    bgColor: 'bg-emerald-50',
    image: IMAGES.categories.blinds,
    gradient: 'from-emerald-600/90 to-teal-600/90',
    icon: '🪟',
  },
  {
    id: 'glassfilm',
    name: 'Glass-film',
    shortDescription: 'Privacy meets durability',
    description: 'Decorative glass films designed for privacy and modern style.',
    bgColor: 'bg-emerald-50',
    image: IMAGES.categories.glassfilm,
    gradient: 'from-teal-600/90 to-cyan-600/90',
    icon: '🪟',
  },

  {
    id: 'headboards',
    name: 'Headboards',
    shortDescription: 'Elegance woven in',
    description: 'Stylish headboards crafted for comfort and refined bedroom appeal.',
    bgColor: 'bg-stone-100',
    image: IMAGES.categories.headboards,
    gradient: 'from-burgundy-600/90 to-rose-700/90',
    icon: '🛏️',
  }

];

export const products: Product[] = [
  // Foam Products
  {
    id: 'foam-1',
    name: 'Premium Memory Foam',
    category: 'foam',
    description: 'High-density memory foam for superior comfort',
    price: 2999,
    features: ['High density', 'Temperature sensitive', 'Durable'],
    inStock: true,
  },
  // Add more products as needed
];

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(product => product.category === categoryId);
}

export function getProductById(productId: string): Product | undefined {
  return products.find(product => product.id === productId);
}