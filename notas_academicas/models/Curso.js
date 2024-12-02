const db = require("../config/database");

const Curso = {
  getAll: (callback) => {
    const query = "SELECT * FROM cursos";
    db.query(query, callback);
  },
  create: (data, callback) => {
    const query = "INSERT INTO cursos (nombre, descripcion) VALUES (?, ?)";
    db.query(query, [data.nombre, data.descripcion], callback);
  },
};

module.exports = Curso;
