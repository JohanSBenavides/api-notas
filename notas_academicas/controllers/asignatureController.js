const Asignatura = require("../models/Asignatura");

const asignaturasController = {
  getAll: (req, res) => {
    Asignatura.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  },
  create: (req, res) => {
    Asignatura.create(req.body, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: "Asignatura creada", id: result.insertId });
    });
  },
  getByCurso: (req, res) => {
    const { curso_id } = req.params;
    Asignatura.getByCurso(curso_id, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  },
};

module.exports = asignaturasController;
