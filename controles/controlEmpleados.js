const modeloEmpleados = require('../modelos/modeloEmpleado');

/**
 * Función para obtener todos los empleados con sus mensajes, reportes y retroalimentaciones.
 * @returns Un array de objetos con los datos principales de cada empleado.
 */
const obtenerEmpleados = async () => {
  try {
    // Obtener todos los empleados con sus relaciones incluidas
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

    // Mapear los empleados y sus relaciones en un nuevo array de objetos
    for (let i = 0; i < empleados.length; i++) {
      let empleado = empleados[i];
      let mensajes = empleado.mensajes.map(mensaje => mensaje.dataValues);
      let reportes = empleado.reportes.map(mensaje => mensaje.dataValues);
      let retroalimentaciones = empleado.retroalimentaciones.map(mensaje => mensaje.dataValues);
      let datosPrincipales = {
        idempleado: empleado.idempleado,
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
    console.log("Error:", error.message);
    return error.message;
  }
};

/**
 * Función para obtener un empleado por su ID con sus mensajes, reportes y retroalimentaciones.
 * @param {number} id - ID del empleado a buscar.
 * @returns Un objeto con los datos principales del empleado y sus relaciones.
 */
const obtenerEmpleadoPorId = async (id) => {
  try {
    // Buscar un empleado por su ID con las relaciones incluidas
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

    // Obtener los mensajes, reportes y retroalimentaciones del empleado
    const mensajes = empleado.mensajes.map(mensaje => mensaje.dataValues);
    const reportes = empleado.reportes.map(mensaje => mensaje.dataValues);
    const retroalimentaciones = empleado.retroalimentaciones.map(mensaje => mensaje.dataValues);
    
    // Crear un objeto con los datos principales del empleado y sus relaciones
    const datosPrincipales = {
      idempleado: empleado.idempleado,
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
    console.log("Error:", error.message);
    return error.message;
  }
};

/**
 * Función para agregar un nuevo empleado a la base de datos.
 * @param {object} empleado - Objeto que contiene los datos del empleado a agregar.
 * @returns El resultado de la creación del empleado.
 */
const agregarEmpleado = async (empleado) => {
  try {
    // Crear un nuevo empleado con los datos proporcionados
     const result=await modeloEmpleados.Empleado.create(empleado,{raw:true,nest:true});
     const empleado2=result.dataValues;
     return empleado2.idempleado;
  } catch (error) {
    console.log("Error:", error.message);
    return error.message;
  }
};

/**
 * Función para eliminar un empleado de la base de datos por su ID.
 * @param {number} id - ID del empleado a eliminar.
 * @returns El resultado de la eliminación del empleado.
 */
const eliminarEmpleado = async (id) => {
  try {
    // Eliminar un empleado por su ID
     await modeloEmpleados.Empleado.destroy({ where: { idempleado: id } });
     return true;
  } catch (error) {
    console.log("Error:", error.message);
    return error.message;
  }
};

/**
 * Función para actualizar los datos de un empleado existente en la base de datos.
 * @param {object} empleado - Objeto que contiene los nuevos datos del empleado.
 * @returns El resultado de la actualización del empleado.
 */
const actualizarEmpleado = async (empleado) => {
  try {
    // Actualizar los datos del empleado por su ID
     await modeloEmpleados.Empleado.update(empleado, { where: { idempleado: empleado.idempleado } });
     return true;

  } catch (error) {
    console.log("Error:", error.message);
    return error.message;
  }
};

// Exportar las funciones para su uso en otros módulos
module.exports = {
  obtenerEmpleadoPorId,
  obtenerEmpleados,
  agregarEmpleado,
  eliminarEmpleado,
  actualizarEmpleado
};
