export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  isBestSeller: boolean;
  isNewArrival: boolean;
  isFeatured: boolean;
  categoryId: string;
}

export interface ThemeSettings {
  primaryColor: string;
  fontFamily: string;
  storeName: string;
}

export interface GiftDetails {
  senderName: string;
  receiverName: string;
  receiverPhone: string;
  message: string;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  isGift: boolean;
  giftDetails?: GiftDetails;
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Scent {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Ad {
  id: string;
  type: 'image' | 'video';
  url: string;
}
