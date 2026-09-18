import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Storefront from './pages/Storefront';
import Admin from './pages/Admin';
import { useStore } from './context/StoreContext';

export default function App() {
  const { theme } = useStore();

  return (
    <>
      <style>{`
        :root {
          --primary-color: ${theme.primaryColor};
          --font-family: '${theme.fontFamily}', sans-serif;
        }
        body {
          font-family: var(--font-family);
        }
        .bg-amber-900, .hover\\:bg-amber-900:hover, .bg-amber-900\\/20, .group-hover\\:border-amber-900:hover {
          background-color: var(--primary-color) !important;
        }
        .text-amber-900, .hover\\:text-amber-900:hover {
          color: var(--primary-color) !important;
        }
        .border-amber-900, .focus\\:border-amber-900:focus, .focus\\:ring-amber-900\\/20:focus {
          border-color: var(--primary-color) !important;
        }
        .ring-amber-900 {
          --tw-ring-color: var(--primary-color) !important;
        }
        /* Fallbacks for bg opacity where necessary might not map perfectly with !important, but covers mostly */
      `}</style>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Storefront />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
