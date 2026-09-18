import { Product, Category, Scent, Ad } from './types';

export const ads: Ad[] = [
  {
    id: 'ad-1',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=2000&h=800', // Perfume splash/banner
  },
  {
    id: 'ad-2',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80&w=2000&h=800',
  },
  {
    id: 'ad-3',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=2000&h=800',
  }
];

export const categories: Category[] = [
  { id: 'c-1', name: 'العطور الشرقية', imageUrl: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=400' },
  { id: 'c-2', name: 'ابراق', imageUrl: 'https://images.unsplash.com/photo-1595532542520-50a1b6500cc6?auto=format&fit=crop&q=80&w=400' },
  { id: 'c-3', name: 'دخوني', imageUrl: 'https://images.unsplash.com/photo-1608528577891-eb05ebecbb0a?auto=format&fit=crop&q=80&w=400' },
  { id: 'c-4', name: 'عطور صيفية', imageUrl: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&q=80&w=400' },
];

export const scents: Scent[] = [
  { id: 's-1', name: 'عود', imageUrl: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=200' },
  { id: 's-2', name: 'مسك', imageUrl: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80&w=200' },
  { id: 's-3', name: 'عنبر', imageUrl: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=200' },
  { id: 's-4', name: 'ورد', imageUrl: 'https://images.unsplash.com/photo-1550005975-f0bb0f8623dd?auto=format&fit=crop&q=80&w=200' },
  { id: 's-5', name: 'صندل', imageUrl: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&q=80&w=200' },
  { id: 's-6', name: 'ياسمين', imageUrl: 'https://images.unsplash.com/photo-1595532542520-50a1b6500cc6?auto=format&fit=crop&q=80&w=200' },
];

export const products: Product[] = [
  {
    id: 'p-1',
    name: 'عطر ليالي الشرق',
    price: 350,
    imageUrl: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true,
    categoryId: 'c-1',
  },
  {
    id: 'p-2',
    name: 'مسك الامراء',
    price: 420,
    imageUrl: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    isNewArrival: true,
    isFeatured: false,
    categoryId: 'c-2',
  },
  {
    id: 'p-3',
    name: 'دخون فاخر',
    price: 280,
    imageUrl: 'https://images.unsplash.com/photo-1608528577891-eb05ebecbb0a?auto=format&fit=crop&q=80&w=600',
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: true,
    categoryId: 'c-3',
  },
  {
    id: 'p-4',
    name: 'عطر ابراق الملكي',
    price: 550,
    imageUrl: 'https://images.unsplash.com/photo-1595532542520-50a1b6500cc6?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true,
    categoryId: 'c-2',
  },
  {
    id: 'p-5',
    name: 'عنبر الصيف',
    price: 190,
    imageUrl: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&q=80&w=600',
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: false,
    categoryId: 'c-4',
  },
  {
    id: 'p-6',
    name: 'عود الخشب',
    price: 600,
    imageUrl: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true,
    categoryId: 'c-1',
  },
  {
    id: 'p-7',
    name: 'ورد طائفي',
    price: 320,
    imageUrl: 'https://images.unsplash.com/photo-1550005975-f0bb0f8623dd?auto=format&fit=crop&q=80&w=600',
    isBestSeller: false,
    isNewArrival: false,
    isFeatured: false,
    categoryId: 'c-4',
  },
  {
    id: 'p-8',
    name: 'دخون الشيوخ',
    price: 480,
    imageUrl: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    isNewArrival: true,
    isFeatured: true,
    categoryId: 'c-3',
  },
  // Extra products for categories section
  {
    id: 'p-9',
    name: 'عطر الشرق الكلاسيكي',
    price: 310,
    imageUrl: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600',
    isBestSeller: false,
    isNewArrival: false,
    isFeatured: false,
    categoryId: 'c-1',
  },
  {
    id: 'p-10',
    name: 'عطر ابراق نهار',
    price: 490,
    imageUrl: 'https://images.unsplash.com/photo-1594824436951-7f12bc556488?auto=format&fit=crop&q=80&w=600',
    isBestSeller: false,
    isNewArrival: false,
    isFeatured: false,
    categoryId: 'c-2',
  },
  {
    id: 'p-11',
    name: 'دخون هادئ',
    price: 210,
    imageUrl: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=600',
    isBestSeller: false,
    isNewArrival: false,
    isFeatured: false,
    categoryId: 'c-3',
  }
];

export const youMayLikeProducts = products.slice(1, 5);
