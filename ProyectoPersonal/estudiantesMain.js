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
var campoNombre = document.querySelector("#nombre");
var campoNombre = document.querySelector("#inputNombre");
var campoDescripcion = document.querySelector("#inputDescripcion");
var campoTiempo = document.querySelector("#inputTiempo");

// {"id":"314","cedula":"3465435","correoelectronico":"ge@gmail.com","telefono":"12321","telefonocelular":"2354234",
// "fechanacimiento":"2023-05-05","sexo":"masculino","direccion":"San Ramon",
// "nombre":"W2","apellidopaterno":"Ara","apellidomaterno":"Ji","nacionalidad":"Tico","idCarreras":"1","usuario":"jaja"}
function editarDatos(id,cedula, correoelectronico, telefono, telefonocelular,
  fechanacimiento, sexo, direccion, nombre,apeldiopaterno, apellidomaterno, nacionalidad, idCarreras, usuario){






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
          }
          )
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
