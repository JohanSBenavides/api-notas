const express = require("express");
const router = express.Router();
const asignaturasController = require("../controllers/asignaturasController");

router.get("/", asignaturasController.getAll);
router.post("/", asignaturasController.create);
router.get("/curso/:curso_id", asignaturasController.getByCurso);

module.exports = router;
