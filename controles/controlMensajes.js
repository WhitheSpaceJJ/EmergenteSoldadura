const modeloMensajes = require('../modelos/modeloMensaje');

const obtenerMensajes = () => {
  return modeloMensajes.Mensaje.findAll({ raw: true,
    attributes: {
      exclude: ['idempleado', 'idcliente']
    },
    nest:true,include:[modeloMensajes.Empleado,modeloMensajes.Cliente]});
};

const obtenerMensajePorId = (id) => {
  return modeloMensajes.Mensaje.findByPk(id,{ raw: true,
    attributes: {
      exclude: ['idempleado', 'idcliente']
    },
    nest:true,include:[modeloMensajes.Empleado,modeloMensajes.Cliente]});
};

const agregarMensaje = (mensaje) => {
  return modeloMensajes.Mensaje.create(mensaje);
};

const eliminarMensaje = (id) => {
  return modeloMensajes.Mensaje.destroy({ where: { idmensaje: id } });
};

const actualizarMensaje = (mensaje) => {
  return modeloMensajes.Mensaje.update(mensaje, { where: { idmensaje: mensaje.idmensaje } });
};

module.exports = {
  obtenerMensajes,
  obtenerMensajePorId,
  agregarMensaje,
  eliminarMensaje,
  actualizarMensaje
};
