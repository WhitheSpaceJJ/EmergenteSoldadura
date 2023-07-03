const controlUsuarios = require('../controles/controlUsuarios');
const asyncError = require("../utilidades/asyncError");
const CustomeError = require("../utilidades/customeError");
const jwtController = require("../utilidades/jwtController");

const jwtMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  const secreto = 'osos-carinosos';

  try {
    await jwtController.verifyToken(token, secreto);
    next();
  } catch (error) {
    const customeError = new CustomeError('Token inválido, no ha iniciado sesión.', 401);
    next(customeError);
  }
};


exports.agregarUsuario =jwtMiddleware, asyncError(async (req, res, next) => {
  const result = await controlUsuarios.agregarUsuario(req.body);
  if (typeof result === 'string') {
    const error = new CustomeError('Error al agregar un usuario', 400);
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

exports.obtenerUsuarios =jwtMiddleware, asyncError(async (req, res, next) => {
  const result = await controlUsuarios.obtenerUsuarios();
  if (typeof result === 'string') {
    const error = new CustomeError('No se encontraron usuarios', 404);
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

exports.eliminarUsuario =jwtMiddleware, asyncError(async (req, res, next) => {
  const result = await controlUsuarios.obtenerUsuarioPorId(req.params.usuario);
  if (typeof result === 'string') {
    const error = new CustomeError('No se encontró el usuario', 404);
    return next(error);
  }
  const result2 = await controlUsuarios.eliminarUsuario(req.params.usuario);
  if (typeof result2 === 'string') {
    const error = new CustomeError('Error al eliminar el usuario', 400);
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

exports.actualizarUsuario = jwtMiddleware,asyncError(async (req, res, next) => {
  const result = await controlUsuarios.obtenerUsuarioPorId(req.params.usuario);
  if (typeof result === 'string') {
    const error = new CustomeError('Error al obtener el usuario', 404);
    return next(error);
  }
  const result2 = await controlUsuarios.actualizarUsuario(req.body);
  if (typeof result2 === 'string') {
    const error = new CustomeError('Error al actualizar el usuario', 400);
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

exports.obtenerUsuarioPorId =jwtMiddleware, asyncError(async (req, res, next) => {
  const result = await controlUsuarios.obtenerUsuarioPorId(req.params.id);
  if (typeof result === 'string') {
    const error = new CustomeError('Error al obtener el usuario', 400);
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

exports.obtenerUsuario = async (req, res, next) => {
  const result = await controlUsuarios.obtenerUsuario(req.query.usuario, req.query.contrasena);
  if (typeof result === 'string') {
    const error = new CustomeError('Error al obtener el usuario', 400);
    return next(error);
  } else {
    const { usuario, contrasena, idempleado } = result;
    const payload = { usuario, contrasena, idempleado };
    const secreto = 'osos-carinosos';
    const token = await jwtController.generateToken(payload, secreto);

    res.status(200).json({
      status: 'success',
      data: {
        usuario: result,
        token: token
      }
    });
  }
};
