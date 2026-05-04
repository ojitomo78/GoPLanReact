import React, { useState, useEffect } from 'react';
import CardPlan from '../components/CardPlan';
import { Link } from 'react-router-dom';
import { useItinerario } from '../hooks/useItinerario';

const Cultural = () => {
  const [planes, setPlanes] = useState([]);
  const { agregarAlItinerario } = useItinerario();

  useEffect(() => {
    // Pedimos los planes filtrados por categoría Cultural
    fetch('http://localhost:5000/api/planes/categoria/Cultural')
      .then(res => res.json())
      .then(data => setPlanes(data))
      .catch(err => console.error("Error cargando planes culturales:", err));
  }, []);

  return (
    <main>
      <h2 className="categoria-titulo">Planes Culturales</h2>

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
          <p className="text-center">Cargando la historia del mundo...</p>
        )}
      </section>

      <div className="volver-inicio">
        <Link to="/" className="btn-volver">← Volver al Inicio</Link>
      </div>
    </main>
  );
};

export default Cultural;