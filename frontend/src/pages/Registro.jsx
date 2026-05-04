import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Añadimos useNavigate para redirigir tras registrarse
import Swal from 'sweetalert2';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Registro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/users/registro`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.correo,
          password: formData.password
        }),
      });

      const data = await response.json();
      if (response.ok) {
        // Mensaje de éxito que redirige al login al cerrar
        Swal.fire({
          title: '¡Cuenta creada!',
          text: `Hola ${formData.nombre}, ya puedes iniciar sesión con tu correo.`,
          icon: 'success',
          confirmButtonText: 'Ir al Login',
          confirmButtonColor: '#28a745'
        }).then(() => {
          navigate('/login'); // Redirigimos automáticamente para facilitar el flujo
        });
      } else {
        Swal.fire({
          title: 'No se pudo crear la cuenta',
          text: data.error,
          icon: 'error'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error de conexión',
        text: 'Inténtalo de nuevo más tarde.',
        icon: 'error'
      });
    }
  };

  return (
    <main>
      <section className="form-section">
        <h2 className="categoria-titulo">Registro de Usuario</h2>
        <form className="form-login" onSubmit={handleSubmit}>
          
          <label>Nombre:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />

          <label>Correo:</label>
          <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />

          <label>Contraseña:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />

          <button type="submit">Registrarse</button>

          <p className="login-options">
            ¿Ya tienes una cuenta? 
            <Link to="/login" className="btn-secundario">Inicia sesión</Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Registro;