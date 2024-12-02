const express = require("express");
const router = express.Router();
const cursosController = require("../controllers/cursosController");

router.get("/", cursosController.getAll);
router.post("/", cursosController.create);

module.exports = router;
