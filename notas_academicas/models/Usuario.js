const db = require("../config/database");

const Usuario = {
  getAll: (callback) => {
    const query = "SELECT * FROM usuarios";
    db.query(query, callback);
  },
  create: (data, callback) => {
    const query = "INSERT INTO usuarios (nombre, email, es_profesor, es_estudiante) VALUES (?, ?, ?, ?)";
    db.query(
      [data.nombre, data.email, data.es_profesor || false, data.es_estudiante || true],
      callback
    );
  },
  getById: (id, callback) => {
    const query = "SELECT * FROM usuarios WHERE id = ?";
    db.query(query, [id], callback);
  },
};

module.exports = Usuario;
