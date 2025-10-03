const express = require("express");
const router = express.Router();

const productoController = require("../controllers/libroController");

// Dedinimos las rutas
router.post("/", productoController.crearLibro);

router.get("/", productoController.obtenerLibros);

router.get("/:id", productoController.obtenerLibrosPorId);

router.put("/:id", productoController.actualizarLibro);

router.delete("/:id", productoController.eliminarLibro);

module.exports = router;
