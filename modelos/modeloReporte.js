const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utilidades/conexion');
const {Empleado} = require('./modeloEmpleado');
const {Cliente} = require('./modeloCliente');

const Reporte=sequelize.define("reportes",
  {
    idreporte: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    hora: {
      type: DataTypes.STRING,
      allowNull: false
    }
    ,
  idempleado: {
    type: DataTypes.INTEGER, // Tipo de dato correspondiente a la clave primaria en el modelo Empleado
    allowNull: false
  },
  idcliente: {
    type: DataTypes.INTEGER, // Tipo de dato correspondiente a la clave primaria en el modelo Cliente
    allowNull: false
  }
  },{
    timestamps: false,
  }
);
Reporte.belongsTo(Empleado,{
  foreignKey:"idempleado"
});

Reporte.belongsTo(Cliente,{
  foreignKey:"idcliente"
});

module.exports = {Reporte,Cliente,Empleado};
