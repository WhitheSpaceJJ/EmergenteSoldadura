const modeloReportes = require('../modelos/modeloReporte');

const obtenerReportes = () => {
  return modeloReportes.Reporte.findAll({ raw: true,
    attributes: {
      exclude: ['idempleado', 'idcliente']
    },nest:true,include:[modeloReportes.Empleado,modeloReportes.Cliente]});
};

const obtenerReportePorId = (id) => {
  return modeloReportes.Reporte.findByPk(id,{ raw: true,
    attributes: {
      exclude: ['idempleado', 'idcliente']
    },nest:true,include:[modeloReportes.Empleado,modeloReportes.Cliente]});
};

const agregarReporte = (reporte) => {
  return modeloReportes.Reporte.create(reporte);
};

const eliminarReporte = (id) => {
  return modeloReportes.Reporte.destroy({ where: { idreporte: id } });
};

const actualizarReporte = (reporte) => {
  return modeloReportes.Reporte.update(reporte, { where: { idreporte: reporte.idreporte } });
};

module.exports = {
  obtenerReportes,
  obtenerReportePorId,
  agregarReporte,
  eliminarReporte,
  actualizarReporte
};
