import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [nombreUsuario, setNombreUsuario] = useState(null);

  useEffect(() => {
    const nombre = localStorage.getItem('userNombre');
    setNombreUsuario(nombre);
  }, [location]); 

  const cerrarSesion = () => {
    localStorage.removeItem('userNombre');
    setNombreUsuario(null);
    navigate('/login');
  };

  return (
    <header>
      <div className="header-top">
        <img src="/image/Logo.png" alt="Logo GoPlan" />
        <h1>GoPlan Agencia de Vacaciones</h1>
      </div>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/planes">Planes y Destinos</Link>
        
        {/* CORRECCIÓN: Solo visible si está logueado */}
        {nombreUsuario && <Link to="/itinerarios">Itinerarios</Link>}

        {nombreUsuario ? (
          <>
            <span style={{ color: 'white', fontWeight: 'bold', marginLeft: '15px' }}>
              Hola, {nombreUsuario}
            </span>
            <button 
              onClick={cerrarSesion} 
              style={{
                background: 'none',
                border: 'none',
                color: '#ffc107',
                cursor: 'pointer',
                fontWeight: 'bold',
                textDecoration: 'underline',
                marginLeft: '10px'
              }}
            >
              Cerrar Sesión
            </button>
          </>
        ) : (
          <Link to="/login">Ingreso</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;