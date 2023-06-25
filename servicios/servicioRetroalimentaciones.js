const controlRetroalimentaciones = require('../controles/controlRetroalimentaciones');
const asyncError = require("../utilidades/asyncError");
const CustomError = require("../utilidades/customeError");

exports.agregarRetroalimentacion = asyncError(async (req, res, next) => {
  const result = await controlRetroalimentaciones.agregarRetroalimentacion(req.body);
  if (typeof result === 'string') {
    const error = new CustomError('Error al agregar una retroalimentación', 400);
    return next(error);
  } else {
    const { comentario, fecha, calificacion, idempleado, idcliente } = req.body;
    res.status(201).json({
      status: 'success',
      data: {
        retroalimentacion: {
          idretroalimentacion: result.idretroalimentacion,
          comentario: comentario,
          fecha: fecha,
          calificacion: calificacion,
          idempleado: idempleado,
          idcliente: idcliente
        }
      }
    });
  }
});

exports.obtenerRetroalimentaciones = asyncError(async (req, res, next) => {
  const result = await controlRetroalimentaciones.obtenerRetroalimentaciones();
  if (typeof result === 'string') {
    const error = new CustomError('No se encontraron retroalimentaciones', 404);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        retroalimentaciones: result
      }
    });
  }
});

exports.eliminarRetroalimentacion = asyncError(async (req, res, next) => {
  const result = await controlRetroalimentaciones.obtenerRetroalimentacionPorId(req.params.id);
  if (typeof result === 'string') {
    const error = new CustomError('No se encontró la retroalimentación', 404);
    return next(error);
  }
  const result2 = await controlRetroalimentaciones.eliminarRetroalimentacion(req.params.id);
  if (typeof result2 === 'string') {
    const error = new CustomError('Error al eliminar la retroalimentación', 400);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        retroalimentacion: result
      }
    });
  }
});

exports.actualizarRetroalimentacion = asyncError(async (req, res, next) => {
  const result = await controlRetroalimentaciones.obtenerRetroalimentacionPorId(req.params.id);
  if (typeof result === 'string') {
    const error = new CustomError('Error al obtener la retroalimentación', 404);
    return next(error);
  }
  const result2 = await controlRetroalimentaciones.actualizarRetroalimentacion(req.body);
  if (typeof result2 === 'string') {
    const error = new CustomError('Error al actualizar la retroalimentación', 400);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        retroalimentacion: req.body
      }
    });
  }
});

exports.obtenerRetroalimentacionPorId = asyncError(async (req, res, next) => {
  const result = await controlRetroalimentaciones.obtenerRetroalimentacionPorId(req.params.id);
  if (typeof result === 'string') {
    const error = new CustomError('Error al obtener la retroalimentación', 404);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        retroalimentacion: result
      }
    });
  }
});
