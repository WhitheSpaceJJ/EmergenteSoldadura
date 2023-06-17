// Importar Sequelize
const { Sequelize } = require('sequelize');

// Crear instancia de Sequelize y establecer conexión a la base de datos
const sequelize = new Sequelize('emergentes', 'root', '1234', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  logging: false // Desactivar los registros de las consultas SQL ejecutadas por Sequelize
});

// Exportar la instancia de Sequelize para su uso en otros archivos
module.exports = sequelize;
