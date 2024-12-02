const db = require("../config/database");

const Actividad = {
  getAll: (callback) => {
    const query = "SELECT * FROM actividades";
    db.query(query, callback);
  },
  create: (data, callback) => {
    const query = "INSERT INTO actividades (titulo, asignatura_id) VALUES (?, ?)";
    db.query([data.titulo, data.asignatura_id], callback);
  },
  getByAsignatura: (asignatura_id, callback) => {
    const query = "SELECT * FROM actividades WHERE asignatura_id = ?";
    db.query(query, [asignatura_id], callback);
  },
};

module.exports = Actividad;
