const controlUsuarios = require('../controles/controlUsuarios');
const asyncError = require("../utilidades/asyncError");
const CustomError = require("../utilidades/customeError");
const jwtController = require("../utilidades/jwtController");

const jwtMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  const secreto = 'osos-carinosos';

  try {
    await jwtController.verifyToken(token, secreto);
    next();
  } catch (error) {
    const customError = new CustomError('Token inválido', 401);
    next(customError);
  }
};

exports.agregarUsuario = jwtMiddleware, asyncError(async (req, res, next) => {
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
exports.obtenerUsuarios = jwtMiddleware, asyncError(async (req, res, next) => {
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


exports.eliminarUsuario =jwtMiddleware, asyncError(async (req, res, next) => {
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

exports.actualizarUsuario =jwtMiddleware, asyncError(async (req, res, next) => {
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

exports.obtenerUsuarioPorId =jwtMiddleware, asyncError(async (req, res, next) => {
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

exports.obtenerUsuario=async (req, res, next) => {
  const { usuario, contrasena } = req.body; 
  const result = await controlUsuarios.obtenerUsuario(usuario, contrasena);
  if (typeof result === 'string') {
    const error = new CustomError('Error al obtener el usuario', 400);
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
}
