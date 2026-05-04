import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // <--- El que me acabas de pasar
import './css/estilos.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);