import React, { useState, useEffect } from 'react';
import CardPlan from '../components/CardPlan';
import { Link } from 'react-router-dom';
import { useItinerario } from '../hooks/useItinerario';

const Romantico = () => {
  const [planes, setPlanes] = useState([]);
  const { agregarAlItinerario } = useItinerario();

  useEffect(() => {
    // Pedimos los planes de la categoría Romantico
    fetch('http://localhost:5000/api/planes/categoria/Romantico')
      .then(res => res.json())
      .then(data => setPlanes(data))
      .catch(err => console.error("Error cargando planes románticos:", err));
  }, []);

  return (
    <main>
      <h2 className="categoria-titulo">Planes Románticos</h2>

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
          <p className="text-center">Preparando una experiencia mágica...</p>
        )}
      </section>

      <div className="volver-inicio">
        <Link to="/" className="btn-volver">← Volver al Inicio</Link>
      </div>
    </main>
  );
};

export default Romantico;