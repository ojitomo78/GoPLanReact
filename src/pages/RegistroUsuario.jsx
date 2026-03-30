import React, { useState } from 'react';

const RegistroUsuario = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Nuevo usuario creado:", { usuario, password });
    alert(`¡Cuenta creada para ${usuario}! Ahora puedes iniciar sesión.`);
  };

  return (
    <main>
      <section className="form-section"> {/* Usamos la clase de tus estilos */}
        <h2 className="categoria-titulo">Registro de Usuario</h2>
        
        <form className="form-login" onSubmit={handleRegister}>
          
          <label>Usuario:</label>
          <input 
            type="text" 
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required 
          />

          <label>Contraseña:</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />

          <button type="submit">Registrarse</button>

          <p className="login-options">
            ¿Ya tienes una cuenta? 
            <a href="/login" className="btn-secundario">Inicia sesión</a>
          </p>
        </form>
      </section>
    </main>
  );
};

export default RegistroUsuario;