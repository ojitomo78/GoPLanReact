import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Inicio from './pages/Inicio.jsx';

// Importa tus componentes de estructura
import Header from './components/Header'; // Ajusta la ruta si es necesario
import Footer from './components/Footer'; 

import './css/estilos.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header /> {/* Tu encabezado aparecerá en todas las páginas */}
      
      <Inicio />
      
      <Footer /> {/* Tu pie de página aparecerá en todas las páginas */}
    </BrowserRouter>
  </React.StrictMode>
);