const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: String, required: true },
  imagen: { type: String, required: true },
  categoria: { type: String, required: true } // Ejemplo: 'Aventura', 'Playa', 'Cultura'
});

module.exports = mongoose.model('Plan', planSchema);