const express = require('express');
const servicioUsuarios = require('../servicios/servicioUsuario');

const router = express.Router();

router.route('/usuario')
  .get(servicioUsuarios.obtenerUsuario);

router.route('/')
  .get(servicioUsuarios.obtenerUsuarios)
  .post(servicioUsuarios.agregarUsuario);

router.route('/:id')
  .get(servicioUsuarios.obtenerUsuarioPorId)
  .delete(servicioUsuarios.eliminarUsuario)
  .put(servicioUsuarios.actualizarUsuario);

module.exports = router;