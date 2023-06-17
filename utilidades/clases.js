// Clase Usuario
class Usuario {
  constructor(usuario, contrasena, idempleado) {
    this.usuario = usuario;
    this.contrasena = contrasena;
    this.idempleado = idempleado;
  }

  getUsuario() {
    return this.usuario;
  }

  setUsuario(usuario) {
    this.usuario = usuario;
  }

  getContrasena() {
    return this.contrasena;
  }

  setContrasena(contrasena) {
    this.contrasena = contrasena;
  }

  getIdEmpleado() {
    return this.idempleado;
  }

  setIdEmpleado(idempleado) {
    this.idempleado = idempleado;
  }
}

// Clase Cliente
class Cliente {
  constructor(rfc, nombre, apellido, email, empresa, telefono) {
    this.rfc = rfc;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.empresa = empresa;
    this.telefono = telefono;
  }

  getRFC() {
    return this.rfc;
  }

  setRFC(rfc) {
    this.rfc = rfc;
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  getApellido() {
    return this.apellido;
  }

  setApellido(apellido) {
    this.apellido = apellido;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email) {
    this.email = email;
  }

  getEmpresa() {
    return this.empresa;
  }

  setEmpresa(empresa) {
    this.empresa = empresa;
  }

  getTelefono() {
    return this.telefono;
  }

  setTelefono(telefono) {
    this.telefono = telefono;
  }
}

// Clase Empleado
class Empleado {
  constructor(idempleado, nombre, apellido, email, rol, telefono) {
    this.idempleado = idempleado;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.rol = rol;
    this.telefono = telefono;
  }

  getIdEmpleado() {
    return this.idempleado;
  }

  setIdEmpleado(idempleado) {
    this.idempleado = idempleado;
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  getApellido() {
    return this.apellido;
  }

  setApellido(apellido) {
    this.apellido = apellido;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email) {
    this.email = email;
  }

  getRol() {
    return this.rol;
  }

  setRol(rol) {
    this.rol = rol;
  }

  getTelefono() {
    return this.telefono;
  }

  setTelefono(telefono) {
    this.telefono = telefono;
  }
}

// Clase Mensaje
class Mensaje {
  constructor(idmensaje, fecha, asunto, cuerpo, archivo, idempleado, idcliente) {
    this.idmensaje = idmensaje;
    this.fecha = fecha;
    this.asunto = asunto;
    this.cuerpo = cuerpo;
    this.archivo = archivo;
    this.idempleado = idempleado;
    this.idcliente = idcliente;
  }

  getIdMensaje() {
    return this.idmensaje;
  }

  setIdMensaje(idmensaje) {
    this.idmensaje = idmensaje;
  }

  getFecha() {
    return this.fecha;
  }

  setFecha(fecha) {
    this.fecha = fecha;
  }

  getAsunto() {
    return this.asunto;
  }

  setAsunto(asunto) {
    this.asunto = asunto;
  }

  getCuerpo() {
    return this.cuerpo;
  }

  setCuerpo(cuerpo) {
    this.cuerpo = cuerpo;
  }

  getArchivo() {
    return this.archivo;
  }

  setArchivo(archivo) {
    this.archivo = archivo;
  }

  getIdEmpleado() {
    return this.idempleado;
  }

  setIdEmpleado(idempleado) {
    this.idempleado = idempleado;
  }

  getIdCliente() {
    return this.idcliente;
  }

  setIdCliente(idcliente) {
    this.idcliente = idcliente;
  }
}

// Clase Reporte
class Reporte {
  constructor(idreporte, descripcion, fecha, hora, idempleado, idcliente) {
    this.idreporte = idreporte;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.hora = hora;
    this.idempleado = idempleado;
    this.idcliente = idcliente;
  }

  getIdReporte() {
    return this.idreporte;
  }

  setIdReporte(idreporte) {
    this.idreporte = idreporte;
  }

  getDescripcion() {
    return this.descripcion;
  }

  setDescripcion(descripcion) {
    this.descripcion = descripcion;
  }

  getFecha() {
    return this.fecha;
  }

  setFecha(fecha) {
    this.fecha = fecha;
  }

  getHora() {
    return this.hora;
  }

  setHora(hora) {
    this.hora = hora;
  }

  getIdEmpleado() {
    return this.idempleado;
  }

  setIdEmpleado(idempleado) {
    this.idempleado = idempleado;
  }

  getIdCliente() {
    return this.idcliente;
  }

  setIdCliente(idcliente) {
    this.idcliente = idcliente;
  }
}

// Clase Retroalimentacion
class Retroalimentacion {
  constructor(idretroalimentacion, comentario, fecha, calificacion, idempleado, idcliente) {
    this.idretroalimentacion = idretroalimentacion;
    this.comentario = comentario;
    this.fecha = fecha;
    this.calificacion = calificacion;
    this.idempleado = idempleado;
    this.idcliente = idcliente;
  }

  getIdRetroalimentacion() {
    return this.idretroalimentacion;
  }

  setIdRetroalimentacion(idretroalimentacion) {
    this.idretroalimentacion = idretroalimentacion;
  }

  getComentario() {
    return this.comentario;
  }

  setComentario(comentario) {
    this.comentario = comentario;
  }

  getFecha() {
    return this.fecha;
  }

  setFecha(fecha) {
    this.fecha = fecha;
  }

  getCalificacion() {
    return this.calificacion;
  }

  setCalificacion(calificacion) {
    this.calificacion = calificacion;
  }

  getIdEmpleado() {
    return this.idempleado;
  }

  setIdEmpleado(idempleado) {
    this.idempleado = idempleado;
  }

  getIdCliente() {
    return this.idcliente;
  }

  setIdCliente(idcliente) {
    this.idcliente = idcliente;
  }
}

// Exportar las clases
module.exports = { Usuario, Cliente, Empleado, Mensaje, Reporte, Retroalimentacion };
