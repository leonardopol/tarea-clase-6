/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

function calcularMayorEdad(){
    const $cantidadFamiliares = Number(document.querySelector("#cantidadFamiliares").value);
    let mayor = 0;
    for(let i = 0; i < $cantidadFamiliares; i++){
        let $entradaEdades = Number(document.querySelector(`#familiarr${i}`).value);
        if($entradaEdades > mayor){
            mayor = $entradaEdades;
        }
    }
    return mayor;
}

function calcularMenorEdad(){
    const $cantidadFamiliares = Number(document.querySelector("#cantidadFamiliares").value); 
    let menor = 200;
    for(let i = 0; i < $cantidadFamiliares; i++){
        let $entradaEdades = Number(document.querySelector(`#familiarr${i}`).value);
        if($entradaEdades < menor){
            menor = $entradaEdades;
        }
    }
    return menor;
}

function calcularPromedioEdad(){
    const $cantidadFamiliares = Number(document.querySelector("#cantidadFamiliares").value);
    let suma = 0;
    for(let i = 0; i < $cantidadFamiliares; i++){
        let $entradaEdades = Number(document.querySelector(`#familiarr${i}`).value);
        suma += $entradaEdades;
    }
    return suma / $cantidadFamiliares;
}

document.querySelector("#boton-enviar").onclick = function(){
    const $cantidadFamiliares = Number(document.querySelector("#cantidadFamiliares").value);
    const $nodoDiv = document.querySelector("#mostrar-familiares");
    const $labels = [];
    const $inputs = [];
    const $saltoDeLinea = [];
    for(let i = 0; i < $cantidadFamiliares; i++){
        $labels[i] = document.createElement("label");
        $labels[i].id = `familiar${i}`;
        $labels[i].htmlFor = $labels[i].id;
        $textLabels = document.createTextNode(`Edad familiar ${i + 1}`);
        $inputs[i] = document.createElement("input");
        $inputs[i].type = "number";
        $inputs[i].id = `familiarr${i}`;
        $saltoDeLinea[i] = document.createElement("br");
        $nodoDiv.appendChild($saltoDeLinea[i]);
        $nodoDiv.appendChild($labels[i]);
        $nodoLabel = document.querySelector(`#familiar${i}`);
        $nodoLabel.appendChild($textLabels);
        
        $nodoDiv.appendChild($inputs[i]);
    } 
    return false;
}

document.querySelector("#boton-calcular").onclick = function(){
    const mayorEdad = calcularMayorEdad();
    const menorEdad = calcularMenorEdad();
    const promedioEdad = calcularPromedioEdad();
    console.log(mayorEdad);
    console.log(menorEdad);
    console.log(promedioEdad);
    return false;
}
