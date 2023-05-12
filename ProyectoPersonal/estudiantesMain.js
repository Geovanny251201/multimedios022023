// var formulario = document.getElementById("form-estudiantes");

// formulario.addEventListener("submit", function (e) {

//   e.preventDefault();
//   var datosFormulario;
//   datosformulario = new FormData(formulario);

//   var formularioLleno = true;
//   for (var entrada of datosformulario.entries()) {
//     if (!entrada[1]) { // si el valor de la entrada está vacío
//       formularioLleno = false;
//       break;
//     }
//   }

// if(formularioLleno){
//     fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php", {
//         method: "POST",
//         body: JSON.stringify(Object.fromEntries(datosformulario.entries())),
//       })
//         .then((respuesta) => respuesta.json()) //recibe los datos em formato json
//         .then((datosrespuesta) => {
//         // Cerrar el modal
//         $('#exampleModal').modal('hide');
//         // Vaciar los inputs
//         formulario.reset(); 

//         })
//         .catch(console.log);
//         Swal.fire({
//             icon: 'success',
//             title: 'Guardado',
//             text: 'Estudiante Agregado',
//             confirmButtonColor: '#4fb37c',
//           }
//           )
// }else{
//      Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Por favor llene todos los campos',
//         confirmButtonColor: '#dc3545',
//       });
// }

// });

var campoCedula = document.querySelector("#cedula");
var campoCorreoElectronico = document.querySelector("#correoelectronico");
var campoTelefono = document.querySelector("#telefono");
var campoTelefonoCelular = document.querySelector("#telefonocelular");
var campoFechaNacimiento = document.querySelector("#fechanacimiento");
var campoSexo = document.querySelector("#sexo");
var campoDireccion = document.querySelector("#direccion");
var campoNombre = document.querySelector("#nombre");
var campoApellidopaterno = document.querySelector("#apellidopaterno");
var campoApellidomaterno = document.querySelector("#apellidomaterno");
var campoNacionalidad = document.querySelector("#nacionalidad");
var campoIdCarreras = document.querySelector("#idCarreras");
var campoUsuario = document.querySelector("#usuario");



// {"id":"314","cedula":"3465435","correoelectronico":"ge@gmail.com","telefono":"12321","telefonocelular":"2354234",
// "fechanacimiento":"2023-05-05","sexo":"masculino","direccion":"San Ramon",
// "nombre":"W2","apellidopaterno":"Ara","apellidomaterno":"Ji","nacionalidad":"Tico","idCarreras":"1","usuario":"jaja"}
function editarDatos(id, cedula, correoelectronico, telefono, telefonocelular,
  fechanacimiento, sexo, direccion, nombre, apellidopaterno, apellidomaterno, nacionalidad, idCarreras, usuario) {

  campoCedula = cedula
  campoCorreoElectronico = correoelectronico
  campoTelefono = telefono
  campoTelefonoCelular = telefonocelular
  campoFechaNacimiento = fechanacimiento
  campoSexo = sexo
  campoDireccion = direccion
  campoNombre = nombre
  campoApellidopaterno = apellidopaterno
  campoApellidomaterno = apellidomaterno
  campoNacionalidad = nacionalidad
  campoIdCarreras = idCarreras
  campoUsuario = usuario

  var formulario = document.getElementById("form-estudiantes-editar");

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
    var datosActualizados = {
      id: id,
      cedula:campoCedula,
      correoelectronico:campoCorreoElectronico,
      telefono:campoTelefono,
      telefonocelular:campoTelefonoCelular,
      fechanacimiento:campoFechaNacimiento,
      sexo:campoSexo,
      direccion:campoDireccion,
      nombre:campoNombre,
      apellidopaterno:campoApellidopaterno,
      apellidomaterno:campoApellidomaterno,
      nacionalidad:campoNacionalidad,
      idCarreras:campoIdCarreras,
      usuario:campoUsuario

    };

    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarEstudiantes.php", {
        method: "POST",
        body: JSON.stringify(datosActualizados)
      })
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (datosrespuesta) {

        alert("Los datos se han editado");
        formulario.reset(); // Restablecer campos del formulario
        $('#exampleModal').modal('hide');
        cargarDatos();
      })
      .catch(function (error) {
        console.log(error);
      });

  } else {
    alert("Campos vacíos");
  }



}



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