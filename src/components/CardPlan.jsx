import React from 'react';
import { motion } from 'framer-motion'; // 1. Importamos la librería

const CardPlan = ({ titulo, descripcion, precio, imagen, categoria }) => {
  // 2. Definimos las "variantes" de la animación
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <motion.div 
      className="plan-card"
      variants={cardVariants}
      initial="hidden" 
      animate="visible" 
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" 
      }}
    >
      {imagen && <img src={imagen} alt={titulo} className="plan-img" />}
      
      {}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }} 
      >
        {titulo}
      </motion.h2>

      <p>{descripcion}</p>
      
      {categoria && (
        <p className="categoria-tag"><strong>Categoría:</strong> {categoria}</p>
      )}
      
      <p className="precio-tag"><strong>Precio base:</strong> {precio}</p>

      <button className="btn-volver" style={{width: '100%', marginTop: '10px', border: 'none'}}>
        Ver Detalles
      </button>
    </motion.div>
  );
};

export default CardPlan;