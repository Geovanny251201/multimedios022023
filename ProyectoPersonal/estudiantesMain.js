var formulario = document.getElementById("form-estudiantes");

formulario.addEventListener("submit", function (e) {
 
  e.preventDefault();
  var datosFormulario;
  datosformulario = new FormData(formulario);
  
  var formularioLleno = true;
  for (var entrada of datosformulario.entries()) {
    if (!entrada[1]) { // si el valor de la entrada está vacío
      formularioLleno = false;
      break;
    }
  }

if(formularioLleno){
    fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(datosformulario.entries())),
      })
        .then((respuesta) => respuesta.json()) //recibe los datos em formato json
        .then((datosrespuesta) => {
        // Cerrar el modal
        $('#exampleModal').modal('hide');
        // Vaciar los inputs
        formulario.reset(); 

        })
        .catch(console.log);
        Swal.fire({
            icon: 'success',
            title: 'Guardado',
            text: 'Estudiante Agregado',
            confirmButtonColor: '#4fb37c',
          }
          )
}else{
     Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor llene todos los campos',
        confirmButtonColor: '#dc3545',
      });
}

});
