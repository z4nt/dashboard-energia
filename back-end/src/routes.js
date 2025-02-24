import express from 'express';
import Consumo from './models.js';

const router = express.Router();
// Rota para pegar todos os consumos
router.get('/consumos', async (req, res) => {
  try {
    const consumos = await Consumo.findAll();
    res.json(consumos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para adicionar um novo consumo
router.post('/consumos', async (req, res) => {
  try {
    const { data, consumo_kwh } = req.body;
    const novoConsumo = await Consumo.create({ data, consumo_kwh });
    res.status(201).json(novoConsumo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router