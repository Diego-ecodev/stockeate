llenarTabla();

function llenarTabla(){
    tbody=document.querySelector('#tablaProducto tbody');

    tbody.innerHTML += '';

    let aFecha=JSON.parse(localStorage.getItem('FechaING'))
        aNumeroID=JSON.parse(localStorage.getItem('Numero_ID')),
        aProducto=JSON.parse(localStorage.getItem('Nombre_Producto'))
        aCantidad=JSON.parse(localStorage.getItem('Cantidad_Producto')),
        aPrecio=JSON.parse(localStorage.getItem('Precio_Producto'));
    
    let nCantidadProductos = aProducto.length;

    for(let i=0; i < nCantidadProductos; i++){

        let fila = document.createElement('tr');

            // fila.setAttribute('id','f'+i)

        let celdaFecha = document.createElement('td'),
            celdaNumeroID = document.createElement('td'),
            celdaProducto = document.createElement('td'),
            celdaCantidad = document.createElement('td'),
            celdaPrecio = document.createElement('td'),
            celdaModificar= document.createElement('td'),
            enlaceModificar= document.createElement('a');
            celdaEliminar= document.createElement('td'),
            enlaceEliminar= document.createElement('a');

            // celdaNumeroID.setAttribute('id','n'+i),
            // celdaProducto.setAttribute('id','pd'+i),
            // celdaCantidad.setAttribute('id','c'+i),
            // celdaPrecio.setAttribute('id','pr'+i), 

            // celdaModificar.setAttribute('class','btnModificar');
            celdaModificar.setAttribute('class','noSearch')
            // celdaEliminar.setAttribute('class','btnEliminar')
            celdaEliminar.setAttribute('class','noSearch')

            enlaceModificar.href ='modificar.html?id' + '=' + i;
            enlaceEliminar.href= 'Eliminar.html?id' + '=' + i;;

        let nodoTextoFecha = document.createTextNode(aFecha[i]),
            nodoTextoNumeroID = document.createTextNode(aNumeroID[i]),
            nodoTextoProducto = document.createTextNode(aProducto[i]),
            nodoTextoCantidad = document.createTextNode(aCantidad[i]),
            nodoTextoPrecio = document.createTextNode(aPrecio[i]),
            nodoTextoModificar = document.createTextNode('Modificar'),
            nodoTextoEliminar = document.createTextNode('Eliminar');


        celdaFecha.appendChild(nodoTextoFecha);
        celdaNumeroID.appendChild(nodoTextoNumeroID);   
        celdaProducto.appendChild(nodoTextoProducto);
        celdaCantidad.appendChild(nodoTextoCantidad);
        celdaPrecio.appendChild(nodoTextoPrecio);
        enlaceModificar.appendChild(nodoTextoModificar);
        celdaModificar.appendChild(enlaceModificar);
        enlaceEliminar.appendChild(nodoTextoEliminar);
        celdaEliminar.appendChild(enlaceEliminar);

        fila.appendChild(celdaFecha);
        fila.appendChild(celdaNumeroID);
        fila.appendChild(celdaProducto);
        fila.appendChild(celdaCantidad);
        fila.appendChild(celdaPrecio);
        fila.appendChild(celdaModificar);
        fila.appendChild(celdaEliminar);

        tbody.appendChild(fila);

        }
    }

    // function eliminarf(currElement){
        // var parentRowIndex = currElement.parentNode;
        // document.getElementById("tablaProducto").deleteRow(parentRowIndex);
        // tbody.deleteRow(parentRowIndex);
        // }
        // document.onclick('click', '.borrar'), function (event) {
            // event.preventDefault();
            // $(this).closest('tr').remove();}
        // }
        // var table = document.getElementById("tablaProducto");
        // var rowCount = table.rows.length;
        // console.log(rowCount);
        // if(rowCount <= 1){
            // alert('No se puede eliminar el encabezado');
        // }else{
        // table.deleteRow(rowCount -1);
        // } 
        // }  
//  if(localStorage.getItem('Numero_ID') != null){
    //  aNumeroID=JSON.parse(localStorage.getItem('Numero_ID'));
    //  aProducto=JSON.parse(localStorage.getItem('Nombre_Producto'));
    //  aCantidad=JSON.parse(localStorage.getItem('Cantidad_Producto'));
    //  aPrecio=JSON.parse(localStorage.getItem('Precio_Producto'));
//  }
   
    //btnEliminar = document.querySelector('#btnEliminar')
    
    //  btnEliminar.addEventListener('click',eliminar);
         
//  function eliminar(){
    // 
    //  alert ("eliminaras el producto");
// 
    // var id = getUrlVars()["id"],
        // mNumeroID = aNumeroID[i];
        // mProducto = aProducto[i];
        // mCantidad = aCantidad[i];
        // mPrecio = aPrecio[i];
// 
        // console.log(mNumeroID);
// 
        // eliminarFila();    
//  
    //  let nNumeroID = aNumeroID.filter(aNumeroID => (aNumeroID != mNumeroID)),
        //  nProducto = aProducto.filter(aProducto => (aProducto != mProducto)),
        //  nCantidad = aCantidad.filter(aCantidad => (aCantidad != mCantidad)),
        //  nPrecio = aPrecio.filter(aPrecio => (aPrecio != mPrecio));
// 
        //  localStorage.setItem('Numero_ID',JSON.stringify(nNumeroID)),
        //  localStorage.setItem('Nombre_Producto',JSON.stringify(nProducto)),
        //  localStorage.setItem('Cantidad_Producto',JSON.stringify(nCantidad)),
        //  localStorage.setItem('Precio_Producto',JSON.stringify(nPrecio));
        //  
    //  location.reload();
    //  }

    //  function eliminarFila() {
        // document.getElementById('f'+i).removeItem();
    // }
    //  
//  function getUrlVars() {
    //  var vars = {};
    // //  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        //  vars[key] = value;
    //  });
    //  return vars;
//  }
//  
 function eliminarTodo(){
     localStorage.clear();
     location.reload();
 
 }
// 
//  function muestraInformacion(elEvento) {
    // var evento = elEvento || window.event;
    // var coordenadaX = evento.clientX;
    // var coordenadaY = evento.clientY;
    // // alert("Has pulsado el ratón en la posición: " + coordenadaX + ", " + coordenadaY);
//   }
// 
//   function cons(i){
// console.log("anda" + i);
// 
//   }
// 
//   function eliminarItem(item) {
    // localStorage.removeItem(item);
//   
    // document.querySelector("#f" + item).remove();
// 
    // location.reload();
//   }
// 
//   function eliminar(comp){
// 
    // let id = comp.id;
//   console.log(id);
    // alert(this.id);
    // console.log(this.id);
//  var i=this.id

//  var mNumeroID =  document.querySelector("#n"+i).value,
    //  mProducto =  document.querySelector("#pd"+i).value,
    //  mCantidad =  document.querySelector("#c"+i).value,
    //  mPrecio =  document.querySelector("pr"+i).value;
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