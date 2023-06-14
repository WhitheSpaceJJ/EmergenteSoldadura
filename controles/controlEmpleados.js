const modeloEmpleados = require('../modelos/modeloEmpleado');

const obtenerEmpleados = () => {
  return modeloEmpleados.Empleado.findAll({ raw: true
    , nest: true, 
    include: [modeloEmpleados.Mensaje, modeloEmpleados.Reporte, modeloEmpleados.Retroalimentacion] 
  });
};
/*
, nest: true, 
    include: [modeloEmpleados.Mensaje, modeloEmpleados.Reporte, modeloEmpleados.Retroalimentacion] 
*/
const obtenerEmpleadoPorId = (id) => {
  return modeloEmpleados.Empleado.findByPk(id, { raw: true
    , nest: true, 
    include: [modeloEmpleados.Mensaje, modeloEmpleados.Reporte, modeloEmpleados.Retroalimentacion] 
  });
};

const agregarEmpleado = (empleado) => {
  return modeloEmpleados.Empleado.create(empleado, { raw: true });
};

const eliminarEmpleado = (id) => {
  return modeloEmpleados.Empleado.destroy({ where: { idempleado: id } });
};

const actualizarEmpleado = (empleado) => {
  return modeloEmpleados.Empleado.update(empleado, { where: { idempleado: empleado.idempleado } });
};

module.exports = {
  obtenerEmpleadoPorId,
  obtenerEmpleados,
  agregarEmpleado,
  eliminarEmpleado,
  actualizarEmpleado
};
