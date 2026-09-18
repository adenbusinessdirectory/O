import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export function Footer() {
  const { theme } = useStore();
  
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-900 text-amber-50 rounded-full flex items-center justify-center text-lg font-bold">
                {theme.storeName.charAt(0)}
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">{theme.storeName}</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              متجر {theme.storeName} هو وجهتك الأولى للعطور الفاخرة. نقدم تشكيلة واسعة من العطور الشرقية والغربية والعود والبخور لتناسب جميع الأذواق.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-900 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-900 transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-900 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">روابط سريعة</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-amber-500 transition-colors">عن متجرنا</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">تتبع طلبك</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">طرق الدفع</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">السياسات</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-amber-500 transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">سياسة الاستبدال والاسترجاع</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">الشروط والأحكام</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">سياسة الشحن</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-sm">المملكة العربية السعودية، الرياض، شارع التحلية</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-sm" dir="ltr">+966 50 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-sm">support@areej-store.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} متجر {theme.storeName} للعطور. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-2">
            {/* Mock payment methods */}
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center text-xs font-bold text-blue-900">Mada</div>
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center text-xs font-bold text-orange-600">Visa</div>
            <div className="w-12 h-8 bg-[#000000] rounded flex items-center justify-center text-xs font-bold text-white">ApplePay</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
