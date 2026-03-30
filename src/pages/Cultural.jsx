import React from 'react';
import CardPlan from '../components/CardPlan';

const Cultural = () => {
  return (
    <main>
      {}
      <h2 className="categoria-titulo">Planes Culturales</h2>

      <section className="planes-container">
        <CardPlan 
          titulo="Machu Picchu" 
          descripcion="Explora una de las maravillas del mundo y descubre la historia del imperio inca." 
          precio="$1.500.000" 
          imagen="/image/planes/machu_picchu.png" 
        />

        <CardPlan 
          titulo="Muralla China" 
          descripcion="Recorre una de las construcciones más impresionantes de la historia." 
          precio="$3.800.000" 
          imagen="/image/planes/muralla_china.png" 
        />

        <CardPlan 
          titulo="Kioto" 
          descripcion="Templos históricos, cultura tradicional y paisajes únicos." 
          precio="$4.200.000" 
          imagen="/image/planes/kioto.png" 
        />

        <CardPlan 
          titulo="Torre Eiffel" 
          descripcion="Conoce París y visita uno de los monumentos más famosos del mundo." 
          precio="$3.500.000" 
          imagen="/image/planes/torre_eiffel.png" 
        />
      </section>

      <div className="volver-inicio">
        <a href="/" className="btn-volver">← Volver al Inicio</a>
      </div>
    </main>
  );
};

export default Cultural;