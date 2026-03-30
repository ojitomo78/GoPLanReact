import React, { useState } from 'react';

const Registro = () => {
  
  const [formData, setFormData] = useState({
    nombre: '',
    documento: '',
    telefono: '',
    correo: '',
    direccion: ''
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del nuevo cliente:", formData);
    alert(`¡Cliente ${formData.nombre} registrado con éxito!`);
  };

  return (
    <main className="bg-light pb-5">
      <div className="container mt-5">
        <h2 className="mb-4 text-center categoria-titulo">Registrar Cliente</h2>

        <form className="p-4 bg-white rounded shadow-sm mx-auto" style={{maxWidth: '600px'}} onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <label className="form-label fw-bold">Nombre:</label>
            <input 
              type="text" 
              name="nombre"
              className="form-control" 
              value={formData.nombre}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Documento:</label>
            <input 
              type="text" 
              name="documento"
              className="form-control" 
              value={formData.documento}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Teléfono:</label>
            <input 
              type="text" 
              name="telefono"
              className="form-control" 
              value={formData.telefono}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Correo:</label>
            <input 
              type="email" 
              name="correo"
              className="form-control" 
              value={formData.correo}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Dirección:</label>
            <input 
              type="text" 
              name="direccion"
              className="form-control" 
              value={formData.direccion}
              onChange={handleChange}
              required 
            />
          </div>

          <button type="submit" className="btn btn-warning w-100 text-white fw-bold mt-3">
            Registrar
          </button>

        </form>
      </div>
    </main>
  );
};

export default Registro;