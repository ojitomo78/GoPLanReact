const express = require("express");
const router = express.Router();
const User = require("../Models/User");

router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;

        const usuarioEncontrado = await User.findOne({ email: email });

        if (!usuarioEncontrado) {
            return res.status(404).json({ error: "El usuario no existe." });
        }

        // Validación de texto plano (temporal para tus pruebas)
        if (usuarioEncontrado.password !== password) {
            return res.status(401).json({ error: "Contraseña incorrecta." });
        }

        // Respuesta exitosa enviando los datos necesarios
        res.status(200).json({
            mensaje: "¡Login exitoso! Bienvenido de nuevo 🚀",
            usuario: {
                nombre: usuarioEncontrado.nombre,
                email: usuarioEncontrado.email // Este dato es vital para el itinerario
            }
        });

    } catch (error) {
        res.status(500).json({ error: "Error en el servidor: " + error.message });
    }
});

module.exports = router;