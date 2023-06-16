const {Empleado,Cliente,Mensaje} =require("../utilidades/modelos");



Mensaje.belongsTo(Empleado,{
  foreignKey:"idempleado"
});

Mensaje.belongsTo(Cliente,{
  foreignKey:"idcliente"
});

module.exports = { Mensaje,Cliente,Empleado};
