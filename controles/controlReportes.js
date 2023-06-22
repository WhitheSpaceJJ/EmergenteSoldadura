const modeloReportes = require('../modelos/modeloReporte');

/**
 * Función para obtener todos los reportes con la información del empleado y cliente asociados.
 * @returns Un array de objetos con los datos de los reportes y sus relaciones.
 */
const obtenerReportes = async () => {
  try {
    return await modeloReportes.Reporte.findAll({ 
      raw: true,
      attributes: {
        exclude: ['idempleado', 'idcliente']
      },
      nest: true,
      include: [modeloReportes.Empleado, modeloReportes.Cliente]
    });
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
};

/**
 * Función para obtener un reporte por su ID con la información del empleado y cliente asociados.
 * @param {number} id - ID del reporte a buscar.
 * @returns Un objeto con los datos del reporte y sus relaciones.
 */
const obtenerReportePorId = async (id) => {
  try {
    return await modeloReportes.Reporte.findByPk(id, { 
      raw: true,
      attributes: {
        exclude: ['idempleado', 'idcliente']
      },
      nest: true,
      include: [modeloReportes.Empleado, modeloReportes.Cliente]
    });
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
};

/**
 * Función para agregar un nuevo reporte a la base de datos.
 * @param {object} reporte - Objeto que contiene los datos del reporte a agregar.
 * @returns El resultado de la creación del reporte.
 */
const agregarReporte = async (reporte) => {
  try {
     const result=  await modeloReportes.Reporte.create(reporte,{raw:true,nest:true});
     const reporte2=result.dataValues;
     return reporte2.idreporte;
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
};

//Funcion realizada solo para probar las eliminaciones de reportes, ya que no sera posible actualizarlos
/**
 * Función para eliminar un reporte de la base de datos por su ID.
 * @param {number} id - ID del reporte a eliminar.
 * @returns El resultado de la eliminación del reporte.
 */
const eliminarReporte = async (id) => {
  try {
     await modeloReportes.Reporte.destroy({ where: { idreporte: id } });
     return true;

  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
};
//Funcion realizada solo para probar las actuazaciones de reportes, ya que no sera posible actualizarlos
/**
 * Función para actualizar los datos de un reporte existente en la base de datos.
 * @param {object} reporte - Objeto que contiene los nuevos datos del reporte.
 * @returns El resultado de la actualización del reporte.
 */
const actualizarReporte = async (reporte) => {
  try {
     await modeloReportes.Reporte.update(reporte, { where: { idreporte: reporte.idreporte } });
     return true;

  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
};

// Exportar las funciones para su uso en otros módulos
module.exports = {
  obtenerReportes,
  obtenerReportePorId,
  agregarReporte,
  eliminarReporte,
  actualizarReporte
};
