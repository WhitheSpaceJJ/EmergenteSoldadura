const modeloRetroalimentaciones = require('../modelos/modeloRetroalimentacion');

const obtenerRetroalimentaciones = () => {
  return modeloRetroalimentaciones.Retroalimentacion.findAll({ raw: true,
    attributes: {
      exclude: ['idempleado', 'idcliente']
    },nest:true,include:[modeloRetroalimentaciones.Empleado,modeloRetroalimentaciones.Cliente]});
};

const obtenerRetroalimentacionPorId = (id) => {
  return modeloRetroalimentaciones.Retroalimentacion.findByPk(id,{ raw: true,
    attributes: {
      exclude: ['idempleado', 'idcliente']
    },nest:true,include:[modeloRetroalimentaciones.Empleado,modeloRetroalimentaciones.Cliente]});
};

const agregarRetroalimentacion = (retroalimentacion) => {
  return modeloRetroalimentaciones.Retroalimentacion.create(retroalimentacion);
};

const eliminarRetroalimentacion = (id) => {
  return modeloRetroalimentaciones.Retroalimentacion.destroy({ where: { idretroalimentacion: id } });
};

const actualizarRetroalimentacion = (retroalimentacion) => {
  return modeloRetroalimentaciones.Retroalimentacion.update(retroalimentacion, { where: { idretroalimentacion: retroalimentacion.idretroalimentacion } });
};

module.exports = {
  obtenerRetroalimentaciones,
  obtenerRetroalimentacionPorId,
  agregarRetroalimentacion,
  eliminarRetroalimentacion,
  actualizarRetroalimentacion
};
