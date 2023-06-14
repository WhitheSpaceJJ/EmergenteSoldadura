const modeloClientes = require('../modelos/modeloCliente');
const obtenerClientes = () => {
  return modeloClientes.Cliente.findAll({ raw: true
    , nest: true, 
    include: [modeloEmpleados.Mensaje, modeloEmpleados.Reporte, modeloEmpleados.Retroalimentacion] 
  });
};

const obtenerClientePorId = (id) => {
  return modeloClientes.Cliente.findByPk(id,{ raw: true
    , nest: true, 
    include: [modeloEmpleados.Mensaje, modeloEmpleados.Reporte, modeloEmpleados.Retroalimentacion] 
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
