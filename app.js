//const empleado2=require("./controles/controlEmpleados");
//const cliente2=require("./controles/controlClientes");
//const mensaje2=require("./controles/controlMensajes");
//const retroalimentacion2=require("./controles/controlRetroalimentaciones");
//const usuario2=require("./controles/controlUsuarios");
//const reporte2=require("./controles/controlReportes");

async function ejemplo() {
    try {
      const result=await cliente2.obtenerClientes();
      for (elemento of result){
        console.log(elemento);
      }

    } catch (error) {
      console.error(error);
    }
  }
  
  ejemplo();