const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utilidades/conexion');
const { Empleado } = require("./modeloEmpleado");

const Usuario = sequelize.define("usuarios", {
  usuario: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idempleado: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
{
  timestamps: false,
});

Usuario.hasOne(Empleado,{
  foreignKey:"idempleado"
});

module.exports = { Usuario, Empleado };
