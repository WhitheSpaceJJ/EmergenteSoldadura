const controlUsuarios = require('../controles/controlUsuarios');
const asyncError = require("../utilidades/asyncError");
const CustomError = require("../utilidades/customeError");

exports.agregarUsuario = asyncError(async (req, res, next) => {
  const result = await controlUsuarios.agregarUsuario(req.body);
  if (typeof result === 'string') {
    const error = new CustomError('Error al agregar un usuario', 400);
    return next(error);
  } else {
    const { usuario, contrasena, idempleado } = req.body;
    res.status(201).json({
      status: 'success',
      data: {
        usuario: {
          usuario: usuario,
          contrasena: contrasena,
          idempleado: idempleado
        }
      }
    });
  }
});

exports.obtenerUsuarios = asyncError(async (req, res, next) => {
  const result = await controlUsuarios.obtenerUsuarios();
  if (typeof result === 'string') {
    const error = new CustomError('No se encontraron usuarios', 404);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        usuarios: result
      }
    });
  }
});

exports.eliminarUsuario = asyncError(async (req, res, next) => {
  const result = await controlUsuarios.obtenerUsuarioPorId(req.params.usuario);
  if (typeof result === 'string') {
    const error = new CustomError('No se encontró el usuario', 404);
    return next(error);
  }
  const result2 = await controlUsuarios.eliminarUsuario(req.params.usuario);
  if (typeof result2 === 'string') {
    const error = new CustomError('Error al eliminar el usuario', 400);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        usuario: result
      }
    });
  }
});

exports.actualizarUsuario = asyncError(async (req, res, next) => {
  const result = await controlUsuarios.obtenerUsuarioPorId(req.params.usuario);
  if (typeof result === 'string') {
    const error = new CustomError('Error al obtener el usuario', 404);
    return next(error);
  }
  const result2 = await controlUsuarios.actualizarUsuario(req.body);
  if (typeof result2 === 'string') {
    const error = new CustomError('Error al actualizar el usuario', 400);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        usuario: req.body
      }
    });
  }
});

exports.obtenerUsuarioPorId = asyncError(async (req, res, next) => {
  const result = await controlUsuarios.obtenerUsuarioPorId(req.params.id);
  if (typeof result === 'string') {
    const error = new CustomError('Error al obtener el usuario', 400);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        usuario: result
      }
    });
  }
});

exports.obtenerUsuario = asyncError(async (req, res, next) => {
  const result = await controlUsuarios.obtenerUsuario(req.params.usuario, req.params.contrasena);
  if (typeof result === 'string') {
    const error = new CustomError('Error al obtener el usuario', 400);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        usuario: result
      }
    });
  }
});
