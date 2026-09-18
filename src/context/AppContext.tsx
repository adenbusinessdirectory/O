import { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Product, GiftDetails } from '../types';

interface AppContextType {
  cart: CartItem[];
  addToCart: (product: Product, isGift?: boolean, giftDetails?: GiftDetails) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (v: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (v: boolean) => void;
  isTrackingOpen: boolean;
  setIsTrackingOpen: (v: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);

  const addToCart = (product: Product, isGift = false, giftDetails?: GiftDetails) => {
    setCart(prev => [
      ...prev,
      {
        id: Math.random().toString(36).substr(2, 9),
        product,
        quantity: 1,
        isGift,
        giftDetails
      }
    ]);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };
  
  const clearCart = () => setCart([]);

  return (
    <AppContext.Provider value={{
      cart, addToCart, removeFromCart, clearCart,
      isCartOpen, setIsCartOpen,
      isCheckoutOpen, setIsCheckoutOpen,
      isTrackingOpen, setIsTrackingOpen
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};
