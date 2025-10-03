const db = require("../config/db");

// Metodos
exports.crearLibro = async (req, res) => {
  console.log("Ejecutaste el POST");
};

exports.obtenerLibros = async (req, res) => {
  const sql = "SELECT id, titulo, autor, numpaginas, categoria FROM libros";

  try {
    // Deserialización
    const [libros] = await db.query(sql);
    res.status(200).json(libros);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Error Interno en el Servidor" });
  }
};

exports.obtenerLibrosPorId = async (req, res) => {
  const { id } = req.params;

  const sql =
    "SELECT id, titulo, autor, numpaginas, categoria FROM libros WHERE id = ?";

  try {
    // Deserialización
    const [libros] = await db.query(sql, [id]);

    if (libros.length == 0) {
      return res.status(404).json({ message: "No encontramos el libro" });
    }

    res.status(200).json(libros[0]);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Error Interno en el Servidor" });
  }
};
