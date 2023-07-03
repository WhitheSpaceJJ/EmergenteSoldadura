
const express = require('express');
const port = 3000;
const usuariosRutas = require("./rutas/usuarioRutas");
const empleadosRutas = require("./rutas/empleadoRutas");
const clientesRutas = require("./rutas/clienteRutas");
const mensajesRutas = require("./rutas/mensajesRutas");
const reportesRutas = require("./rutas/reporteRutas");
const retroalimentacionesRutas = require("./rutas/retroalimentacionesRutas");
const CustomeError = require("./utilidades/customeError");
const errorController = require("./utilidades/errrorController")
const jwtController = require("./utilidades/jwtController");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const validarDatos = (req, res, next) => {
  const { body, originalUrl, method } = req;
  console.log(body);
  if (
    (method === 'POST' &&
      (
        (originalUrl === '/mensajes' && (!body.fecha || !body.asunto || !body.cuerpo  )) ||
        (originalUrl === '/usuarios' && (!body.usuario || !body.contrasena || !body.idempleado)) ||
        (originalUrl === '/reportes' && (!body.descripcion || !body.fecha || !body.hora )) ||
        (originalUrl === '/retroalimentaciones' && (!body.comentario || !body.fecha || !body.calificacion )) ||
        (originalUrl === '/clientes' && (!body.rfc || !body.nombre || !body.apellido || !body.email || !body.empresa || !body.telefono)) ||
        (originalUrl === '/empleados' && (!body.nombre || !body.apellido || !body.email || !body.rol || !body.telefono))
      )
    ) ||
    (method === 'PUT' &&
      (
        (originalUrl === '/usuarios' && (!body.usuario || !body.contrasena || !body.idempleado)) ||
        (originalUrl === '/clientes' && (!body.rfc || !body.nombre || !body.apellido || !body.email || !body.empresa || !body.telefono)) ||
        (originalUrl === '/empleados' && (!body.idempleado || !body.nombre || !body.apellido || !body.email || !body.rol || !body.telefono))
      )
    )
  ) {
    const error = new CustomeError('Faltan campos obligatorios en la solicitud', 400);
    return next(error);
  }

  next();
};


const jwtMiddleware = async (req, res, next) => {
  const { body, originalUrl, method } = req;

    const token = req.headers.authorization;
    const secreto = 'osos-carinosos';

    try {
      await jwtController.verifyToken(token, secreto);
      next();
    } catch (error) {
      const customeError = new CustomeError('Token inválido, no ha iniciado sesión.', 401);
      next(customeError);
    }
};


app.use('/usuarios',validarDatos, usuariosRutas);
app.use('/empleados', jwtMiddleware, validarDatos, empleadosRutas);
app.use('/clientes', jwtMiddleware, validarDatos, clientesRutas);
app.use('/mensajes', jwtMiddleware, validarDatos, mensajesRutas);
app.use('/reportes', jwtMiddleware, validarDatos, reportesRutas);
app.use('/retroalimentaciones', jwtMiddleware, validarDatos, retroalimentacionesRutas);

app.all("*", (req, res, next) => {
  const err = new CustomError("Cannot find " + req.originalUrl + " on the server", 404);
  next(err);
});

app.use(errorController);

