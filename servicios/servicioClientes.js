
const controlClientes = require('../controles/controlClientes');

exports.agregarCliente = async (req, res) => {
    try {
        const result = controlClientes.agregarCliente(req.body);
        if (typeof result === 'string') {
            throw result;
        } else {
            res.status(201).json({
                status: 'sucess',
                data: {
                    clientes: result
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

exports.obtenerClientes = function (req, res) {
    try {
        const result = controlClientes.obtenerClientes();
        if (typeof result === 'string') {
            throw result;
        } else {
            res.status(201).json({
                status: 'sucess',
                data: {
                    clientes: result
                }
            });
        }

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });

    }
}

//Terminado
exports.eliminarCliente = function (req, res) {
    try {
        const result = controlClientes.obtenerClientePorId(req.params.id);
        if (typeof result === 'string') {
            throw result;
        }
        const result2 = controlClientes.eliminarCliente(req.params.id);
        if (typeof result2 === 'string') {
            throw result2;
        } else {
            res.status(201).json({
                status: 'sucess',
                data: {
                    cliente: result
                }
            });
        }
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}


exports.actualizarCliente = function (req, res) {
    try {
        const result = controlClientes.obtenerClientePorId(req.params.id);
        if (typeof result === 'string') {
            throw result;
        }
        const result2 = controlClientes.actualizarCliente(req.body);
        if (typeof result2 === 'string') {
            throw result2;
        } else {
            res.status(201).json({
                status: 'sucess',
                data: {
                    cliente: req.body
                }
            });
        }
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

exports.obtenerClientePorId = function (req, res) {
    try {
        const result = controlClientes.obtenerClientePorId(req.params.id);
        if (typeof result === 'string') {
            throw result;
        }
        else {
            res.status(201).json({
                status: 'sucess',
                data: {
                    cliente: result
                }
            });
        }
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}


