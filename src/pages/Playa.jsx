import React, { useState, useEffect } from 'react';
import CardPlan from '../components/CardPlan';
import { Link } from 'react-router-dom';
import { useItinerario } from '../hooks/useItinerario';

const Playa = () => {
  const [planes, setPlanes] = useState([]);
  const { agregarAlItinerario } = useItinerario();

  useEffect(() => {
    // Pedimos solo los planes de la categoría Playa
    fetch('http://localhost:5000/api/planes/categoria/Playa')
      .then(res => res.json())
      .then(data => setPlanes(data))
      .catch(err => console.error("Error cargando planes de playa:", err));
  }, []);

  return (
    <main>
      <h2 className="categoria-titulo">Planes de Playa</h2>

      <section className="planes-container">
        {planes.length > 0 ? (
          planes.map((plan) => (
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
          <p className="text-center">Preparando las vacaciones bajo el sol...</p>
        )}
      </section>

      <div className="volver-inicio">
        <Link to="/" className="btn-volver">← Volver al Inicio</Link>
      </div>
    </main>
  );
};

export default Playa;