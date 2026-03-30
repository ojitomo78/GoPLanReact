import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PlanesDestinos = () => {
  // 1. Variantes para el contenedor (el padre)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // <--- LA MAGIA: Espera 0.15s entre cada hijo
      }
    }
  };

  // 2. Variantes para cada botón (el hijo)
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  const categorias = [
    { name: "Aventura", path: "/aventura" },
    { name: "Cultural", path: "/cultural" },
    { name: "Natural", path: "/natural" },
    { name: "Playa", path: "/playa" },
    { name: "Romántico", path: "/romantico" },
    { name: "Urbano", path: "/urbano" },
  ];

  return (
    <main className="categorias">
      <motion.h2 
        className="categoria-titulo"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Categorías de Planes
      </motion.h2>

      {/* 3. El contenedor padre animado */}
      <motion.div 
        className="categoria-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {categorias.map((cat, index) => (
          // 4. Cada hijo usa itemVariants
          <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.1 }}>
            <Link to={cat.path} className="categoria-card">
              {cat.name}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link to="/todos-los-planes" className="btn-volver">
          Ver Todos los Planes y Destinos
        </Link>
      </div>
    </main>
  );
};

export default PlanesDestinos;