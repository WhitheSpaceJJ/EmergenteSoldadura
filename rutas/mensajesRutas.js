const express = require('express');
const servicioMensajes = require('../servicios/servicioMensajes');

const router = express.Router();


router
.route('/')
.get(servicioMensajes.obtenerMensajes)
.post(servicioMensajes.agregarMensaje)

router
.route('/:id')
.get(servicioMensajes.obtenerMensajePorId)
.delete(servicioMensajes.eliminarMensaje)
.put(servicioMensajes.actualizarMensaje)



module.exports = router;
