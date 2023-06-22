const modeloClientes = require('../modelos/modeloCliente');

/**
 * Función para obtener todos los clientes con sus mensajes, reportes y retroalimentaciones.
 * @returns Un array de objetos con los datos principales de cada cliente.
 */
const obtenerClientes = async () => {
  try {
    // Obtener todos los clientes con sus relaciones incluidas
    const clientes = await modeloClientes.Cliente.findAll({
      raw: false,
      nest: true,
      include: [
        { model: modeloClientes.Mensaje },
        { model: modeloClientes.Reporte },
        { model: modeloClientes.Retroalimentacion }
      ]
    });

    const result = [];

    // Mapear los clientes y sus relaciones en un nuevo array de objetos
    for (let i = 0; i < clientes.length; i++) {
      let cliente = clientes[i];
      let mensajes = cliente.mensajes.map(mensaje => mensaje.dataValues);
      let reportes = cliente.reportes.map(mensaje => mensaje.dataValues);
      let retroalimentaciones = cliente.retroalimentaciones.map(mensaje => mensaje.dataValues);
      let datosPrincipales = {
        rfc: cliente.rfc,
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        email: cliente.email,
        empresa: cliente.empresa,
        telefono: cliente.telefono,
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
 * Función para obtener un cliente por su ID con sus mensajes, reportes y retroalimentaciones.
 * @param {string} id - ID del cliente a buscar.
 * @returns Un objeto con los datos principales del cliente y sus relaciones.
 */
const obtenerClientePorId = async (id) => {
  try {
    // Buscar un cliente por su ID con las relaciones incluidas
    const cliente = await modeloClientes.Cliente.findByPk(id, {
      raw: false,
      nest: true,
      include: [
        { model: modeloClientes.Mensaje },
        { model: modeloClientes.Reporte },
        { model: modeloClientes.Retroalimentacion }
      ]
    });

    // Obtener los mensajes, reportes y retroalimentaciones del cliente
    const mensajes = cliente.mensajes.map(mensaje => mensaje.dataValues);
    const reportes = cliente.reportes.map(mensaje => mensaje.dataValues);
    const retroalimentaciones = cliente.retroalimentaciones.map(mensaje => mensaje.dataValues);
    
    // Crear un objeto con los datos principales del cliente y sus relaciones
    const datosPrincipales = {
      rfc: cliente.rfc,
      nombre: cliente.nombre,
      apellido: cliente.apellido,
      email: cliente.email,
      empresa: cliente.empresa,
      telefono: cliente.telefono,
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
 * Función para agregar un nuevo cliente a la base de datos.
 * @param {object} cliente - Objeto que contiene los datos del cliente a agregar.
 * @returns El resultado de la creación del cliente.
 */
const agregarCliente = async (cliente) => {
  try {
    // Crear un nuevo cliente con los datos proporcionados
     await modeloClientes.Cliente.create(cliente);
     return true;

  } catch (error) {
    console.log("Error:", error.message);
    return error.message;
  }
};

/**
 * Función para eliminar un cliente de la base de datos por su RFC.
 * @param {string} id - RFC del cliente a eliminar.
 * @returns El resultado de la eliminación del cliente.
 */
const eliminarCliente = async (id) => {
  try {
    // Eliminar un cliente por su RFC
     await modeloClientes.Cliente.destroy({ where: { rfc: id } });
     return true;

  } catch (error) {
    console.log("Error:", error.message);
    return error.message;
  }
};

/**
 * Función para actualizar los datos de un cliente existente en la base de datos.
 * @param {object} cliente - Objeto que contiene los nuevos datos del cliente.
 * @returns El resultado de la actualización del cliente.
 */
const actualizarCliente = async (cliente) => {
  try {
    // Actualizar los datos del cliente por su RFC
     await modeloClientes.Cliente.update(cliente, { where: { rfc: cliente.rfc } });
     return true;

  } catch (error) {
    console.log("Error:", error.message);
    return error.message;
  }
};

// Exportar las funciones para su uso en otros módulos
module.exports = {
  obtenerClientes,
  obtenerClientePorId,
  agregarCliente,
  eliminarCliente,
  actualizarCliente
};
