import { X, Gift, Trash2, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';

export function CartDrawer() {
  const { cart, removeFromCart, isCartOpen, setIsCartOpen, setIsCheckoutOpen } = useApp();

  if (!isCartOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity" onClick={() => setIsCartOpen(false)} />
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col transform transition-transform" dir="rtl">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2 text-gray-900">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="text-xl font-bold tracking-tight">سلة المشتريات</h2>
            <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-0.5 rounded-full">{cart.length}</span>
          </div>
          <button onClick={() => setIsCartOpen(false)} className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-4">
              <ShoppingBag className="w-16 h-16 opacity-20" />
              <p className="text-lg font-medium">السلة فارغة</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 relative group">
                <img src={item.product.imageUrl} alt={item.product.name} className="w-20 h-20 object-cover rounded-xl bg-white shadow-sm" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-900">{item.product.name}</h3>
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-rose-500 transition-colors p-1">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-amber-900 font-bold mt-1">{item.product.price} ر.س</p>
                  
                  {item.isGift && item.giftDetails && (
                    <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg p-2.5 text-xs">
                      <div className="flex items-center gap-1.5 text-amber-900 font-bold mb-1">
                        <Gift className="w-3.5 h-3.5" />
                        <span>طلب هدية</span>
                      </div>
                      <p className="text-gray-600 truncate">إلى: {item.giftDetails.receiverName}</p>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-white">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 font-medium">المجموع (غير شامل الضريبة)</span>
              <span className="text-2xl font-bold text-gray-900">{subtotal} ر.س</span>
            </div>
            <button 
              onClick={() => {
                setIsCartOpen(false);
                setIsCheckoutOpen(true);
              }} 
              className="w-full py-4 bg-amber-900 text-white rounded-xl font-bold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
            >
              إتمام الشراء
            </button>
          </div>
        )}
      </div>
    </>
  );
}
