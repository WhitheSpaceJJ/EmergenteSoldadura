
const {Empleado,Cliente,Retroalimentacion}  =require("../utilidades/modelos");


Retroalimentacion.belongsTo(Empleado,{
  foreignKey:"idempleado"
});

Retroalimentacion.belongsTo(Cliente,{
  foreignKey:"idcliente"
});

module.exports = {Retroalimentacion,Cliente,Empleado};
