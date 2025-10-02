const express = require('express')
const productoRoutes = require('./src/routes/libroRoutes')

const app = express()
const PORT = process.env.PORT || 3000

// la comunicacion se hara por JSON

app.use(express.json())

// Rutas
app.use('/api/libros', productoRoutes)

// Inicializar
app.listen(PORT,() => {
  console.log(`Server corriendo en: http://localhost:${PORT}`);
})