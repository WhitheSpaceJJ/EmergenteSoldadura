const controlRetroalimentaciones = require('../controles/controlRetroalimentaciones');

exports.obtenerRetroalimentaciones =async (req, res) => {
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


exports.obtenerRetroalimentacionPorId = async (req, res) => {
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


exports.agregarRetroalimentacion = async (req, res) => {
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

exports.eliminarRetroalimentacion = async (req, res) => {
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

exports.actualizarRetroalimentacion =async (req, res) => {
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

