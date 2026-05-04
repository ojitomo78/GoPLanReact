import React, { useState, useEffect } from 'react';
import CardPlan from '../components/CardPlan';
import { Link } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Natural = () => {
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    // Consumimos los planes de la categoría Natural
    fetch(`${API_URL}/api/planes/categoria/Natural`)
      .then(res => res.json())
      .then(data => setPlanes(data))
      .catch(err => console.error("Error cargando planes naturales:", err));
  }, []);

  return (
    <main>
      <h2 className="categoria-titulo">Planes Naturales</h2>

      <section className="planes-container">
        {planes.length > 0 ? (
          planes.map((plan) => (
            <CardPlan 
              key={plan._id}
              titulo={plan.titulo} 
              descripcion={plan.descripcion} 
              precio={plan.precio} 
              imagen={plan.imagen} 
            />
          ))
        ) : (
          <p className="text-center">Conectando con la naturaleza...</p>
        )}
      </section>

      <div className="volver-inicio">
        {/* Usamos Link para mantener la sesión activa sin recargar */}
        <Link to="/" className="btn-volver">← Volver al Inicio</Link>
      </div>
    </main>
  );
};

export default Natural;