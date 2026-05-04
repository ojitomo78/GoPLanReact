const express = require("express");
const router = express.Router();
const User = require("../Models/User"); 

// 1. Registro
router.post("/registro", async (req, res) => {
    try {
        const { nombre, email, password } = req.body;
        const nuevoUsuario = new User({ nombre, email, password, itinerarios: [] });
        await nuevoUsuario.save();
        res.status(201).json({ mensaje: "¡Usuario guardado! 🚀" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// 2. Agregar Plan (CON VALIDACIÓN DE DUPLICADOS)
router.post('/agregar-itinerario', async (req, res) => {
  const { email, plan } = req.body;

  // Validación estricta de sesión
  if (!email || email === "null" || email === "undefined") {
    return res.status(401).json({ error: "Debes iniciar sesión para guardar planes." });
  }

  try {
    const usuarioActual = await User.findOne({ email });
    if (!usuarioActual) return res.status(404).json({ error: "Usuario no encontrado." });

    // Evitar duplicados por título
    const yaExiste = usuarioActual.itinerarios.some(p => p.titulo === plan.titulo);
    if (yaExiste) {
      return res.status(400).json({ error: "Este plan ya está en tu itinerario." });
    }

    usuarioActual.itinerarios.push(plan);
    await usuarioActual.save();

    res.json({ mensaje: "Plan guardado", itinerarios: usuarioActual.itinerarios });
  } catch (error) {
    res.status(500).json({ error: "Error al guardar el plan." });
  }
});

// 3. Obtener Itinerarios
router.get('/mis-itinerarios/:email', async (req, res) => {
    try {
        const usuario = await User.findOne({ email: req.params.email });
        if (!usuario) return res.status(404).json({ error: "Usuario no encontrado." });
        res.json(usuario.itinerarios || []);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener datos." });
    }
});

// 4. ELIMINAR PLAN (NUEVA RUTA)
router.delete('/eliminar-itinerario', async (req, res) => {
    const { email, tituloPlan } = req.body;
    try {
        const usuario = await User.findOneAndUpdate(
            { email: email },
            { $pull: { itinerarios: { titulo: tituloPlan } } },
            { new: true }
        );
        res.json({ mensaje: "Plan eliminado", itinerarios: usuario.itinerarios });
    } catch (error) {
        res.status(500).json({ error: "No se pudo eliminar el plan." });
    }
});

module.exports = router;