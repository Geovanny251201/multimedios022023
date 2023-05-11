//declaracion de variabe
var contenidoTablaResultado = document.querySelector("#resultados");
var selectOrden = document.querySelector("#selectId");

function cargarDatos() {
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php")
        .then((respuesta) => respuesta.json())
        .then((datosrespuesta) => {
            setTable(datosrespuesta.data);
        })
        .catch(console.log);
}

function setTable(datos) {
    contenidoTablaResultado.innerHTML = "";
    var orden = selectOrden.value;

    if (orden == "asc") {
        datos.sort(function (a, b) {
            return a.id - b.id;
        });
    } else if (orden == "desc") {
        datos.sort(function (a, b) {
            return b.id - a.id;
        });
    }

    for (const valor of datos) {
        contenidoTablaResultado.innerHTML += `
    <tr class="table-info">
      <td scope="row">${valor.id}</td>
      <td>${valor.nombre}</td>
      <td>${valor.descripcion}</td>
      <td>${valor.tiempo}</td>
      <td>
        <button class="btn btn-danger" onClick={borrarDatos('${valor.id}')}>Borrar</button>
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary" onClick="editarDatos('${valor.id}','${valor.nombre}','${valor.descripcion}','${valor.tiempo}','${valor.usuario}')">Editar</button>
      </td>
    </tr>
  `;
    }
    selectOrden.addEventListener("change", function () {
        setTable(datos);
    });
}
// -----------------------------------------------------------------------------------
var campoNombre = document.querySelector("#nombre");
var campoDescripcion = document.querySelector("#inputDescripcion");
var campoDescripcion = document.querySelector("#inputDescripcion");
var campoTiempo = document.querySelector("#inputTiempo");

function editarDatos(id, nombre, descripcion, tiempo, usuario) {
    campoNombre.value = nombre;
    campoDescripcion.value = descripcion;
    campoTiempo.value = tiempo;

    var formulario = document.getElementById("form-estudiantes");
   

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        // Verificar si los campos están vacíos
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
            var datosActualizados = {
                id: id,
                nombre: campoNombre.value,
                descripcion: campoDescripcion.value,
                tiempo: campoTiempo.value,
                usuario: usuario
            };

            fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php", {
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
    });
}


// -----------------------------------------------------------------------------------
function borrarDatos(id) {
    var datosId = {
        id: id,
    };
    fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php", {
            method: "POST",
            body: JSON.stringify(datosId)
        })
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datosrespuesta) {
            cargarDatos();
        })
        .catch(function (error) {
            console.log(error);
        });

}

// -----------------------------------------------------------------------------------

function agregarDatos() {
    var formulario = document.getElementById("form-agregar");

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
        fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php", {
                method: "POST",
                body: JSON.stringify(Object.fromEntries(datosFormulario.entries())),
            })
            .then((respuesta) => respuesta.json())
            .then((datosrespuesta) => {
                cargarDatos();
                alert("Los datos se han guardado correctamente.");
                formulario.reset(); // Restablecer campos del formulario
                $('#modalAgregar').modal('hide');
            })
            .catch(console.log);
    } else {
        alert("Debe llenar todos los campos");
    }
}

var formulario = document.getElementById("form-agregar");
formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    agregarDatos();
});

cargarDatos();