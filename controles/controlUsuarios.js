const modeloUsuarios = require('../modelos/modeloUsuario');

/**
 * Función para obtener todos los usuarios con la información del empleado asociado.
 * @returns Un array de objetos con los datos de los usuarios y sus relaciones.
 */
const obtenerUsuarios = async () => {
  try {
    return await modeloUsuarios.Usuario.findAll({
      raw: true,
      attributes: {
        exclude: ['idempleado']
      },
      nest: true,
      include: [modeloUsuarios.Empleado]
    });
  } catch (error) {
    console.log("Error:", error.message);
    return error.message;
  }
};

//Funcion realizada solo para probar las consultar solo por la llave primaria
/**
 * Función para obtener un usuario por su ID con la información del empleado asociado.
 * @param {number} id - ID del usuario a buscar.
 * @returns Un objeto con los datos del usuario y su relación con el empleado.
 */
const obtenerUsuarioPorId = async (id) => {
  try {
    return await modeloUsuarios.Usuario.findByPk(id, {
      raw: true,
      attributes: {
        exclude: ['idempleado']
      },
      nest: true,
      include: [modeloUsuarios.Empleado]
    });
  } catch (error) {
    console.log("Error:", error.message);
    return error.message;
  }
};

/**
 * Función para obtener un usuario por su nombre de usuario y contraseña.
 * @param {string} usuario - Nombre de usuario del usuario.
 * @param {string} contrasena - Contraseña del usuario.
 * @returns Un objeto con los datos del usuario y su relación con el empleado.
 */
const obtenerUsuario = async (usuario, contrasena) => {
  try {
    return await modeloUsuarios.Usuario.findOne({
      where: {
        usuario: usuario,
        contrasena: contrasena
      },
      raw: true,
      attributes: {
        exclude: ['idempleado']
      },
      nest: true,
      include: [modeloUsuarios.Empleado]
    });
  } catch (error) {
    console.log("Error:", error.message);
    return error.message;
  }
};

/**
 * Función para agregar un nuevo usuario a la base de datos.
 * @param {object} usuario - Objeto que contiene los datos del usuario a agregar.
 * @returns El resultado de la creación del usuario.
 */
const agregarUsuario = async (usuario) => {
  try {
    await modeloUsuarios.Usuario.create(usuario);
    return true;
  } catch (error) {
    console.log("Error:", error.message);
    return error.message;
  }
};

//Funcion realizada solo para probar las eliminaciones de usuarios, ya que no sera posible actualizarlos
/**
 * Función para eliminar un usuario de la base de datos por su nombre de usuario.
 * @param {string} id - Nombre de usuario del usuario a eliminar.
 * @returns El resultado de la eliminación del usuario.
 */
const eliminarUsuario = async (id) => {
  try {
    await modeloUsuarios.Usuario.destroy({ where: { usuario: id } });
    return true;
  } catch (error) {
    console.log("Error:", error.message);
    return error.message;
  }
};

/**
 * Función para actualizar los datos de un usuario existente en la base de datos.
 * @param {object} usuario - Objeto que contiene los nuevos datos del usuario.
 * @returns El resultado de la actualización del usuario.
 */
const actualizarUsuario = async (usuario) => {
  try {
   await modeloUsuarios.Usuario.update(usuario, { where: { usuario: usuario.usuario } });
   return true;
  } catch (error) {
    console.log("Error:", error.message);
    return error.message;
  }
};

// Exportar las funciones para su uso en otros módulos
module.exports = {
  obtenerUsuarios,
  obtenerUsuarioPorId,
  obtenerUsuario,
  agregarUsuario,
  eliminarUsuario,
  actualizarUsuario
};
