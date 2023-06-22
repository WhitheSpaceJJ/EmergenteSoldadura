const controlMensajes = require('../controles/controlMensajes');

exports.agregarMensaje = async (req, res) => {
    try {
        const result = await controlMensajes.agregarMensaje(req.body);
        if (typeof result === 'string') {
            throw result;
        } else {
            const { fecha, asunto, cuerpo, archivo, idempleado, idcliente } = req.body;
            res.status(201).json({
                status: 'success',
                data: {
                    mensaje: {
                        idmensaje: result.idmensaje,
                        fecha: fecha,
                        asunto: asunto,
                        cuerpo: cuerpo,
                        archivo: archivo,
                        idempleado: idempleado,
                        idcliente: idcliente
                    }
                }
            });
        }
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

exports.obtenerMensajes = async (req, res) => {
    try {
        const result = await controlMensajes.obtenerMensajes();
        if (typeof result === 'string') {
            throw result;
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    mensajes: result
                }
            });
        }
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

exports.eliminarMensaje = async (req, res) => {
    try {
        const result = await controlMensajes.obtenerMensajePorId(req.params.id);
        if (typeof result === 'string') {
            throw result;
        }
        const result2 = await controlMensajes.eliminarMensaje(req.params.id);
        if (typeof result2 === 'string') {
            throw result2;
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    mensaje: result
                }
            });
        }
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

exports.actualizarMensaje = async (req, res) => {
    try {
        const result = await controlMensajes.obtenerMensajePorId(req.params.id);
        if (typeof result === 'string') {
            throw result;
        }
        const result2 = await controlMensajes.actualizarMensaje(req.body);
        if (typeof result2 === 'string') {
            throw result2;
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    mensaje: req.body
                }
            });
        }
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

exports.obtenerMensajePorId = async (req, res) => {
    try {
        const result = await controlMensajes.obtenerMensajePorId(req.params.id);
        if (typeof result === 'string') {
            throw result;
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    mensaje: result
                }
            });
        }
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};
