if(localStorage.getItem('Numero_ID') != null){
    aFecha=JSON.parse(localStorage.getItem('FechaING'));
    aNumeroID=JSON.parse(localStorage.getItem('Numero_ID'));
    aProducto=JSON.parse(localStorage.getItem('Nombre_Producto'));
    aCantidad=JSON.parse(localStorage.getItem('Cantidad_Producto'));
    aPrecio=JSON.parse(localStorage.getItem('Precio_Producto'));
}

var id = getUrlVars()["id"],
    nFecha = aFecha[id],
    nNumeroID = aNumeroID[id],
    nProducto = aProducto[id],
    nCantidad = aCantidad[id],
    nPrecio = aPrecio[id],
    btnModificar = document.querySelector('#btnModificar'),
    btnEliminar  = document.querySelector('#btnEliminar')
    
    document.querySelector('#txtFecha').value = nFecha;
    document.querySelector('#txtNumeroID').value = nNumeroID,
    document.querySelector('#txtProducto').value = nProducto,
    document.querySelector('#txtCantidad').value = nCantidad,
    document.querySelector('#txtPrecio').value = nPrecio,
 
      btnModificar.addEventListener('click',modificar);
    // btnEliminar.addEventListener('click',eliminar);
        
function modificar(){
var nFecha = document.querySelector("#txtFecha").value,
    nNumeroID = document.querySelector("#txtNumeroID").value,
    nProducto = document.querySelector("#txtProducto").value,
    nCantidad = document.querySelector("#txtCantidad").value,
    nPrecio = document.querySelector("#txtPrecio").value;
    aFecha[id] = nFecha;
    aNumeroID[id] = nNumeroID;
    aProducto[id] = nProducto;
    aCantidad[id] = nCantidad;
    aPrecio[id] = nPrecio;
    localStorage.setItem('Numero_ID',JSON.stringify(aNumeroID));
    localStorage.setItem('FechaING',JSON.stringify(aFecha));
    localStorage.setItem('Nombre_Producto',JSON.stringify(aProducto));
    localStorage.setItem('Cantidad_Producto',JSON.stringify(aCantidad));
    localStorage.setItem('Precio_Producto',JSON.stringify(aPrecio));
    window.location.href = "index3.html";
}

function eliminar(){
    var nFecha = 'eliminar',
        nNumeroID = 'eliminar',
        nProducto = 'eliminar',
        nCantidad = 'eliminar',
        nPrecio = 'eliminar';
        console.log(nFecha);
        console.log(nNumeroID);
        console.log(nProducto);
        console.log(nCantidad);
        console.log(nPrecio);
        aFecha[id] = nFecha;
        aNumeroID[id] = nNumeroID;
        aProducto[id] = nProducto;
        aCantidad[id] = nCantidad;
        aPrecio[id] = nPrecio;
        console.log(aFecha[id]);
        // console.log(aNumeroID[id]);
        // console.log(aProducto[id]);
        // console.log(aCantidad[id]);
        // console.log(aPrecio[id]);
        aFecha = aFecha.filter(aFecha => (aFecha != nFecha)),
        aNumeroID = aNumeroID.filter(aNumeroID => (aNumeroID != nNumeroID)),
        aProducto = aProducto.filter(aProducto => (aProducto != nProducto)),
        aCantidad = aCantidad.filter(aCantidad => (aCantidad != nCantidad)),
        aPrecio = aPrecio.filter(aPrecio => (aPrecio != nPrecio));
        console.log(aFecha);
        // console.log(aNumeroID);
        // console.log(aProducto);
        // console.log(aCantidad);
        // console.log(aPrecio );
        console.log(JSON.parse(localStorage.getItem('FechaING')));
        // console.log(JSON.parse(localStorage.getItem('Numero_ID')));
        // console.log(JSON.parse(localStorage.getItem('Nombre_Producto')));
        // console.log(JSON.parse(localStorage.getItem('Cantidad_Producto')));
        // console.log(JSON.parse(localStorage.getItem('Precio_Producto')));
        localStorage.setItem('FechaING',JSON.stringify(aFecha));
        localStorage.setItem('Numero_ID',JSON.stringify(aNumeroID));
        localStorage.setItem('Nombre_Producto',JSON.stringify(aProducto));
        localStorage.setItem('Cantidad_Producto',JSON.stringify(aCantidad));
        localStorage.setItem('Precio_Producto',JSON.stringify(aPrecio));
        // console.log(JSON.parse(localStorage.getItem('Numero_ID')));
        // console.log(JSON.parse(localStorage.getItem('Nombre_Producto')));
        // console.log(JSON.parse(localStorage.getItem('Cantidad_Producto')));
        // console.log(JSON.parse(localStorage.getItem('Precio_Producto')));
              
         window.location.href = "index3.html";
}

// function eliminar3(){
        // mNumeroID =  document.querySelector("#n"+i).value,
        // mProducto =  document.querySelector("#pd"+i).value,
        // mCantidad =  document.querySelector("#c"+i).value,
        // mPrecio =  document.querySelector("pr"+i).value;
// 
    // let nNumeroID = aNumeroID.filter(aNumeroID => (aNumeroID != mNumeroID)),
        // nProducto = aProducto.filter(aProducto => (aProducto != mProducto)),
        // nCantidad = aCantidad.filter(aCantidad => (aCantidad != mCantidad)),
        // nPrecio = aPrecio.filter(aPrecio => (aPrecio != mPrecio));
// 
        // localStorage.setItem('Numero_ID',JSON.stringify(nNumeroID));
        // localStorage.setItem('Nombre_Producto',JSON.stringify(nProducto));
        // localStorage.setItem('Cantidad_Producto',JSON.stringify(nCantidad));
        // localStorage.setItem('Precio_Producto',JSON.stringify(nPrecio));
        // 
    // location.reload();
    // }
    // 
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function eliminarTodo(){
    localStorage.clear();
    location.reload();

}