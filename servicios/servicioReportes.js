const controlReportes = require('../controles/controlReportes');

exports.agregarReporte = async (req, res) => {
    try {
        const result = await controlReportes.agregarReporte(req.body);
        if (typeof result === 'string') {
            throw result;
        } else {
            const { descripcion, fecha, hora, idempleado, idcliente } = req.body;
            res.status(201).json({
                status: 'success',
                data: {
                    reporte: {
                        idreporte: result.idreporte,
                        descripcion: descripcion,
                        fecha: fecha,
                        hora: hora,
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

exports.obtenerReportes = async (req, res) => {
    try {
        const result = await controlReportes.obtenerReportes();
        if (typeof result === 'string') {
            throw result;
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    reportes: result
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

exports.eliminarReporte = async (req, res) => {
    try {
        const result = await controlReportes.obtenerReportePorId(req.params.id);
        if (typeof result === 'string') {
            throw result;
        }
        const result2 = await controlReportes.eliminarReporte(req.params.id);
        if (typeof result2 === 'string') {
            throw result2;
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    reporte: result
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

exports.actualizarReporte = async (req, res) => {
    try {
        const result = await controlReportes.obtenerReportePorId(req.params.id);
        if (typeof result === 'string') {
            throw result;
        }
        const result2 = await controlReportes.actualizarReporte(req.body);
        if (typeof result2 === 'string') {
            throw result2;
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    reporte: req.body
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

exports.obtenerReportePorId = async (req, res) => {
    try {
        const result = await controlReportes.obtenerReportePorId(req.params.id);
        if (typeof result === 'string') {
            throw result;
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    reporte: result
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
