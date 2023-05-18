const pool = require('../basedatos/database');
const jwt = require('jsonwebtoken')

const empleadoSchema = {
  nombre: { type: 'varchar', required: true },
  apellido: { type: 'varchar', required: true },
  email: { type: 'varchar', required: true },
  telefono: { type: 'bigint', required: true },
  contraseña: { type: 'varchar', required: true }
};

  //midleware
const verificarToken = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({
        mensaje: 'No se proporcionó un token de autorización'
      });
    }
  
    const decodedToken = jws.verifyToken(token);

    if (!decodedToken) {
      return res.status(401).json({
        mensaje: 'Token de autorización inválido'
      });
    }
  
    req.decodedToken = decodedToken;
    next();
};

class Empleado{

  static async crearEmpleado(Usuario) {
    const query = `INSERT INTO SESclientes.Usuarios(Contraseña, Nombres, Apellidos, Email, Telefono, Tipo) VALUES ('${Usuario.contrasena}', '${Usuario.nombres}', '${Usuario.apellidos}', '${Usuario.email}', ${Usuario.telefono}, '${Usuario.tipo}')`
      try {
        await pool.query(query);
        return true;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }

    static async obtenerEmpleados() {
        const query = 'SELECT * FROM SESclientes.Usuarios;';
        try {
          const [rows] = await pool.query(query);
          return rows;
        } catch (error) {
          console.log(error);
          throw error;
        }
      }

      
}


module.exports = Empleado;