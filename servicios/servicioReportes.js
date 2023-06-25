const controlReportes = require('../controles/controlReportes');
const asyncError = require("../utilidades/asyncError");
const CustomeError = require("../utilidades/customeError");

exports.agregarReporte = asyncError(async (req, res, next) => {
  const result = await controlReportes.agregarReporte(req.body);
  if (typeof result === 'string') {
    const error = new CustomeError('Error al agregar un reporte', 400);
    return next(error);
  } else {
    const { descripcion, fecha, hora, idempleado, idcliente } = req.body;
    res.status(201).json({
      status: 'success',
      data: {
        reporte: {
          idreporte: result.idreporte,
          descripcion: descripcion,
          fecha: fecha,
          hora: hora,
          idempleado: idempleado,
          idcliente: idcliente
        }
      }
    });
  }
});

exports.obtenerReportes = asyncError(async (req, res, next) => {
  const result = await controlReportes.obtenerReportes();
  if (typeof result === 'string') {
    const error = new CustomeError('No se encontraron reportes', 404);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        reportes: result
      }
    });
  }
});

exports.eliminarReporte = asyncError(async (req, res, next) => {
  const result = await controlReportes.obtenerReportePorId(req.params.id);
  if (typeof result === 'string') {
    const error = new CustomeError('No se encontró el reporte', 404);
    return next(error);
  }
  const result2 = await controlReportes.eliminarReporte(req.params.id);
  if (typeof result2 === 'string') {
    const error = new CustomeError('Error al eliminar el reporte', 400);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        reporte: result
      }
    });
  }
});

exports.actualizarReporte = asyncError(async (req, res, next) => {
  const result = await controlReportes.obtenerReportePorId(req.params.id);
  if (typeof result === 'string') {
    const error = new CustomeError('Error al obtener el reporte', 404);
    return next(error);
  }
  const result2 = await controlReportes.actualizarReporte(req.body);
  if (typeof result2 === 'string') {
    const error = new CustomeError('Error al actualizar el reporte', 400);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        reporte: req.body
      }
    });
  }
});

exports.obtenerReportePorId = asyncError(async (req, res, next) => {
  const result = await controlReportes.obtenerReportePorId(req.params.id);
  if (typeof result === 'string') {
    const error = new CustomeError('Error al obtener el reporte', 404);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        reporte: result
      }
    });
  }
});
