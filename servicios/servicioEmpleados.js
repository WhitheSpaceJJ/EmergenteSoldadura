
const controlEmpleados = require('../controles/controlEmpleados');

exports.agregarEmpleado = async (req, res) => {
    try {
        const newUser = await controlEmpleados.create(req.body);
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

exports.obtenerEmpleados = function (req, res) {
    try {
        const clientes = controlEmpleados.obtenerClientes();
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

exports.eliminarEmpleado = function (req, res) {
    try {
        const newUser =  controlEmpleados.create(req.body);
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


exports.actualizarEmpleado = function (req, res) {
    try {
        const newUser = controlEmpleados.create(req.body);
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

exports.obtenerEmpleadoPorId = function (req, res) {
    try {
        const newUser = controlEmpleados.create(req.body);
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


