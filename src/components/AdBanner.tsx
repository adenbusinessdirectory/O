import { Ad } from '../types';

interface AdBannerProps {
  ad: Ad;
}

export function AdBanner({ ad }: AdBannerProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-lg group">
        {ad.type === 'image' ? (
          <img 
            src={ad.url} 
            alt="إعلان" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <video 
            src={ad.url} 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-6 right-8 text-white">
          <h2 className="text-3xl font-bold mb-2">عروض حصرية</h2>
          <p className="text-white/90">اكتشف أحدث العطور بأسعار مميزة</p>
          <button className="mt-4 px-6 py-2 bg-white text-gray-900 rounded-full font-medium hover:bg-amber-50 transition-colors">
            تسوق الآن
          </button>
        </div>
      </div>
    </div>
  );
}
