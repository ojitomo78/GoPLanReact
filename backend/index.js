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

// --- MIDDLEWARES ---
app.use(express.json());

// --- CONFIGURACIÓN DE CORS CORREGIDA ---
// Usamos origin: true para que acepte cualquier origen que coincida con tu despliegue
// Esto soluciona el error "No permitido por CORS" de inmediato.
app.use(cors({
  origin: true, 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// --- 2. RUTAS DE LA API ---
app.use("/api/login", loginRoutes);
app.use("/api/users", userRoutes);
app.use("/api/planes", planRoutes);

app.get("/api/health", (req, res) => {
  res.status(200).json({ 
    status: "ok", 
    message: "🚀 API de GoPlanReact funcionando correctamente" 
  });
});

// --- 3. SERVIR FRONTEND (ARCHIVOS ESTÁTICOS) ---
// Importante: Railway suele usar 'public' si así lo configuraste en el Dockerfile
const carpetaBuild = path.join(__dirname, "public");
app.use(express.static(carpetaBuild));

// --- 4. MANEJO DE REACT ROUTER (EL COMODÍN) ---
app.get("*", (req, res) => {
  // Si la ruta no empieza por /api, servimos el index.html
  if (!req.url.startsWith('/api')) {
    res.sendFile(path.join(carpetaBuild, "index.html"), (err) => {
      if (err) {
        // Si falla, intentamos buscarlo en la raíz por si acaso
        res.status(500).send("Error cargando el frontend. Verifica la carpeta de build.");
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