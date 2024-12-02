const Actividad = require("../models/Actividad");

const actividadesController = {
  getAll: (req, res) => {
    Actividad.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  },
  create: (req, res) => {
    Actividad.create(req.body, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: "Actividad creada", id: result.insertId });
    });
  },
  getByAsignatura: (req, res) => {
    const { asignatura_id } = req.params;
    Actividad.getByAsignatura(asignatura_id, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  },
};

module.exports = actividadesController;
