// registro de usuario:
// Nombre de usuario y Password:
let nombre1 = document.getElementById('nombre1');
let pw = document.getElementById('pw');

// guardas datos de Nombre de usuario y Password
function guardarUsuario() {
    localStorage.setItem('nombre1', nombre1.value);
     localStorage.setItem('pw', pw.value);
    // window.location.href="index1.html"
    }

// Validar usuario que se registro previamente
function validarUsuario() {

    // stored data from the register-form
    let nombre1Guardado = localStorage.getItem('nombre1');
    let pwGuardado = localStorage.getItem('pw');

    // entered data from the login-form
    let nombreUsuario = document.getElementById('nombreUsuario');
    let pwUsuario = document.getElementById('pwUsuario');

    // check if stored data from register-form is equal to data from login form
    if (nombreUsuario.value == nombre1Guardado && pwUsuario.value == pwGuardado) {
         document.write("Usuario");//Lo deje porque hace que funcione la parte siguiente....
    window.location.href = "index3.html";
    }else {
        alert('Revisa tu nombre de usuario o Contraseña, algo seguro ingresaste mal.....si no tenes usuario registrate!!!!');
    };
}

// guardarDatos(): Esta función debería tomar los valores de los campos del formulario y guardar los datos en el localstorage y te lleva a la pagina producto.
// Primero obtenemos los datos ingresados:

// let nombreProductoIngresado = document.getElementById ("nombreProductoIngresado");
// let cantidadProductoIngresado = document.getElementById("cantidadProductoIngresado");
// let precioProductoIngresado = document.getElementById ("precioProductoIngresado");

// function guardarDatos(){
    // localStorage.setItem('nombreProductoIngresado', nombreProductoIngresado.value);
    // localStorage.setItem('cantidadProductoIngresado', cantidadProductoIngresado.value);
    // localStorage.setItem('precioProductoIngresado', precioProductoIngresado.value);

// }
// seguirCargando(): toma los valores de los campos, los guarda en el localstorage y limpia los valores del formulario para seguir trabajando en la misma pagina
//  mostrarDatos(): Para mostrar los datos debemos obtener los valores guardados en el localStorage e ir dibujándolos en la tabla. Recomendación trabaja este paso con innerHTML y no con createElement, se te hará más fácil.
// function mostrarDatos(){
                    // agregarFila(),
                    // guardarDatos()
// }

//  eliminarItem(): Eliminará un ítem de la tabla cuando se haga click en el botón (-)
//  eliminarTodo(): Limpia todo el storage y el DOM.
// modificar():.     


// Tabla Producto

// function agregarFila(){
    // document.getElementById("tablaProducto").insertRow(-1).innerHTML = `<td></td><td></td><td></td><td></td>`;
//   }
  
//   function eliminarFila(){
    // var table = document.getElementById("tablaProducto");
    // var rowCount = table.rows.length;
    //console.log(rowCount);
    
    // if(rowCount <= 1)
    //   alert('No se puede eliminar el encabezado');
    // else
    //   table.deleteRow(rowCount -1);
//   }