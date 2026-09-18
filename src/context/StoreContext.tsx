import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, Category, Scent, Ad, ThemeSettings } from '../types';
import { products as initialProducts, categories as initialCategories, scents as initialScents, ads as initialAds } from '../data';

interface StoreContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  scents: Scent[];
  setScents: React.Dispatch<React.SetStateAction<Scent[]>>;
  ads: Ad[];
  setAds: React.Dispatch<React.SetStateAction<Ad[]>>;
  theme: ThemeSettings;
  setTheme: React.Dispatch<React.SetStateAction<ThemeSettings>>;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('store_products');
    return saved ? JSON.parse(saved) : initialProducts;
  });
  
  const [categories, setCategories] = useState<Category[]>(() => {
    const saved = localStorage.getItem('store_categories');
    return saved ? JSON.parse(saved) : initialCategories;
  });
  
  const [scents, setScents] = useState<Scent[]>(() => {
    const saved = localStorage.getItem('store_scents');
    return saved ? JSON.parse(saved) : initialScents;
  });
  
  const [ads, setAds] = useState<Ad[]>(() => {
    const saved = localStorage.getItem('store_ads');
    return saved ? JSON.parse(saved) : initialAds;
  });

  const [theme, setTheme] = useState<ThemeSettings>(() => {
    const saved = localStorage.getItem('store_theme');
    return saved ? JSON.parse(saved) : {
      primaryColor: '#78350f', // amber-900
      fontFamily: 'Tajawal',
      storeName: 'أطياف'
    };
  });

  useEffect(() => { localStorage.setItem('store_products', JSON.stringify(products)); }, [products]);
  useEffect(() => { localStorage.setItem('store_categories', JSON.stringify(categories)); }, [categories]);
  useEffect(() => { localStorage.setItem('store_scents', JSON.stringify(scents)); }, [scents]);
  useEffect(() => { localStorage.setItem('store_ads', JSON.stringify(ads)); }, [ads]);
  useEffect(() => { localStorage.setItem('store_theme', JSON.stringify(theme)); }, [theme]);

  return (
    <StoreContext.Provider value={{
      products, setProducts,
      categories, setCategories,
      scents, setScents,
      ads, setAds,
      theme, setTheme
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within StoreProvider");
  return context;
};
