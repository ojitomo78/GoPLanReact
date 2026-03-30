import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Login = () => {
  // Inicializamos los estados
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", { usuario, password });
    alert(`Bienvenido, ${usuario}`);
  };

  return (
    <main>
      <section className="form-section">
        <h2>Ingreso</h2>
        
        <form className="form-login" onSubmit={handleSubmit}>
          <label>Usuario:</label>
          <input 
            type="text" 
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required 
          /> {/* <-- Importante: la barra de cierre / */}

          <label>Contraseña:</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          /> {/* <-- Importante: la barra de cierre / */}

          <button type="submit">Ingresar</button>

          <p className="login-options">
            ¿No tienes cuenta? 
            <Link to="/registro-usuario" className="btn-secundario">Regístrate</Link>
        </p>
        </form>
      </section>
    </main>
  );
};

export default Login; 