import React from 'react';

const Itinerarios = () => {
  return (
    <main>
      <h2 className="categoria-titulo">Mis Itinerarios</h2>

      <section className="planes-container">
        
        <div className="plan-card">
          <h2>Tour por la Torre Eiffel</h2>
          <p><strong>Lugar:</strong> París, Francia</p>
          <p><strong>Horario:</strong> 09:00 AM</p>
          <p><strong>Duración:</strong> 3 horas</p>
        </div>

        <div className="plan-card">
          <h2>Recorrido por Machu Picchu</h2>
          <p><strong>Lugar:</strong> Cusco, Perú</p>
          <p><strong>Horario:</strong> 07:00 AM</p>
          <p><strong>Duración:</strong> 5 horas</p>
        </div>

        <div className="plan-card">
          <h2>Safari fotográfico</h2>
          <p><strong>Lugar:</strong> Parque Kruger, Sudáfrica</p>
          <p><strong>Horario:</strong> 06:00 AM</p>
          <p><strong>Duración:</strong> 4 horas</p>
        </div>

      </section>

      <div className="volver-inicio">
        <a href="/" className="btn-volver">Volver al inicio</a>
      </div>
    </main>
  );
};

export default Itinerarios;