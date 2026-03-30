import React from 'react';
import { Link } from 'react-router-dom'; // Importante para la navegación interna

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <img src="/image/Logo.png" alt="Logo GoPlan" />
        <h1>GoPlan Agencia de Vacaciones</h1>
      </div>
      <nav>
        {/* Cambiamos <a> por <Link> y 'href' por 'to' */}
        <Link to="/">Inicio</Link>
        <Link to="/planes">Planes y Destinos</Link>
        <Link to="/itinerarios">Itinerarios</Link>
        <Link to="/login">Ingreso</Link>
      </nav>
    </header>
  );
};

export default Header;