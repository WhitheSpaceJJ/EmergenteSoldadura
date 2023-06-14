const sequelize = require('../utilidades/conexion');
const { DataTypes, Model } = require('sequelize');

const Usuario = sequelize.define("usuarios", {
    usuario: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idempleado: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
        timestamps: false,
    });


const Cliente = sequelize.define("clientes", {
    rfc: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    empresa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    modelName: 'clientes'
});


const Empleado = sequelize.define('empleados', {
    idempleado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});
const Mensaje = sequelize.define("mensajes", {
    idmensaje: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    asunto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cuerpo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    archivo: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    idempleado: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idcliente: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    timestamps: false,
});
const Reporte = sequelize.define("reportes",
    {
        idreporte: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        hora: {
            type: DataTypes.STRING,
            allowNull: false
        }
        ,
        idempleado: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idcliente: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
    timestamps: false,
}
);
const Retroalimentacion = sequelize.define("retroalimentaciones",
    {
        idretroalimentacion: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        comentario: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        calificacion: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idempleado: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        idcliente: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
    , {
        timestamps: false,
    }

);

module.exports = { Usuario, Cliente, Empleado, Mensaje, Reporte, Retroalimentacion };