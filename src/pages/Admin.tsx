import { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { LayoutDashboard, Package, Tag, Wind, Image, Settings, LogOut, Plus, Trash2, Edit2, Link } from 'lucide-react';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const { 
    products, setProducts, 
    categories, setCategories, 
    scents, setScents, 
    theme, setTheme 
  } = useStore();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin') {
      setIsAuthenticated(true);
    } else {
      alert('كلمة المرور غير صحيحة');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4" dir="rtl">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">تسجيل دخول الإدارة</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">كلمة المرور (admin)</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-900 focus:outline-none"
              />
            </div>
            <button type="submit" className="w-full bg-amber-900 text-white py-2 rounded-lg font-bold">
              دخول
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex" dir="rtl">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-l border-gray-200 flex flex-col h-screen sticky top-0">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-amber-900">لوحة الإدارة</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: 'dashboard', icon: LayoutDashboard, label: 'لوحة التحكم' },
            { id: 'products', icon: Package, label: 'المنتجات' },
            { id: 'categories', icon: Tag, label: 'الفئات' },
            { id: 'scents', icon: Wind, label: 'الروائح' },
            { id: 'settings', icon: Settings, label: 'الإعدادات' },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium text-right ${
                activeTab === item.id ? 'bg-amber-50 text-amber-900' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors font-medium"
          >
            <LogOut className="w-5 h-5" />
            تسجيل خروج
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">نظرة عامة</h2>
              <a href="/" target="_blank" className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm text-amber-900 font-medium hover:bg-gray-50 border border-gray-200">
                <Link className="w-4 h-4" />
                تصفح المتجر
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: 'إجمالي المنتجات', value: products.length, icon: Package },
                { label: 'المنتجات المميزة', value: products.filter(p => p.isFeatured).length, icon: Tag },
                { label: 'الأكثر مبيعاً', value: products.filter(p => p.isBestSeller).length, icon: LayoutDashboard },
                { label: 'عدد الفئات', value: categories.length, icon: Tag },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-900">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-xl font-bold">إدارة المنتجات</h2>
              <button className="flex items-center gap-2 bg-amber-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-900 transition-colors">
                <Plus className="w-4 h-4" />
                إضافة منتج جديد
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-right">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-sm font-bold text-gray-700">المنتج</th>
                    <th className="px-6 py-4 text-sm font-bold text-gray-700">السعر</th>
                    <th className="px-6 py-4 text-sm font-bold text-gray-700">الحالة</th>
                    <th className="px-6 py-4 text-sm font-bold text-gray-700">إجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {products.map(product => (
                    <tr key={product.id} className="hover:bg-gray-50/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={product.imageUrl} alt="" className="w-10 h-10 rounded-lg object-cover bg-gray-100" />
                          <span className="font-medium">{product.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-amber-900 font-bold">{product.price} ر.س</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button 
                            onClick={() => {
                              const newProducts = products.map(p => p.id === product.id ? {...p, isBestSeller: !p.isBestSeller} : p);
                              setProducts(newProducts);
                            }}
                            className={`px-2 py-1 rounded text-xs font-bold transition-colors ${product.isBestSeller ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
                          >الأكثر مبيعاً</button>
                          <button 
                            onClick={() => {
                              const newProducts = products.map(p => p.id === product.id ? {...p, isNewArrival: !p.isNewArrival} : p);
                              setProducts(newProducts);
                            }}
                            className={`px-2 py-1 rounded text-xs font-bold transition-colors ${product.isNewArrival ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
                          >وصل حديثاً</button>
                          <button 
                            onClick={() => {
                              const newProducts = products.map(p => p.id === product.id ? {...p, isFeatured: !p.isFeatured} : p);
                              setProducts(newProducts);
                            }}
                            className={`px-2 py-1 rounded text-xs font-bold transition-colors ${product.isFeatured ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
                          >مميز</button>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors"><Edit2 className="w-4 h-4" /></button>
                          <button 
                            onClick={() => {
                              if(confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
                                setProducts(products.filter(p => p.id !== product.id));
                              }
                            }}
                            className="p-1.5 text-gray-400 hover:text-red-600 transition-colors"
                          ><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 max-w-2xl">
            <h2 className="text-xl font-bold mb-6 border-b pb-4">إعدادات المتجر</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">اسم المتجر</label>
                <input 
                  type="text" 
                  value={theme.storeName}
                  onChange={(e) => setTheme({...theme, storeName: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">اللون الأساسي (Primary Color)</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="color" 
                    value={theme.primaryColor}
                    onChange={(e) => setTheme({...theme, primaryColor: e.target.value})}
                    className="w-12 h-12 p-1 bg-white border border-gray-200 rounded cursor-pointer"
                  />
                  <div className="flex gap-2">
                    {/* Pre-defined presets */}
                    {['#78350f', '#0f172a', '#166534', '#9f1239'].map(color => (
                      <button 
                        key={color}
                        onClick={() => setTheme({...theme, primaryColor: color})}
                        className="w-8 h-8 rounded-full border-2 border-white shadow-sm ring-1 ring-gray-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">الخط الأساسي</label>
                <select 
                  value={theme.fontFamily}
                  onChange={(e) => setTheme({...theme, fontFamily: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-900 focus:outline-none"
                >
                  <option value="Tajawal">Tajawal (تجوّل)</option>
                  <option value="Cairo">Cairo (كايرو)</option>
                  <option value="Almarai">Almarai (المراعي)</option>
                  <option value="system-ui">System Default (الافتراضي)</option>
                </select>
                <p className="text-sm text-gray-500 mt-2">ملاحظة: تأكد من إضافة الخطوط في index.html لتعمل بشكل صحيح.</p>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
