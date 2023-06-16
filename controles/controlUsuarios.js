const modeloUsuarios = require('../modelos/modeloUsuario');

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
    console.log("Error; ", error.TypeError);
    return null;
  }
};

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
    console.log("Error; ", error.message);
    return null;
  }
};
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
    console.log("Error; ", error.message);
    return null;
  }
};
const agregarUsuario = async (usuario) => {
  try {
    return await modeloUsuarios.Usuario.create(usuario);
  } catch (error) {
    console.log("Error; ", error.message);
    return null;
  }
};

const eliminarUsuario = async (id) => {
  try {
    return await modeloUsuarios.Usuario.destroy({ where: { usuario: id } });
  } catch (error) {
    console.log("Error; ", error.message);
    return null;
  }
};

const actualizarUsuario = async (usuario) => {
  try {
    return await modeloUsuarios.Usuario.update(usuario, { where: { usuario: usuario.usuario } });
  } catch (error) {
    console.log("Error; ", error.message);
    return null;
  }
};

module.exports = {
  obtenerUsuarios,
  obtenerUsuarioPorId,
  agregarUsuario, obtenerUsuario,
  eliminarUsuario,
  actualizarUsuario
};
