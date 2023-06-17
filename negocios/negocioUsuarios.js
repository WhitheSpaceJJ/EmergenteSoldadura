// Se importan los módulos y las clases necesarias
let controlUsuarios = require('../controles/controlUsuarios');
let readlineSync = require('readline-sync');
let { Usuario } = require('../utilidades/clases');

// Función para obtener la lista de usuarios del negocio
exports.obtenerUsuariosNegocio = async function() {
  try {
    let results = await controlUsuarios.obtenerUsuarios();
    if (results) {
      console.log('Lista de usuarios:');
      for (const usuario of results) {
        console.log(usuario);
      }
    }
  } catch (error) {
    console.log('Error al obtener usuarios:', error);
  }
}

// Función para buscar un usuario por su ID en el negocio
exports.obtenerUsuarioPorIdNegocio = async function() {
  try {
    let idBuscar = readlineSync.questionInt('Ingrese el nombre del usuario a buscar: ');
    let results = await controlUsuarios.obtenerUsuarioPorId(idBuscar);
    if (results) {
      console.log('Usuario encontrado:');
      console.log(results);
    } else {
      console.log('No se encontró ningún usuario con ese ID');
    }
  } catch (error) {
    console.log('Error al obtener usuario:', error);
  }
}

// Función para buscar un usuario por su nombre y contraseña en el negocio
exports.obtenerUsuarioNegocio = async function() {
  try {
    let idBuscar = readlineSync.questionInt('Ingrese el nombre del usuario : ');
    let contrasena = readlineSync.questionInt('Ingrese la contrasena del usuario : ');
    let results = await controlUsuarios.obtenerUsuario(idBuscar, contrasena);
    if (results) {
      console.log('Usuario encontrado:');
      console.log(results);
    } else {
      console.log('No se encontró ningún usuario con ese ID');
    }
  } catch (error) {
    console.log('Error al obtener usuario:', error);
  }
}

// Función para agregar un nuevo usuario al negocio
exports.agregarUsuarioNegocio = async function() {
  try {
    let usuario = readlineSync.question('Ingrese el usuario: ');
    let contrasena = readlineSync.question('Ingrese la contraseña: ');
    let idempleado = readlineSync.questionInt(`Ingrese elID del empleado asociado  `);

    let nuevoUsuario = new Usuario(usuario, contrasena, idempleado);
    let result = await controlUsuarios.agregarUsuario(nuevoUsuario);
    if (result) {
      console.log('Usuario agregado exitosamente');
    }
  } catch (error) {
    console.log('Error al agregar usuario:', error);
  }
}

// Función para eliminar un usuario del negocio
exports.eliminarUsuarioNegocio = async function() {
  try {
    let idEliminar = readlineSync.questionInt('Ingrese el usuario a eliminar: ');
    let result = await controlUsuarios.eliminarUsuario(idEliminar);
    if (result) {
      console.log('Usuario eliminado exitosamente');
    }
  } catch (error) {
    console.log('Error al eliminar usuario:', error);
  }
}

// Función para actualizar los datos de un usuario en el negocio
exports.actualizarUsuarioNegocio = async function() {
  try {
    let id2 = readlineSync.questionInt('Ingrese el usuario a actualizar: ');
    let usuarioExistente = await controlUsuarios.obtenerUsuarioPorId(id2);
    if (!usuarioExistente) {
      console.log('No se encontró ningún usuario');
      return;
    }

    // Se solicitan los nuevos datos para actualizar el usuario
    let nuevoUsuario = readlineSync.question(`Ingrese el nuevo usuario (deje vacío para preservar el valor actual: ${usuarioExistente.usuario}): `);
    let nuevaContrasena = readlineSync.question(`Ingrese la nueva contraseña (deje vacío para preservar el valor actual): `);
    let nuevoIdEmpleado = readlineSync.questionInt(`Ingrese el nuevo ID del empleado asociado (deje vacío para preservar el valor actual: ${usuarioExistente.contrasena}): `);

    // Si el usuario no ingresa un valor nuevo, se mantiene el valor actual del usuario
    if (nuevoUsuario.trim() === '') {
      nuevoUsuario = usuarioExistente.usuario;
    }
    if (nuevaContrasena.trim() === '') {
      nuevaContrasena = usuarioExistente.contrasena;
    }
    if (!nuevoIdEmpleado) {
      nuevoIdEmpleado = usuarioExistente.idEmpleado;
    }

    // Se crea un nuevo objeto Usuario con los datos actualizados
    let usuario2 = new Usuario(nuevoUsuario, nuevaContrasena, nuevoIdEmpleado);
    let result = await controlUsuarios.actualizarUsuario(usuario2);
    if (result) {
      console.log('Usuario actualizado exitosamente');
    }
  } catch (error) {
    console.log('Error al actualizar usuario:', error);
  }
}
