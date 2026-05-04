import React, { useState, useEffect } from 'react';
import CardPlan from '../components/CardPlan';
import { Link } from 'react-router-dom';
import { useItinerario } from '../hooks/useItinerario';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Inicio = () => {
  const [destacados, setDestacados] = useState([]);
  const { agregarAlItinerario } = useItinerario();

  useEffect(() => {
    // 1. Pedimos todos los planes al backend
    fetch(`${API_URL}/api/planes`)
      .then(res => res.json())
      .then(data => {
        // 2. Mezclamos el arreglo aleatoriamente
        const mezclados = data.sort(() => 0.5 - Math.random());
        // 3. Tomamos solo los primeros 3 para mostrar
        setDestacados(mezclados.slice(0, 3));
      })
      .catch(err => console.error("Error cargando destacados:", err));
  }, []);

  return (
    <main>
      {/* Sección Informativa */}
      <section id="sobre-nosotros">
        <h2>Sobre Nosotros</h2>
        <p>En <strong>GoPlan</strong> convertimos tus sueños de viaje en experiencias inolvidables. 
           Somos expertos en diseñar rutas personalizadas para que solo te preocupes por disfrutar.</p>
      </section>

      {/* Sección de Planes Destacados dinámica */}
      <section id="planes">
        <h2>Planes Destacados</h2>
        <div className="planes-container">
          {destacados.length > 0 ? (
            destacados.map((plan) => (
              <CardPlan 
                key={plan._id}
                titulo={plan.titulo} 
                descripcion={plan.descripcion} 
                precio={plan.precio} 
                imagen={plan.imagen} 
                onAgregar={agregarAlItinerario}
              />
            ))
          ) : (
            <p>Buscando las mejores ofertas para ti...</p>
          )}
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