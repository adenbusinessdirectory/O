import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductSectionProps {
  title: string;
  products: Product[];
  showMoreButton?: boolean;
}

export function ProductSection({ title, products, showMoreButton = false }: ProductSectionProps) {
  if (!products.length) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900 relative inline-block">
          {title}
          <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-amber-900 rounded-full"></span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {showMoreButton && (
        <div className="mt-10 flex justify-center">
          <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-bold rounded-full hover:bg-gray-900 hover:text-white transition-colors">
            إظهار المزيد
          </button>
        </div>
      )}
    </section>
  );
}
