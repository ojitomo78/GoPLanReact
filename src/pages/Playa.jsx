import React from 'react';
import CardPlan from '../components/CardPlan';

const Playa = () => {
  return (
    <main>
      <h2 className="categoria-titulo">Planes de Playa</h2>

      <section className="planes-container">
        <CardPlan 
          titulo="Islas Maldivas" 
          descripcion="Relájate en playas de arena blanca y aguas cristalinas en uno de los destinos más exclusivos del mundo." 
          precio="$5.200.000" 
          imagen="/image/planes/islas_maldivas.png" 
        />

        <CardPlan 
          titulo="Playa del Carmen" 
          descripcion="Disfruta del Caribe mexicano con playas paradisíacas, gastronomía y cultura." 
          precio="$2.400.000" 
          imagen="/image/planes/playa_del_carmen.png" 
        />

        <CardPlan 
          titulo="Santorini" 
          descripcion="Admira las famosas casas blancas y las increíbles vistas al mar Egeo." 
          precio="$3.900.000" 
          imagen="/image/planes/santorini.png" 
        />
      </section>

      <div className="volver-inicio">
        <a href="/" className="btn-volver">← Volver al Inicio</a>
      </div>
    </main>
  );
};

export default Playa;