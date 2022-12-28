/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

document.querySelector("#boton-agregar").onclick = function(){
    agregarEntrada();
}

document.querySelector("#boton-quitar").onclick = function(){
    console.log("quitado");
}

function agregarEntrada(){
    const $nodoDivEntradas = document.querySelector("#vista-entradas");
    const $labels = document.createElement("label");
    const $inputs = document.querySelector("input");
    //$labels.id=""
    $nodoDivEntradas.appendChild($labels);
    $nodoDivEntradas.appendChild($inputs);
}