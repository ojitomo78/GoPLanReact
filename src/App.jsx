import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './css/estilos.css';

// Importamos componentes fijos
import Header from './components/Header';
import Footer from './components/Footer';

// Importamos todas las páginas
import Inicio from './pages/Inicio';
import PlanesDestinos from './pages/PlanesDestinos';
import Aventura from './pages/Aventura';
import Cultural from './pages/Cultural';
import Natural from './pages/Natural';
import Itinerarios from './pages/Itinerarios';
import Login from './pages/Login';
import Playa from './pages/Playa';
import Registro from './pages/Registro';
import RegistroUsuario from './pages/RegistroUsuario';
import Romantico from './pages/Romantico';
import TodosLosPlanes from './pages/TodosLosPlanes';
import Urbano from './pages/Urbano';

// Componente auxiliar para manejar las animaciones de transición
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -10 }}
        transition={{ duration: 0.3 }}
        style={{ flex: 1 }} // Ayuda a que el footer se mantenga abajo
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Inicio />} />
          <Route path="/planes" element={<PlanesDestinos />} />
          <Route path="/aventura" element={<Aventura />} />
          <Route path="/cultural" element={<Cultural />} />
          <Route path="/natural" element={<Natural />} />
          <Route path="/itinerarios" element={<Itinerarios />} />
          <Route path="/login" element={<Login />} />
          <Route path="/playa" element={<Playa />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/registro-usuario" element={<RegistroUsuario />} />
          <Route path="/romantico" element={<Romantico />} />
          <Route path="/todos-los-planes" element={<TodosLosPlanes />} />
          <Route path="/urbano" element={<Urbano />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div id="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        
        {/* Llamamos al componente que tiene las animaciones */}
        <AnimatedRoutes />

        <Footer />
      </div>
    </Router>
  );
}

export default App;