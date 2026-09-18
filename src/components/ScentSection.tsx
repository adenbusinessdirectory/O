import { useStore } from '../context/StoreContext';

export function ScentSection() {
  const { scents } = useStore();
  
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 py-12 bg-amber-50/50 rounded-3xl">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900">تسوق حسب الرائحة</h2>
        <p className="text-gray-500 mt-2">اكتشف العطور التي تناسب ذوقك</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {scents.map((scent) => (
          <div key={scent.id} className="flex flex-col items-center gap-3 cursor-pointer group">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-amber-900 transition-all p-1">
              <img 
                src={scent.imageUrl} 
                alt={scent.name} 
                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <span className="font-medium text-gray-800 group-hover:text-amber-900 transition-colors">
              {scent.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
