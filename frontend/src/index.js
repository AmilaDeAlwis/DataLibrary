import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GdpContextProvider } from './context/GdpContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GdpContextProvider>
        <App />
      </GdpContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);