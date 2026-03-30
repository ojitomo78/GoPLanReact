import React from 'react';
import CardPlan from '../components/CardPlan';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <main>
      {/* Sección Informativa */}
      <section id="sobre-nosotros">
        <h2>Sobre Nosotros</h2>
        <p>En <strong>GoPlan</strong> convertimos tus sueños de viaje en experiencias inolvidables. 
           Somos expertos en diseñar rutas personalizadas para que solo te preocupes por disfrutar.</p>
      </section>

      {/* Sección de Planes Destacados con el estilo de caja naranja (#planes) */}
      <section id="planes">
        <h2>Planes Destacados</h2>
        <div className="planes-container">
          
          <CardPlan 
            titulo="Machu Picchu" 
            descripcion="Antigua ciudad inca considerada una de las maravillas del mundo." 
            precio="$1.500.000" 
            imagen="/image/planes/machu_picchu.png" 
          />

          <CardPlan 
            titulo="Cataratas del Iguazú" 
            descripcion="Disfruta de una de las maravillas naturales más impresionantes del mundo." 
            precio="$2.300.000" 
            imagen="/image/planes/cataratas_del_iguazú.png" 
          />

          <CardPlan 
            titulo="París Romántico" 
            descripcion="Vive una experiencia inolvidable con cenas y paseos cerca de la Torre Eiffel." 
            precio="$3.700.000" 
            imagen="/image/planes/torre_eiffel.png" 
          />

        </div>

        {/* Botón para ir al catálogo completo */}
        <div style={{ marginTop: '30px' }}>
          <Link to="/todos-los-planes" className="btn-volver">
            Ver Todos los Planes →
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Inicio;