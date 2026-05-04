import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // Mantenemos el HashRouter para que funcionen las pestañas
import Inicio from './pages/Inicio.jsx';

// Importa tus componentes de estructura
import Header from './components/Header'; 
import Footer from './components/Footer'; 

// VOLVEMOS AL ARCHIVO ÚNICO (El que sí existe)
import './css/estilos.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter> 
      <Header /> 
      
      <Inicio />
      
      <Footer /> 
    </HashRouter>
  </React.StrictMode>
);