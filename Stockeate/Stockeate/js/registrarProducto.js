let aFecha=[],
    aNumeroID=[],
    aProducto=[],
    aCantidad=[],
    aPrecio=[];

if(localStorage.getItem('Numero_ID') != null){
    aFecha=JSON.parse(localStorage.getItem('FechaING'));
    aNumeroID=JSON.parse(localStorage.getItem('Numero_ID'));
    aProducto=JSON.parse(localStorage.getItem('Nombre_Producto'));
    aCantidad=JSON.parse(localStorage.getItem('Cantidad_Producto'));
    aPrecio=JSON.parse(localStorage.getItem('Precio_Producto'));
}


// var elementoBotonRegistrar= document.querySelector("#btn-Registrar");
// 
// elementoBotonRegistrar.addEventListener('click',registrarProducto)
function registrarProducto(){
  let nFecha=document.querySelector("#FechaIngreso").value,
      nNumeroID=document.querySelector("#IDProductoIngresado").value,
      nProducto=document.querySelector("#nombreProductoIngresado").value,
      nCantidad=document.querySelector("#cantidadProductoIngresado").value,
      nPrecio=document.querySelector("#precioProductoIngresado").value;
 
    aFecha.push(nFecha);
    aNumeroID.push(nNumeroID);
    aProducto.push(nProducto);
    aCantidad.push(nCantidad);
    aPrecio.push(nPrecio);

    localStorage.setItem('FechaING',JSON.stringify(aFecha));
    localStorage.setItem('Numero_ID',JSON.stringify(aNumeroID));
    localStorage.setItem('Nombre_Producto',JSON.stringify(aProducto));
    localStorage.setItem('Cantidad_Producto',JSON.stringify(aCantidad));
    localStorage.setItem('Precio_Producto',JSON.stringify(aPrecio));

    
    llenarTabla();
    document.formulario.reset();
}

function registrarYtabla(){
    registrarProducto();
    window.location.href = "index3.html";        
}
