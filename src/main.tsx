import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Dev log to confirm backend base URL
// eslint-disable-next-line no-console
console.debug('API Base URL:', (import.meta as any)?.env?.VITE_API_BASE_URL || 'http://77.237.243.20:3000');
