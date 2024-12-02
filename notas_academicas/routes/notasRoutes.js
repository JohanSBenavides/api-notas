const express = require("express");
const router = express.Router();
const notasController = require("../controllers/notasController");

router.get("/", notasController.getAll);
router.post("/", notasController.create);
router.get("/estudiante/:estudiante_id", notasController.getByEstudiante);

module.exports = router;
