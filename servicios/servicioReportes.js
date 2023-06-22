const controlReportes = require('../controles/controlReportes');
exports.obtenerReportes = async (req, res) => {
    try {
        const newUser = await controlClientes.create(req.body);
        res.status(201).json({
            status: 'sucess',
            data: {
                user: newUser
            }
        });

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });

    }
};

exports.obtenerReportePorId = async (req, res) => {
    try {
        const newUser = await controlClientes.create(req.body);
        res.status(201).json({
            status: 'sucess',
            data: {
                user: newUser
            }
        });

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });

    }
};


exports.agregarReporte =async (req, res) => {
    try {
        const newUser = await controlClientes.create(req.body);
        res.status(201).json({
            status: 'sucess',
            data: {
                user: newUser
            }
        });

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });

    }
};


exports.eliminarReporte = async (req, res) => {
    try {
        const newUser = await controlClientes.create(req.body);
        res.status(201).json({
            status: 'sucess',
            data: {
                user: newUser
            }
        });

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });

    }
};

exports.actualizarReporte = async (req, res) => {
    try {
        const newUser = await controlClientes.create(req.body);
        res.status(201).json({
            status: 'sucess',
            data: {
                user: newUser
            }
        });

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });

    }
};
