const {Empleado,Cliente,Mensaje} =require("../utilidades/modelos");


//Se Definen las relaciones
Mensaje.belongsTo(Empleado,{
  foreignKey:"idempleado"
});

Mensaje.belongsTo(Cliente,{
  foreignKey:"idcliente"
});

module.exports = { Mensaje,Cliente,Empleado};
