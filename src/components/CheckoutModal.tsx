import { useState } from 'react';
import { X, CheckCircle2, Ticket } from 'lucide-react';
import { useApp } from '../context/AppContext';

export function CheckoutModal() {
  const { cart, isCheckoutOpen, setIsCheckoutOpen, clearCart, setIsTrackingOpen } = useApp();
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isCheckoutOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const discount = discountApplied ? subtotal * 0.15 : 0;
  const shipping = 30;
  const total = subtotal - discount + shipping;

  const handleApplyDiscount = (e: React.FormEvent) => {
    e.preventDefault();
    if (discountCode.toLowerCase() === 'atyaf15') {
      setDiscountApplied(true);
    }
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setIsCheckoutOpen(false);
      clearCart();
      setIsTrackingOpen(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white" dir="rtl">
        <div className="text-center animate-in fade-in zoom-in duration-500">
          <CheckCircle2 className="w-24 h-24 text-emerald-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">تم استلام طلبك بنجاح!</h2>
          <p className="text-gray-500">جاري تحويلك لتتبع الطلب...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm" dir="rtl">
      <div className="bg-gray-50 rounded-3xl w-full max-w-4xl h-[90vh] flex flex-col md:flex-row overflow-hidden shadow-2xl relative">
        <button onClick={() => setIsCheckoutOpen(false)} className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-900 bg-white shadow-sm rounded-full transition-colors md:left-4 md:right-auto">
          <X className="w-5 h-5" />
        </button>

        {/* Form Section */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">إتمام الطلب</h2>
          
          <form id="checkout-form" onSubmit={handleCheckout} className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">بيانات العميل</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">الاسم الكامل</label>
                  <input required type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-900/20 focus:border-amber-900" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">رقم الجوال</label>
                  <input required type="tel" dir="ltr" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-900/20 focus:border-amber-900 text-right" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1">البريد الإلكتروني</label>
                  <input required type="email" dir="ltr" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-900/20 focus:border-amber-900 text-right" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">عنوان التوصيل</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">المدينة</label>
                  <input required type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-900/20 focus:border-amber-900" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">الحي</label>
                  <input required type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-900/20 focus:border-amber-900" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1">الشارع / وصف إضافي</label>
                  <input required type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-900/20 focus:border-amber-900" />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="w-full md:w-96 bg-gray-50 p-6 md:p-10 border-r border-gray-100 flex flex-col h-full overflow-y-auto">
          <h3 className="text-lg font-bold text-gray-900 mb-6">ملخص الطلب</h3>
          
          <div className="flex-1 space-y-4 mb-6">
            {cart.map(item => (
              <div key={item.id} className="flex items-center gap-3">
                <img src={item.product.imageUrl} alt={item.product.name} className="w-14 h-14 rounded-lg object-cover bg-white shadow-sm" />
                <div className="flex-1">
                  <p className="font-bold text-sm text-gray-900 line-clamp-1">{item.product.name}</p>
                  <p className="text-gray-500 text-xs">الكمية: {item.quantity}</p>
                </div>
                <p className="font-bold text-sm text-amber-900">{item.product.price} ر.س</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-6 space-y-4">
            <form onSubmit={handleApplyDiscount} className="flex gap-2">
              <input 
                type="text" 
                placeholder="كود الخصم (ATYAF15)" 
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                className="flex-1 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-900 uppercase" 
              />
              <button type="submit" className="px-4 py-2 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition-colors">
                تطبيق
              </button>
            </form>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>المجموع الفرعي</span>
                <span>{subtotal} ر.س</span>
              </div>
              {discountApplied && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>الخصم (15%)</span>
                  <span>-{discount} ر.س</span>
                </div>
              )}
              <div className="flex justify-between text-gray-600">
                <span>رسوم الشحن</span>
                <span>{shipping} ر.س</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 flex justify-between items-center mb-6">
              <span className="font-bold text-gray-900">الإجمالي</span>
              <span className="text-2xl font-bold text-amber-900">{total} ر.س</span>
            </div>

            <button type="submit" form="checkout-form" className="w-full py-4 bg-amber-900 text-white rounded-xl font-bold text-lg hover:bg-gray-900 transition-colors shadow-lg shadow-amber-900/20">
              تأكيد الطلب
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
