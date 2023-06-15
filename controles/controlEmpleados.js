const modeloEmpleados = require('../modelos/modeloEmpleado');

const obtenerEmpleados = () => {
  return modeloEmpleados.Empleado.findAll({
    raw: false,
    nest: true,
    include: [
      {
        model: modeloEmpleados.Mensaje
      },
      {
        model: modeloEmpleados.Reporte
      },
      {
        model: modeloEmpleados.Retroalimentacion
      }
    ]
  }).then(empleados => {
    const result = [];
    for (let i = 0; i < empleados.length; i++) {
      let empleado = empleados[i];
      let mensajes = empleado.mensajes.map(mensaje => mensaje.dataValues);
      let reportes = empleado.reportes.map(mensaje => mensaje.dataValues);
      let retroalimentaciones = empleado.retroalimentaciones.map(mensaje => mensaje.dataValues);
      let datosPrincipales = {
        id: empleado.idempleado,
        nombre: empleado.nombre,
        apellido: empleado.apellido,
        email: empleado.email,
        rol: empleado.rol,
        telefono: empleado.telefono,
        mensajes: mensajes,
        reportes: reportes,
        retroalimentaciones: retroalimentaciones
      };
      result.push(datosPrincipales);
    }
    return result;
  }).catch(error => {
    console.log(error);
  });
};
const obtenerEmpleadoPorId = (id) => {
  return modeloEmpleados.Empleado.findByPk(id, {
    raw: false,
    nest: true,
    include: [
      {
        model: modeloEmpleados.Mensaje
      },
      {
        model: modeloEmpleados.Reporte
      },
      {
        model: modeloEmpleados.Retroalimentacion
      }
    ]
  }).then(empleado => {
    const mensajes = empleado.mensajes.map(mensaje => mensaje.dataValues);
    const reportes = empleado.reportes.map(mensaje => mensaje.dataValues);
    const retroalimentaciones = empleado.retroalimentaciones.map(mensaje => mensaje.dataValues);
    const datosPrincipales = {
      id: empleado.idempleado,
      nombre: empleado.nombre,
      apellido: empleado.apellido,
      email: empleado.email,
      rol: empleado.rol,
      telefono: empleado.telefono,
      mensajes: mensajes,
      reportes: reportes,
      retroalimentaciones: retroalimentaciones
    };
    return datosPrincipales;
  }).catch(error => {
    console.log(error);
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
