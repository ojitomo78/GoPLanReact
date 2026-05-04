require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// 1. IMPORTAR TODAS LAS RUTAS
// Asegúrate de que las mayúsculas en "./Route/..." coincidan con tus carpetas reales
const userRoutes = require("./Route/user.js");
const loginRoutes = require("./Route/login.js");
const planRoutes = require("./Route/plan.js");

const app = express();

// --- VARIABLES DE ENTORNO ---
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const FRONTEND_URL = process.env.FRONTEND_URL;

// --- MIDDLEWARES ---

app.use(express.json());

// Configuración de CORS robusta
const allowedOrigins = [
  "http://localhost:5173",
  FRONTEND_URL
].filter(Boolean); // Elimina valores nulos o indefinidos

app.use(cors({
  origin: function (origin, callback) {
    // permitir peticiones sin origen (como apps móviles o curl) 
    // o si el origen está en la lista blanca
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error("Bloqueado por CORS:", origin);
      callback(new Error("No permitido por CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// --- SERVIR FRONTEND (ARCHIVOS ESTÁTICOS) ---
// Importante: Esto debe ir ANTES de las rutas comodín (*)
app.use(express.static(path.join(__dirname, "public")));

// --- RUTAS DE LA API ---
app.use("/api/login", loginRoutes);
app.use("/api/users", userRoutes);
app.use("/api/planes", planRoutes);

// Ruta de chequeo de la API
app.get("/api/health", (req, res) => {
  res.status(200).json({ 
    status: "ok", 
    message: "🚀 API de GoPlanReact funcionando correctamente" 
  });
});

// --- MANEJO DE REACT ROUTER ---
// Esta ruta debe ser la ÚLTIMA. Si no es una ruta de API, sirve el index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"), (err) => {
    if (err) {
      res.status(500).send("Error cargando el frontend. ¿Olvidaste hacer el build?");
    }
  });
});

// --- CONEXIÓN A BASE DE DATOS ---
if (!MONGO_URI) {
  console.error("❌ ERROR: La variable MONGO_URI no está definida en Railway.");
  process.exit(1); // Detiene el proceso si no hay base de datos
}

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ Conexión exitosa a la base de datos");
    // Solo iniciamos el servidor si la base de datos conecta
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en puerto: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Error crítico de conexión a MongoDB:", error.message);
    process.exit(1);
  });