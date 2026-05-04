require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path"); // Necesario para manejar rutas de archivos

// 1. IMPORTAR TODAS LAS RUTAS
const userRoutes = require("./Route/user.js");
const loginRoutes = require("./Route/login.js");
const planRoutes = require("./Route/plan.js");

const app = express();

// --- MIDDLEWARES ---

// Ajuste de CORS: Al usar Docker y servir el front desde el mismo puerto, 
// puedes ser más flexible o permitir tu dominio de Railway.
const allowedOrigins = [
  "http://localhost:5173", 
  process.env.FRONTEND_URL // La URL que te asigne Railway
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// --- SERVIR FRONTEND (ESTÁTICOS) ---
// Esto le dice a Express que busque los archivos de React en la carpeta 'public'
// que es donde el Dockerfile pondrá el "build" del front.
app.use(express.static(path.join(__dirname, "public")));

// --- RUTAS DE LA API ---
app.use("/api/login", loginRoutes);
app.use("/api/users", userRoutes);
app.use("/api/planes", planRoutes);

// Ruta de chequeo de la API
app.get("/api/health", (req, res) => {
  res.send("🚀 API de GoPlanReact funcionando correctamente");
});

// --- MANEJO DE REACT ROUTER ---
// IMPORTANTE: Si el usuario refresca la página en una ruta como /login, 
// Express debe devolver el index.html de React en lugar de un error 404.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// --- CONEXIÓN A BASE DE DATOS ---
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Simplificado para producción en contenedores
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ Conectado a MongoDB Atlas");
  })
  .catch((error) => {
    console.error("❌ Error de conexión a MongoDB:", error);
  });

// --- INICIO DEL SERVIDOR ---
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto: ${PORT}`);
});