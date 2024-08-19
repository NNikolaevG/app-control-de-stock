/* Uso estricto */
"use strict";

/* Genero los valores de forma aleatoria cuando se cargue la pagina y muestro todos los datos en pantalla */

//Creo 3 variables que generarán de forma aleatoria la cantida de cada color
var aleatorioBase = Math.random();

var rojo = Math.floor(Math.random() * 101) + 0;
console.log("rojo = " + rojo);

var amarillo = Math.floor(Math.random() * 101) + 0;
console.log("amarillo = " + amarillo);

var azul = Math.floor(Math.random() * 101) + 0;
console.log("azul = " + azul);

function calculos() {

    console.log("desde calculos");


//Variable que indica la cantidad maxima que puedo tener de cada color

var cantidadMax = 100;
console.log("cantidadMax = " + cantidadMax);

//Colores de barra de progreso rojo o verde

var cantidadStockMin = 15;
console.log("cantidadStockMin = " + cantidadStockMin);

//Variable que almacenan la clase css del color de la barra

var colorBarraRoja = (rojo >= cantidadStockMin) ? "bg-success" : "bg-danger";
console.log(colorBarraRoja);

var colorBarraAmarillo = (amarillo >= cantidadStockMin) ? "bg-success" : "bg-danger";
console.log(colorBarraAmarillo);

var colorBarraAzul = (azul >= cantidadStockMin) ? "bg-success" : "bg-danger";
console.log(colorBarraAzul);

//Almacen Valladolid

var espacioTotal = 300;
console.log(espacioTotal);
var espacioOcupado = rojo + amarillo + azul;
console.log(espacioOcupado);


var espacioLibre = espacioTotal - espacioOcupado;
console.log(espacioTotal);

/* Variables Almacen Barra*/



/* Pinto los datos en pantalla */

document.getElementById("t-cantidad-rojo").innerHTML = rojo;
document.getElementById("t-cantidad-amarilla").innerHTML = amarillo;
document.getElementById("t-cantidad-azul").innerHTML = azul;

/* Pinto los datos en la tabla del almacen */

document.getElementById("t-espacio-ocupado").innerHTML = espacioOcupado + " Botes";
document.getElementById("t-espacio-libre").innerHTML = espacioLibre + " Botes";
document.getElementById("t-espacio-total").innerHTML = espacioTotal + " Botes";


//Pinto las barras de progreso de control de stock
document.getElementById("t-barra-rojo").innerHTML =
    '<div class="progress" role="progressbar" aria-label="Success example" aria-valuenow=" ' + Math.round((rojo / cantidadMax) * 100) + '"' +
    'aria-valuemin="0" aria-valuemax="100">' +
    '<div class="progress-bar ' + colorBarraRoja + ' " style="width: ' + Math.round((rojo / cantidadMax) * 100) + '%">' + Math.round((rojo / cantidadMax) * 100) + '%</div>' +
    '</div>';
document.getElementById("t-barra-amarilla").innerHTML =
    '<div class="progress" role="progressbar" aria-label="Success example" aria-valuenow=" ' + Math.round((amarillo / cantidadMax) * 100) + '"' +
    'aria-valuemin="0" aria-valuemax="100">' +
    '<div class="progress-bar ' + colorBarraAmarillo + ' " style="width: ' + Math.round((amarillo / cantidadMax) * 100) + '%">' + Math.round((amarillo / cantidadMax) * 100) + '%</div>' +
    '</div>';

document.getElementById("t-barra-azul").innerHTML =
    '<div class="progress" role="progressbar" aria-label="Success example" aria-valuenow=" ' + Math.round((azul / cantidadMax) * 100) + '"' +
    'aria-valuemin="0" aria-valuemax="100">' +
    '<div class="progress-bar ' + colorBarraAzul + ' " style="width: ' + Math.round((azul / cantidadMax) * 100) + '%">' + Math.round((azul / cantidadMax) * 100) + '%</div>' +
    '</div>';

/* Pinto la Barra del Almacen */

document.getElementById("barra-almacen").innerHTML = '<div class="progress" role="progressbar" aria-label="Segment one" aria-valuenow="' + Math.round((rojo / cantidadMax) * 100) +'" aria-valuemin="0"' +
    'aria-valuemax="'+ espacioTotal +'" style="width: '+ Math.round((rojo / cantidadMax) * 100)/3 +'%">' +
    '<div class="progress-bar bg-danger"></div>' +
    '</div>' +
    '<div class="progress" role="progressbar" aria-label="Segment two" aria-valuenow="' + Math.round((amarillo / cantidadMax) * 100) + '" aria-valuemin="0"' +
    'aria-valuemax="'+ espacioTotal +'" style="width: '+ Math.round((amarillo / cantidadMax) * 100) / 3 +'%">' +
    '<div class="progress-bar bg-warning "></div>' +
    '</div>' +
    '<div class="progress" role="progressbar" aria-label="Segment three" aria-valuenow="' + Math.round((amarillo / cantidadMax) * 100) + '" aria-valuemin="0"' +
    'aria-valuemax="'+ espacioTotal +'" style="width:'+ Math.round((azul / cantidadMax) * 100) / 3 +'%">' +
    '<div class="progress-bar bg-primary"></div>' +
    '</div>'
}

//Paso 0: ¿Cuál es la interacción?

function modificarStock() {
    console.log("estoy dentro");


    //Necesito ejecutar el código cuando haga click en el botón

    //Paso 1: Obtengo los datos del formulario

    var producto = document.getElementById("producto").value;
    console.log("producto = " + producto);

    var cantidad = document.getElementById("cantidad").value;
    console.log("cantidad = " + cantidad);


    //Paso 2: Transformar datos numéricos a números

    cantidad = Number(cantidad);
    console.log("cantidad = " + cantidad + typeof (cantidad));
    
    
    //Paso 3: Realizar operaciones necesarias para obtener un resultado
    
    
    rojo = (producto == "rojo")?cantidad:rojo;
    amarillo = (producto == "amarillo")?cantidad:amarillo;
    azul = (producto == "azul")?cantidad:azul;
    
    console.log("cantidad = " + cantidad + typeof (cantidad));


    calculos();

    /* La magia de modificar stock es que cambio de forma selectiva el valor de la variable global del color ( ej. amarillo = 7) y luego vuelvo a realizar los calculos de las barras ejecutando la funcio calculos() */
    
    //Paso 4: Pinto los datos en el HTML

}