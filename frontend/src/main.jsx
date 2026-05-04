import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes de estructura
import Header from './components/Header'; 
import Footer from './components/Footer'; 

// Páginas (Asegúrate de tener estos archivos o componentes)
import Inicio from './pages/Inicio.jsx';
// Aquí deberías importar el componente que muestra los planes, por ejemplo:
// import PlanesPage from './pages/PlanesPage.jsx'; 

import './css/estilos.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header /> 
      
      <main id="app-wrapper">
        <Routes>
          {/* RUTA PARA EL INICIO */}
          <Route path="/" element={<Inicio />} />

          {/* RUTA PARA LOS PLANES (Aquí es donde fallaba) */}
          {/* Si no tienes un componente separado, puedes reusar Inicio o crear uno */}
          <Route path="/planes" element={<Inicio />} /> 
          
          {/* RUTA PARA EL LOGIN */}
          <Route path="/login" element={<div className="form-section"><h2>Página de Login</h2></div>} />
        </Routes>
      </main>
      
      <Footer /> 
    </BrowserRouter>
  </React.StrictMode>
);