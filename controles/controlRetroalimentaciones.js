const modeloRetroalimentaciones = require('../modelos/modeloRetroalimentaciones');

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
    console.log("Error; ",error.message);
    return null;
  }
};

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
    console.log("Error; ",error.message);
    return null;
  }
};

const agregarRetroalimentacion = async (retroalimentacion) => {
  try {
    return await modeloRetroalimentaciones.Retroalimentacion.create(retroalimentacion);
  } catch (error) {
    console.log("Error; ",error.message);
    return null;
  }
};

const eliminarRetroalimentacion = async (id) => {
  try {
    return await modeloRetroalimentaciones.Retroalimentacion.destroy({ where: { idretroalimentacion: id } });
  } catch (error) {
    console.log("Error; ",error.message);
    return null;
  }
};

const actualizarRetroalimentacion = async (retroalimentacion) => {
  try {
    return await modeloRetroalimentaciones.Retroalimentacion.update(retroalimentacion, { where: { idretroalimentacion: retroalimentacion.idretroalimentacion } });
  } catch (error) {
    console.log("Error; ",error.message);
    return null;
  }
};

module.exports = {
  obtenerRetroalimentaciones,
  obtenerRetroalimentacionPorId,
  agregarRetroalimentacion,
  eliminarRetroalimentacion,
  actualizarRetroalimentacion
};
