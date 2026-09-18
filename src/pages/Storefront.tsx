import { Header } from '../components/Header';
import { Marquee } from '../components/Marquee';
import { AdBanner } from '../components/AdBanner';
import { CategoryShortcuts } from '../components/CategoryShortcuts';
import { ProductSection } from '../components/ProductSection';
import { ScentSection } from '../components/ScentSection';
import { Footer } from '../components/Footer';
import { CartDrawer } from '../components/CartDrawer';
import { CheckoutModal } from '../components/CheckoutModal';
import { TrackingModal } from '../components/TrackingModal';
import { useStore } from '../context/StoreContext';

export default function Storefront() {
  const { products, ads, theme } = useStore();

  const bestSellers = products.filter(p => p.isBestSeller);
  const newArrivals = products.filter(p => p.isNewArrival);
  const featured = products.filter(p => p.isFeatured);
  
  // Custom categories based on user requirements (العطور الشرقية, ابراق, دخوني)
  const orientalPerfumes = products.filter(p => p.categoryId === 'c-1').slice(0, 4);
  const abraqPerfumes = products.filter(p => p.categoryId === 'c-2').slice(0, 4);
  const dakhouniPerfumes = products.filter(p => p.categoryId === 'c-3').slice(0, 4);

  const youMayLikeProducts = products.slice(1, 5);

  return (
    <div className={`min-h-screen bg-white text-gray-900`} dir="rtl">
      <Header />
      
      <main id="home">
        {/* Marquee appears right below header */}
        <Marquee />
        
        {/* First Ad Banner */}
        <div id="offers">
          <AdBanner ad={ads[0]} />
        </div>
        
        {/* Category Shortcuts */}
        <div id="categories">
          <CategoryShortcuts />
        </div>
        
        {/* Second Ad Banner */}
        <AdBanner ad={ads[1]} />
        
        {/* Best Sellers */}
        <div id="trending">
          <ProductSection title="الأكثر مبيعاً" products={bestSellers} />
        </div>
        
        {/* New Arrivals */}
        <div id="products">
          <ProductSection title="وصل حديثاً" products={newArrivals} />
        </div>
        
        {/* Scents */}
        <div id="scents">
          <ScentSection />
        </div>
        
        {/* Featured Products */}
        <ProductSection title="منتجات مميزة" products={featured} />
        
        {/* Optional Categories Sections (Admin managed) */}
        <div className="bg-gray-50 py-8 border-y border-gray-100 my-16">
          <div className="text-center mb-4">
            <h2 className="text-xl text-gray-500 font-medium">أقسام مختارة من الإدارة</h2>
          </div>
          
          <ProductSection 
            title="العطور الشرقية" 
            products={orientalPerfumes} 
            showMoreButton={true} 
          />
          
          <div className="h-px w-full max-w-5xl mx-auto bg-gray-200 my-12" />
          
          <ProductSection 
            title="ابراق" 
            products={abraqPerfumes} 
            showMoreButton={true} 
          />
          
          <div className="h-px w-full max-w-5xl mx-auto bg-gray-200 my-12" />
          
          <ProductSection 
            title="دخوني" 
            products={dakhouniPerfumes} 
            showMoreButton={true} 
          />
        </div>
        
        {/* You May Also Like */}
        <ProductSection title="منتجات قد تعجبك" products={youMayLikeProducts} />
        
        {/* Third Ad Banner */}
        <AdBanner ad={ads[2]} />
      </main>
      
      <Footer />
      
      <CartDrawer />
      <CheckoutModal />
      <TrackingModal />
    </div>
  );
}
