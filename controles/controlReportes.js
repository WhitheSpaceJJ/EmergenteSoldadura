const modeloReportes = require('../modelos/modeloReporte');

const obtenerReportes = async () => {
  try {
    return await modeloReportes.Reporte.findAll({ 
      raw: true,
      attributes: {
        exclude: ['idempleado', 'idcliente']
      },
      nest: true,
      include: [modeloReportes.Empleado, modeloReportes.Cliente]
    });
  } catch (error) {
    console.log("Error; ",error.message);
    return null;
  }
};

const obtenerReportePorId = async (id) => {
  try {
    return await modeloReportes.Reporte.findByPk(id, { 
      raw: true,
      attributes: {
        exclude: ['idempleado', 'idcliente']
      },
      nest: true,
      include: [modeloReportes.Empleado, modeloReportes.Cliente]
    });
  } catch (error) {
    console.log("Error; ",error.message);
    return null;
  }
};

const agregarReporte = async (reporte) => {
  try {
    return await modeloReportes.Reporte.create(reporte);
  } catch (error) {
    console.log("Error; ",error.message);
    return null;
  }
};

const eliminarReporte = async (id) => {
  try {
    return await modeloReportes.Reporte.destroy({ where: { idreporte: id } });
  } catch (error) {
    console.log("Error; ",error.message);
    return null;
  }
};

const actualizarReporte = async (reporte) => {
  try {
    return await modeloReportes.Reporte.update(reporte, { where: { idreporte: reporte.idreporte } });
  } catch (error) {
    console.log("Error; ",error.message);
    return null;
  }
};

module.exports = {
  obtenerReportes,
  obtenerReportePorId,
  agregarReporte,
  eliminarReporte,
  actualizarReporte
};
