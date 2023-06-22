const express = require('express');
const servicioEmpleados = require('../servicios/servicioEmpleados');

const router = express.Router();


router
.route('/')
.get(servicioEmpleados.obtenerEmpleados)
.post(servicioEmpleados.agregarEmpleado)

router
.route('/:id')
.get(servicioEmpleados.obtenerEmpleadoPorId)
.delete(servicioEmpleados.eliminarEmpleado)
.put(servicioEmpleados.actualizarEmpleado)




module.exports = router;
