const {Empleado,Cliente,Mensaje} =require("./modelos");


Mensaje.belongsTo(Empleado,{
  foreignKey:"idempleado"
});

Mensaje.belongsTo(Cliente,{
  foreignKey:"idcliente"
});

module.exports = { Mensaje,Cliente,Empleado};
