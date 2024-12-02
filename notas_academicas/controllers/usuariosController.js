const Usuario = require("../models/Usuario");

const usuariosController = {
  getAll: (req, res) => {
    Usuario.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  },
  create: (req, res) => {
    Usuario.create(req.body, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: "Usuario creado", id: result.insertId });
    });
  },
  getById: (req, res) => {
    const { id } = req.params;
    Usuario.getById(id, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!result.length) return res.status(404).json({ message: "Usuario no encontrado" });
      res.json(result[0]);
    });
  },
};

module.exports = usuariosController;
