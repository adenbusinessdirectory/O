import { useStore } from '../context/StoreContext';

export function CategoryShortcuts() {
  const { categories } = useStore();
  
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">تسوق حسب الفئة</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
          >
            <img 
              src={category.imageUrl} 
              alt={category.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold tracking-wide">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
