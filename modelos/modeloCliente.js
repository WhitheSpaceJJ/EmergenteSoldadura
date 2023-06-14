const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utilidades/conexion');
/*
const { Reporte } = require("./modeloReporte");
const { Mensaje } = require("./modeloMensaje");
const { Retroalimentacion } = require("./modeloRetroalimentacion");
*/
const Cliente=sequelize.define("clientes",{
  rfc: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  empresa: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  sequelize,
  timestamps: false,
  modelName: 'clientes'
});
/*
Cliente.hasMany(Mensaje, {
  foreignKey: 'idcliente'
});
Cliente.hasMany(Reporte, {
  foreignKey: 'idcliente'
});
Cliente.hasMany(Retroalimentacion, {
  foreignKey: 'idcliente'
});
*/
module.exports = {Cliente};


