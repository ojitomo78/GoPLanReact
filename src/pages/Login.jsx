import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Swal from 'sweetalert2'; // Importamos Swal

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Alerta de éxito con icono de persona
        Swal.fire({
          title: `¡Bienvenido, ${data.usuario.nombre}!`,
          text: 'Ingreso exitoso a GoPlan',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        });
        
        localStorage.setItem('userNombre', data.usuario.nombre);
        localStorage.setItem('userEmail', data.usuario.email); 
        
        navigate('/planes'); 
      } else {
        // Alerta de error si el usuario/contraseña están mal
        Swal.fire({
          title: 'Error de ingreso',
          text: data.error,
          icon: 'error',
          confirmButtonColor: '#3085d6'
        });
      }
    } catch (error) {
      console.error("Error en el login:", error);
      Swal.fire({
        title: '¡Oops!',
        text: 'No se pudo conectar con el servidor. Revisa si el backend está prendido.',
        icon: 'warning'
      });
    }
  };

  return (
    <main>
      <section className="form-section">
        <h2>Ingreso a GoPlan</h2>
        <form className="form-login" onSubmit={handleSubmit}>
          <label>Correo Electrónico:</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@correo.com"
            required 
          />
          <label>Contraseña:</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button type="submit">Ingresar</button>
          <p className="login-options">
            ¿No tienes cuenta? 
            <Link to="/registro" className="btn-secundario">Regístrate</Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Login;