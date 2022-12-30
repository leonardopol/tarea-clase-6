/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

let indice = 0;
document.querySelector("#boton-agregar").onclick = function(event){
    agregarSalario();
    event.preventDefault();
}

document.querySelector("#boton-quitar").onclick = function(){
    quitarSalario();
}

document.querySelector("#boton-calcular").onclick = function(event){
    calcular();
    event.preventDefault();
}

document.querySelector("#boton-reset").onclick = resetear;

function agregarSalario(){
    const $div = document.createElement("div");
    $div.className = `integrante${indice}`;
    const $label = document.createElement("label");
    $label.textContent = `Salario#${indice + 1}`;
    $label.htmlFor = `salario${indice}`;
    const $input = document.createElement("input");
    $input.type = "number";
    $input.id = `salario${indice}`;
    
    $div.appendChild($label);
    $div.appendChild($input);
    const $integrantes = document.querySelector("#integrantes");
    $integrantes.appendChild($div);
    indice++;
}

function quitarSalario(){
    if(indice > 0){
    const $integrantes = document.querySelector(`#integrantes .integrante${indice - 1}`);
    $integrantes.remove();
    indice--;}
}

function calcular(){
    const mayor = calcularMayorSalarioAnual();
    const menor = calcularMenorSalarioAnual();
    const promedio = calcularSalarioPromedioAnual();
    const promedioMensual = calcularSalarioPromedioMensual();
    console.log(mayor);
    console.log(menor);
    console.log(promedio);
    console.log(promedioMensual);
}

function resetear(){
    for(let i = 0; i < indice; i++){
    const $integrantes = document.querySelector(`#integrantes .integrante${i}`);
    $integrantes.remove();
    }
    indice = 0;
}
