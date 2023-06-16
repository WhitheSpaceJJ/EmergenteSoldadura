const modeloEmpleados = require('../modelos/modeloEmpleado');

const obtenerEmpleados = async () => {
  try {
    const empleados = await modeloEmpleados.Empleado.findAll({
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
    });

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
  } catch (error) {
    console.log("Error; ",error.message);
    return null;
  }
};

const obtenerEmpleadoPorId = async (id) => {
  try {
    const empleado = await modeloEmpleados.Empleado.findByPk(id, {
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
    });

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
  } catch (error) {
    console.log("Error; ",error.message);
    return null;
  }
};

const agregarEmpleado = async (empleado) => {
  try {
    return await modeloEmpleados.Empleado.create(empleado, { raw: true });
  } catch (error) {
    console.log("Error; ",error.message);
    return null;
  }
};

const eliminarEmpleado = async (id) => {
  try {
    return await modeloEmpleados.Empleado.destroy({ where: { idempleado: id } });
  } catch (error) {
    console.log("Error; ",error.message);
    return null;
  }
};

const actualizarEmpleado = async (empleado) => {
  try {
    return await modeloEmpleados.Empleado.update(empleado, { where: { idempleado: empleado.idempleado } });
  } catch (error) {
    console.log("Error; ",error.message);
    return null;
  }
};

module.exports = {
  obtenerEmpleadoPorId,
  obtenerEmpleados,
  agregarEmpleado,
  eliminarEmpleado,
  actualizarEmpleado
};