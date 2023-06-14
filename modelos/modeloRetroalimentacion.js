const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utilidades/conexion');
const {Empleado} = require('./modeloEmpleado');
const {Cliente} = require('./modeloCliente');
const Retroalimentacion= sequelize.define("retroalimentaciones",
  {
    idretroalimentacion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    comentario: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    calificacion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idempleado: {
      type: DataTypes.INTEGER, // Tipo de dato correspondiente a la clave primaria en el modelo Empleado
      allowNull: false
    },
    idcliente: {
      type: DataTypes.INTEGER, // Tipo de dato correspondiente a la clave primaria en el modelo Cliente
      allowNull: false
    }
  }
  ,{
    timestamps: false,
  }

);
Retroalimentacion.belongsTo(Empleado,{
  foreignKey:"idempleado"
});

Retroalimentacion.belongsTo(Cliente,{
  foreignKey:"idcliente"
});

module.exports = {Retroalimentacion,Cliente,Empleado};
