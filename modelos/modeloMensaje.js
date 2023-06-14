const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utilidades/conexion');
const { Empleado } = require('./modeloEmpleado');
const { Cliente } = require('./modeloCliente');


const Mensaje=sequelize.define("mensajes",{
  idmensaje: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  asunto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cuerpo: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  archivo: {
    type: DataTypes.BLOB,
    allowNull: false
  },
  idempleado: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idcliente: {
    type: DataTypes.INTEGER, 
    allowNull: false
  }

}, {
  timestamps: false,
});

Mensaje.belongsTo(Empleado,{
  foreignKey:"idempleado"
});

Mensaje.belongsTo(Cliente,{
  foreignKey:"idcliente"
});

module.exports = { Mensaje,Cliente,Empleado};
