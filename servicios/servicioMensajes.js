const controlMensajes = require('../controles/controlMensajes');

exports.obtenerMensajes = async (req, res) => {
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

exports.obtenerMensajePorId =  async (req, res) => {
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

exports.agregarMensaje = async (req, res) => {
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

exports.eliminarMensaje =  async (req, res) => {
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
exports.actualizarMensaje =  async (req, res) => {
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
