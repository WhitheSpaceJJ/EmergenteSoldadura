const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const pool = require('./basedatos/database');
const app = express();
const Empleado = require('./basedatos/Empleado');

pool.getConnection()
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos', err);
  });

// Setear plantillas
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
  
// Setear entorno
dotenv.config({ path: './src/env/.env' });

// Setear cookies
app.use(cookieParser());

// Llamar router
app.use('/', require('./v1/routes/EmpleadosRutas'));

// Eliminar cache con el boton back 
app.use(function(req, res, next) {
  if (!req.user)
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  next();
});

// Endpoint para obtener la lista de empleados AJAX
app.get('/empleados', async (req, res) => {
  try {
    const empleados = await Empleado.obtenerEmpleados();
    res.status(200).json(empleados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los empleados' });
  }
});

app.listen(3000, () => console.log('El servidor está corriendo en el puerto 3000'));
