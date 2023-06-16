let controlReportes = require('../controles/controlReportes');
let readlineSync = require('readline-sync');
let { Reporte } = require('../utilidades/clases');

exports.obtenerReportesNegocio = async function() {
  try {
    let results = await controlReportes.obtenerReportes();
    if (results) {
      console.log('Lista de reportes:');
      for (const reporte of results) {
        console.log(reporte);
      }
    }
  } catch (error) {
    console.log('Error al obtener reportes:', error);
  }
}

exports.obtenerReportePorIdNegocio = async function() {
  try {
    let idBuscar = readlineSync.questionInt('Ingrese el ID del reporte a buscar: ');
    let results = await controlReportes.obtenerReportePorId(idBuscar);
    if (results) {
      console.log('Reporte encontrado:');
      console.log(results);
    } else {
      console.log('No se encontró ningún reporte con ese ID');
    }
  } catch (error) {
    console.log('Error al obtener reporte:', error);
  }
}

exports.agregarReporteNegocio = async function() {
  try {
    let descripcion = readlineSync.question('Ingrese la descripción: ');
    let fecha = readlineSync.question('Ingrese la fecha: ');
    let hora = readlineSync.question('Ingrese la hora: ');
    let idEmpleado = readlineSync.question('Ingrese el ID del empleado: ');
    let idCliente = readlineSync.question('Ingrese el ID del cliente: ');
    let reporte = new Reporte(null, descripcion, fecha, hora, idEmpleado, idCliente);
    let result = await controlReportes.agregarReporte(reporte);
    if (result) {
      console.log('Reporte agregado exitosamente');
    }
  } catch (error) {
    console.log('Error al agregar reporte:', error);
  }
}

exports.eliminarReporteNegocio = async function() {
  try {
    let idEliminar = readlineSync.questionInt('Ingrese el ID del reporte a eliminar: ');
    let result = await controlReportes.eliminarReporte(idEliminar);
    if (result) {
      console.log('Reporte eliminado exitosamente');
    }
  } catch (error) {
    console.log('Error al eliminar reporte:', error);
  }
}

exports.actualizarReporteNegocio = async function() {
  try {
    let id2 = readlineSync.questionInt('Ingrese el ID del reporte a actualizar: ');
    let reporteExistente = await controlReportes.obtenerReportePorId(id2);
    if (!reporteExistente) {
      console.log('No se encontró ningún reporte con ese ID');
      return;
    }

    let descripcion2 = readlineSync.question(`Ingrese la nueva descripción (deje vacío para preservar el valor actual: ${reporteExistente.descripcion}): `);
    let fecha2 = readlineSync.question(`Ingrese la nueva fecha (deje vacío para preservar el valor actual: ${reporteExistente.fecha}): `);
    let hora2 = readlineSync.question(`Ingrese la nueva hora (deje vacío para preservar el valor actual: ${reporteExistente.hora}): `);
    let idEmpleado2 = readlineSync.question(`Ingrese el nuevo ID del empleado (deje vacío para preservar el valor actual: ${reporteExistente.idEmpleado}): `);
    let idCliente2 = readlineSync.question(`Ingrese el nuevo ID del cliente (deje vacío para preservar el valor actual: ${reporteExistente.idCliente}): `);

    if (descripcion2.trim() === '') {
      descripcion2 = reporteExistente.descripcion;
    }
    if (fecha2.trim() === '') {
      fecha2 = reporteExistente.fecha;
    }
    if (hora2.trim() === '') {
      hora2 = reporteExistente.hora;
    }
    if (idEmpleado2.trim() === '') {
      idEmpleado2 = reporteExistente.idEmpleado;
    }
    if (idCliente2.trim() === '') {
      idCliente2 = reporteExistente.idCliente;
    }

    let reporte2 = new Reporte(id2, descripcion2, fecha2, hora2, idEmpleado2, idCliente2);
    let result = await controlReportes.actualizarReporte(reporte2);
    if (result) {
      console.log('Reporte actualizado exitosamente');
    }
  } catch (error) {
    console.log('Error al actualizar reporte:', error);
  }
}
