const db = require("../config/database");

const Asignatura = {
  getAll: (callback) => {
    const query = "SELECT * FROM asignaturas";
    db.query(query, callback);
  },
  create: (data, callback) => {
    const query = "INSERT INTO asignaturas (nombre, curso_id) VALUES (?, ?)";
    db.query([data.nombre, data.curso_id], callback);
  },
  getByCurso: (curso_id, callback) => {
    const query = "SELECT * FROM asignaturas WHERE curso_id = ?";
    db.query(query, [curso_id], callback);
  },
};

module.exports = Asignatura;
