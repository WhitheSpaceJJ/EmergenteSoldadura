const { Empleado, Mensaje, Retroalimentacion, Reporte } = require("../utilidades/modelos");

//Se definen las relaciones
Empleado.hasMany(Mensaje, { foreignKey: "idempleado" });
Empleado.hasMany(Reporte, { foreignKey: "idempleado" });
Empleado.hasMany(Retroalimentacion, { foreignKey: "idempleado" });

module.exports = { Empleado, Reporte, Retroalimentacion, Mensaje };
