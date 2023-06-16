
const {Empleado,Cliente,Reporte} =require("../utilidades/modelos");



Reporte.belongsTo(Empleado,{
  foreignKey:"idempleado"
});

Reporte.belongsTo(Cliente,{
  foreignKey:"idcliente"
});

module.exports = {Reporte,Cliente,Empleado};
