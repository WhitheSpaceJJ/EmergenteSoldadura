

const controlUsuarios = require('../controles/controlUsuarios');

exports.agregarUsuario = async (req, res) => {
    try {
        const result = await controlUsuarios.agregarUsuario(req.body);
        if (typeof result === 'string') {
            throw result;
        } else {
            const { usuario, contrasena, idempleado } = req.body;
            res.status(201).json({
                status: 'success',
                data: {
                    usuario: {
                        usuario: usuario,
                        contrasena: contrasena,
                        idempleado: idempleado
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

exports.obtenerUsuarios = async (req, res) => {
    try {
        const result = await controlUsuarios.obtenerUsuarios();
        if (typeof result === 'string') {
            throw result;
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    usuarios: result
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

exports.eliminarUsuario = async (req, res) => {
    try {
        const result = await controlUsuarios.obtenerUsuarioPorId(req.params.usuario);
        if (typeof result === 'string') {
            throw result;
        }
        const result2 = await controlUsuarios.eliminarUsuario(req.params.usuario);
        if (typeof result2 === 'string') {
            throw result2;
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    usuario: result
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

exports.actualizarUsuario = async (req, res) => {
    try {
        const result = await controlUsuarios.obtenerUsuarioPorId(req.params.usuario);
        if (typeof result === 'string') {
            throw result;
        }
        const result2 = await controlUsuarios.actualizarUsuario(req.body);
        if (typeof result2 === 'string') {
            throw result2;
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    usuario: req.body
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

exports.obtenerUsuarioPorId = async (req, res) => {
    try {
        const result = await controlUsuarios.obtenerUsuarioPorId(req.params.id);
        if (typeof result === 'string') {
            throw result;
        } else {
            console.log(result)
            res.status(200).json({
                status: 'success',
                data: {
                    usuario: result
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
exports.obtenerUsuario = async (req, res) => {
    try {
        const result = await controlUsuarios.obtenerUsuario(req.params.usuario,req.params.contrasena);
        if (typeof result === 'string') {
            throw result;
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    usuario: result
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
