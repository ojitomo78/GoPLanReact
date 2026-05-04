import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // 1. Importamos la librería

const Itinerarios = () => {
  const [misPlanes, setMisPlanes] = useState([]);
  const [loading, setLoading] = useState(true);

  const cargarItinerarios = () => {
    const email = localStorage.getItem('userEmail');
    if (email && email !== "null") {
      fetch(`http://localhost:5000/api/users/mis-itinerarios/${email}`)
        .then(res => res.json())
        .then(data => {
          setMisPlanes(data || []);
          setLoading(false);
        })
        .catch(err => {
          console.error("Error:", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarItinerarios();
  }, []);

  const eliminarPlan = async (titulo) => {
    const email = localStorage.getItem('userEmail');

    // 2. Usamos Swal para confirmar la eliminación
    const resultado = await Swal.fire({
      title: '¿Estás seguro?',
      text: `Vas a quitar "${titulo}" de tu itinerario.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ff4d4d', // Rojo para eliminar
      cancelButtonColor: '#3085d6', // Azul para cancelar
      confirmButtonText: 'Sí, quitarlo',
      cancelButtonText: 'No, dejarlo'
    });

    // Si el usuario confirma, procedemos a borrar
    if (resultado.isConfirmed) {
      try {
        const response = await fetch('http://localhost:5000/api/users/eliminar-itinerario', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, tituloPlan: titulo })
        });

        if (response.ok) {
          setMisPlanes(misPlanes.filter(p => p.titulo !== titulo));
          
          // Mensaje de éxito estilizado
          Swal.fire({
            title: '¡Eliminado!',
            text: 'El plan ha sido quitado de tu viaje.',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
          });
        }
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'No se pudo eliminar el plan.',
          icon: 'error'
        });
      }
    }
  };

  if (loading) return <p className="text-center">Cargando tus planes...</p>;

  return (
    <main>
      <h2 className="categoria-titulo">Mis Itinerarios</h2>
      <section className="planes-container">
        {misPlanes.length > 0 ? (
          misPlanes.map((plan, index) => (
            <div className="plan-card" key={index} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '10px' }}>
              <img src={plan.imagen} alt={plan.titulo} className="plan-img" style={{ width: '100%' }} />
              <h2>{plan.titulo}</h2>
              <p className="precio-tag"><strong>Precio:</strong> {plan.precio}</p>
              <button 
                onClick={() => eliminarPlan(plan.titulo)}
                className="btn-eliminar"
                style={{ 
                  backgroundColor: '#ff4d4d', 
                  color: 'white', 
                  border: 'none', 
                  padding: '10px', 
                  width: '100%', 
                  cursor: 'pointer', 
                  borderRadius: '5px', 
                  marginTop: '10px',
                  fontWeight: 'bold' 
                }}
              >
                Quitar de mi viaje
              </button>
            </div>
          ))
        ) : (
          <div className="text-center">
            <p>Aún no tienes planes guardados.</p>
            <Link to="/planes" className="btn-secundario">Explorar Planes</Link>
          </div>
        )}
      </section>
      <div className="volver-inicio" style={{ marginTop: '20px', textAlign: 'center' }}>
        <Link to="/" className="btn-volver">Volver al inicio</Link>
      </div>
    </main>
  );
};

export default Itinerarios;