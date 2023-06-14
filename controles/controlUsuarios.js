const modeloUsuarios= require('../modelos/modeloUsuario');
const obtenerUsuarios = () => {
  return modeloUsuarios.Usuario.findAll({ raw: true,
    attributes: {
      exclude: ['idempleado']
    },nest:true,include:[modeloUsuarios.Empleado]});
};

const obtenerUsuarioPorId = (id) => {
  return modeloUsuarios.Usuario.findByPk(id,{ raw: true,
    attributes: {
      exclude: ['idempleado']
    },nest:true,include:[modeloUsuarios.Empleado]});
};

const agregarUsuario = (usuario) => {
  return modeloUsuarios.Usuario.create(usuario);
};

const eliminarUsuario = (id) => {
  return modeloUsuarios.Usuario.destroy({ where: { usuario: id } });
};

const actualizarUsuario = (usuario) => {
  return modeloUsuarios.Usuario.update(usuario, { where: { usuario: usuario.usuario } });
};

module.exports = {
  obtenerUsuarios,
  obtenerUsuarioPorId,
  agregarUsuario,
  eliminarUsuario,
  actualizarUsuario
};
