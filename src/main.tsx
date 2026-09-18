import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AppProvider } from './context/AppContext.tsx';
import { StoreProvider } from './context/StoreContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </StoreProvider>
  </StrictMode>,
);
