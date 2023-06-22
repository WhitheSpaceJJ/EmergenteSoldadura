const modeloMensajes = require('../modelos/modeloMensaje');

/**
 * Función para obtener todos los mensajes con la información del empleado y cliente asociados.
 * @returns Un array de objetos con los datos de los mensajes y sus relaciones.
 */
const obtenerMensajes = async () => {
  try {
    return await modeloMensajes.Mensaje.findAll({ 
      raw: true,
      attributes: {
        exclude: ['idempleado', 'idcliente']
      },
      nest: true,
      include: [modeloMensajes.Empleado, modeloMensajes.Cliente]
    });
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
};

/**
 * Función para obtener un mensaje por su ID con la información del empleado y cliente asociados.
 * @param {number} id - ID del mensaje a buscar.
 * @returns Un objeto con los datos del mensaje y sus relaciones.
 */
const obtenerMensajePorId = async (id) => {
  try {
    return await modeloMensajes.Mensaje.findByPk(id, { 
      raw: true,
      attributes: {
        exclude: ['idempleado', 'idcliente']
      },
      nest: true,
      include: [modeloMensajes.Empleado, modeloMensajes.Cliente]
    });
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
};

/**
 * Función para agregar un nuevo mensaje a la base de datos.
 * @param {object} mensaje - Objeto que contiene los datos del mensaje a agregar.
 * @returns El resultado de la creación del mensaje.
 */
const agregarMensaje = async (mensaje) => {
  try {
    
     const result=  await modeloMensajes.Mensaje.create(mensaje,{raw:true,nest:true});
     const mensaje2=result.dataValues;
     return mensaje2.idmensaje;
  } catch (error) {
    console.log("Error:", error.message);
    return  error.message;
  }
};

/**
 * Función para eliminar un mensaje de la base de datos por su ID.
 * @param {number} id - ID del mensaje a eliminar.
 * @returns El resultado de la eliminación del mensaje.
 */
const eliminarMensaje = async (id) => {
  try {
     await modeloMensajes.Mensaje.destroy({ where: { idmensaje: id } });
     return true;

    } catch (error) {
    console.log("Error:", error.message);
    return  error.message;
  }
};
//Funcion realizada solo para probar las actuazaciones de mensajes, ya que no sera posible actualizarlos
/**
 * Función para actualizar los datos de un mensaje existente en la base de datos.
 * @param {object} mensaje - Objeto que contiene los nuevos datos del mensaje.
 * @returns El resultado de la actualización del mensaje.
 */
const actualizarMensaje = async (mensaje) => {
  try {
     await modeloMensajes.Mensaje.update(mensaje, { where: { idmensaje: mensaje.idmensaje } });
     return true;

  } catch (error) {
    console.log("Error:", error.message);
    return  error.message;
  }
};

// Exportar las funciones para su uso en otros módulos
module.exports = {
  obtenerMensajes,
  obtenerMensajePorId,
  agregarMensaje,
  eliminarMensaje,
  actualizarMensaje
};
