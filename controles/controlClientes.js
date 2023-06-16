const modeloClientes = require('../modelos/modeloCliente');

const obtenerClientes = async () => {
  try {
    const clientes = await modeloClientes.Cliente.findAll({
      raw: false,
      nest: true,
      include: [{ model: modeloClientes.Mensaje }, { model: modeloClientes.Reporte }, { model: modeloClientes.Retroalimentacion }]
    });

    const result = [];

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
    console.log("Error; ",error.message);
    return null;
  }
};

const obtenerClientePorId = async (id) => {
  try {
    const cliente = await modeloClientes.Cliente.findByPk(id, {
      raw: false,
      nest: true,
      include: [{ model: modeloClientes.Mensaje }, { model: modeloClientes.Reporte }, { model: modeloClientes.Retroalimentacion }]
    });

    const mensajes = cliente.mensajes.map(mensaje => mensaje.dataValues);
    const reportes = cliente.reportes.map(mensaje => mensaje.dataValues);
    const retroalimentaciones = cliente.retroalimentaciones.map(mensaje => mensaje.dataValues);
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
    console.log("Error; ",error.message);
    return null;
  }
};

const agregarCliente = async (cliente) => {
  try {
    return await modeloClientes.Cliente.create(cliente);
  } catch (error) {
    console.log("Error; ",error.message);
    return null;
  }
};

const eliminarCliente = async (id) => {
  try {
    return await modeloClientes.Cliente.destroy({ where: { rfc: id } });
  } catch (error) {
    console.log("Error; ",error.message);
    return null;
  }
};

const actualizarCliente = async (cliente) => {
  try {
    return await modeloClientes.Cliente.update(cliente, { where: { rfc: cliente.rfc } });
  } catch (error) {
    console.log("Error; ",error.message);
    return null;
  }
};

module.exports = {
  obtenerClientes,
  obtenerClientePorId,
  agregarCliente,
  eliminarCliente,
  actualizarCliente
};
