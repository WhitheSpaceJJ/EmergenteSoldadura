let controlClientes = require('../controles/controlClientes');
let readlineSync = require('readline-sync');
let { Cliente } = require('../utilidades/clases');

// Función para obtener todos los clientes del negocio
exports.obtenerClientesNegocio = async function () {
  try {
    let results = await controlClientes.obtenerClientes();
    if (results) {
      console.log('Lista de clientes:');
      for (const cliente of results) {
        console.log(cliente);
      }
    }
  } catch (error) {
    console.log('Error al obtener clientes:', error);
  }
}

// Función para obtener un cliente por su ID
exports.obtenerClientePorIdNegocio = async function () {
  try {
    let idBuscar = readlineSync.question('Ingrese el ID del cliente a buscar: ');
    let results = await controlClientes.obtenerClientePorId(idBuscar);
    if (results) {
      console.log('Cliente encontrado:');
      console.log(results);
    } else {
      console.log('No se encontró ningún cliente con ese ID');
    }
  } catch (error) {
    console.log('Error al obtener cliente:', error);
  }
}

// Función para agregar un nuevo cliente
exports.agregarClienteNegocio = async function () {
  try {
    let rfc = readlineSync.question('Ingrese el RFC: ');
    let nombre = readlineSync.question('Ingrese el nombre: ');
    let apellido = readlineSync.question('Ingrese el apellido: ');
    let email = readlineSync.question('Ingrese el email: ');
    let empresa = readlineSync.question('Ingrese el nombre de la empresa: ');
    let telefono = readlineSync.question('Ingrese el telefono: ');
    let cliente = new Cliente(rfc, nombre, apellido, email, empresa, telefono);
    let result = await controlClientes.agregarCliente(cliente);
    if (result) {
      console.log('Cliente agregado exitosamente');
    }
  } catch (error) {
    console.log('Error al agregar cliente:', error);
  }
}

// Función para eliminar un cliente por su ID
exports.eliminarClienteNegocio = async function () {
  try {
    let idEliminar = readlineSync.questionInt('Ingrese el ID del cliente a eliminar: ');
    let result = await controlClientes.eliminarCliente(idEliminar);
    if (result) {
      console.log('Cliente eliminado exitosamente');
    }
  } catch (error) {
    console.log('Error al eliminar cliente:', error);
  }
}

// Función para actualizar los datos de un cliente
exports.actualizarClienteNegocio = async function () {
  try {
    let rfc2 = readlineSync.question('Ingrese el RFC del cliente a actualizar: ');
    let clienteExistente = await controlClientes.obtenerClientePorId(rfc2);
    if (!clienteExistente) {
      console.log('No se encontró ningún cliente con ese RFC');
      return;
    }
    
    let nombre2 = readlineSync.question('Ingrese el nuevo nombre (deje vacío para preservar el valor actual: ' + clienteExistente.nombre + '): ');
    let apellido2 = readlineSync.question('Ingrese el nuevo apellido (deje vacío para preservar el valor actual: ' + clienteExistente.apellido + '): ');
    let email2 = readlineSync.question('Ingrese el nuevo email (deje vacío para preservar el valor actual: ' + clienteExistente.email + '): ');
    let empresa2 = readlineSync.question('Ingrese el nuevo nombre de la empresa (deje vacío para preservar el valor actual: ' + clienteExistente.empresa + '): ');
    let telefono2 = readlineSync.question('Ingrese el nuevo telefono (deje vacío para preservar el valor actual: ' + clienteExistente.telefono + '): ');

    if (nombre2.trim() === '') {
      nombre2 = clienteExistente.nombre;
    }
    if (apellido2.trim() === '') {
      apellido2 = clienteExistente.apellido;
    }
    if (email2.trim() === '') {
      email2 = clienteExistente.email;
    }
    if (empresa2.trim() === '') {
      empresa2 = clienteExistente.empresa;
    }
    if (telefono2.trim() === '') {
      telefono2 = clienteExistente.telefono;
    }
    let cliente2 = new Cliente(rfc2, nombre2, apellido2, email2, empresa2, telefono2);
    let result = await controlClientes.actualizarCliente(cliente2);
    if (result) {
      console.log('Cliente actualizado exitosamente');
    }
  } catch (error) {
    console.log('Error al actualizar cliente:', error);
  }
}
