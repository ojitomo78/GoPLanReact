import React from 'react';
import CardPlan from '../components/CardPlan';

const Romantico = () => {
  return (
    <main>
      <h2 className="categoria-titulo">Planes Románticos</h2>

      <section className="planes-container">
        <CardPlan 
          titulo="Santorini Romántico" 
          descripcion="Disfruta de atardeceres inolvidables frente al mar Egeo en uno de los destinos más románticos del mundo." 
          precio="$4.100.000" 
          imagen="/image/planes/santorini.png" 
        />

        <CardPlan 
          titulo="París Romántico" 
          descripcion="Vive una experiencia inolvidable con cenas y paseos cerca de la Torre Eiffel." 
          precio="$3.700.000" 
          imagen="/image/planes/torre_eiffel.png" 
        />
      </section>

      <div className="volver-inicio">
        <a href="/" className="btn-volver">← Volver al Inicio</a>
      </div>
    </main>
  );
};

export default Romantico;