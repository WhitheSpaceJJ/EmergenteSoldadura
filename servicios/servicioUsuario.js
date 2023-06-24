const controlUsuarios = require('../controles/controlUsuarios');
const asynError = require("../utilidades/asyncError");
const CustomeError = require("../utilidades/customeError");

exports.agregarUsuario = asynError(async (req, res, next) => {
    const result = await controlUsuarios.agregarUsuario(req.body);
    if (typeof result === 'string') {
        const error = new CustomeError(result, 400);
        return next(error);
    } else {
        const { usuario, contrasena, idempleado } = req.body;
        res.status(201).json({
            status: 'success',
            data: {
                usuario: {
                    usuario: usuario,
                    contrasena: contrasena,
                    idempleado: idempleado
                }
            }
        });
    }
});

exports.obtenerUsuarios = asynError(async (req, res, next) => {
    const result = await controlUsuarios.obtenerUsuarios();
    if (typeof result === 'string') {
        const error = new CustomeError(result, 400);
        return next(error);
    } else {
        res.status(200).json({
            status: 'success',
            data: {
                usuarios: result
            }
        });
    }
});

exports.eliminarUsuario = asynError(async (req, res, next) => {
    const result = await controlUsuarios.obtenerUsuarioPorId(req.params.usuario);
    if (typeof result === 'string') {
        const error = new CustomeError(result, 400);
        return next(error);
    }
    const result2 = await controlUsuarios.eliminarUsuario(req.params.usuario);
    if (typeof result2 === 'string') {
        const error = new CustomeError(result2, 400);
        return next(error);
    } else {
        res.status(200).json({
            status: 'success',
            data: {
                usuario: result
            }
        });
    }
});

exports.actualizarUsuario = asynError(async (req, res, next) => {
    const result = await controlUsuarios.obtenerUsuarioPorId(req.params.usuario);
    if (typeof result === 'string') {
        const error = new CustomeError(result, 400);
        return next(error);
    }
    const result2 = await controlUsuarios.actualizarUsuario(req.body);
    if (typeof result2 === 'string') {
        const error = new CustomeError(result2, 400);
        return next(error);
    } else {
        res.status(200).json({
            status: 'success',
            data: {
                usuario: req.body
            }
        });
    }
});

exports.obtenerUsuarioPorId = asynError(async (req, res, next) => {
    const result = await controlUsuarios.obtenerUsuarioPorId(req.params.id);
    if (typeof result === 'string') {
        const error = new CustomeError(result, 400);
        return next(error);
    } else {
        console.log(result);
        res.status(200).json({
            status: 'success',
            data: {
                usuario: result
            }
        });
    }
});

exports.obtenerUsuario = asynError(async (req, res, next) => {
    const result = await controlUsuarios.obtenerUsuario(req.params.usuario, req.params.contrasena);
    if (typeof result === 'string') {
        const error = new CustomeError(result, 400);
        return next(error);
    } else {
        res.status(200).json({
            status: 'success',
            data: {
                usuario: result
            }
        });
    }
});
