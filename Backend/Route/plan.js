const express = require('express');
const router = express.Router();
const Plan = require('../Models/Plan');

// 1. Obtener TODOS los planes (Para la página de "Todos los Planes")
router.get('/', async (req, res) => {
  try {
    const planes = await Plan.find(); 
    res.json(planes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. Obtener planes por categoría (Para las páginas individuales)
router.get('/categoria/:cat', async (req, res) => {
  try {
    const categoriaBuscada = req.params.cat;
    const planes = await Plan.find({ categoria: categoriaBuscada });
    
    console.log(`Búsqueda: ${categoriaBuscada}. Encontrados: ${planes.length}`);
    res.json(planes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;