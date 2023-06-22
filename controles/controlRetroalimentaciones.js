const modeloRetroalimentaciones = require('../modelos/modeloRetroalimentaciones');

/**
 * Función para obtener todas las retroalimentaciones con la información del empleado y cliente asociados.
 * @returns Un array de objetos con los datos de las retroalimentaciones y sus relaciones.
 */
const obtenerRetroalimentaciones = async () => {
  try {
    return await modeloRetroalimentaciones.Retroalimentacion.findAll({ 
      raw: true,
      attributes: {
        exclude: ['idempleado', 'idcliente']
      },
      nest: true,
      include: [modeloRetroalimentaciones.Empleado, modeloRetroalimentaciones.Cliente]
    });
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
};

/**
 * Función para obtener una retroalimentación por su ID con la información del empleado y cliente asociados.
 * @param {number} id - ID de la retroalimentación a buscar.
 * @returns Un objeto con los datos de la retroalimentación y sus relaciones.
 */
const obtenerRetroalimentacionPorId = async (id) => {
  try {
    return await modeloRetroalimentaciones.Retroalimentacion.findByPk(id, { 
      raw: true,
      attributes: {
        exclude: ['idempleado', 'idcliente']
      },
      nest: true,
      include: [modeloRetroalimentaciones.Empleado, modeloRetroalimentaciones.Cliente]
    });
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
};

/**
 * Función para agregar una nueva retroalimentación a la base de datos.
 * @param {object} retroalimentacion - Objeto que contiene los datos de la retroalimentación a agregar.
 * @returns El resultado de la creación de la retroalimentación.
 */
const agregarRetroalimentacion = async (retroalimentacion) => {
  try {
    const result=  await modeloRetroalimentaciones.Retroalimentacion.create(retroalimentacion,{raw:true,nest:true});
    const retroalimentacion2=result.dataValues;
    return retroalimentacion2.idretroalimentacion;
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
};
//Funcion realizada solo para probar las eliminaciones de retroalimentaciones, ya que no sera posible actualizarlos
/**
 * Función para eliminar una retroalimentación de la base de datos por su ID.
 * @param {number} id - ID de la retroalimentación a eliminar.
 * @returns El resultado de la eliminación de la retroalimentación.
 */
const eliminarRetroalimentacion = async (id) => {
  try {
   await modeloRetroalimentaciones.Retroalimentacion.destroy({ where: { idretroalimentacion: id } });
    return true;
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
};
//Funcion realizada solo para probar las actualizaciones de retroalimentaciones, ya que no sera posible actualizarlos
/**
 * Función para actualizar los datos de una retroalimentación existente en la base de datos.
 * @param {object} retroalimentacion - Objeto que contiene los nuevos datos de la retroalimentación.
 * @returns El resultado de la actualización de la retroalimentación.
 */
const actualizarRetroalimentacion = async (retroalimentacion) => {
  try {
    await modeloRetroalimentaciones.Retroalimentacion.update(retroalimentacion, { where: { idretroalimentacion: retroalimentacion.idretroalimentacion } });
    return true;
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
};

// Exportar las funciones para su uso en otros módulos
module.exports = {
  obtenerRetroalimentaciones,
  obtenerRetroalimentacionPorId,
  agregarRetroalimentacion,
  eliminarRetroalimentacion,
  actualizarRetroalimentacion
};
