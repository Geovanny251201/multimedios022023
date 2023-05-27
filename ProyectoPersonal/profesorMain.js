var idValue;

function llenarForm(id, cedula, correoelectronico, telefono, telefonocelular,
  fechanacimiento, sexo, direccion, nombre, apellidopaterno, apellidomaterno, nacionalidad, idCarreras, usuario) {
  idValue = id;
  document.getElementById('cedulaEdit').value = cedula
  document.getElementById('correoelectronicoEdit').value = correoelectronico
  document.getElementById('telefonoEdit').value = telefono
  document.getElementById('telefonocelularEdit').value = telefonocelular
  document.getElementById('fechanacimientoEdit').value = fechanacimiento
  document.getElementById('sexoEdit').value = sexo
  document.getElementById('direccionEdit').value = direccion
  document.getElementById('nombreEdit').value = nombre
  document.getElementById('apellidopaternoEdit').value = apellidopaterno
  document.getElementById('apellidomaternoEdit').value = apellidomaterno
  document.getElementById('nacionalidadEdit').value = nacionalidad
  document.getElementById('idCarrerasEdit').value = idCarreras
  document.getElementById('usuarioEdit').value = usuario
  cargarDatosGruposEdit(idCarreras);
}
// ------------------------------------------------------------
var formulario = document.getElementById("form-profesor-editar");
formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  var id = idValue;
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
    cedula: cedula,
    correoelectronico: correoelectronico,
    telefono: telefono,
    telefonocelular: telefonocelular,
    fechanacimiento: fechanacimiento,
    sexo: sexo,
    direccion: direccion,
    nombre: nombre,
    apellidopaterno: apellidopaterno,
    apellidomaterno: apellidomaterno,
    nacionalidad: nacionalidad,
    idCarreras: idCarreras,
    usuario: usuario
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
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarProfesores.php", {
        method: "POST",
        body: JSON.stringify(datosActualizados)
      }) //url de peticion de datos
      .then(respuesta => respuesta.json()) //recibe los datos en formato json
      .then((datosrespuesta) => {
        Swal.fire({
          icon: 'success',
          title: 'Editado',
          text: 'Estudiante editado',
          confirmButtonColor: '#4fb37c',
        })
        $('#modalEditProfesor').modal('hide');
        cargarDatos();

      })
      .catch(console.log) //muestra errores
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por favor llene todos los campos',
      confirmButtonColor: '#dc3545',
    });
  }
});
// ------------------------------------------------------------

function borrarDatos(id, nombre) {


  // Mostrar SweetAlert para confirmar la eliminación
  Swal.fire({
    title: 'Deseas eliminar este estudiante?',
    text: "¡No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Eliminar'
  }).then((result) => {
    if (result.isConfirmed) {

      var datosId = {
        id: id,
      };

      fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarProfesores.php", {
          method: "POST",
          body: JSON.stringify(datosId)
        })
        .then(function (respuesta) {
          return respuesta.json();
        })
        .then(function (datosrespuesta) {
          cargarDatos();
          Swal.fire(
            'Eliminado',
            'Estudiante eliminado',
            'success'
          )
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  })
}
// ------------------------------------------------------------

function llenarConsulta(id, cedula, correoelectronico, telefono, telefonocelular,
  fechanacimiento, sexo, direccion, nombre, apellidopaterno, apellidomaterno, nacionalidad, idCarreras, usuario) {

  console.log(nombre);
  document.getElementById('id').textContent = id
  document.getElementById('cedula_id').textContent = cedula
  document.getElementById('correoelectronico_id').textContent = correoelectronico
  document.getElementById('telefono_id').textContent = telefono
  document.getElementById('telefonocelular_id').textContent = telefonocelular
  document.getElementById('fechanacimiento_id').textContent = fechanacimiento
  document.getElementById('sexo_id').textContent = sexo
  document.getElementById('direccion_id').textContent = direccion
  document.getElementById('nombre_id').textContent = nombre
  document.getElementById('apellidopaterno_id').textContent = apellidopaterno
  document.getElementById('apellidomaterno_id').textContent = apellidomaterno
  document.getElementById('nacionalidad_id').textContent = nacionalidad
  document.getElementById('idCarreras_id').textContent = idCarreras
  document.getElementById('usuario_id').textContent = usuario

}
// ------------------------------------------------------------

function agregarDatos() {
  var formulario = document.getElementById("form-profesor");

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
    fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarProfesores.php", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(datosFormulario.entries())),
      })
      .then((respuesta) => respuesta.json())
      .then((datosrespuesta) => {

        $('#exampleModalProfesor').modal('hide');
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

var formulario = document.getElementById("form-profesor");
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  agregarDatos();
});
// ------------------------------------------------------------
// ---------------------- Carga,Paginacion y filtro de datos-----------------------------------
let paginaActual = 1;
const resultadosPorPagina = 10; // Cantidad de resultados que se mostrarán en cada página
let datosPaginados = []; // Array que almacenará los datos paginados
let datosOriginales = []
var contenidoFilasGeneral = document.querySelector("#listaGeneral");
// --------------------------------------------------------------------------------------------
function cargarDatos() {
  fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaProfesores.php")
    .then((respuesta) => respuesta.json())
    .then((datosrespuesta) => {
      datosOriginales = datosrespuesta.data;

      // Realiza el paginado de los datos
      datosPaginados = paginarDatos(datosOriginales);
      // Muestra la primera página
      mostrarPagina(paginaActual);

      // setTable(datosrespuesta.data);
    })
    .catch(console.log);
}




