
var idValue;
function llenarForm( id, cedula, correoelectronico, telefono, telefonocelular,
  fechanacimiento, sexo, direccion, nombre, apellidopaterno, apellidomaterno, nacionalidad, idCarreras, usuario) {
    document.getElementById('cedulaEdit').value=cedula
    document.getElementById('correoelectronicoEdit').value=correoelectronico
    document.getElementById('telefonoEdit').value=telefono
    document.getElementById('telefonocelularEdit').value=telefonocelular
    document.getElementById('fechanacimientoEdit').value=fechanacimiento
    document.getElementById('sexoEdit').value=sexo
    document.getElementById('direccionEdit').value=direccion
    document.getElementById('nombreEdit').value=nombre
    document.getElementById('apellidopaternoEdit').value=apellidopaterno
    document.getElementById('apellidomaternoEdit').value=apellidomaterno
    document.getElementById('nacionalidadEdit').value=nacionalidad
    document.getElementById('idCarrerasEdit').value=idCarreras
    document.getElementById('usuarioEdit').value=usuario
  }

  var formulario = document.getElementById("form-estudiantes-editar");
  formulario.addEventListener('submit', function(e) {
    e.preventDefault();
 
   var id =idValue;
   var cedula = document.getElementById('cedulaEdit').value;
   var correoelectronico = document.getElementById('correoelectronicoEdit').value;
   var telefono = document.getElementById('telefonoEdit').value;
   var telefonocelular = document.getElementById('telefonocelularEdit').value;
   var fechanacimiento = document.getElementById('fechanacimientoEdit').value;
   var sexo = document.getElementById('sexoEdit').value;
   var direccion = document.getElementById('direccionEdit').value;
   var nombre = document.getElementById('nombreEdit').value;
   var apellidopaterno = document.getElementById('apellidopaternoEdit').value;
   var apellidomaterno = document.getElementById('apellidomaternoEdit').value;
   var nacionalidad = document.getElementById('nacionalidadEdit').value;
   var idCarreras = document.getElementById('idCarrerasEdit').value;
   var usuario = document.getElementById('usuarioEdit').value;




    var datosActualizados = {
        id: id,
        cedula:cedula,
        correoelectronico:correoelectronico,
        telefono:telefono,
        telefonocelular:telefonocelular,
        fechanacimiento:fechanacimiento,
        sexo:sexo,
        direccion:direccion,
        nombre:nombre,
        apellidopaterno:apellidopaterno,
        apellidomaterno:apellidomaterno,
        nacionalidad:nacionalidad,
        idCarreras:idCarreras,
        usuario:usuario
    }
    function validarDatos(datos) {
      for (var key in datos) {
        if (datos.hasOwnProperty(key)) {
          if (!datos[key] || datos[key].trim() === "") {
            return false;
          }
        }
      }
      return true;
    }


    if (validarDatos(datosActualizados)) {
    // console.log(datosenviar);
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarEstudiantes.php",
    {
        method:"POST",
        body:JSON.stringify(datosActualizados)
    })//url de peticion de datos
    .then(respuesta => respuesta.json())//recibe los datos en formato json
    .then((datosrespuesta) => {    
      Swal.fire({
        icon: 'success',
        title: 'Guardado',
        text: 'Estudiante Agregado',
        confirmButtonColor: '#4fb37c',
      })
        $('#modalEdit').modal('hide');
        cargarDatos();
        
    })
    .catch(console.log)//muestra errores
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por favor llene todos los campos',
      confirmButtonColor: '#dc3545',
    });
  }
});


function borrarDatos(id, nombre) {
  // Mostrar SweetAlert para confirmar la eliminación
  swal({
    title: 'Are you sure?',
    text: "It will permanently deleted !",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(function() {
    swal(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    );
  })
}
 // ------------------------------------------------------------

 function llenarConsulta(id, cedula, correoelectronico, telefono, telefonocelular,
  fechanacimiento, sexo, direccion, nombre, apellidopaterno, apellidomaterno, nacionalidad, idCarreras, usuario){

    console.log(nombre);
    document.getElementById('id').textContent=id
    document.getElementById('cedula_id').textContent=cedula
    document.getElementById('correoelectronico_id').textContent=correoelectronico
    document.getElementById('telefono_id').textContent=telefono
    document.getElementById('telefonocelular_id').textContent=telefonocelular
    document.getElementById('fechanacimiento_id').textContent=fechanacimiento
    document.getElementById('sexo_id').textContent=sexo
    document.getElementById('direccion_id').textContent=direccion
    document.getElementById('nombre_id').textContent=nombre
    document.getElementById('apellidopaterno_id').textContent=apellidopaterno
    document.getElementById('apellidomaterno_id').textContent=apellidomaterno
    document.getElementById('nacionalidad_id').textContent=nacionalidad
    document.getElementById('idCarreras_id').textContent=idCarreras
    document.getElementById('usuario_id').textContent=usuario

 }
  // ------------------------------------------------------------
function agregarDatos() {
  var formulario = document.getElementById("form-estudiantes");

  var datosFormulario;
  datosFormulario = new FormData(formulario);

  var formularioLleno = true;
  for (var entrada of datosFormulario.entries()) {
    if (!entrada[1]) { // si el valor de la entrada está vacío
      formularioLleno = false;
      break;
    }
  }
  if (formularioLleno) {
    fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(datosFormulario.entries())),
      })
      .then((respuesta) => respuesta.json())
      .then((datosrespuesta) => {

        $('#exampleModal').modal('hide');
        console.log("Hola")
        // Vaciar los inputs
        formulario.reset();
        cargarDatos();

      })
      .catch(console.log);
    Swal.fire({
      icon: 'success',
      title: 'Guardado',
      text: 'Estudiante Agregado',
      confirmButtonColor: '#4fb37c',
    })
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por favor llene todos los campos',
      confirmButtonColor: '#dc3545',
    });
  }
}

var formulario = document.getElementById("form-estudiantes");
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  agregarDatos();
});