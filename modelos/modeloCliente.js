const {Cliente,Mensaje,Retroalimentacion,Reporte}=require("../utilidades/modelos");


// Definir las relaciones
Cliente.hasMany(Mensaje,{foreignKey:"idcliente"});

Cliente.hasMany(Reporte,{foreignKey:"idcliente"});

Cliente.hasMany(Retroalimentacion,{foreignKey:"idcliente"});

module.exports = {Cliente,Mensaje,Retroalimentacion,Reporte};


