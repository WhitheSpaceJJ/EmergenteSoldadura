let controlEmpleados = require('../controles/controlEmpleados');
let readlineSync = require('readline-sync');
let { Empleado } = require('../utilidades/clases');

// Función para obtener todos los empleados del negocio
exports.obtenerEmpleadosNegocio = async function() {
  try {
    let results = await controlEmpleados.obtenerEmpleados();
    if(results) {
      console.log('Lista de empleados:');
      for(const empleado of results) {
        console.log(empleado);
      }
    }
  } catch (error) {
    console.log('Error al obtener empleados:', error);
  }
}

// Función para obtener un empleado por su ID
exports.obtenerEmpleadoPorIdNegocio = async function() {
  try {
    let idBuscar = readlineSync.questionInt('Ingrese el ID del empleado a buscar: ');
    let results = await controlEmpleados.obtenerEmpleadoPorId(idBuscar);
    if (results) {
      console.log('Empleado encontrado:');
      console.log(results);
    } else {
      console.log('No se encontró ningún empleado con ese ID');
    }
  } catch (error) {
    console.log('Error al obtener empleado:', error);
  }
}

// Función para agregar un nuevo empleado
exports.agregarEmpleadoNegocio = async function() {
  try {
    let nombre = readlineSync.question('Ingrese el nombre: ');
    let apellido = readlineSync.question('Ingrese el apellido: ');
    let email = readlineSync.question('Ingrese el email: ');
    let rol = readlineSync.question('Ingrese el rol: ');
    let telefono = readlineSync.question('Ingrese el telefono: ');
    let empleado = new Empleado(null, nombre, apellido, email, rol, telefono);
    let result = await controlEmpleados.agregarEmpleado(empleado);
    if (result) {
      console.log('Empleado agregado exitosamente');
    }
  } catch (error) {
    console.log('Error al agregar empleado:', error);
  }
}

// Función para eliminar un empleado por su ID
exports.eliminarEmpleadoNegocio = async function() {
  try {
    let idEliminar = readlineSync.questionInt('Ingrese el ID del empleado a eliminar: ');
    let result = await controlEmpleados.eliminarEmpleado(idEliminar);
    if (result) {
      console.log('Empleado eliminado exitosamente');
    }
  } catch (error) {
    console.log('Error al eliminar empleado:', error);
  }
}

// Función para actualizar los datos de un empleado
exports.actualizarEmpleadoNegocio = async function() {
  try {
    let id2 = readlineSync.questionInt('Ingrese el ID del empleado a actualizar: ');
    let empleadoExistente = await controlEmpleados.obtenerEmpleadoPorId(id2);
    if (!empleadoExistente) {
      console.log('No se encontró ningún empleado con ese ID');
      return;
    }
    
    let nombre2 = readlineSync.question('Ingrese el nuevo nombre (deje vacío para preservar el valor actual: ' + empleadoExistente.nombre + '): ');
    let apellido2 = readlineSync.question('Ingrese el nuevo apellido (deje vacío para preservar el valor actual: ' + empleadoExistente.apellido + '): ');
    let email2 = readlineSync.question('Ingrese el nuevo email (deje vacío para preservar el valor actual: ' + empleadoExistente.email + '): ');
    let rol2 = readlineSync.question('Ingrese el nuevo rol (deje vacío para preservar el valor actual: ' + empleadoExistente.rol + '): ');
    let telefono2 = readlineSync.question('Ingrese el nuevo telefono (deje vacío para preservar el valor actual: ' + empleadoExistente.telefono + '): ');

    if (nombre2.trim() === '') {
      nombre2 = empleadoExistente.nombre;
    }
    if (apellido2.trim() === '') {
      apellido2 = empleadoExistente.apellido;
    }
    if (email2.trim() === '') {
      email2 = empleadoExistente.email;
    }
    if (rol2.trim() === '') {
      rol2 = empleadoExistente.rol;
    }
    if (telefono2.trim() === '') {
      telefono2 = empleadoExistente.telefono;
    }

    let empleado2 = new Empleado(id2, nombre2, apellido2, email2, rol2, telefono2);
    let result = await controlEmpleados.actualizarEmpleado(empleado2);
    if (result) {
      console.log('Empleado actualizado exitosamente');
    }
  } catch (error) {
    console.log('Error al actualizar empleado:', error);
  }
}
