const controlRetroalimentaciones = require('../controles/controlRetroalimentaciones');

exports.agregarRetroalimentacion = async (req, res) => {
    try {
        const result = await controlRetroalimentaciones.agregarRetroalimentacion(req.body);
        if (typeof result === 'string') {
            throw result;
        } else {
            const { comentario, fecha, calificacion, idempleado, idcliente } = req.body;
            res.status(201).json({
                status: 'success',
                data: {
                    retroalimentacion: {
                        idretroalimentacion: result.idretroalimentacion,
                        comentario: comentario,
                        fecha: fecha,
                        calificacion: calificacion,
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

exports.obtenerRetroalimentaciones = async (req, res) => {
    try {
        const result = await controlRetroalimentaciones.obtenerRetroalimentaciones();
        if (typeof result === 'string') {
            throw result;
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    retroalimentaciones: result
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

exports.eliminarRetroalimentacion = async (req, res) => {
    try {
        const result = await controlRetroalimentaciones.obtenerRetroalimentacionPorId(req.params.id);
        if (typeof result === 'string') {
            throw result;
        }
        const result2 = await controlRetroalimentaciones.eliminarRetroalimentacion(req.params.id);
        if (typeof result2 === 'string') {
            throw result2;
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    retroalimentacion: result
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

exports.actualizarRetroalimentacion = async (req, res) => {
    try {
        const result = await controlRetroalimentaciones.obtenerRetroalimentacionPorId(req.params.id);
        if (typeof result === 'string') {
            throw result;
        }
        const result2 = await controlRetroalimentaciones.actualizarRetroalimentacion(req.body);
        if (typeof result2 === 'string') {
            throw result2;
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    retroalimentacion: req.body
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

exports.obtenerRetroalimentacionPorId = async (req, res) => {
    try {
        const result = await controlRetroalimentaciones.obtenerRetroalimentacionPorId(req.params.id);
        if (typeof result === 'string') {
            throw result;
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    retroalimentacion: result
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
