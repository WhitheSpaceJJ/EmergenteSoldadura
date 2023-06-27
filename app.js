
const express = require('express');
const port =3000;
const usuariosRutas = require("./rutas/usuarioRutas");
const empleadosRutas = require("./rutas/empleadoRutas");
const clientesRutas = require("./rutas/clienteRutas");
const mensajesRutas = require("./rutas/mensajesRutas");
const reportesRutas = require("./rutas/reporteRutas");
const retroalimentacionesRutas = require("./rutas/retroalimentacionesRutas");
const CustomeError = require("./utilidades/customeError");
const errorController = require("./utilidades/errrorController")
const jwtController = require("./utilidades/jwtController");

const app = express();
app.use(express.json());

const validarDatos = (req, res, next) => {
  const { body, originalUrl, method } = req;
  if (
    (method === 'POST' &&
      (
        (originalUrl === '/mensajes' && (!body.fecha || !body.asunto || !body.archivo || !body.cuerpo || !body.idempleado || !body.idcliente)) ||
        (originalUrl === '/usuarios' && (!body.usuario || !body.contrasena || !body.idempleado)) ||
        (originalUrl === '/reportes' && (!body.descripcion || !body.fecha || !body.hora || !body.idempleado || !body.idcliente)) ||
        (originalUrl === '/retroalimentaciones' && (!body.comentario || !body.fecha || !body.calificacion || !body.idempleado || !body.idcliente)) ||
        (originalUrl === '/clientes' && (!body.rfc || !body.nombre || !body.apellido || !body.email || !body.empresa || !body.telefono)) ||
        (originalUrl === '/empleados' && (!body.nombre || !body.apellido || !body.email || !body.rol || !body.telefono))
      )
    ) ||
    (method === 'PUT' &&
      (
        (originalUrl === '/mensajes' && (!body.idmensaje || !body.fecha || !body.archivo|| !body.asunto || !body.cuerpo || !body.idempleado || !body.idcliente)) ||
        (originalUrl === '/usuarios' && (!body.usuario || !body.contrasena || !body.idempleado)) ||
        (originalUrl === '/reportes' && (!body.idreporte || !body.descripcion || !body.fecha || !body.hora || !body.idempleado || !body.idcliente)) ||
        (originalUrl === '/retroalimentaciones' && (!body.idretroalimentacion || !body.comentario || !body.fecha || !body.calificacion || !body.idempleado || !body.idcliente)) ||
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
  const token = req.headers.authorization;
  const secreto = 'osos-carinosos';

  try {
    await jwtController.verifyToken(token, secreto);
    next();
  } catch (error) {
    const customError = new CustomeError('Token inválido, no ha iniciado session.', 401);
    next(customError);
  }
};

app.use('/usuarios', validarDatos, usuariosRutas);

app.use(jwtMiddleware);

app.use('/empleados', validarDatos, empleadosRutas);
app.use('/clientes', validarDatos, clientesRutas);
app.use('/mensajes', validarDatos, mensajesRutas);
app.use('/reportes', validarDatos, reportesRutas);
app.use('/retroalimentaciones', validarDatos, retroalimentacionesRutas);

app.all("*", (req, res, next) => {
  const err = new CustomeError("Cannot find " + req.originalUrl + "on the server", 404);
  next(err);
});

app.use(errorController);

app.listen(port, () => {
  console.log(`Aplicación corriendo en el puerto ${port}`);
});