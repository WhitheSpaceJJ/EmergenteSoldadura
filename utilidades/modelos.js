// Importar la instancia de Sequelize llamada "sequelize" desde el archivo "./conexion"
const sequelize = require('./conexion');

// Importar DataTypes y Model de Sequelize
const { DataTypes, Model } = require('sequelize');

// Definir el modelo "Usuario" utilizando sequelize.define
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
}, {
    timestamps: false // Desactivar las columnas de timestamps (createdAt, updatedAt)
});

// Definir el modelo "Cliente" utilizando sequelize.define
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
    timestamps: false, // Desactivar las columnas de timestamps (createdAt, updatedAt)
});

// Definir el modelo "Empleado" utilizando sequelize.define
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
    timestamps: false // Desactivar las columnas de timestamps (createdAt, updatedAt)
});

// Definir el modelo "Mensaje" utilizando sequelize.define
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
        allowNull: true
    },
    idempleado: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    idcliente: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false // Desactivar las columnas de timestamps (createdAt, updatedAt)
});

// Definir el modelo "Reporte" utilizando sequelize.define
const Reporte = sequelize.define("reportes", {
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
    },
    idempleado: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    idcliente: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false // Desactivar las columnas de timestamps (createdAt, updatedAt)
});

// Definir el modelo "Retroalimentacion" utilizando sequelize.define
const Retroalimentacion = sequelize.define("retroalimentaciones", {
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
        allowNull: true
    },
    idcliente: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false // Desactivar las columnas de timestamps (createdAt, updatedAt)
});

// Exportar los modelos definidos para su uso en otros archivos
module.exports = { Usuario, Cliente, Empleado, Mensaje, Reporte, Retroalimentacion };
