import React from 'react';
import CardPlan from '../components/CardPlan';

const Natural = () => {
  return (
    <main>
      {/* Título centrado con la clase de tu CSS */}
      <h2 className="categoria-titulo">Planes Naturales</h2>

      <section className="planes-container">
        <CardPlan 
          titulo="Cataratas del Iguazú" 
          descripcion="Disfruta de una de las maravillas naturales más impresionantes del mundo." 
          precio="$2.300.000" 
          imagen="/image/planes/cataratas_del_iguazú.png" 
        />

        <CardPlan 
          titulo="Desierto de Atacama" 
          descripcion="Explora el desierto más árido del planeta y sus paisajes únicos." 
          precio="$2.100.000" 
          imagen="/image/planes/desierto_de_atacama.png" 
        />
      </section>

      <div className="volver-inicio">
        <a href="/" className="btn-volver">← Volver al Inicio</a>
      </div>
    </main>
  );
};

export default Natural;