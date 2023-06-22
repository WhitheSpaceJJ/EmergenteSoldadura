const express = require('express');
const servicioClientes = require('../servicios/servicioClientes');

const router = express.Router();


router
.route('/')
.get(servicioClientes.obtenerClientes)
.post(servicioClientes.agregarCliente)

router
.route('/:id')
.get(servicioClientes.obtenerClientePorId)
.delete(servicioClientes.eliminarCliente)
.put(servicioClientes.actualizarCliente)



module.exports = router;
