
const {Empleado,Cliente,Retroalimentacion}  =require("../utilidades/modelos");


//Se Definen las relaciones
Retroalimentacion.belongsTo(Empleado,{
  foreignKey:"idempleado"
});

Retroalimentacion.belongsTo(Cliente,{
  foreignKey:"idcliente"
});

module.exports = {Retroalimentacion,Cliente,Empleado};
