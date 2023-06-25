const controlEmpleados = require('../controles/controlEmpleados');
const asyncError = require("../utilidades/asyncError");
const CustomeError = require("../utilidades/customeError");

exports.agregarEmpleado = asyncError(async (req, res, next) => {
  const result = await controlEmpleados.agregarEmpleado(req.body);
  if (typeof result === 'string') {
    const error = new CustomeError('Error al agregar un empleado', 400);
    return next(error);
  } else {
    const { nombre, apellido, email, rol, telefono } = req.body;
    res.status(201).json({
      status: 'success',
      data: {
        empleado: {
          idempleado: result,
          nombre: nombre,
          apellido: apellido,
          email: email,
          rol: rol,
          telefono: telefono
        }
      }
    });
  }
});

exports.obtenerEmpleados = asyncError(async (req, res, next) => {
  const result = await controlEmpleados.obtenerEmpleados();
  if (typeof result === 'string') {
    const error = new CustomeError('No se encontraron empleados', 404);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        empleados: result
      }
    });
  }
});

exports.eliminarEmpleado = asyncError(async (req, res, next) => {
  const result = await controlEmpleados.obtenerEmpleadoPorId(req.params.id);
  if (typeof result === 'string') {
    const error = new CustomeError('No se encontró el empleado', 404);
    return next(error);
  }
  const result2 = await controlEmpleados.eliminarEmpleado(req.params.id);
  if (typeof result2 === 'string') {
    const error = new CustomeError('Error al eliminar el empleado', 400);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        empleado: result
      }
    });
  }
});

exports.actualizarEmpleado = asyncError(async (req, res, next) => {
  const result = await controlEmpleados.obtenerEmpleadoPorId(req.params.id);
  if (typeof result === 'string') {
    const error = new CustomeError('Error al obtener el empleado', 404 );
    return next(error);
  }
  const result2 = await controlEmpleados.actualizarEmpleado(req.body);
  if (typeof result2 === 'string') {
    const error = new CustomeError('Error al actualizar el empleado', 400);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        empleado: req.body
      }
    });
  }
});

exports.obtenerEmpleadoPorId = asyncError(async (req, res, next) => {
  const result = await controlEmpleados.obtenerEmpleadoPorId(req.params.id);
  if (typeof result === 'string') {
    const error = new CustomeError('Error al obtener el empleado', 404);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        empleado: result
      }
    });
  }
});
