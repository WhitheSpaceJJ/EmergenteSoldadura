// Se importan los módulos y las clases necesarias
let controlRetroalimentaciones = require('../controles/controlRetroalimentaciones');
let readlineSync = require('readline-sync');
let { Retroalimentacion } = require('../utilidades/clases');

// Función para obtener la lista de retroalimentaciones del negocio
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

// Función para buscar una retroalimentación por su ID en el negocio
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

// Función para agregar una nueva retroalimentación al negocio
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

// Función para eliminar una retroalimentación del negocio
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

// Función para actualizar los datos de una retroalimentación en el negocio
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
    let calificacion2 = readlineSync.question(`Ingrese la nueva calificación (deje vacío para preservar el valor actual: ${retroalimentacionExistente.calificacion}): `);
    let idempleado2 = readlineSync.question(`Ingrese el nuevo ID del empleado (deje vacío para preservar el valor actual: ${retroalimentacionExistente.idempleado}): `);
    let idcliente2 = readlineSync.question(`Ingrese el nuevo ID del cliente (deje vacío para preservar el valor actual: ${retroalimentacionExistente.idcliente}): `);

    // Si el usuario no ingresa un valor nuevo, se mantiene el valor actual de la retroalimentación
    comentario2 = comentario2.trim() === '' ? retroalimentacionExistente.comentario : comentario2;
    fecha2 = fecha2.trim() === '' ? retroalimentacionExistente.fecha : fecha2;
    calificacion2 = calificacion2.trim() === '' ? retroalimentacionExistente.calificacion : parseInt(calificacion2);
    idempleado2 = idempleado2.trim() === '' ? retroalimentacionExistente.idempleado : idempleado2;
    idcliente2 = idcliente2.trim() === '' ? retroalimentacionExistente.idcliente : idcliente2;

    // Se crea un nuevo objeto Retroalimentacion con los datos actualizados
    let retroalimentacion2 = new Retroalimentacion(id2, comentario2, fecha2, calificacion2, idempleado2, idcliente2);
    let result = await controlRetroalimentaciones.actualizarRetroalimentacion(retroalimentacion2);
    if (result) {
      console.log('Retroalimentación actualizada exitosamente');
    }
  } catch (error) {
    console.log('Error al actualizar retroalimentación:', error);
  }
}
