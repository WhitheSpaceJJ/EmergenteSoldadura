const jwt = require('jsonwebtoken')
const bcrypts = require('bcrypt')
const bcrypt = require('bcrypt');
const pool = require('../basedatos/database');
const {promisify} = require('util');
const Cliente = require('../basedatos/Cliente');
const Empleado = require('../basedatos/Empleado');
require('dotenv').config();

const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');
const firebaseConfig = require('../services/firebaseConfig');
const firebase = require('firebase/app');
require('firebase/auth');
const admin = require('firebase-admin');
const serviceAccount = require('../services/serviceAccountKey.json'); // Ruta al archivo de configuración de Firebase

firebase.initializeApp(firebaseConfig);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const auth = getAuth();

//metodo para login 
exports.login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.contraseña;

    if (!email || !password) {
      res.render('login', {
        alert: true,
        alertTitle: 'Advertencia',
        alertMessage: 'No deje campos vacíos',
        alertIcon: 'info',
        showConfirmButton: true,
        timer: false,
        ruta: 'login',
      });
    } else {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      
      if (user) {
        // Autenticación exitosa con Firebase
        const id = user.id; // Asegúrate de obtener el ID de usuario correcto desde Firebase
        const token = jwt.sign({ id: id }, process.env.JWT_SECRETO, {
          expiresIn: process.env.JWT_TIEMPO_EXPIRA,
        });
        console.log('TOKEN: ' + token + ' para el email: ' + email);
        const cookiesOption = {
          expiresIn: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
          httpOnly: true,
        };
        res.cookie('jwt', token, cookiesOption);
        res.render('login', {
          alert: true,
          alertTitle: 'Conexión exitosa',
          alertMessage: 'Login Correcto',
          alertIcon: 'success',
          showConfirmButton: false,
          timer: 800,
          ruta: 'menu',
        });
      } else {
        res.render('login', {
          alert: true,
          alertTitle: 'Advertencia',
          alertMessage: 'Credenciales inválidas',
          alertIcon: 'info',
          showConfirmButton: true,
          timer: false,
          ruta: 'login',
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.render('login', {
      alert: true,
      alertTitle: 'Advertencia',
      alertMessage: 'Credenciales inválidas',
      alertIcon: 'error',
      showConfirmButton: true,
      timer: false,
      ruta: 'login',
    });
  }
};


exports.registrar = async (req, res) => {
  try {
    const email = req.body.email;
    const contrasena = req.body.contraseña;
    const nombres = req.body.nombre;
    const apellidos = req.body.apellidos;
    const telefono = req.body.telefono;
    const tipo = req.body.tipo;

    if (!nombres || !apellidos || !contrasena || !email || !telefono || !tipo) {
      res.render('registrar', {
        alert: true,
        alertTitle: 'Advertencia',
        alertMessage: 'Por favor, complete todos los campos requeridos',
        alertIcon: 'info',
        showConfirmButton: true,
        timer: false,
        ruta: 'registrar'
      });
    } else {
      // Crea el usuario en Firebase Authentication
      const userRecord = await admin.auth().createUser({
        email: email,
        password: contrasena
      });

      // Guarda la información adicional del usuario en tu base de datos
      const newUser = await Empleado.crearEmpleado({
        nombres,
        apellidos,
        contrasena,
        email,
        telefono,
        tipo
      });

      res.render('registrar', {
        alert: true,
        alertTitle: 'Usuario creado',
        alertMessage: 'El usuario se ha creado correctamente',
        alertIcon: 'success',
        showConfirmButton: false,
        timer: 800,
        ruta: 'login' 
      });
    }
  } catch (error) {
    console.log(error);
  }
};




exports.isAuthenticated = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO);
      const id = decodificada.id;
      
      if (id) {
        const [rows, fields] = await pool.execute('SELECT * FROM SESclientes.Usuarios WHERE idUsuarios = ?', [id]);
        if (!rows || rows.length === 0) {
          return next();
        }
        req.user = rows[0];
        console.log("usuario en autentificacion: ");
        console.dir(req.user);
        return next();
      } else {
        return next();
      }
    } catch (error) {
      console.log("Error en isAuthenticated: ", error);
      return next();
    }
  } else {
    res.redirect('/login');
  }
};



exports.logout= (req,res)=>{
  res.clearCookie('jwt')
  return res.redirect('/login')
}
