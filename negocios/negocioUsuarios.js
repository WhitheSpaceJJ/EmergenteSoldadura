let controlUsuarios = require('../controles/controlUsuarios');
let readlineSync = require('readline-sync');
let { Usuario } = require('../utilidades/clases');

exports.obtenerUsuariosNegocio = async function() {
    try {
      let results = await controlUsuarios.obtenerUsuarios();
      if(results){
        console.log('Lista de usuarios:');
        for(const usuario of results){
          console.log(usuario);
        }
      }
    } catch (error) {
      console.log('Error al obtener usuarios:', error);
    }
  }
  
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
  exports.obtenerUsuarioNegocio = async function() {
    try {
      let idBuscar = readlineSync.questionInt('Ingrese el nombre del usuario : ');
      let contrasena = readlineSync.questionInt('Ingrese la contrasena del usuario : ');
      let results = await controlUsuarios.obtenerUsuario(idBuscar,contrasena);
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
  
  exports.agregarUsuarioNegocio = async function() {
    try {
      let usuario = readlineSync.question('Ingrese el usuario: ');
      let contrasena = readlineSync.question('Ingrese la contraseña: ');
      let nuevoUsuario = new Usuario(usuario, contrasena, idEmpleado);
     let result= await controlUsuarios.agregarUsuario(nuevoUsuario);
      if(result){
        console.log('Usuario agregado exitosamente');
      }
    } catch (error) {
      console.log('Error al agregar usuario:', error);
    }
  }
  
  exports.eliminarUsuarioNegocio = async function() {
    try {
      let idEliminar = readlineSync.questionInt('Ingrese el usuario a eliminar: ');
     let result= await controlUsuarios.eliminarUsuario(idEliminar);
     if(result){
      console.log('Usuario eliminado exitosamente');
     }
    } catch (error) {
      console.log('Error al eliminar usuario:', error);
    }
  }
  
  exports.actualizarUsuarioNegocio = async function() {
    try {
      let id2 = readlineSync.questionInt('Ingrese el usuario a actualizar: ');
      let usuarioExistente = await controlUsuarios.obtenerUsuarioPorId(id2);
      if (!usuarioExistente) {
        console.log('No se encontró ningún usuario');
        return;
      }
      
      let nuevoUsuario = readlineSync.question('Ingrese el nuevo usuario (deje vacío para preservar el valor actual: ' + usuarioExistente.usuario + '): ');
      let nuevaContrasena = readlineSync.question('Ingrese la nueva contraseña (deje vacío para preservar el valor actual): ');
      let nuevoIdEmpleado = readlineSync.questionInt('Ingrese el nuevo ID del empleado asociado (deje vacío para preservar el valor actual: ' + usuarioExistente.contrasena+ '): ');
  
      if (nuevoUsuario.trim() === '') {
        nuevoUsuario = usuarioExistente.usuario;
      }
      if (nuevaContrasena.trim() === '') {
        nuevaContrasena = usuarioExistente.contrasena;
      }
      if (!nuevoIdEmpleado) {
        nuevoIdEmpleado = usuarioExistente.idEmpleado;
      }
      let usuario2 = new Usuario( nuevoUsuario, nuevaContrasena, nuevoIdEmpleado);
      let result = await controlUsuarios.actualizarUsuario(usuario2);
      if (result) {
        console.log('Usuario actualizado exitosamente');
      }
    } catch (error) {
      console.log('Error al actualizar usuario:', error);
    }
  }
