const db = require("../config/db");

// Metodos
exports.crearLibro = async (req, res) => {
  const { titulo, autor, numpaginas, categoria } = req.body;

  // Vlidacion
  if (!titulo || !autor || numpaginas == undefined || !categoria) {
    return res.status(400).json({ message: "Falta completar los campos" });
  }

  // El comodin tiene un indice similar al array
  const sql =
    "INSERT INTO libros (titulo, autor, numpaginas, categoria) VALUES (?,?,?,?)";

  try {
    const [result] = await db.query(sql, [
      titulo,
      autor,
      numpaginas,
      categoria,
    ]);

    res.status(201).json({
      id: result.insertId,
      message: "Registrado correctamente",
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Error Interno en el Servidor" });
  }
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

exports.actualizarLibro = async (req, res) => {
  const { id } = await req.params;

  const { titulo, autor, numpaginas, categoria } = await req.body;

  if (!titulo && !autor && numpaginas == undefined && !categoria) {
    return res.status(400).json({ message: "Falta completar los campos" });
  }

  let sqlParts = [];
  let values = [];

  if (titulo) {
    sqlParts.push("titulo = ?");
    values.push(titulo);
  }

  if (autor) {
    sqlParts.push("autor = ?");
    values.push(autor);
  }

  if (numpaginas != undefined) {
    sqlParts.push("numpaginas = ?");
    values.push(numpaginas);
  }

  if (categoria) {
    sqlParts.push("categoria = ?");
    values.push(categoria);
  }

  if (sqlParts.length == 0) {
    return res.status(400).json({ message: "No hay datos para actualizar " });
  }

  values.push(id);
  const sql = `UPDATE libros SET ${sqlParts.join(", ")} WHERE id = ?`;

  try {
    const [result] = await db.query(sql, values);

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "No encontramos el libro con el ID" });
    }

    res.status(200).json({ message: "Actualizado correctamente" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Error Interno en el Servidor" });
  }
};

exports.eliminarLibro = async (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM libros WHERE id = ?";

  try {
    const [libros] = await db.query(sql, [id]);

    if (libros.affectedRows === 0) {
      return res.status(404).json({ message: "No encontramos el libro" });
    }

    res.status(200).json({ message: "Se elimino correctamente" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Error Interno en el Servidor" });
  }
};
