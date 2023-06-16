const {Empleado,Usuario} =require("../utilidades/modelos");


Usuario.hasOne(Empleado,{
  foreignKey:"idempleado"
});

module.exports = { Usuario, Empleado };
