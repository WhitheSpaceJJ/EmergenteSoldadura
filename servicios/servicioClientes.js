
const controlClientes = require('../controles/controlClientes');

exports.agregarCliente = async (req, res) => {
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

exports.obtenerClientes = function (req, res) {
    try {
        const clientes = controlClientes.obtenerClientes();
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
}

exports.eliminarCliente = function (req, res) {
    try {
        const newUser =  controlClientes.create(req.body);
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
}


exports.actualizarCliente = function (req, res) {
    try {
        const newUser = controlClientes.create(req.body);
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
}

exports.obtenerClientePorId = function (req, res) {
    try {
        const newUser = controlClientes.create(req.body);
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
}


