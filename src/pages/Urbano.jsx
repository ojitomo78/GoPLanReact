import React from 'react';
import CardPlan from '../components/CardPlan';

const Urbano = () => {
  return (
    <main>
      <h2 className="categoria-titulo">Planes Urbanos</h2>

      <section className="planes-container">
        <CardPlan 
          titulo="New York City Tour" 
          descripcion="Descubre la ciudad que nunca duerme. Recorre lugares icónicos como Times Square, Central Park, el Empire State Building y la Estatua de la Libertad." 
          precio="$3.200.000" 
          imagen="/image/planes/new_york_city_tour.png" 
        />
      </section>

      <div className="volver-inicio">
        <a href="/" className="btn-volver">← Volver al Inicio</a>
      </div>
    </main>
  );
};

export default Urbano;