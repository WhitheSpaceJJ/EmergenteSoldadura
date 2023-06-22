const controlUsuarios = require('../controles/controlUsuarios');

exports.obtenerUsuarios = async (req, res) => {
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

exports.obtenerUsuarioPorId = async (req, res) => {
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
exports.obtenerUsuario = async (req, res) => {
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

exports.agregarUsuario = async (req, res) => {
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

exports.eliminarUsuario = async (req, res) => {
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

exports.actualizarUsuario = async (req, res) => {
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