app.listen(port, () => {
  console.log(`Aplicación corriendo en el puerto ${port}`);
});
/*
var negocioClientes = require("./negocios/negocioClientes");
var negocioEmpleados = require("./negocios/negocioEmpleados");
var negocioReportes = require("./negocios/negocioReportes");
var negocioMensajes = require("./negocios/negocioMensajes");
var negocioUsuarios = require("./negocios/negocioUsuarios");
var negocioRetroalimentaciones = require("./negocios/neogcioRetroalimentaciones");
let readlineSync = require('readline-sync');

async function menuPrincipal() {
  while (true) {
    console.log('--- Menú ---');
    console.log('1. Menu Empleados');
    console.log('2. Menu Clientes');
    console.log('3. Menu Usuarios');
    console.log('4. Menu Mensajes');
    console.log('5. Menu Reportes');
    console.log('6. Menu Retroalimentaciones');
    console.log('7. Salir');
    console.log('');
    let opcion = readlineSync.questionInt('Seleccione una opcion: ');
    console.log("Opcion Seleccionado; ",opcion);
    if (opcion === 1) {
      await menuEmpleados();
    } else if (opcion === 2) {
      await menuClientes();
    } else if (opcion === 3) {
      await menuUsuarios();
    } else if (opcion === 4) {
      await menuMensajes();
    } else if (opcion === 5) {
      await menuReportes();
    } else if (opcion === 6) {
      await menuRetroalimentaciones();
    } else if (opcion === 7) {
      break;
    } else {
      console.log('Opción inválida');
    }
  }
}

const hola=menuPrincipal();
console.log(hola);
async function menuEmpleados() {
  while (true) {
    console.log('--- Menú Empleados---');
    console.log('1. Agregar Empleado');
    console.log('2. Actualizar Empleado');
    console.log('3. Eliminar Empleado');
    console.log('4. Consultar Empleado ID');
    console.log('5. Consultar Empleados');
    console.log('6. Salir');
    console.log('');
    let opcion = readlineSync.questionInt('Seleccione una opcion: ');
    console.log("Opcion Seleccionado; ",opcion);
    if (opcion === 1) {
      await negocioEmpleados.agregarEmpleadoNegocio();
    } else if (opcion === 2) {
      await negocioEmpleados.actualizarEmpleadoNegocio();
    } else if (opcion === 3) {
      await negocioEmpleados.eliminarEmpleadoNegocio();
    } else if (opcion === 4) {
      await negocioEmpleados.obtenerEmpleadoPorIdNegocio();
    } else if (opcion === 5) {
      await negocioEmpleados.obtenerEmpleadosNegocio();
    } else if (opcion === 6) {
      break;
    } else {
      console.log('Opción inválida');
    }
  }

}


async function menuUsuarios() {
  while (true) {
    console.log('--- Menú Usuarios---');
    console.log('1. Agregar Usuario');
    console.log('2. Actualizar Usuario');
    console.log('3. Eliminar Usuario');
    console.log('4. Consultar Usuario ID');
    console.log('5. Consultar Usuarios');
    console.log('6. Consultar Usuario');
    console.log('7. Salir');
    console.log('');
    let opcion = readlineSync.questionInt('Seleccione una opcion: ');
    console.log("Opcion Seleccionado; ",opcion);
    if (opcion === 1) {
      await negocioUsuarios.agregarUsuarioNegocio();
    } else if (opcion === 2) {
      await negocioUsuarios.actualizarUsuarioNegocio();
    } else if (opcion === 3) {
      await negocioUsuarios.eliminarUsuarioNegocio();
    } else if (opcion === 4) {
      await negocioUsuarios.obtenerUsuarioPorIdNegocio();
    } else if (opcion === 5) {
      await negocioUsuarios.obtenerUsuariosNegocio();
    } else if (opcion === 6) {
      await negocioUsuarios.obtenerUsuarioNegocio();
    } else if (opcion === 7) {
      break;
    } else {
      console.log('Opción inválida');
    }
  }
}

async function menuClientes() {
  while (true) {
    console.log('--- Menú Clientes---');
    console.log('1. Agregar Cliente');
    console.log('2. Actualizar Cliente');
    console.log('3. Eliminar Cliente');
    console.log('4. Consultar Cliente ID');
    console.log('5. Consultar Clientes');
    console.log('6. Salir');
    console.log('');
    let opcion = readlineSync.questionInt('Seleccione una opcion: ');
    console.log("Opcion Seleccionado; ",opcion);
    if (opcion === 1) {
      await negocioClientes.agregarClienteNegocio();
    } else if (opcion === 2) {
      await negocioClientes.actualizarClienteNegocio();
    } else if (opcion === 3) {
      await negocioClientes.eliminarClienteNegocio();
    } else if (opcion === 4) {
      await negocioClientes.obtenerClientePorIdNegocio();
    } else if (opcion === 5) {
      await negocioClientes.obtenerClientesNegocio();
    } else if (opcion === 6) {
      break;
    } else {
      console.log('Opción inválida');
    }
  }
}

async function menuMensajes() {
  while (true) {
    console.log('--- Menú Mensajes---');
    console.log('1. Agregar Mensaje');
    console.log('2. Actualizar Mensaje');
    console.log('3. Eliminar Mensaje');
    console.log('4. Consultar Mensaje ID');
    console.log('5. Consultar Mensajes');
    console.log('6. Salir');
    console.log('');
    let opcion = readlineSync.questionInt('Seleccione una opcion: ');
    console.log("Opcion Seleccionado; ",opcion);
    if (opcion === 1) {
      await negocioMensajes.agregarMensajeNegocio();
    } else if (opcion === 2) {
      await negocioMensajes.actualizarMensajeNegocio();
    } else if (opcion === 3) {
      await negocioMensajes.eliminarMensajeNegocio();
    } else if (opcion === 4) {
      await negocioMensajes.obtenerMensajePorIdNegocio();
    } else if (opcion === 5) {
      await negocioMensajes.obtenerMensajesNegocio();
    } else if (opcion === 6) {
      break;
    } else {
      console.log('Opción inválida');
    }
  }
}

async function menuReportes() {
  while (true) {
    console.log('--- Menú Reportes---');
    console.log('1. Agregar Reporte');
    console.log('2. Actualizar Reporte');
    console.log('3. Eliminar Reporte');
    console.log('4. Consultar Reporte ID');
    console.log('5. Consultar Reportes');
    console.log('6. Salir');
    console.log('');
    let opcion = readlineSync.questionInt('Seleccione una opcion: ');
    console.log("Opcion Seleccionado; ",opcion);
    if (opcion === 1) {
      await negocioReportes.agregarReporteNegocio();
    } else if (opcion === 2) {
      await negocioReportes.actualizarReporteNegocio();
    } else if (opcion === 3) {
      await negocioReportes.eliminarReporteNegocio();
    } else if (opcion === 4) {
      await negocioReportes.obtenerReportePorIdNegocio();
    } else if (opcion === 5) {
      await negocioReportes.obtenerReportesNegocio();
    } else if (opcion === 6) {
      break;
    } else {
      console.log('Opción inválida');
    }
  }
}

async function menuRetroalimentaciones() {
  while (true) {
    console.log('--- Menú Retroalimentaciones---');
    console.log('1. Agregar Retroalimentacion');
    console.log('2. Actualizar Retroalimentacion');
    console.log('3. Eliminar Retroalimentacion');
    console.log('4. Consultar Retroalimentacion ID');
    console.log('5. Consultar Retroalimentaciones');
    console.log('6. Salir');
    console.log('');
    let opcion = readlineSync.questionInt('Seleccione una opcion: ');
    console.log("Opcion Seleccionado; ",opcion);
    if (opcion === 1) {
       await negocioRetroalimentaciones.agregarRetroalimentacionNegocio();
    } else if (opcion === 2) {
      await negocioRetroalimentaciones.actualizarRetroalimentacionNegocio();
    } else if (opcion === 3) {
      await negocioRetroalimentaciones.eliminarRetroalimentacionNegocio();
    } else if (opcion === 4) {
      await negocioRetroalimentaciones.obtenerRetroalimentacionPorIdNegocio();
    } else if (opcion === 5) {
      await negocioRetroalimentaciones.obtenerRetroalimentacionesNegocio();
    } else if (opcion === 6) {
      break;
    } else {
      console.log('Opción inválida');
    }
  }
}
*/