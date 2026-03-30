import React from 'react';
import CardPlan from '../components/CardPlan';

const Aventura = () => {
  return (
    <main>
      {}
      <h2 className="categoria-titulo">Planes de Aventura</h2>
      
      <section className="planes-container">
        <CardPlan 
          titulo="Amazonas Extremo" 
          descripcion="Explora la selva amazónica con guías expertos." 
          precio="$980.000" 
          imagen="/image/planes/safari_en_kenia.png" 
        />
        <CardPlan 
          titulo="Montañas de Perú" 
          descripcion="Senderismo en los Andes y visita a Machu Picchu." 
          precio="$1.500.000" 
          imagen="/image/planes/machu_picchu.png" 
        />
      </section>

      <div className="volver-inicio">
        <a href="/" className="btn-volver">Volver al Inicio</a>
      </div>
    </main>
  );
};

export default Aventura;