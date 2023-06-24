const controlClientes = require('../controles/controlClientes');
const asyncError = require("../utilidades/asyncError");
const CustomeError = require("../utilidades/customeError");

exports.agregarCliente = asyncError(async (req, res, next) => {
    const result = await controlClientes.agregarCliente(req.body);
    if (typeof result === 'string') {
        const error = new CustomeError(result, 400);
        return next(error);
    } else {
        res.status(201).json({
            status: 'success',
            data: {
                clientes: result
            }
        });
    }
});

exports.obtenerClientes = asyncError(async (req, res, next) => {
    const result = await controlClientes.obtenerClientes();
    if (typeof result === 'string') {
        const error = new CustomeError(result, 400);
        return next(error);
    } else {
        res.status(200).json({
            status: 'success',
            data: {
                clientes: result
            }
        });
    }
});

exports.eliminarCliente = asyncError(async (req, res, next) => {
    const result = await controlClientes.obtenerClientePorId(req.params.id);
    if (typeof result === 'string') {
        const error = new CustomeError(result, 400);
        return next(error);
    }
    const result2 = await controlClientes.eliminarCliente(req.params.id);
    if (typeof result2 === 'string') {
        const error = new CustomeError(result2, 400);
        return next(error);
    } else {
        res.status(200).json({
            status: 'success',
            data: {
                cliente: result
            }
        });
    }
});

exports.actualizarCliente = asyncError(async (req, res, next) => {
    const result = await controlClientes.obtenerClientePorId(req.params.id);
    if (typeof result === 'string') {
        const error = new CustomeError(result, 400);
        return next(error);
    }
    const result2 = await controlClientes.actualizarCliente(req.body);
    if (typeof result2 === 'string') {
        const error = new CustomeError(result2, 400);
        return next(error);
    } else {
        res.status(200).json({
            status: 'success',
            data: {
                cliente: req.body
            }
        });
    }
});

exports.obtenerClientePorId = asyncError(async (req, res, next) => {
    const result = await controlClientes.obtenerClientePorId(req.params.id);
    if (typeof result === 'string') {
        const error = new CustomeError(result, 400);
        return next(error);
    } else {
        res.status(200).json({
            status: 'success',
            data: {
                cliente: result
            }
        });
    }
});
