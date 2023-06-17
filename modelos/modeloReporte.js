
const {Empleado,Cliente,Reporte} =require("../utilidades/modelos");



//Se Definen las relaciones
Reporte.belongsTo(Empleado,{
  foreignKey:"idempleado"
});

Reporte.belongsTo(Cliente,{
  foreignKey:"idcliente"
});

module.exports = {Reporte,Cliente,Empleado};
