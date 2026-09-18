import { Heart, ShoppingBag, Gift } from 'lucide-react';
import { useState } from 'react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import { GiftModal } from './GiftModal';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useApp();
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {product.isBestSeller && (
            <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
              الأكثر مبيعاً
            </span>
          )}
          {product.isNewArrival && (
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
              وصل حديثاً
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button className="absolute top-3 left-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-rose-500 hover:bg-white transition-colors opacity-0 group-hover:opacity-100">
          <Heart className="w-5 h-5" />
        </button>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">عطر فاخر يجسد الأصالة والفخامة</p>
        
        <div className="mt-auto flex flex-col gap-3">
          <span className="text-xl font-bold text-amber-900">
            {product.price} <span className="text-sm text-gray-500 font-normal">ر.س</span>
          </span>
          <div className="flex items-center gap-2">
            <button onClick={() => addToCart(product)} className="flex-1 flex items-center justify-center gap-2 p-2.5 bg-gray-900 text-white rounded-xl hover:bg-amber-900 transition-colors font-bold text-sm">
              <ShoppingBag className="w-4 h-4" />
              أضف
            </button>
            <button onClick={() => setIsGiftOpen(true)} className="flex-1 flex items-center justify-center gap-2 p-2.5 bg-amber-50 text-amber-900 rounded-xl hover:bg-amber-100 transition-colors font-bold text-sm" aria-label="شراء كهدية">
              <Gift className="w-4 h-4" />
              كهدية
            </button>
          </div>
        </div>
      </div>
      {isGiftOpen && <GiftModal product={product} onClose={() => setIsGiftOpen(false)} />}
    </div>
  );
}
