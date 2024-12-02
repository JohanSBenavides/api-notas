const Nota = require("../models/Nota");

const notasController = {
  getAll: (req, res) => {
    Nota.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  },
  create: (req, res) => {
    Nota.create(req.body, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: "Nota creada", id: result.insertId });
    });
  },
  getByEstudiante: (req, res) => {
    const { estudiante_id } = req.params;
    Nota.getByEstudiante(estudiante_id, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  },
};

module.exports = notasController;
