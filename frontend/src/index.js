import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GdpContextProvider } from './context/GdpContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GdpContextProvider>
      <App />
    </GdpContextProvider>
  </React.StrictMode>
);