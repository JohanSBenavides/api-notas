const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuariosController");

router.get("/", usuariosController.getAll);
router.post("/", usuariosController.create);
router.get("/:id", usuariosController.getById);

module.exports = router;
