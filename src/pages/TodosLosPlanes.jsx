import React, { useState, useEffect } from 'react';
import CardPlan from '../components/CardPlan';
import { Link } from 'react-router-dom';
import { useItinerario } from '../hooks/useItinerario';

const TodosLosPlanes = () => {
  const [todosLosPlanes, setTodosLosPlanes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { agregarAlItinerario } = useItinerario();

  useEffect(() => {
    // Traemos la lista completa de planes desde el backend
    fetch('http://localhost:5000/api/planes') // Asegúrate que esta ruta devuelva Plan.find()
      .then(res => res.json())
      .then(data => {
        setTodosLosPlanes(data);
        setCargando(false);
      })
      .catch(err => {
        console.error("Error cargando todos los planes:", err);
        setCargando(false);
      });
  }, []);

  // Función auxiliar para filtrar planes por categoría
  const filtrarPorCategoria = (cat) => {
    return todosLosPlanes.filter(plan => plan.categoria === cat);
  };

  if (cargando) return <p className="text-center">Cargando catálogo completo...</p>;

  return (
    <main id="planes">
      <h2 className="categoria-titulo" style={{ borderBottom: 'none' }}>
        Explora Nuestros Destinos
      </h2>

      {/* Secciones Dinámicas */}
      {['Cultural', 'Natural', 'Playa', 'Aventura', 'Urbano', 'Romantico'].map((cat) => {
        const planesFiltrados = filtrarPorCategoria(cat);
        
        // Solo renderizamos la sección si hay planes en esa categoría
        if (planesFiltrados.length === 0) return null;

        return (
          <React.Fragment key={cat}>
            <h3 className="categoria-titulo">{cat}</h3>
            <section className="planes-container">
              {planesFiltrados.map((plan) => (
                <CardPlan 
                  key={plan._id}
                  titulo={plan.titulo} 
                  descripcion={plan.descripcion} 
                  precio={plan.precio} 
                  imagen={plan.imagen} 
                  onAgregar={agregarAlItinerario}
                />
              ))}
            </section>
          </React.Fragment>
        );
      })}

      <div className="volver-inicio" style={{ marginTop: '40px' }}>
        <Link to="/" className="btn-volver">← Volver al Inicio</Link>
      </div>
    </main>
  );
};

export default TodosLosPlanes;