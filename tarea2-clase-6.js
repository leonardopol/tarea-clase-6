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

document.querySelector("#boton-quitar").onclick = function(event){
    quitarSalario();
    event.preventDefault();
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
    let salarios = [];
    let contadorErrores = 0;
    for(let j = 0; j < indice; j++){        
                salarios[j] = Number(document.querySelector(`#salario${j}`).value);
                let validar = validarSalarios(salarios[j]);
                if(validar === 'El campo no puede estar vacio'){
                    let error = validar;
                    mostrarError(error);
                    contadorErrores++;
                }
            }
            if(contadorErrores === 0){  
                ocultarErrores();
                mostrarMayorSalario('mayor', calcularMayorSalarioAnual());
                mostrarMenorSalario('menor', calcularMenorSalarioAnual());
                mostrarPromedioSalarioAnual('promedioAnual', calcularSalarioPromedioAnual());
                mostrarPromedioSalarioMensual('promedioMensual', calcularSalarioPromedioMensual());
                mostrarResultados();
                ocultarBotonCalcular();
                mostrarBotonReset();
            }
      
}

function ocultarBotonCalcular(){
    document.querySelector("#boton-calcular").className = "oculto";
}

function mostrarBotonCalcular(){
    document.querySelector("#boton-calcular").className = "";
}

function mostrarResultados(){
    document.querySelector("#mostrar-resultados").className = 'visible';
}

function mostrarMayorSalario(tipo, valor) {
    document.querySelector(`#${tipo}-salario`).textContent = valor;
}

function mostrarMenorSalario(tipo, valor) {
    document.querySelector(`#${tipo}-salario`).textContent = valor;
}

function mostrarPromedioSalarioAnual(tipo, valor) {
    document.querySelector(`#${tipo}-salario`).textContent = valor;
}

function mostrarPromedioSalarioMensual(tipo, valor) {
    document.querySelector(`#${tipo}-salario`).textContent = valor;
}

function mostrarError(error){
    
        for(let i = 0; i < indice; i++){
        
           if(document.querySelector(`#salario${i}`).value === ""){
               document.querySelector(`#salario${i}`).className = "error";
           }
           /*if(!/^\d*$/.test(document.querySelector(`#familiar${i}`).value)){
            document.querySelector(`#familiar${i}`).className = "error";
           } */
        }
        document.querySelector("#mostrar-errores").className = "";
        document.querySelector("#error").textContent = error;
}

function ocultarErrores(){

    document.querySelector("#mostrar-errores").className = "oculto";
    document.querySelector("#error").textContent = "";
    
}

function mostrarBotonReset(){
    document.querySelector("#boton-reset").className = "";
}

function ocultarBotonReset(){
    document.querySelector("#boton-reset").className = "oculto";
}

function resetear(){
    for(let i = 0; i < indice; i++){
    const $integrantes = document.querySelector(`#integrantes .integrante${i}`);
    $integrantes.remove();
    document.querySelector("#mostrar-resultados").className ="oculto";
    mostrarBotonCalcular();
    ocultarBotonReset();
    }
    indice = 0;
}
