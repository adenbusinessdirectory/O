import { X, Package, Truck, CheckCircle, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';

export function TrackingModal() {
  const { isTrackingOpen, setIsTrackingOpen } = useApp();

  if (!isTrackingOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm" dir="rtl">
      <div className="bg-gray-50 rounded-3xl w-full max-w-3xl h-[85vh] flex flex-col overflow-hidden shadow-2xl relative">
        <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-900">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 tracking-tight">تتبع الطلب</h2>
              <p className="text-sm text-gray-500 font-medium font-mono">#ATYAF-98234</p>
            </div>
          </div>
          <button onClick={() => setIsTrackingOpen(false)} className="p-2 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8">
          
          {/* Tracking Stepper */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-8 text-lg">حالة الشحنة</h3>
            <div className="relative">
              <div className="absolute top-1/2 right-0 left-0 h-1 bg-gray-100 -translate-y-1/2 rounded-full overflow-hidden">
                <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-amber-900 rounded-full"></div>
              </div>
              <div className="relative flex justify-between">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-amber-900 text-white flex items-center justify-center relative z-10 border-4 border-white shadow-sm">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-gray-900">تم الطلب</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-amber-900 text-white flex items-center justify-center relative z-10 border-4 border-white shadow-sm">
                    <Package className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-amber-900">قيد التجهيز</span>
                </div>
                <div className="flex flex-col items-center gap-2 opacity-50">
                  <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center relative z-10 border-4 border-white">
                    <Truck className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-gray-500">جاري التوصيل</span>
                </div>
                <div className="flex flex-col items-center gap-2 opacity-50">
                  <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center relative z-10 border-4 border-white">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-gray-500">تم التسليم</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Shipping Info */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <h3 className="font-bold text-gray-900 border-b border-gray-100 pb-3">بيانات الشحن</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">المستلم</span>
                  <span className="font-bold text-gray-900">أحمد محمد</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">رقم الجوال</span>
                  <span className="font-bold text-gray-900" dir="ltr">+966 50 123 4567</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">العنوان</span>
                  <span className="font-bold text-gray-900">الرياض، حي العليا</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-gray-500">وقت التوصيل المتوقع</span>
                  <span className="flex items-center gap-1 font-bold text-amber-900 bg-amber-50 px-2 py-1 rounded">
                    <Clock className="w-3.5 h-3.5" />
                    غداً, 4:00 م
                  </span>
                </div>
              </div>
            </div>

            {/* Invoice Summary */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <h3 className="font-bold text-gray-900 border-b border-gray-100 pb-3">الفاتورة</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">طريقة الدفع</span>
                  <span className="font-bold text-gray-900">البطاقة الائتمانية</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>المجموع الفرعي</span>
                  <span>420 ر.س</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>رسوم الشحن</span>
                  <span>30 ر.س</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-gray-100">
                  <span className="font-bold text-gray-900">الإجمالي المدفوع</span>
                  <span className="font-bold text-amber-900 text-lg">450 ر.س</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
