const {Empleado,Usuario} =require("./modelos");


Usuario.hasOne(Empleado,{
  foreignKey:"idempleado"
});

module.exports = { Usuario, Empleado };
