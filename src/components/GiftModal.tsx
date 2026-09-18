import { useState } from 'react';
import { X, Gift } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';

interface GiftModalProps {
  product: Product;
  onClose: () => void;
}

export function GiftModal({ product, onClose }: GiftModalProps) {
  const { addToCart } = useApp();
  const [formData, setFormData] = useState({
    senderName: '',
    receiverName: '',
    receiverPhone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToCart(product, true, formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative" dir="rtl">
        <button onClick={onClose} className="absolute top-4 left-4 p-2 text-gray-400 hover:text-gray-900 bg-gray-50 rounded-full transition-colors">
          <X className="w-5 h-5" />
        </button>
        
        <div className="p-6 pb-0">
          <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-4 text-amber-900">
            <Gift className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">إرسال كهدية</h2>
          <p className="text-gray-500 mt-1 text-sm">أضف لمسة شخصية لهديتك مع رسالة خاصة</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-bold text-gray-700 mb-1">اسم المرسل</label>
              <input required type="text" value={formData.senderName} onChange={e => setFormData({...formData, senderName: e.target.value})} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-900/20 focus:border-amber-900 transition-all" placeholder="اسمك" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-bold text-gray-700 mb-1">اسم المستلم</label>
              <input required type="text" value={formData.receiverName} onChange={e => setFormData({...formData, receiverName: e.target.value})} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-900/20 focus:border-amber-900 transition-all" placeholder="اسم المهدى إليه" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">رقم هاتف المستلم</label>
            <input required type="tel" value={formData.receiverPhone} onChange={e => setFormData({...formData, receiverPhone: e.target.value})} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-900/20 focus:border-amber-900 transition-all" placeholder="05xxxxxxxx" dir="ltr" />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">رسالة الإهداء</label>
            <textarea required rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-900/20 focus:border-amber-900 transition-all resize-none" placeholder="اكتب رسالتك هنا..."></textarea>
          </div>

          <div className="pt-4 flex gap-3">
            <button type="submit" className="flex-1 py-3 bg-amber-900 text-white rounded-xl font-bold hover:bg-gray-900 transition-colors">
              إضافة للسلة
            </button>
            <button type="button" onClick={onClose} className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors">
              إلغاء
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
