let controlRetroalimentaciones = require('../controles/controlRetroalimentaciones');
let readlineSync = require('readline-sync');
let { Retroalimentacion } = require('../utilidades/clases');

exports.obtenerRetroalimentacionesNegocio = async function() {
  try {
    let results = await controlRetroalimentaciones.obtenerRetroalimentaciones();
    if (results) {
      console.log('Lista de retroalimentaciones:');
      for (const retroalimentacion of results) {
        console.log(retroalimentacion);
      }
    }
  } catch (error) {
    console.log('Error al obtener retroalimentaciones:', error);
  }
}

exports.obtenerRetroalimentacionPorIdNegocio = async function() {
  try {
    let idBuscar = readlineSync.questionInt('Ingrese el ID de la retroalimentación a buscar: ');
    let results = await controlRetroalimentaciones.obtenerRetroalimentacionPorId(idBuscar);
    if (results) {
      console.log('Retroalimentación encontrada:');
      console.log(results);
    } else {
      console.log('No se encontró ninguna retroalimentación con ese ID');
    }
  } catch (error) {
    console.log('Error al obtener retroalimentación:', error);
  }
}

exports.agregarRetroalimentacionNegocio = async function() {
  try {
    let comentario = readlineSync.question('Ingrese el comentario: ');
    let fecha = readlineSync.question('Ingrese la fecha: ');
    let calificacion = readlineSync.questionInt('Ingrese la calificación: ');
    let idEmpleado = readlineSync.question('Ingrese el ID del empleado: ');
    let idCliente = readlineSync.question('Ingrese el ID del cliente: ');
    let retroalimentacion = new Retroalimentacion(null, comentario, fecha, calificacion, idEmpleado, idCliente);
    let result = await controlRetroalimentaciones.agregarRetroalimentacion(retroalimentacion);
    if (result) {
      console.log('Retroalimentación agregada exitosamente');
    }
  } catch (error) {
    console.log('Error al agregar retroalimentación:', error);
  }
}

exports.eliminarRetroalimentacionNegocio = async function() {
  try {
    let idEliminar = readlineSync.questionInt('Ingrese el ID de la retroalimentación a eliminar: ');
    let result = await controlRetroalimentaciones.eliminarRetroalimentacion(idEliminar);
    if (result) {
      console.log('Retroalimentación eliminada exitosamente');
    }
  } catch (error) {
    console.log('Error al eliminar retroalimentación:', error);
  }
}

exports.actualizarRetroalimentacionNegocio = async function() {
  try {
    let id2 = readlineSync.questionInt('Ingrese el ID de la retroalimentación a actualizar: ');
    let retroalimentacionExistente = await controlRetroalimentaciones.obtenerRetroalimentacionPorId(id2);
    if (!retroalimentacionExistente) {
      console.log('No se encontró ninguna retroalimentación con ese ID');
      return;
    }

    let comentario2 = readlineSync.question(`Ingrese el nuevo comentario (deje vacío para preservar el valor actual: ${retroalimentacionExistente.comentario}): `);
    let fecha2 = readlineSync.question(`Ingrese la nueva fecha (deje vacío para preservar el valor actual: ${retroalimentacionExistente.fecha}): `);
    let calificacion2 = readlineSync.questionInt(`Ingrese la nueva calificación (deje vacío para preservar el valor actual: ${retroalimentacionExistente.calificacion}): `);
    let idEmpleado2 = readlineSync.question(`Ingrese el nuevo ID del empleado (deje vacío para preservar el valor actual: ${retroalimentacionExistente.idEmpleado}): `);
    let idCliente2 = readlineSync.question(`Ingrese el nuevo ID del cliente (deje vacío para preservar el valor actual: ${retroalimentacionExistente.idCliente}): `);

    let retroalimentacion2 = new Retroalimentacion(id2, comentario2, fecha2, calificacion2, idEmpleado2, idCliente2);
    let result = await controlRetroalimentaciones.actualizarRetroalimentacion(retroalimentacion2);
    if (result) {
      console.log('Retroalimentación actualizada exitosamente');
    }
  } catch (error) {
    console.log('Error al actualizar retroalimentación:', error);
  }
}
