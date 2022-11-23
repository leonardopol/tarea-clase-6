/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

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
        $saltoDeLinea[i] = document.createElement("br");
        $nodoDiv.appendChild($saltoDeLinea[i]);
        $nodoDiv.appendChild($labels[i]);
        $nodoLabel = document.querySelector(`#familiar${i}`);
        $nodoLabel.appendChild($textLabels);
        
        $nodoDiv.appendChild($inputs[i]);
    } 
    return false;
}
