const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('emergentes', 'root', '1234', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
  ,logging:false
});

module.exports =  sequelize ;