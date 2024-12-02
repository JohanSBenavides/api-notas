const express = require("express");
const router = express.Router();
const actividadesController = require("../controllers/actividadesController");

router.get("/", actividadesController.getAll);
router.post("/", actividadesController.create);
router.get("/:asignatura_id", actividadesController.getByAsignatura);

module.exports = router;
