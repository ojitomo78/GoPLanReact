import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes de estructura
import Header from './components/Header'; 
import Footer from './components/Footer'; 

// Páginas
import Inicio from './pages/Inicio.jsx';
// IMPORTA AQUÍ TU COMPONENTE DE LOGIN (ajusta la ruta según tu carpeta)
// import Login from './pages/Login.jsx'; 

import './css/estilos.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div id="app-wrapper">
        <Header /> 
        
        <main style={{ flex: 1 }}>
          <Routes>
            {/* Página Principal */}
            <Route path="/" element={<Inicio />} />

            {/* Página de Planes */}
            <Route path="/planes" element={<Inicio />} /> 

            {/* Página de Ingreso */}
            {/* Cambia el <div> de abajo por tu componente <Login /> cuando lo tengas importado */}
            <Route path="/login" element={
              <section className="form-section">
                <h2>Ingreso a GoPlan</h2>
                <form className="form-login">
                  <label>Usuario:</label>
                  <input type="text" placeholder="Tu usuario" />
                  <label>Contraseña:</label>
                  <input type="password" placeholder="********" />
                  <button type="submit">Entrar</button>
                </form>
              </section>
            } />

            {/* Ruta por si alguien escribe cualquier cosa (404) */}
            <Route path="*" element={<h2>Página no encontrada</h2>} />
          </Routes>
        </main>
        
        <Footer /> 
      </div>
    </BrowserRouter>
  </React.StrictMode>
);