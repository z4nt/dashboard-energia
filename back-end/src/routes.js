import express from 'express';
import Consumo from './models.js';
import { Op } from 'sequelize';

const router = express.Router();
// Rota para pegar todos os consumos
router.get('/consumos/:mes', async (req, res) => {
  const mes = req.params.mes
  const passado = new Date()
  passado.setMonth(passado.getMonth() - 6)
  passado.toISOString
  const presente = new Date()
  presente.toISOString
  try {
    const consumos = await Consumo.findAll({
      attributes: ["consumo_kwh"], // Seleciona apenas a coluna "consumo"
      where: {
        createdAt: {
          [Op.between]: [passado, presente],
        },
      },
    });
    res.json(consumos);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err)
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