const controlMensajes = require('../controles/controlMensajes');
const asyncError = require("../utilidades/asyncError");
const CustomeError = require("../utilidades/customeError");

exports.agregarMensaje = asyncError(async (req, res, next) => {
  const result = await controlMensajes.agregarMensaje(req.body);
  if (typeof result === 'string') {
    const error = new CustomeError('Error al agregar un mensaje', 400);
    return next(error);
  } else {
    const { fecha, asunto, cuerpo, archivo, idempleado, idcliente } = req.body;
    res.status(201).json({
      status: 'success',
      data: {
        mensaje: {
          idmensaje: result.idmensaje,
          fecha: fecha,
          asunto: asunto,
          cuerpo: cuerpo,
          archivo: archivo,
          idempleado: idempleado,
          idcliente: idcliente
        }
      }
    });
  }
});

exports.obtenerMensajes = asyncError(async (req, res, next) => {
  const result = await controlMensajes.obtenerMensajes();
  if (typeof result === 'string') {
    const error = new CustomeError('No se encontraron mensajes', 404);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        mensajes: result
      }
    });
  }
});

exports.eliminarMensaje = asyncError(async (req, res, next) => {
  const result = await controlMensajes.obtenerMensajePorId(req.params.id);
  if (typeof result === 'string') {
    const error = new CustomeError('No se encontró el mensaje', 404);
    return next(error);
  }
  const result2 = await controlMensajes.eliminarMensaje(req.params.id);
  if (typeof result2 === 'string') {
    const error = new CustomeError('Error al eliminar el mensaje', 400);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        mensaje: result
      }
    });
  }
});

exports.actualizarMensaje = asyncError(async (req, res, next) => {
  const result = await controlMensajes.obtenerMensajePorId(req.params.id);
  if (typeof result === 'string') {
    const error = new CustomeError('Error al obtener el mensaje', 404);
    return next(error);
  }
  const result2 = await controlMensajes.actualizarMensaje(req.body);
  if (typeof result2 === 'string') {
    const error = new CustomeError('Error al actualizar el mensaje', 400);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        mensaje: req.body
      }
    });
  }
});

exports.obtenerMensajePorId = asyncError(async (req, res, next) => {
  const result = await controlMensajes.obtenerMensajePorId(req.params.id);
  if (typeof result === 'string') {
    const error = new CustomeError('Error al obtener el mensaje', 404);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        mensaje: result
      }
    });
  }
});
