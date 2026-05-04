import React from 'react';
import ReactDOM from 'react-dom/client';
// Cambiamos BrowserRouter por HashRouter para mayor compatibilidad en despliegues
import { HashRouter } from 'react-router-dom'; 
import Inicio from './pages/Inicio.jsx';

// Importa tus componentes de estructura
import Header from './components/Header'; 
import Footer from './components/Footer'; 

// Importa tus estilos (ya separados si seguiste el consejo anterior)
import './css/global.css'; 
import './css/Header.css';
import './css/Planes.css';
import './css/Footer.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* HashRouter añade un /#/ a la URL, evitando errores 404 en Railway */}
    <HashRouter> 
      <Header /> 
      
      <Inicio />
      
      <Footer /> 
    </HashRouter>
  </React.StrictMode>
);