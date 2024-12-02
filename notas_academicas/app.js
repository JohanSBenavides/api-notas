const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());

// Rutas
app.use("/api/cursos", require("./routes/cursosRoutes"));
// Agrega más rutas aquí

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.use("/api/usuarios", require("./routes/usuariosRoutes"));
app.use("/api/cursos", require("./routes/cursosRoutes"));
app.use("/api/asignaturas", require("./routes/asignaturasRoutes"));
app.use("/api/actividades", require("./routes/actividadesRoutes"));
app.use("/api/notas", require("./routes/notasRoutes"));
