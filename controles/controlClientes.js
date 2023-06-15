const modeloClientes = require('../modelos/modeloCliente');
const obtenerClientes = () => {
  return modeloClientes.Cliente.findAll({
    raw: false
    , nest: true,
    include: [{ model: modeloClientes.Mensaje }, { model: modeloClientes.Reporte }, { model: modeloClientes.Retroalimentacion }]
  }).then(clientes => {
    let result = [];
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
  }).catch(error => {
    console.log(error);
  });
};

const obtenerClientePorId = (id) => {
  return modeloClientes.Cliente.findByPk(id, {
    raw: false
    , nest: true,
    include: [{ model: modeloClientes.Mensaje }, 
      { model: modeloClientes.Reporte }, 
      { model: modeloClientes.Retroalimentacion }]
  }).then(cliente => {
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
  }).catch(error => {
    console.log(error);
  });
};

const agregarCliente = (cliente) => {
  return modeloClientes.Cliente.create(cliente);
};

const eliminarCliente = (id) => {
  return modeloClientes.Cliente.destroy({ where: { rfc: id } });
};

const actualizarCliente = (cliente) => {
  return modeloClientes.Cliente.update(cliente, { where: { rfc: cliente.rfc } });
};

module.exports = {
  obtenerClientes,
  obtenerClientePorId,
  agregarCliente,
  eliminarCliente,
  actualizarCliente
};
