// Se importan los módulos y las clases necesarias
let controlMensajes = require('../controles/controlMensajes');
let readlineSync = require('readline-sync');
let { Mensaje } = require('../utilidades/clases');

// Función para obtener la lista de mensajes del negocio
exports.obtenerMensajesNegocio = async function() {
  try {
    let results = await controlMensajes.obtenerMensajes();
    if (results) {
      console.log('Lista de mensajes:');
      for (const mensaje of results) {
        console.log(mensaje);
      }
    }
  } catch (error) {
    console.log('Error al obtener mensajes:', error);
  }
}

// Función para buscar un mensaje por su ID en el negocio
exports.obtenerMensajePorIdNegocio = async function() {
  try {
    let idBuscar = readlineSync.questionInt('Ingrese el ID del mensaje a buscar: ');
    let results = await controlMensajes.obtenerMensajePorId(idBuscar);
    if (results) {
      console.log('Mensaje encontrado:');
      console.log(results);
    } else {
      console.log('No se encontró ningún mensaje con ese ID');
    }
  } catch (error) {
    console.log('Error al obtener mensaje:', error);
  }
}

// Función para agregar un nuevo mensaje al negocio
exports.agregarMensajeNegocio = async function() {
  try {
    let fecha = readlineSync.question('Ingrese la fecha: ');
    let asunto = readlineSync.question('Ingrese el asunto: ');
    let cuerpo = readlineSync.question('Ingrese el cuerpo: ');
    let archivo = readlineSync.question('Ingrese el archivo: ');
    let idEmpleado = readlineSync.question('Ingrese el ID del empleado: ');
    let idCliente = readlineSync.question('Ingrese el ID del cliente: ');
    let mensaje = new Mensaje(null, fecha, asunto, cuerpo, archivo, idEmpleado, idCliente);
    let result = await controlMensajes.agregarMensaje(mensaje);
    if (result) {
      console.log('Mensaje agregado exitosamente');
    }
  } catch (error) {
    console.log('Error al agregar mensaje:', error);
  }
}

// Función para eliminar un mensaje del negocio
exports.eliminarMensajeNegocio = async function() {
  try {
    let idEliminar = readlineSync.questionInt('Ingrese el ID del mensaje a eliminar: ');
    let result = await controlMensajes.eliminarMensaje(idEliminar);
    if (result) {
      console.log('Mensaje eliminado exitosamente');
    }
  } catch (error) {
    console.log('Error al eliminar mensaje:', error);
  }
}

// Función para actualizar los datos de un mensaje en el negocio
exports.actualizarMensajeNegocio = async function() {
  try {
    let id2 = readlineSync.questionInt('Ingrese el ID del mensaje a actualizar: ');
    let mensajeExistente = await controlMensajes.obtenerMensajePorId(id2);
    if (!mensajeExistente) {
      console.log('No se encontró ningún mensaje con ese ID');
      return;
    }

    // Se solicitan los nuevos datos para actualizar el mensaje
    let fecha2 = readlineSync.question(`Ingrese la nueva fecha (deje vacío para preservar el valor actual: ${mensajeExistente.fecha}): `);
    let asunto2 = readlineSync.question(`Ingrese el nuevo asunto (deje vacío para preservar el valor actual: ${mensajeExistente.asunto}): `);
    let cuerpo2 = readlineSync.question(`Ingrese el nuevo cuerpo (deje vacío para preservar el valor actual: ${mensajeExistente.cuerpo}): `);
    let archivo2 = readlineSync.question(`Ingrese el nuevo archivo (deje vacío para preservar el valor actual: ${mensajeExistente.archivo}): `);
    let idempleado2 = readlineSync.question(`Ingrese el nuevo ID del empleado (deje vacío para preservar el valor actual: ${mensajeExistente.idempleado}): `);
    let idcliente2 = readlineSync.question(`Ingrese el nuevo ID del cliente (deje vacío para preservar el valor actual: ${mensajeExistente.idcliente}): `);

    // Si el usuario no ingresa un valor nuevo, se mantiene el valor actual del mensaje
    if (fecha2.trim() === '') {
      fecha2 = mensajeExistente.fecha;
    }
    if (asunto2.trim() === '') {
      asunto2 = mensajeExistente.asunto;
    }
    if (cuerpo2.trim() === '') {
      cuerpo2 = mensajeExistente.cuerpo;
    }
    if (archivo2.trim() === '') {
      archivo2 = mensajeExistente.archivo;
    }
    if (idempleado2.trim() === '') {
      idempleado2 = mensajeExistente.idempleado;
    }
    if (idcliente2.trim() === '') {
      idcliente2 = mensajeExistente.idcliente;
    }

    // Se crea un nuevo objeto Mensaje con los datos actualizados
    let mensaje2 = new Mensaje(id2, fecha2, asunto2, cuerpo2, archivo2, idempleado2, idcliente2);
    let result = await controlMensajes.actualizarMensaje(mensaje2);
    if (result) {
      console.log('Mensaje actualizado exitosamente');
    }
  } catch (error) {
    console.log('Error al actualizar mensaje:', error);
  }
}
