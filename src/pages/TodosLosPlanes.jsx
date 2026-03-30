import React from 'react';
import CardPlan from '../components/CardPlan';

const TodosLosPlanes = () => {
  return (
    <main id="planes"> {/* <-- El ID es la clave para que tome el fondo naranja clarito */}
      <h2 className="categoria-titulo" style={{borderBottom: 'none'}}>
        Explora Nuestros Destinos
      </h2>

      {/* --- CULTURAL --- */}
      <h3 className="categoria-titulo">Cultural</h3>
      <section className="planes-container">
        <CardPlan titulo="Machu Picchu" descripcion="Antigua ciudad inca considerada una de las maravillas del mundo." precio="$1.500.000" imagen="/image/planes/machu_picchu.png" />
        <CardPlan titulo="Muralla China" descripcion="Recorre uno de los monumentos históricos más grandes del planeta." precio="$3.800.000" imagen="/image/planes/muralla_china.png" />
        <CardPlan titulo="Kioto" descripcion="Templos, jardines y tradición japonesa en una ciudad histórica." precio="$4.200.000" imagen="/image/planes/kioto.png" />
        <CardPlan titulo="Torre Eiffel" descripcion="Conoce el símbolo más famoso de París." precio="$3.500.000" imagen="/image/planes/torre_eiffel.png" />
      </section>

      {/* --- NATURAL --- */}
      <h3 className="categoria-titulo">Natural</h3>
      <section className="planes-container">
        <CardPlan titulo="Cataratas del Iguazú" descripcion="Una de las cascadas más impresionantes del mundo." precio="$2.300.000" imagen="/image/planes/cataratas_del_iguazú.png" />
        <CardPlan titulo="Desierto de Atacama" descripcion="Explora paisajes únicos en el desierto más árido del mundo." precio="$2.100.000" imagen="/image/planes/desierto_de_atacama.png" />
      </section>

      {/* --- PLAYA --- */}
      <h3 className="categoria-titulo">Playa</h3>
      <section className="planes-container">
        <CardPlan titulo="Islas Maldivas" descripcion="Playas paradisíacas y aguas cristalinas." precio="$5.200.000" imagen="/image/planes/islas_maldivas.png" />
        <CardPlan titulo="Playa del Carmen" descripcion="Destino caribeño con playas y cultura." precio="$2.400.000" imagen="/image/planes/playa_del_carmen.png" />
        <CardPlan titulo="Santorini" descripcion="Isla famosa por sus casas blancas y vistas al mar." precio="$3.900.000" imagen="/image/planes/santorini.png" />
      </section>

      {/* --- AVENTURA --- */}
      <h3 className="categoria-titulo">Aventura</h3>
      <section className="planes-container">
        <CardPlan titulo="Safari en Kenia" descripcion="Explora la vida salvaje africana en su hábitat natural." precio="$4.500.000" imagen="/image/planes/safari_en_kenia.png" />
        <CardPlan titulo="Safari en Kruger" descripcion="Uno de los parques naturales más famosos del mundo." precio="$4.300.000" imagen="/image/planes/safari_en_kruger.png" />
      </section>

      {/* --- URBANO --- */}
      <h3 className="categoria-titulo">Urbano</h3>
      <section className="planes-container">
        <CardPlan titulo="New York City Tour" descripcion="Descubre la ciudad que nunca duerme." precio="$3.200.000" imagen="/image/planes/new_york_city_tour.png" />
      </section>

      <div className="volver-inicio" style={{marginTop: '40px'}}>
        <a href="/" className="btn-volver">← Volver al Inicio</a>
      </div>
    </main>
  );
};

export default TodosLosPlanes;