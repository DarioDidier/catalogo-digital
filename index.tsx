
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const renderApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("No se encontró el elemento root");
    return;
  }

  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// Asegurar que el DOM esté listo antes de renderizar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