function cargarDatosGrupos() {
  fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php")
    .then((respuesta) => respuesta.json())
    .then((datosrespuesta) => {
      datosOriginales = datosrespuesta.data;
      const select=document.getElementById('listaGrupo');
      select.innerHTML = '';
      for(const datos of datosOriginales){
        const option = document.createElement('option');
        option.value = datos.id;
        option.textContent = datos.nombre;
        select.appendChild(option);
      }


   
    })
    .catch(console.log);
}

function cargarDatosGruposEdit(idGrupoSeleccionado) {
  fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php")
    .then((respuesta) => respuesta.json())
    .then((datosrespuesta) => {
      const datosOriginales = datosrespuesta.data;
      const select = document.getElementById('idCarrerasEdit');

      // Limpiar el contenido del select antes de agregar nuevas opciones
      select.innerHTML = '';

      for (const datos of datosOriginales) {
        const option = document.createElement('option');
        option.value = datos.id;
        option.textContent = datos.nombre;

        // Verificar si la opción es la seleccionada
        if (datos.id === idGrupoSeleccionado) {
          option.selected = true;
        }

        select.appendChild(option);
      }
    })
    .catch(console.log);
}
// ------------------------------------------------------------
function filtrarPorNombre() {
  const inputNombre = document.getElementById("inputNombre");
  const nombreFiltro = inputNombre.value.trim().toLowerCase();

  if (nombreFiltro === "") {
    // Si el input está vacío, muestra los datos originales paginados
    datosPaginados = paginarDatos(datosOriginales);
  } else {
    // Filtra los datos originales por nombre
    const datosFiltrados = datosOriginales.filter((valor) =>
      valor.nombre.toLowerCase().includes(nombreFiltro)
    );
    // Realiza el paginado de los datos filtrados
    datosPaginados = paginarDatos(datosFiltrados);
  }

  // Muestra la primera página
  paginaActual = 1;
  mostrarPagina(paginaActual);
  const botonAnterior = document.getElementById("anterior");
  const botonSiguiente = document.getElementById("siguiente");
  botonAnterior.disabled = false;
  botonSiguiente.disabled = false;

}

// ------------------------------------------------------------
// determina la cantidad resultados por pagina y los guarda en arreglo
function paginarDatos(datos) {
  const paginas = [];
  const totalPaginas = Math.ceil(datos.length / resultadosPorPagina);

  for (let i = 0; i < totalPaginas; i++) {
    const inicio = i * resultadosPorPagina;
    const fin = inicio + resultadosPorPagina;
    const pagina = datos.slice(inicio, fin);
    paginas.push(pagina);
  }

  return paginas;
}
// ------------------------------------------------------------

function mostrarPagina(pagina) {
  var contenidoFilasGeneral = document.querySelector("#listaGeneral");
  contenidoFilasGeneral.innerHTML = "";

  const datos = datosPaginados[pagina - 1];

  for (const valor of datos) {
    // Agrega el código HTML para mostrar los datos en la tabla
    contenidoFilasGeneral.innerHTML += `
        <div class="d-flex fondo-listaGeneral mt-2 my-2 ms-2 me-2">
        <div class="col-8 mt-2 mb-2 d-flex align-items-center  ">
                ${valor.nombre}
        </div>
       <div class="col-4 d-flex align-items-center justify-content-end ">
        <button class="btn btn-primary btn-md mr-2 me-2 ms-2 mt-1"    type="button"
          data-bs-toggle="modal"
          data-bs-target="#modalEditProfesor"  onclick="llenarForm('${valor.id}', '${valor.cedula}','${valor.correoelectronico}','${valor.telefono}','${valor.telefonocelular}','${valor.fechanacimiento}','${valor.sexo}','${valor.direccion}','${valor.nombre}','${valor.apellidopaterno}','${valor.apellidomaterno}','${valor.nacionalidad}','${valor.idCarreras}','${valor.usuario}')"><i class="fas fa-edit me-1"></i>Editar</button>
        <button class="btn btn-danger  btn-md me-2 ms-2 mt-1" onClick={borrarDatos('${valor.id}','${valor.nombre}')}><i class="fas fa-trash me-1"></i>Eliminar</button>
        <button class="btn btn-info  btn-md me-2 ms-2 mt-1"  type="button"
          data-bs-toggle="modal"
          data-bs-target="#modalConsultaProfesor" onclick="llenarConsulta('${valor.id}', '${valor.cedula}','${valor.correoelectronico}','${valor.telefono}','${valor.telefonocelular}','${valor.fechanacimiento}','${valor.sexo}','${valor.direccion}','${valor.nombre}','${valor.apellidopaterno}','${valor.apellidomaterno}','${valor.nacionalidad}','${valor.idCarreras}','${valor.usuario}')"><i class="fas fa-info-circle me-1"></i>Consultar</button>
</div>
</div>
      

     `;

  }

  // Actualiza el número de página actual en los controles de paginación
  const paginaActualElement = document.getElementById("paginaActual");
  paginaActualElement.textContent = pagina;
}
// ------------------------------------------------------------
function cambiarPagina(direccion) {
  const totalPaginas = datosPaginados.length;

  if (direccion === -1 && paginaActual > 1) {
    // Retrocede a la página anterior
    paginaActual--;

  } else if (direccion === 1 && paginaActual < totalPaginas) {
    // Avanza a la página siguiente
    paginaActual++;

  }

  // Muestra la página actual
  mostrarPagina(paginaActual);




  // Actualiza la visibilidad de los botones de paginación
  const botonAnterior = document.getElementById("anterior");
  const botonSiguiente = document.getElementById("siguiente");

  if (paginaActual === 1) {
    botonAnterior.disabled = true;
  } else {
    botonAnterior.disabled = false;
  }

  if (paginaActual === totalPaginas) {
    botonSiguiente.disabled = true;
  } else {
    botonSiguiente.disabled = false;
  }
}
// ------------------------------------------------------------
cargarDatos();