import { Search, ShoppingCart, Heart, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useStore } from '../context/StoreContext';

export function Header() {
  const { cart, setIsCartOpen, setIsTrackingOpen } = useApp();
  const { theme } = useStore();
  
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Right side: Logo and Name (RTL context makes this the logical start) */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-900 text-amber-50 rounded-full flex items-center justify-center text-xl font-bold">
              {theme.storeName.charAt(0)}
            </div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{theme.storeName}</h1>
          </div>

          {/* Left side: Actions */}
          <div className="flex items-center gap-5">
            <button className="text-gray-600 hover:text-amber-900 transition-colors p-2" aria-label="البحث">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={() => setIsTrackingOpen(true)} className="text-gray-600 hover:text-amber-900 transition-colors p-2 flex items-center gap-2" aria-label="تتبع الطلب">
              <MapPin className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-medium">تتبع الطلب</span>
            </button>
            <button className="text-gray-600 hover:text-amber-900 transition-colors p-2 relative" aria-label="المفضلات">
              <Heart className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
            </button>
            <button onClick={() => setIsCartOpen(true)} className="text-gray-600 hover:text-amber-900 transition-colors p-2 relative" aria-label="السلة">
              <ShoppingCart className="w-5 h-5" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-900 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 pb-4 overflow-x-auto no-scrollbar text-sm font-medium text-gray-600">
          <a href="#home" className="text-amber-900 font-bold whitespace-nowrap">الرئيسية (Home)</a>
          <a href="#products" className="hover:text-amber-900 transition-colors whitespace-nowrap">المنتجات (Products)</a>
          <a href="#categories" className="hover:text-amber-900 transition-colors whitespace-nowrap">الفئات (Categories)</a>
          <a href="#scents" className="hover:text-amber-900 transition-colors whitespace-nowrap">الروائح (Scents)</a>
          <a href="#offers" className="hover:text-amber-900 transition-colors whitespace-nowrap">العروض (Offers)</a>
          <a href="#trending" className="hover:text-amber-900 transition-colors whitespace-nowrap">الرائج (Trending)</a>
        </nav>
      </div>
    </header>
  );
}
