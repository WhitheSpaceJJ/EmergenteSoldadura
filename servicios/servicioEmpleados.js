const controlEmpleados = require('../controles/controlEmpleados');

exports.agregarEmpleado = async (req, res) => {
    try {
        const result = await controlEmpleados.agregarEmpleado(req.body);
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

exports.obtenerEmpleados = async (req, res) =>  {
    try {
        const result =  await controlEmpleados.obtenerEmpleados();
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

exports.eliminarEmpleado =async (req, res) => {
    try {
        const result =  await controlEmpleados.obtenerEmpleadoPorId(req.params.id);
        if (typeof result === 'string') {
            throw result;
        }
        const result2 =  await controlEmpleados.eliminarEmpleado(req.params.id);
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

exports.actualizarEmpleado = async (req, res) =>  {
    try {
        const result =await controlEmpleados.obtenerEmpleadoPorId(req.params.id);
        if (typeof result === 'string') {
            throw result;
        }
        const result2 =await controlEmpleados.actualizarEmpleado(req.body);
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

exports.obtenerEmpleadoPorId = async (req, res) => {
    try {
        const result =await controlEmpleados.obtenerEmpleadoPorId(req.params.id);
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
