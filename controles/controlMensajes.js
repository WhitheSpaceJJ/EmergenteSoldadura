const modeloMensajes = require('../modelos/modeloMensaje');

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
    console.log("Error; ",error.message);
    return null;
  }
};

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
    console.log("Error; ",error.message);
    return null;
  }
};

const agregarMensaje = async (mensaje) => {
  try {
    return await modeloMensajes.Mensaje.create(mensaje);
  } catch (error) {
    console.log("Error; ",error.message);
    return null;
  }
};

const eliminarMensaje = async (id) => {
  try {
    return await modeloMensajes.Mensaje.destroy({ where: { idmensaje: id } });
  } catch (error) {
    console.log("Error; ",error.message);
    return null;
  }
};

const actualizarMensaje = async (mensaje) => {
  try {
    return await modeloMensajes.Mensaje.update(mensaje, { where: { idmensaje: mensaje.idmensaje } });
  } catch (error) {
    console.log("Error; ",error.message);
    return null;
  }
};

module.exports = {
  obtenerMensajes,
  obtenerMensajePorId,
  agregarMensaje,
  eliminarMensaje,
  actualizarMensaje
};
