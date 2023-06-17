const {Empleado,Usuario} =require("../utilidades/modelos");


//Se Definen las relaciones
Usuario.hasOne(Empleado,{
  foreignKey:"idempleado"
});

module.exports = { Usuario, Empleado };
