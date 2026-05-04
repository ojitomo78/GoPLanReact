require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// 1. IMPORTAR TODAS LAS RUTAS (Añadimos la de planes)
const userRoutes = require("./Route/user.js");
const loginRoutes = require("./Route/login.js");
const planRoutes = require("./Route/plan.js"); // <--- FALTA ESTA

const app = express();

// --- MIDDLEWARES ---
app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());


// --- RUTAS ---

// 2. REGISTRAR EL PREFIJO DE PLANES
app.use("/api/login", loginRoutes);
app.use("/api/users", userRoutes);
app.use("/api/planes", planRoutes); // <--- FALTA ESTA

// Ruta base de chequeo
app.get("/", (req, res) => {
  res.send("🚀 Servidor de GoPlanReact funcionando correctamente");
});


// --- CONEXIÓN A BASE DE DATOS ---
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
})
  .then(() => {
    console.log("✅ Conectado a MongoDB Atlas");
  })
  .catch((error) => {
    console.error("❌ Error de conexión a MongoDB:", error);
  });

// --- SEED (Mantenlo aquí hasta que hagas la carga una vez) ---
//const Plan = require("./Models/Plan"); 

//app.post("/api/planes/seed", async (req, res) => {
  //try {

//const planesUrbano = [
  //{
    //titulo: "New York City Tour",
    //descripcion: "Descubre la ciudad que nunca duerme. Recorre lugares icónicos como Times Square, Central Park, el Empire State Building y la Estatua de la Libertad.",
    //precio: "$3.200.000",
    //imagen: "/image/planes/new_york_city_tour.png",
    //categoria: "Urbano"
  //}
//];

//await Plan.insertMany(planesUrbano);
    //res.json({ mensaje: "¡Planes cargados con éxito! 🏔️" });
  //} catch (error) {
    //res.status(500).json({ error: error.message });
  //}
//});

// --- INICIO DEL SERVIDOR ---
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
});