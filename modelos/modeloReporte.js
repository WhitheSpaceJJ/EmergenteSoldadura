
const {Empleado,Cliente,Reporte} =require("./modelos");

Reporte.belongsTo(Empleado,{
  foreignKey:"idempleado"
});

Reporte.belongsTo(Cliente,{
  foreignKey:"idcliente"
});

module.exports = {Reporte,Cliente,Empleado};
