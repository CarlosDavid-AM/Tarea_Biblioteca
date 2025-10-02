// Acceso a datos

// Accedemos al archivo .env
require('dotenv').config()

// Capasidad de administrar las base de datos
const mySql = require('mysql2/promise')

// Pool de conexiones = acceso
const pool = mySql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
})

module.exports = pool