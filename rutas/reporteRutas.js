const express = require('express');
const servicioReportes = require('../servicios/servicioReportes');

const router = express.Router();


router
.route('/')
.get(servicioReportes.obtenerReportes)
.post(servicioReportes.agregarReporte)

router
.route('/:id')
.get(servicioReportes.obtenerReportePorId)
.delete(servicioReportes.eliminarReporte)
.put(servicioReportes.actualizarReporte)



module.exports = router;
