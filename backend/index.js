require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// 1. IMPORTAR TODAS LAS RUTAS
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

// Configuración de CORS
const allowedOrigins = [
  "http://localhost:5173",
  FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
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

// --- 2. RUTAS DE LA API (Deben ir antes de los archivos estáticos) ---
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

// --- 3. SERVIR FRONTEND (ARCHIVOS ESTÁTICOS) ---
// path.join(__dirname, "public") asume que tu carpeta de build está en el mismo nivel que index.js
const carpetaBuild = path.join(__dirname, "public");
app.use(express.static(carpetaBuild));

// --- 4. MANEJO DE REACT ROUTER (EL COMODÍN) ---
// Si la petición NO empieza por /api, entregamos el index.html para que React maneje la ruta
app.get("*", (req, res) => {
  if (!req.url.startsWith('/api')) {
    res.sendFile(path.join(carpetaBuild, "index.html"), (err) => {
      if (err) {
        res.status(500).send("Error cargando el frontend. Revisa que la carpeta 'public' exista.");
      }
    });
  }
});

// --- CONEXIÓN A BASE DE DATOS ---
if (!MONGO_URI) {
  console.error("❌ ERROR: La variable MONGO_URI no está definida.");
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ Conexión exitosa a la base de datos");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en puerto: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Error crítico de conexión a MongoDB:", error.message);
    process.exit(1);
  });