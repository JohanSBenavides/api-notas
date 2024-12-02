const db = require("../config/database");

const Nota = {
  getAll: (callback) => {
    const query = "SELECT * FROM notas";
    db.query(query, callback);
  },
  create: (data, callback) => {
    const query = "INSERT INTO notas (estudiante_id, actividad_id, calificacion) VALUES (?, ?, ?)";
    db.query([data.estudiante_id, data.actividad_id, data.calificacion], callback);
  },
  getByEstudiante: (estudiante_id, callback) => {
    const query = "SELECT * FROM notas WHERE estudiante_id = ?";
    db.query(query, [estudiante_id], callback);
  },
  getByActividad: (actividad_id, callback) => {
    const query = "SELECT * FROM notas WHERE actividad_id = ?";
    db.query(query, [actividad_id], callback);
  },
};

module.exports = Nota;
