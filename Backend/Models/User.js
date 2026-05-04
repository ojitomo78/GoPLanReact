const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // NUEVO: Aquí guardaremos los planes del usuario
  itinerarios: [{
    titulo: String,
    precio: String,
    imagen: String,
    fechaAgregado: { type: Date, default: Date.now }
  }]
});

// Esta línea es el truco: Si el modelo ya existe, lo usa; si no, lo crea.
module.exports = mongoose.models.User || mongoose.model('User', userSchema);