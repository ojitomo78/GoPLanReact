import React, { useState, useEffect } from 'react';
import CardPlan from '../components/CardPlan';
import { Link } from 'react-router-dom';
import { useItinerario } from '../hooks/useItinerario';

const Aventura = () => {
  const [planes, setPlanes] = useState([]);
  const { agregarAlItinerario } = useItinerario();

  useEffect(() => {
    // Pedimos solo los planes de la categoría "Aventura"
    fetch('http://localhost:5000/api/planes/categoria/Aventura')
      .then(res => res.json())
      .then(data => setPlanes(data))
      .catch(err => console.error("Error cargando planes:", err));
  }, []);

  return (
    <main>
      <h2 className="categoria-titulo">Planes de Aventura</h2>
      
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
          <p className="text-center">Cargando planes de aventura...</p>
        )}
      </section>

      <div className="volver-inicio">
        <a href="/" className="btn-volver">Volver al Inicio</a>
      </div>
    </main>
  );
};

export default Aventura;