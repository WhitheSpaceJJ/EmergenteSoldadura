const controlEmpleados = require('../controles/controlEmpleados');

exports.agregarEmpleado = async (req, res) => {
    try {
        const result = controlEmpleados.agregarEmpleado(req.body);
        if (typeof result === 'string') {
            throw result;
        } else {
           const {nombre,apellido,email,rol,telefono}=req.body;
            res.status(201).json({
                status: 'success',
                data: {
                    empleado:{
                        idempleado:result,
                        nombre:nombre,
                        apellido:apellido,
                        email:email,
                        rol:rol,
                        telefono:telefono
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

exports.obtenerEmpleados = function (req, res) {
    try {
        const result = controlEmpleados.obtenerEmpleados();
        if (typeof result === 'string') {
            throw result;
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    empleados: result
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

exports.eliminarEmpleado = function (req, res) {
    try {
        const result = controlEmpleados.obtenerEmpleadoPorId(req.params.id);
        if (typeof result === 'string') {
            throw result;
        }
        const result2 = controlEmpleados.eliminarEmpleado(req.params.id);
        if (typeof result2 === 'string') {
            throw result2;
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    empleado: result
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

exports.actualizarEmpleado = function (req, res) {
    try {
        const result = controlEmpleados.obtenerEmpleadoPorId(req.params.id);
        if (typeof result === 'string') {
            throw result;
        }
        const result2 = controlEmpleados.actualizarEmpleado(req.body);
        if (typeof result2 === 'string') {
            throw result2;
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    empleado: req.body
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

exports.obtenerEmpleadoPorId = function (req, res) {
    try {
        const result = controlEmpleados.obtenerEmpleadoPorId(req.params.id);
        if (typeof result === 'string') {
            throw result;
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    empleado: result
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
